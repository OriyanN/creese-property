import React from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LazyImageAbout from '../components/LazyImageAbout';

import "./ContactAboutPage.css"

function AboutPage() {

    return (
        <>
            <Helmet>
                <title>About | Creese Property</title>
                <meta name="description" content="Discover Creese Property, specialising in residential property management, buyer’s agency, and consultancy." />
                <link rel="canonical" href="/about" />
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
                    <img src="src/assets/about-image.jpg" alt="Creese Property Lachlan Creese" />
                    <h1>About Us</h1>
                    <div className="overlay"></div>
                </div>
                <div className="about-body">
                    <div>
                        <img className="about-image" src="src/assets/Lachie Black.png" alt="Creese Property About Us" />
                    </div>
                    <div className="about-text">
                        <h2>Our History</h2>
                        <p>
                            Creese Property Pty Ltd, led by Managing Director Lachlan Creese, honours the legacy of its founder, David Creese. David established Creese Property Consultants in 1981, becoming a key figure in the Southern Tasmanian Commercial Management sector, contributing to the development and continuous expansion of Rosny Park.
                            <br />
                            <br />
                            More prominently, David was known for his residential property development across many parts, but especially in Richmond, Tasmania. Building over 50 houses himself, and subdividing in excess of 100 parcels of land, David’s most monumental achievement was in his final 43 lot subdivision now known as ‘Creese Drive’.
                            <br />
                            <br />
                            In partnership with Michael Pell, Lachlan is expanding the family legacy with Creese Property, focusing on residential property management amongst other services in South-East Queensland. This venture continues to build on David Creese's impact on the Australian real estate landscape through continued innovation in services and a commitment to excellence. 
                        </p>
                    </div>
                </div>
                <div className="team-container">
                    <h2>Team</h2>
                    <div className="team">
                        <div className="team-member">
                            <LazyImageAbout src="src/assets/Lachie Black.png" alt="Creese Property Lachlan Creese" />
                            <div className="team-headings">
                                <h3>Lachlan Creese</h3>
                                <h4>Managing Director</h4>
                            </div>
                            <p>Lachlan Creese, Managing Director of Creese Property, although originally from Tasmania has an undeniable love for the Gold Coast. A Bond University graduate, Lachlan is familiar with all things business and understands the importance of a good network. His love for property began all the way back in his early childhood. Growing up on the street his dad developed; Lachlan is well versed in the property sector. Over the years, he has built up his own personal portfolio, having started and sold multiple businesses. However, Lachlan is certain he has found his forever career in property. Turning his childhood passion into a long-life endeavour, Lachlan is well informed and ready to help others discover their dream of having their own property portfolio.</p>
                        </div>
                        <div className="team-member">
                            <LazyImageAbout src="src/assets/Kym (1).png" alt="Creese Property Kym Bayley" />
                            <div className="team-headings">
                                <h3>Kym Bayley</h3>
                                <h4>Property Manager</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna condimentum mattis. Etiam non quam lacus suspendisse faucibus. Est ultricies integer quis auctor elit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Non quam lacus suspendisse faucibus interdum posuere. Posuere urna nec tincidunt praesent semper. Sodales ut eu sem integer vitae. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. </p>
                        </div>
                        <div className="team-member">
                            <LazyImageAbout src="src/assets/Lachie Black.png" alt="Creese Property Lachlan Creese" />
                            <div className="team-headings">
                                <h3>Kirby & Otto Creese</h3>
                                <h4>Lorem ipsum</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna condimentum mattis. Etiam non quam lacus suspendisse faucibus. Est ultricies integer quis auctor elit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Non quam lacus suspendisse faucibus interdum posuere. Posuere urna nec tincidunt praesent semper. Sodales ut eu sem integer vitae. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default AboutPage;