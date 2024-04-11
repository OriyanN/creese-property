import React from 'react';

import Footer from '../components/Footer';
import "./ContactAboutPage.css"
import ScrollToTop from '../components/ScrollToTop';

function AboutPage() {

    return (
        <>
            <ScrollToTop />
            <div>
                <div className="contact-about-header">
                    <img src="src/assets/about-image.jpg" alt="" />
                    <h1>About Us</h1>
                    <div className="overlay"></div>
                </div>
                <div className="about-body">
                    <img src="src/assets/Lachie Black.png" alt="" />
                    <div className="about-text">
                        <h2>Lorem Ipsum</h2>
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
                            <img src="src/assets/Lachie Black.png" alt="" />
                            <div className="team-headings">
                                <h3>Lachlan Creese</h3>
                                <h4>Licensee</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna condimentum mattis. Etiam non quam lacus suspendisse faucibus. Est ultricies integer quis auctor elit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Non quam lacus suspendisse faucibus interdum posuere. Posuere urna nec tincidunt praesent semper. Sodales ut eu sem integer vitae. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. </p>
                        </div>
                        <div className="team-member">
                            <img src="src/assets/Michael Black.png" alt="" />
                            <div className="team-headings">
                                <h3>Michael Pell</h3>
                                <h4>Lorem ipsum</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna condimentum mattis. Etiam non quam lacus suspendisse faucibus. Est ultricies integer quis auctor elit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Non quam lacus suspendisse faucibus interdum posuere. Posuere urna nec tincidunt praesent semper. Sodales ut eu sem integer vitae. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. </p>
                        </div>
                        <div className="team-member">
                            <img src="src/assets/Lachie Black.png" alt="" />
                            <div className="team-headings">
                                <h3>Lorem ipsum</h3>
                                <h4>Property Manager</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at tellus at urna condimentum mattis. Etiam non quam lacus suspendisse faucibus. Est ultricies integer quis auctor elit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Non quam lacus suspendisse faucibus interdum posuere. Posuere urna nec tincidunt praesent semper. Sodales ut eu sem integer vitae. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. </p>
                        </div>
                    </div>
                </div>
                <div className="careers-container">
                    <h2>Careers</h2>
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

export default AboutPage;