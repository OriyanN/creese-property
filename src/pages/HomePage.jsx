import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import "./HomePage.css";

import Footer from '../components/Footer';
import Slider from '../components/Slider';
import ScrollToTop from '../components/ScrollToTop.jsx';
import AutoPlay from '../components/AutoPlay.jsx';
import Accordion from '../components/Accordion.jsx';

import videoBg from "../assets/creese-property-video.mp4";
import preloaderImage from '../assets/CP Transparent(2).png';

function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 3750); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>Home | Creese Property</title>
                <meta name="description" content="Home page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <link rel="canonical" href="/" />
            </Helmet>
            <ScrollToTop />
            {loading && (
                <div className="preloader">
                    <img src={preloaderImage} alt="Loading"/>
                </div>
            )}
            <section className="section home">
                    <div className="video-text">
                        Creese Property
                    </div>
                <div className="welcome">
                    <video className="header-video" src={videoBg} autoPlay loop muted alt="Creese Property Videou6" />
                    <div className="overlay-home"></div>
                </div>
                <AutoPlay />
                <div className="text-home">
                    <p>Trust our experienced team at <span>Creese Property</span> to secure the right property for you</p>
                </div>
                <div className="slider-container">
                    <Slider />
                </div>
                <div className="divider-section">
                    <h2>The <span>Creese Property</span> Promise</h2>
                    <div className="services">
                        <div className="service home-promise">
                            <img src="src/assets/1 copy 2.png" height={100} alt="Creese Property Experience" />
                            <h3>Attention to Detail</h3>
                            <p>Creese Property commits to every aspect of property management to ensure nothing is overlooked. From the precision in our tenant screening processes to the thoroughness of our property inspections, we prioritise detail to prevent issues and enhance the overall management service.</p>
                        </div>
                        <div className="service home-promise">
                            <img src="src/assets/2 copy 2.png" height={100} alt="Creese Property Off Market Deals" />
                            <h3>Industry Knowledge</h3>
                            <p>With extensive experience in the South-East Queensland real estate market, Creese Property offers unmatched expertise and a deep understanding of local market dynamics. Ongoing research and professional development ensure that our team is equipped with the latest knowledge to advise and act effectively.</p>
                        </div>
                        <div className="service home-promise">
                            <img src="src/assets/3 copy 2.png" height={100} alt="Creese Property Specialisation" />
                            <h3>Authenticity</h3>
                            <p>Creese Property values genuine relationships with clients and tenants. We believe in straightforward communication and ethical business practices. Our team is approachable and committed to providing personalised service, ensuring that every client feels listened to, respected, and valued.</p>
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