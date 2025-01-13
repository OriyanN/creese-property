import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className, aspectRatio = '56.25%' }) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.onload = () => setLoaded(true);
                    observer.unobserve(img);
                }
            });
        }, { threshold: 0.01 });

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [src]);

    return (
        <div className={`${className} image-container`} style={{ background: 'var(--grey-beige)', paddingTop: aspectRatio }}>
            <img
                ref={imgRef}
                data-src={src}
                alt={alt}
                className={loaded ? 'loaded' : 'loading'}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: loaded ? 1 : 0, filter: loaded ? 'blur(0px)' : 'blur(5px)', transition: 'opacity 0.5s ease-in-out, filter 0.5s ease-in-out' }}
            />
        </div>
    );
};

export default LazyImage;
