import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import './Slider.css';

const images = [
    { id: 1, url: 'src/assets/1.jpg', name: 'Lorem1', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
    { id: 2, url: 'src/assets/2.jpg', name: 'Lorem2', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
    { id: 3, url: 'src/assets/3.jpg', name: 'Lorem3', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
    { id: 4, url: 'src/assets/4.jpg', name: 'Lorem4', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
    { id: 5, url: 'src/assets/5.jpg', name: 'Lorem5', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
    { id: 6, url: 'src/assets/6.jpg', name: 'Lorem6', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
    { id: 7, url: 'src/assets/7.JPG', name: 'Lorem7', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
    { id: 8, url: 'src/assets/8.jpg', name: 'Lorem8', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.' },
];

const Slider = () => {
    const [items, setItems] = useState(images);

    const handleNext = () => {
        setItems(prevItems => [...prevItems.slice(1), prevItems[0]]);
    };

    const handlePrev = () => {
        setItems(prevItems => [prevItems[prevItems.length - 1], ...prevItems.slice(0, prevItems.length - 1)]);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000);

        return () => clearInterval(interval);
    }, [items]);

    return (
        <div className="container">
            <div className="slider">
                {items.map((item, index) => (
                    <div key={item.id} className="item" style={{ backgroundImage: `url(${item.url})` }}>
                    {index < 2 && <div className="overlay"></div>}
                    <div className="content">
                        <div className="name">{item.name}</div>
                        <div className="des">{item.description}</div>
                        <button>See more</button>
                    </div>
                </div>                
                ))}
            </div>
            <div className="arrows">
                <button className="prev" onClick={handlePrev}><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
                <button className="next" onClick={handleNext}><FontAwesomeIcon icon={faCircleChevronRight} /></button>
            </div>
        </div>
    );
};

export default Slider;
