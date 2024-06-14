import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealContainer = ({ children, move, duration = 500, delay = 0, origin }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current) {
            ScrollReveal().reveal(sectionRef.current, {
                distance: move,
                duration: duration,
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
                interval: 100,
                delay: delay,
                origin: origin,
            });
        }

        // Optional: Clean up function to reset ScrollReveal on component unmount
        return () => ScrollReveal().clean(sectionRef.current);
    }, [move, duration, delay, origin]);

    return <div ref={sectionRef}>{children}</div>;
};

export default ScrollRevealContainer;
