import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import './Slider.css';

import GoldCoastProperty from '../assets/GoldCoast/gc1/1.jpg';
import BrisbaneProperty from '../assets/Brisbane/bri1/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg';
import SunshineCoastProperty from '../assets/SunshineCoast/sc1/8.jpg';
import LoganProperty from '../assets/Logan/log1/modern-house-facade-2023-11-27-05-11-48-utc.jpg';
import IpswichProperty from '../assets/Ipswich/ips1/modern-house-exterior-2023-11-27-05-11-35-utc.jpg';

const images = [
    { id: 1, url: GoldCoastProperty, address: '4/48 Macadie Way, Merrimac', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/gc1' },
    { id: 2, url: BrisbaneProperty, address: '1003/66 Manning Street, South Brisbane', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/bri1' },
    { id: 3, url: SunshineCoastProperty, address: '7 Grasstree Court, Pelican Waters', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/sc1' },
    { id: 4, url: LoganProperty, address: '506-514 Beenleigh Redland Bay Road, Carbrook', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/log1' },
    { id: 5, url: IpswichProperty, address: '22 Kingsmill Road, Coalfalls', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/ips1' },
];

const Slider = () => {
    const [items, setItems] = useState(images);
    const navigate = useNavigate();

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

    const handleSeeMoreClick = (link) => {
        navigate(link);
    };

    return (
        <div className="container">
            <div className="slider">
                {items.map((item, index) => (
                    <div key={item.id} className="item" style={{ backgroundImage: `url(${item.url})` }}>
                    {index < 2 && <div className="overlay"></div>}
                    <div className="content">
                        <div className="address">{item.address}</div>
                        <div className="des">{item.description}</div>
                        <button onClick={() => handleSeeMoreClick(item.link)}>See more</button>
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
