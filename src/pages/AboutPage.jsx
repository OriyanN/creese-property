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
                <meta name="description" content="About page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
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
                            Creese Property Pty Ltd emerges as a tribute to the enduring legacy of its founder's lineage, with Managing Director Lachlan Creese dedicating the company to the memory of his late father, David Creese. David was a pioneering figure in the real estate industry, having established Creese Property Consultants on the 15th of May 1981. His firm became a cornerstone in the Southern Tasmanian Commercial Management sector, extending its expertise to encompass residential and commercial development consultancy. Under David's visionary leadership, Creese Property Consultants became instrumental in the development of what is now known as Rosny Park, a key commercial hub on Hobart’s Eastern shore. David’s contributions to real estate also include the establishment of 'Creese Drive' in Richmond, Tasmania, a testament to his success in private residential development that resulted in the creation of over 100 additional lots, predominantly along Cosgrove Drive. It is in this vibrant community that Lachlan Creese spent his formative years, growing up in the family home and gaining firsthand experience in the construction industry as he accompanied his father to numerous sites. David Creese personally took part in the construction and sale of more than 30 houses, instilling in Lachlan a profound understanding and passion for the real estate sector.
                            <br />
                            <br />
                            With this rich heritage as a foundation, Lachlan Creese, in partnership with Michael Pell, is poised to usher in a new era for the family's legacy with the inauguration of Creese Property Pty Ltd. This new venture marks a significant expansion of the Creese legacy, aiming to specialise in residential property management services across Southeast Queensland. Lachlan is enthusiastic about this opportunity to honour his father’s storied career and impact by steering Creese Property into new territories, ensuring that the legacy of David Creese continues to influence the Australian real estate landscape through innovative services and a commitment to excellence in property management.
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna condimentum mattis. Etiam non quam lacus suspendisse faucibus. Est ultricies integer quis auctor elit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Non quam lacus suspendisse faucibus interdum posuere. Posuere urna nec tincidunt praesent semper. Sodales ut eu sem integer vitae. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. </p>
                        </div>
                        <div className="team-member">
                            <LazyImageAbout src="src/assets/Lachie Black.png" alt="Creese Property Michael Pell" />
                            <div className="team-headings">
                                <h3>Lorem ipsum</h3>
                                <h4>Property Manager</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna condimentum mattis. Etiam non quam lacus suspendisse faucibus. Est ultricies integer quis auctor elit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Non quam lacus suspendisse faucibus interdum posuere. Posuere urna nec tincidunt praesent semper. Sodales ut eu sem integer vitae. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. </p>
                        </div>
                        <div className="team-member">
                            <LazyImageAbout src="src/assets/Lachie Black.png" alt="Creese Property Lachlan Creese" />
                            <div className="team-headings">
                                <h3>Curby Creese</h3>
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