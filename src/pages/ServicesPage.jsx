import React from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from '../components/Footer';
import "./ServicePage.css"
import ScrollToTop from '../components/ScrollToTop';

function ServicePage() {

    return (
        <>
            <Helmet>
                <title>Services | Creese Property</title>
                <meta name="description" content="Services page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <link rel="canonical" href="/services" />
            </Helmet>
            <ScrollToTop />
            <div>
                <div className="contact-about-header">
                    <img src="src/assets/service-image.jpg" alt="" />
                    <h1>Services</h1>
                    <div className="overlay"></div>
                </div>
                <div className="services-container">
                    <h2>Services</h2>
                    <div className="services">
                        <div className="service">
                            <img src="src/assets/1.png" height={100} alt="" />
                            <h3>Tailored Solutions</h3>
                            <p>We understand that every property owner and tenant has their unique needs. That’s why we offer customised management plans to suit your specific requirements.</p>
                        </div>
                        
                        <div className="service">
                            <img src="src/assets/2.png" height={100} alt="" />
                            <h3>Expert Advice</h3>
                            <p>Our team stays aware of the latest market trends and regulations to provide you with informed advice, helping you make the best decisions for your property.</p>
                        </div>
                        <div className="service">
                            <img src="src/assets/3.png" height={100} alt="" />
                            <h3>Community Focus</h3>
                            <p>We’re not just managing properties, we’re building communities. Creese Property is committed to creating vibrant living spaces where residents can feel at home.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default ServicePage;