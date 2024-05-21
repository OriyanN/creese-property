// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';

// import "./HomePage.css";

// import Footer from '../components/Footer';
// import Slider from '../components/Slider';
// import ScrollToTop from '../components/ScrollToTop.jsx';
// import AutoPlay from '../components/AutoPlay.jsx';
// import AnimatedButton from '../components/AnimatedButton.jsx';
// import Accordion from '../components/Accordion.jsx';

// import videoBg from "../assets/creese-property-video.mp4";
// import preloaderImage from '../assets/CP Transparent(2).png';

// function HomePage() {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//         setLoading(false);
//         }, 3750); 
//         return () => clearTimeout(timer);
//     }, []);

//     const [enquiryType, setEnquiryType] = useState('');
//     const [locationProperty, setLocationProperty] = useState('');
//     const [bedsNumber, setBedsNumber] = useState('');
//     const [bathsNumber, setBathsNumber] = useState('');

//     const handleFormSubmit = (e) => {
//         e.preventDefault(); // Prevent default form submission behavior
//         // Form submission logic here
//     };

//     return (
//         <>
//             <Helmet>
//                 <title>Home | Creese Property</title>
//                 <meta name="description" content="Home page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
//                 <link rel="canonical" href="/" />
//             </Helmet>
//             <ScrollToTop />
//             {loading && (
//                 <div className="preloader">
//                     <img src={preloaderImage} alt="Loading"/>
//                 </div>
//             )}
//             <section className="section home">
//                     <div className="video-text">
//                         Creese Property
//                     </div>
//                 <div className="welcome">
//                     <video className="header-video" src={videoBg} autoPlay loop muted alt="Creese Property Videou6" />
//                     <div className="overlay-home"></div>
//                 </div>
//                 <AutoPlay />
//                 <div className="text-home">
//                     <p>Trust our experienced team at <span>Creese Property</span> to secure the right property for you</p>
//                 </div>
//                 <div className="slider-container">
//                     <Slider />
//                 </div>
//                 <div className="divider-section">
//                     <h2>The <span>Creese Property</span> Promise</h2>
//                     <div className="services">
//                         <div className="service home-promise">
//                             <img src="src/assets/1 copy 2.png" height={100} alt="Creese Property Experience" />
//                             <h3>Attention to Detail</h3>
//                             <p>Creese Property commits to every aspect of property management to ensure nothing is overlooked. From the precision in our tenant screening processes to the thoroughness of our property inspections, we prioritise detail to prevent issues and enhance the overall management service.</p>
//                         </div>
//                         <div className="service home-promise">
//                             <img src="src/assets/2 copy 2.png" height={100} alt="Creese Property Off Market Deals" />
//                             <h3>Industry Knowledge</h3>
//                             <p>With extensive experience in the South-East Queensland real estate market, Creese Property offers unmatched expertise and a deep understanding of local market dynamics. Ongoing research and professional development ensure that our team is equipped with the latest knowledge to advise and act effectively.</p>
//                         </div>
//                         <div className="service home-promise">
//                             <img src="src/assets/3 copy 2.png" height={100} alt="Creese Property Specialisation" />
//                             <h3>Authenticity</h3>
//                             <p>Creese Property values genuine relationships with clients and tenants. We believe in straightforward communication and ethical business practices. Our team is approachable and committed to providing personalised service, ensuring that every client feels listened to, respected, and valued.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='contact-form'>
//                     <h2>REQUEST A RENTAL APPRAISAL</h2>
//                     <form onSubmit={handleFormSubmit}>
//                         <div className="name-section">
//                             <input 
//                                 type="text"
//                                 name="firstName"
//                                 placeholder='First Name'
//                             />
//                             <input 
//                                 type="text"
//                                 name="lastName"
//                                 className='lastName'
//                                 placeholder='Last Name'
//                             />
//                         </div>
//                         <div className="details-section">
//                             <input 
//                                 type="email"
//                                 name="email"
//                                 placeholder='Contact Email'
//                             />
//                             <input 
//                                 type="number"
//                                 name="phoneNumber"
//                                 className='phoneNumber'
//                                 placeholder='Phone Number'
//                             />
//                         </div>
//                         <div className='address-section'>
//                             <input type="text" name='address' rows='1' placeholder='Address of Property to Be Appraised'/>
//                         </div>
//                         <div className='message-section'>
//                             <textarea type="text" name='message' rows='6' placeholder='Message'/>
//                         </div>
//                         <div className="newsletter-signup">
//                             <label htmlFor="">
//                                 <input type="checkbox" name="newsletterSignup" id="newsletterSignup" />
//                                 I  would like to sign up for news and updates from Creese Property and agree to the Privacy Policy.
//                             </label>
//                         </div>
//                         <AnimatedButton onSubmit={handleFormSubmit} />
//                     </form>
//                 </div>
//                 <Accordion />
//                 <Footer />
//             </section>
//         </>
//     );
// }

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import "./HomePage.css";

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import AutoPlay from '../components/AutoPlay.jsx';
import AnimatedButton from '../components/AnimatedButton.jsx';
import Accordion from '../components/Accordion.jsx';

