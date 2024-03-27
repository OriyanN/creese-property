import React, { useState, } from 'react';

import "./HomePage.css";
import Slider from '../components/Slider';

import videoBg from "../assets/creese-property-video.mp4"

function HomePage() {
    const [current, setCurrent] = useState(0);
    
      const navigate = (direction) => {
        let newIndex = current + direction;
        if (newIndex < 0) newIndex = images.length - 1;
        else if (newIndex >= images.length) newIndex = 0;
        setCurrent(newIndex);
    };

    return (
        <section className="section home">
            <div className="welcome">
                <video className="header-video" src={videoBg} autoPlay loop muted />
                <div className="overlay-home"></div>
            </div>
            <div className="text-home">
                <p>Trust our experienced team at Creese Property to secure the right property for you</p>
            </div>
            <div className="slider-container">
                <Slider />
            </div>
        </section>
    );
}

export default HomePage;