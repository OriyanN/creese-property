import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
import HomeDividerSection from '../components/HomeDividerSection.jsx';

import videoBg from "../assets/CreeseHomePageVideo3.mp4";
import preloaderImage from '../assets/CP Transparent(2).png';

import MilanCourt9 from '../assets/GoldCoast/9-milan-court/9-milan-court.jpeg';
import BrindisiAvenue17 from '../assets/GoldCoast/17-brindisi-ave/17-brindisi-ave.jpeg';
import AvalineEstate170 from '../assets/GoldCoast/170-avaline-estate/170-avaline-estate.jpg';
import TysonStreet9 from '../assets/GoldCoast/832-9-tyson-street/832-9-tyson-street.jpg';

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3750);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const video = videoRef.current;
                        if (video && !video.src) {
                            video.src = videoBg;
                            video.load();
                            video.play().catch(e => console.log('Auto-play was prevented:', e));
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            {
                rootMargin: "100px",
                threshold: 0.25
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const images = [
        { id: 1, url: TysonStreet9, address: '832/9 Tyson Street, Whiterock Ripley', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/leasing/gold-coast/properties/832-9-tyson-street' },
        { id: 2, url: AvalineEstate170, address: '170 Avaline Estate, Burpengary East', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/leasing/gold-coast/properties/170-avaline-estate' },
        { id: 4, url: MilanCourt9, address: '9 Milan Court, Surfers Paradise', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/leasing/gold-coast/properties/17-brindisi-ave' },
        { id: 5, url: BrindisiAvenue17, address: '17 Brindisi Avenue, Surfers Paradise', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', link: '/leasing/gold-coast/properties/9-milan-court' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {
                rootMargin: "0px",
                threshold: 0.1
            }
        );
    
        const images = document.querySelectorAll('.home-page-image-container');
        images.forEach(image => observer.observe(image));
    
        return () => {
            images.forEach(image => observer.unobserve(image));
        };
    }, []);

    useEffect(() => {
        const parallaxEffect = () => {
            const parallax = document.querySelector('.parallax');
            if (parallax) {
                const offset = window.scrollY - parallax.offsetTop;
                parallax.style.backgroundPositionY = -offset * 0.5 + 'px';
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
                                "position": 1,
                                "name": "Home"
                              }
                            ]
                          }
                        ]
                    })}
                </script>
            </Helmet>
            <ScrollToTop />
                {loading && (
                    <div className="preloader">
                        <img src={preloaderImage} width={'100%'} height={'auto'} alt="Loading" />
                    </div>
                )}
                <section className="section home">
                    <div className="video-text">Creese Property</div>
                    <div className="welcome">
                        <video className="header-video" ref={videoRef} autoPlay loop muted playsInline alt="Creese Property Video" />
                        <div className="overlay-home"></div>
                    </div>
                    <div className="text-home">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nulla fugiat, esse dolor excepturi ea sit nihil reprehenderit accusantium dolorum laboriosam eum quae sed!</p>
                    </div>
                    <div className="home-property-slide"> 
                        <div className="text-example">
                            <h4>Most Recent Leasings</h4>
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
                                        <div className="address-overlay">
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
                    <HomeDividerSection />
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