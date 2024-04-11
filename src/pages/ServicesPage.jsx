import React from 'react';

import Footer from '../components/Footer';
import "./ServicePage.css"
import ScrollToTop from '../components/ScrollToTop';

function ServicePage() {

    return (
        <>
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