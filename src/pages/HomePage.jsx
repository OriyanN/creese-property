import React, { useState } from 'react';

import "./HomePage.css";
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import ScrollToTop from '../components/ScrollToTop.jsx';
import AutoPlay from '../components/AutoPlay.jsx';
import Accordion from '../components/Accordion.jsx';
import videoBg from "../assets/creese-property-video.mp4";

function HomePage() {

    return (
        <>
            <ScrollToTop />
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
                <AutoPlay />
                <div className="divider-section">
                    <h2>The <span>Creese Property</span> Promise</h2>
                    <div className="services">
                        <div className="service">
                            <img src="src/assets/1 copy.png" height={100} alt="" />
                            <h3>Experience</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna condimentum mattis.</p>
                        </div>
                        
                        <div className="service">
                            <img src="src/assets/2 copy.png" height={100} alt="" />
                            <h3>Off Market Deals</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna condimentum mattis.</p>
                        </div>
                        <div className="service">
                            <img src="src/assets/3 copy.png" height={100} alt="" />
                            <h3>Specialisation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna condimentum mattis.</p>
                        </div>
                    </div>
                </div>
                <Accordion />
                <Footer />
            </section>
        </>
    );
}

export default HomePage;