import React, { useState, useEffect, useRef } from 'react';

const LazyImageAbout = ({ src, alt, className, placeholder }) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
    }, [src]);

    return (
        <div className={`${className} image-container`} style={{ background: placeholder ? `url(${placeholder})` : 'var(--grey-beige)' }}>
            <img
                ref={imgRef}
                src={loaded ? src : ''}
                alt={alt}
                style={{ position: 'relative', top: 0, left: 0, width: '100%', height: '100%', opacity: loaded ? 1 : 0, filter: loaded ? 'blur(0px)' : 'blur(5px)', transition: 'opacity 0.5s ease-in-out, filter 0.5s ease-in-out' }}
            />
        </div>
    );
};

export default LazyImageAbout;
