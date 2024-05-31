import React from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import careersImage from '../../public/assets/careers-image.jpg';

import "./ContactAboutPage.css"

function CareersPage() {

    return (
        <>
            <Helmet>
                <title>Careers | Creese Property</title>
                <meta name="description" content="Join the Creese Property team and build a rewarding career in property management. Join our growing team!" />
                <link rel="canonical" href="/careers" />
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
                              },
                              {
                                "@type": "ListItem",
                                "name": "Portfolio",
                                "position": "4",
                                "item": "https://www.creeseproperty.com/portfolio/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "Leasing",
                                "position": "5",
                                "item": "https://www.creeseproperty.com/leasing/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "Contact",
                                "position": "6",
                                "item": "https://www.creeseproperty.com/contact/"
                              },
                              {
                                "@type": "ListItem",
                                "name": "Careers",
                                "position": "7",
                                "item": "https://www.creeseproperty.com/careers/"
                              }
                            ]
                          }
                        ]
                    })}
                </script>
            </Helmet>
            <ScrollToTop />
            <div>
            <div className="contact-about-header">
                    <img src={careersImage} alt="Creese Property Careers Page" />
                    <h1>Careers</h1>
                    <div className="overlay"></div>
                </div>
                <div className="careers-container">
                    <div className="why">
                        <h3>Why Creese Property?</h3>
                        <p>At Propell, our thriving culture and close-knit community set us apart in the realm of property investment. We believe in fostering an environment where every team member is not just an employee but a valued member of our family. Operating within an open plan office, we embrace a flat management system that encourages collaboration and ensures that no one’s voice goes unheard. With determination as our driving force, we are motivated by the pursuit of excellence and boast a great work ethic that permeates every aspect of our professional lives.</p>
                    </div>
                    <div className="what-who">
                        <div className="who">
                            <h3>Who We Are?</h3>
                            <p>
                                Every day brings new challenges and opportunities, making each moment unique and exciting. As a family-owned business, we take pride in creating an atmosphere where no one goes unnoticed; your contributions are acknowledged, celebrated, and integral to our collective success.
                                <br /><br />
                                Join us at Propell, where our commitment to a vibrant culture, unwavering determination, and a sense of community makes us the ideal workplace for those who seek more than just a job – a fulfilling career with a purpose.
                            </p>
                        </div>
                        <div className="what">
                            <h3>What We Do?</h3>
                            <p>Propelled by determination, our team is united by a shared motivation and an unwavering work ethic, ensuring that every project is approached with vigour and dedication. Our daily endeavours are marked by diversity and innovation, ensuring that each day presents fresh challenges and opportunities.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CareersPage;