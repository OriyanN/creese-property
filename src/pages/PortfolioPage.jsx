import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LazyImage from '../components/LazyImage';

import "./PortfolioPage.css"

import bri1 from '../assets/Brisbane/bri1/backyard-2023-11-27-04-52-38-utc.jpg';
import bri2 from '../assets/Brisbane/bri2/modern-house-exterior-2023-11-27-05-08-12-utc.jpg';
import gc1 from '../assets/GoldCoast/gc1/1.jpg';
import gc2 from '../assets/GoldCoast/gc2/5.jpg';
import ips1 from '../assets/Ipswich/ips1/modern-house-exterior-2023-11-27-05-11-35-utc.jpg';
import ips2 from '../assets/Ipswich/ips2/modern-house-exterior-2023-11-27-05-28-56-utc.jpg';

function PortfolioPage() {
    const data = [
        { id: 1, image: bri1, address: '1003/66 Manning Street, South Brisbane', link: '/locations/brisbane/properties/bri1' },
        { id: 2, image: bri2, address: '402/22 Station Street, Nundah', link: '/locations/brisbane/properties/bri2' },
        { id: 3, image: gc1, address: '4/48 Macadie Way, Merrimac', link: '/locations/gold-coast/properties/gc1' },
        { id: 4, image: gc2, address: '128 Salerno Street, Surfers Paradise', link: '/locations/gold-coast/properties/gc2' },
        { id: 5, image: ips1, address: '22 Kingsmill Road, Coalfalls', link: '/locations/ipswich/properties/ips1' },
        { id: 6, image: ips2, address: '2/187 WARWICK ROAD, Churchill', link: '/locations/ipswich/properties/ips2' },
    ];

    return (
        <> 
            <Helmet>
                <title>Portfolio | Creese Property</title>
                <meta name="description" content="Portfolio page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <link rel="canonical" href="/portfolio" />
            </Helmet>
            <ScrollToTop />
            <div>
                <div className="contact-about-header">
                    <img src="src/assets/portfolio-image.jpg" alt="" />
                    <h1>Portfolio</h1>
                    <div className="overlay"></div>
                </div>
                <div className="images-container images-container-portfolio">
                    {data.map(item => (
                        <div key={item.id} className="image-item-container image-item-container-portfolio">
                            <Link to={item.link}>
                                <LazyImage src={item.image} alt={`Property ${item.id}`} className="image-item image-item-portfolio" />
                            </Link>
                            <div className="location-details">
                                <h4>{item.address}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default PortfolioPage;