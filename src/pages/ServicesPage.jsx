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
                            <p>Creese Property provides a detailed residential property management service. You can rest assured knowing that your property will be in great care.</p>
                        </div>
                        
                        <div className="service">
                            <img src="src/assets/Buyers Agency.png" height={100} alt="Creese Property Expert Advice" />
                            <h3>Buyers Agency</h3>
                            <p>Our Buyers Agent service caters to all prospective homeowners within the Gold Coast region and potential investors throughout South-East Queensland.</p>
                        </div>
                        <div className="service">
                            <img src="src/assets/Property Consultancy.png" height={100} alt="Creese Property Community Focus" />
                            <h3>Property Consultancy</h3>
                            <p>The Property Consultancy service provides clients with valuable advice and recommendations when looking to purchase or develop their property.</p>
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