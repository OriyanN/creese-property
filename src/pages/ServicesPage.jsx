import React from 'react';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ContactForm from '../components/ContactForm';
import Helmet from '../components/Helmet.jsx';

import serviceImage from '/assets/service-image.jpg';
// import service1 from '/assets/service1.svg';
// import service2 from '/assets/service2.svg';
// import service3 from '/assets/service3.svg';

import service1 from '/assets/Residential Property Management.png';
import service2 from '/assets/Buyers Agency.png';
import service3 from '/assets/Property Consultancy.png';

import "./ServicePage.css";
import "./HomePage.css";

function ServicePage() {

    return (
        <>
            <Helmet
                title="Services"
                description="Explore the comprehensive property services offered by Creese Property, tailored to your needs."
                link="/services"
                addPostfixTitle
            >
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@graph": [
                          {
                            "@type": "BreadcrumbList",
                            "@id": "https://www.creeseproperty.com/#breadcrumb",
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
                    <img src={serviceImage} alt="Creese Property Services" />
                    <h1>Services</h1>
                    <div className="overlay"></div>
                </div>
                <div className="services-container">
                    <div className="services">
                        <div className="service">
                            <img src={service1} height={100} alt="Creese Property Tailored Solutions" />
                            <h3>Residential Property Management</h3>
                            <p>Creese Property provides a detailed residential property management service. You can rest assured knowing that your property will be in great care.</p>
                        </div>
                        
                        <div className="service">
                            <img src={service2} height={100} alt="Creese Property Expert Advice" />
                            <h3>Tailored Buyers Agency</h3>
                            <p>Our Buyers Agent service caters to all prospective homeowners within the Gold Coast region and potential investors throughout South-East Queensland.</p>
                        </div>
                        <div className="service">
                            <img src={service3} height={100} alt="Creese Property Community Focus" />
                            <h3>Strategic Property Consultancy</h3>
                            <p>The Property Consultancy service provides clients with valuable advice and recommendations when looking to purchase or develop their property.</p>
                        </div>
                    </div>
                </div>
                <div className="parallax-section">
                    <div className="overlay-content"></div>
                </div>
                <div className="parallax-mobile-section">
                    <div className="overlay-content-mobile"></div>
                </div>
                <ContactForm />
                <Footer />
            </div>
        </>
    );
}

export default ServicePage;