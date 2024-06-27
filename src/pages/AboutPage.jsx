import React from 'react';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LazyImageAbout from '../components/LazyImageAbout';
import Helmet from '../components/Helmet.jsx';

import aboutImage from '/assets/about-image.jpg';
import davidCreese from '/assets/David Creese.png';
import lachieSweather from '/assets/Lachie Sweater.jpg';
import kym from '/assets/Kym.jpg';
import kirbyOtto from '/assets/Kirby Otto Black Smaller.jpg';

import "./ContactAboutPage.css"
import Testimonials from '../components/Testimonials';

function AboutPage() {

    return (
        <>
            <Helmet
                title="About"
                description="Discover Creese Property, specialising in residential property management, buyer’s agency, and consultancy."
                link="/about"
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
                    <img src={aboutImage} alt="Creese Property Lachlan Creese" />
                        <h1>About Us</h1>
                    <div className="overlay"></div>
                </div>
                <div className="about-body">
                    <div>
                        <img className="about-image" src={davidCreese} alt="Creese Property About Us" />
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
                <Testimonials />
                <div className="team-container">
                    <h2>Team</h2>
                    <div className="team">
                        <div className="team-member">
                            <LazyImageAbout className="team-member-image" src={lachieSweather} alt="Creese Property Lachlan Creese" />
                            <div className="team-headings">
                                <h3>Lachlan Creese</h3>
                                <h4>Managing Director</h4>
                            </div>
                            <p>Lachlan Creese, Managing Director of Creese Property, although originally from Tasmania has an undeniable love for the Gold Coast. A Bond University graduate, Lachlan is familiar with all things business and understands the importance of a good network. His love for property began all the way back in his early childhood. Growing up on the street his dad developed; Lachlan is well versed in the property sector. Over the years, he has built up his own personal portfolio, having started and sold multiple businesses. However, Lachlan is certain he has found his forever career in property. Turning his childhood passion into a long-life endeavour, Lachlan is well informed and ready to help others discover their dream of having their own property portfolio.</p>
                        </div>
                        <div className="team-member">
                            <LazyImageAbout className="team-member-image" src={kym} alt="Creese Property Kym Bayley" />
                            <div className="team-headings">
                                <h3>Kym Bayley</h3>
                                <h4>Property Manager</h4>
                            </div>
                            <p>Kym Bayley, Senior Property Manager at Creese Property is the perfect asset to our team. Victorian born, Kym now resides in Northern NSW, and spends her free time with family, friends, on the beach, and in nature. She is also passionate about her position as Deputy Unit Commander with NSW SES. Her nurturing heart and kind spirit is reflected in her work. Kym strives to achieve the absolute best for all her clients with a true passion for people and Property Management. Kym’s Property Management career is built upon the foundation of 20 years in managing a debt collection agency. An all-rounder and go-getter, Kym also organised a virtual run for men’s mental health working alongside R U OK? Her selflessness is a true testament to who she is, and why she has found the perfect fit as part of the Creese Property Team.</p>
                        </div>
                        <div className="team-member">
                            <LazyImageAbout className="team-member-image" src={kirbyOtto} alt="Creese Property Lachlan Creese" />
                            <div className="team-headings">
                                <h3>Kirby & Otto Creese</h3>
                                <h4>Quality Control Officers</h4>
                            </div>
                            <p>Kirby and Otto Creese are an integral part of the Creese Property team. From quality assurance to tenant screening, they ensure that standards in all aspects of the business are upheld to the highest standard. Sniffing out anything that doesn’t quite add up is their forte, while also keeping Managing Director Lachlan on his toes. Their unique sixth sense also ensures that tenants match the perfect profile for your investment property. The excellent outcomes that Creese Property are creating, in their opinion, is nothing to sniff about. With the help of Kirby and Otto we are hoping that all Creese Property landlords and tenants have a pawsitive experience.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default AboutPage;