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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi. Volutpat lacus laoreet non curabitur. Aenean et tortor at risus viverra. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Pellentesque dignissim enim sit amet venenatis urna cursus. Lacus vel facilisis volutpat est velit egestas dui id ornare. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Potenti nullam ac tortor vitae purus faucibus.
                            <br /><br />
                            Eget magna fermentum iaculis eu non diam phasellus. Metus aliquam eleifend mi in nulla. Pellentesque dignissim enim sit amet venenatis urna cursus. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Sem fringilla ut morbi tincidunt. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. At risus viverra adipiscing at. In hac habitasse platea dictumst quisque sagittis. Ornare arcu dui vivamus arcu felis. At volutpat diam ut venenatis tellus in. Ac turpis egestas sed tempus urna et pharetra pharetra.
                        </p>
                    </div>
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
                <Footer />
            </div>
        </>
    );
}

export default AboutPage;