import videoBg from "../assets/creese-property-video.mp4";
import preloaderImage from '../assets/CP Transparent(2).png';

import GoldCoastProperty from '../assets/GoldCoast/gc1/1.jpg';
import BrisbaneProperty from '../assets/Brisbane/bri1/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg';
import SunshineCoastProperty from '../assets/SunshineCoast/sc1/8.jpg';
import LoganProperty from '../assets/Logan/log1/modern-house-facade-2023-11-27-05-11-48-utc.jpg';
import IpswichProperty from '../assets/Ipswich/ips1/modern-house-exterior-2023-11-27-05-11-35-utc.jpg';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3750);
        return () => clearTimeout(timer);
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const images = [
        { id: 1, url: GoldCoastProperty, address: '4/48 Macadie Way, Merrimac', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/gc1' },
        { id: 2, url: BrisbaneProperty, address: '1003/66 Manning Street, South Brisbane', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/bri1' },
        { id: 3, url: SunshineCoastProperty, address: '7 Grasstree Court, Pelican Waters', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/sc1' },
        { id: 4, url: LoganProperty, address: '506-514 Beenleigh Redland Bay Road, Carbrook', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/log1' },
        { id: 5, url: IpswichProperty, address: '22 Kingsmill Road, Coalfalls', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/ips1' },
        { id: 1, url: GoldCoastProperty, address: '4/48 Macadie Way, Merrimac', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/gc1' },
        { id: 2, url: BrisbaneProperty, address: '1003/66 Manning Street, South Brisbane', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/bri1' },
        { id: 3, url: SunshineCoastProperty, address: '7 Grasstree Court, Pelican Waters', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/sc1' },
        { id: 4, url: LoganProperty, address: '506-514 Beenleigh Redland Bay Road, Carbrook', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/log1' },
        { id: 5, url: IpswichProperty, address: '22 Kingsmill Road, Coalfalls', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/locations/gold-coast/properties/ips1' },
    ];

    useEffect(() => {
        const parallaxEffect = () => {
            const parallax = document.querySelector('.parallax');
            if (parallax) {
                const offset = window.scrollY - parallax.offsetTop;
                parallax.style.backgroundPositionY = -offset * 0.00000001 + 'px';
            }
        };

        window.addEventListener('scroll', parallaxEffect);
        return () => window.removeEventListener('scroll', parallaxEffect);
    }, []);

    return (
        <>
            <Helmet>
                <title>Home | Creese Property</title>
                <meta name="description" content="Home page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <link rel="canonical" href="/" />
            </Helmet>
            <ScrollToTop />
            {loading && (
                <div className="preloader">
                    <img src={preloaderImage} alt="Loading" />
                </div>
            )}
            <section className="section home">
                <div className="video-text">Creese Property</div>
                <div className="welcome">
                    <video className="header-video" src={videoBg} autoPlay loop muted playsInline alt="Creese Property Video" />
                    <div className="overlay-home"></div>
                </div>
                <div className="text-home">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nulla fugiat, esse dolor excepturi ea sit nihil reprehenderit accusantium dolorum laboriosam eum quae sed!</p>
                </div>
                <div className="home-property-slide"> 
                    <div className="text-example">
                        {/* <p>Trust our experienced team at <span>Creese Property</span> to secure the right property for you</p> */}
                    </div>
                    <Swiper
                        modules={[Mousewheel, Scrollbar, FreeMode]}
                        scrollbar={{
                            hide: false,
                            draggable: true,
                        }}
                        direction={"horizontal"}
                        slidesPerView={3}
                        mousewheel={true}
                        freeMode={true}
                        freeModeMomentum={false}
                        breakpoints={{
                            250: {
                                slidesPerView: 1,
                            }, 
                            400: {
                                slidesPerView: 2,
                            },  
                            750: {
                                slidesPerView: 3,
                            },
                        }}
                        className="mySwiper"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="home-page-image-container" style={{ backgroundImage: `url(${image.url})` }}>
                                <div class="address-overlay">
                                        <div className="address">
                                            <h4>{image.address}</h4>
                                        </div>
                                    </div>
                                    <Link to={image.link}>
                                        <div className="image-overlay">
                                            <div className="address">
                                                <h4>{image.address}</h4>
                                            </div>
                                            <div className="des">
                                                <h5>{image.description}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="divider-section">
                     <h2>The <span>Creese Property</span> Promise</h2>
                     <div className="services">
                         <div className="service home-promise">
                             <img src="src/assets/1 copy 2.png" height={100} alt="Creese Property Experience" />
                             <h3>Attention to Detail</h3>
                             <p>Creese Property commits to every aspect of property management to ensure nothing is overlooked. From the precision in our tenant screening processes to the thoroughness of our property inspections, we prioritise detail to prevent issues and enhance the overall management service.</p>
                         </div>
                         <div className="service home-promise">
                             <img src="src/assets/2 copy 2.png" height={100} alt="Creese Property Off Market Deals" />
                             <h3>Industry Knowledge</h3>
                             <p>With extensive experience in the South-East Queensland real estate market, Creese Property offers unmatched expertise and a deep understanding of local market dynamics. Ongoing research and professional development ensure that our team is equipped with the latest knowledge to advise and act effectively.</p>
                         </div>
                         <div className="service home-promise">
                             <img src="src/assets/3 copy 2.png" height={100} alt="Creese Property Specialisation" />
                             <h3>Authenticity</h3>
                             <p>Creese Property values genuine relationships with clients and tenants. We believe in straightforward communication and ethical business practices. Our team is approachable and committed to providing personalised service, ensuring that every client feels listened to, respected, and valued.</p>
                         </div>
                     </div>
                 </div>
                 <div className="parallax-section">
                    <div className="overlay-content"></div>
                 </div>
                 <div className='contact-form'>
                     <h2>REQUEST A RENTAL APPRAISAL</h2>
                     <form onSubmit={handleFormSubmit}>
                         <div className="name-section">
                             <input 
                                 type="text"
                                 name="firstName"
                                 placeholder='First Name'
                             />
                             <input 
                                 type="text"
                                 name="lastName"
                                 className='lastName'
                                 placeholder='Last Name'
                             />
                         </div>
                         <div className="details-section">
                             <input 
                                 type="email"
                                 name="email"
                                 placeholder='Contact Email'
                             />
                             <input 
                                 type="number"
                                 name="phoneNumber"
                                 className='phoneNumber'
                                 placeholder='Phone Number'
                             />
                         </div>
                         <div className='address-section'>
                             <input type="text" name='address' rows='1' placeholder='Address of Property to Be Appraised'/>
                         </div>
                         <div className='message-section'>
                             <textarea type="text" name='message' rows='6' placeholder='Message'/>
                         </div>
                         <div className="newsletter-signup">
                             <label htmlFor="">
                                 <input type="checkbox" name="newsletterSignup" id="newsletterSignup" />
                                 I  would like to sign up for news and updates from Creese Property and agree to the Privacy Policy.
                             </label>
                         </div>
                         <AnimatedButton onSubmit={handleFormSubmit} />
                     </form>
                 </div>
                 <AutoPlay />
                 <Accordion />
                 <Footer />
            </section>
        </>
    );
}

export default HomePage;