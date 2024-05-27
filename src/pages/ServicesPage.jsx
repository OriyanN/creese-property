import React from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from '../components/Footer';
import "./ServicePage.css";
import "./HomePage.css";
import ScrollToTop from '../components/ScrollToTop';
import ContactForm from '../components/ContactForm';

function ServicePage() {

    return (
        <>
            <Helmet>
                <title>Services | Creese Property</title>
                <meta name="description" content="Services page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <link rel="canonical" href="/services" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@graph": [
                          {
                            "@type": "BreadcrumbList",
                            "@id": "https://www.creeseproperty.com/about/#breadcrumb",
                            "itemListElement": [
                              {
                                "@type": "ListItem",
                                "name": "Home",
                                "position": "1",
                                "item": "https://www.creeseproperty.com/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "About",
                                "position": "2",
                                "item": "https://www.creeseproperty.com/about/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "Services",
                                "position": "3",
                                "item": "https://www.creeseproperty.com/services/"
                              }
                            ]
                          }
                        ]
                    })}
                </script>
            </Helmet>
            <ScrollToTop />
            <div className='services-section'>
                <div className="contact-about-header">
                    <img src="src/assets/service-image.jpg" alt="Creese Property Services" />
                    <h1>Services</h1>
                    <div className="overlay"></div>
                </div>
                <div className="services-container">
                    <div className="services">
                        <div className="service">
                            <img src="src/assets/Residential Property Management.png" height={100} alt="Creese Property Tailored Solutions" />
                            <h3>Residential Property Management</h3>
                            <p>We understand that every property owner and tenant has their unique needs. That’s why we offer customised management plans to suit your specific requirements.</p>
                        </div>
                        
                        <div className="service">
                            <img src="src/assets/Buyers Agency.png" height={100} alt="Creese Property Expert Advice" />
                            <h3>Buyers Agency</h3>
                            <p>Our team stays aware of the latest market trends and regulations to provide you with informed advice, helping you make the best decisions for your property.</p>
                        </div>
                        <div className="service">
                            <img src="src/assets/Property Consultancy.png" height={100} alt="Creese Property Community Focus" />
                            <h3>Property Consultancy</h3>
                            <p>We’re not just managing properties, we’re building communities. Creese Property is committed to creating vibrant living spaces where residents can feel at home.</p>
                        </div>
                    </div>
                </div>
                <div className="parallax-section">
                    <div className="overlay-content"></div>
                </div>
                <ContactForm />
                <Footer />
            </div>
        </>
    );
}

export default ServicePage;