import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import "./HomePage.css";

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import AutoPlay from '../components/AutoPlay.jsx';
import Accordion from '../components/Accordion.jsx';
import HomeDividerSection from '../components/HomeDividerSection.jsx';
import ScrollRevealContainer from '../components/ScrollReveal.jsx'; 
import Helmet from '../components/Helmet.jsx';
import RentalAppraisalForm from '../components/RentalAppraisalForm.jsx';

import videoBg from "../assets/CreeseHomePageVideo3.mp4";
import preloaderImage from '../assets/CreesePropertyInitialImage.webp';
import posterImage from '../assets/Creese-Property-Home-Image.webp'
import CustomCursor from '../assets/icons8-arrow-50.webp';

import ChatswoodRoad425 from '../assets/Logan/425-chatswood-road/1.webp';
import BaturaStreet10 from '../assets/Brisbane/10-Batura-Street/1.webp';
import MilanCourt7 from '../assets/GoldCoast/7-milan-court/7-milan-court.webp';
import BeamingRoad32 from '../assets/Ipswich/32-beaming-road/1.webp';

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

    const images = useMemo(() => [
        { id: 1, url: BeamingRoad32, address: '32 Beaming Road, Ripley', description: 'This Home is “BEAMING”', link: '/rentals/ipswich/properties/32-beaming-road' },
        { id: 2, url: MilanCourt7, address: '7 Milan Court, Surfers Paradise', description: 'Spacious 4-bedroom Family Home in Prime Isle of Capri Location', link: '/rentals/gold-coast/properties/7-milan-court' },
        { id: 3, url: BaturaStreet10, address: '10 Batura Street, Pallara', description: 'Peaceful Lifestyle', link: '/rentals/brisbane/properties/10-Batura-Street' },
        { id: 4, url: ChatswoodRoad425, address: '425 Chatswood Rd, Logan', description: 'Peaceful Lifestyle', link: '/rentals/logan/properties/425-chatswood-road' },
    ], []);

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
    
        const handleScroll = () => {
            requestAnimationFrame(parallaxEffect);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);    

    return (
        <>
            <Helmet
                description="Creese Property: Your expert partner in residential property management, buyer’s agency, and consultancy."
                link="/" 
            >
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@graph": [
                          {
                            "@type": "BreadcrumbList",
                            "@id": "https://creeseproperty.com/#breadcrumb",
                            "itemListElement": [
                              {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home"
                              }
                            ]
                          },
                        ]
                    })}
                </script>
                <meta name="description" content="Creese Property: Your expert partner in residential property management, buyer’s agency, and consultancy." />
            </Helmet>
            <ScrollToTop />
                {loading && (
                    <div className="preloader">
                        <img src={preloaderImage} width={'100%'} height={'auto'} alt="Loading" loading='lazy'/>
                    </div>
                )}
                <section className="section home">
                    <div className="video-text">Creese Property</div>
                    <div className="welcome">
                        <video
                            className="header-video"
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            poster={posterImage}
                            alt="Creese Property Video"
                        >
                            <source src={videoBg} type="video/mp4" />
                        </video>
                    </div>
                        <div className="text-home">
                            <p>Communication and authenticity guides us. Through innovation and a people first focus we believe we can create outcomes that change expectations of your property investment experience.</p>
                        </div>
                    <div className="home-property-slide" style={{ cursor: "url(" + CustomCursor + "), auto" }}> 
                            <div className="text-example">
                                <ScrollRevealContainer move="5rem" duration={900} delay={500} origin={'left'}>
                                    <h4>Most Recent Rentals</h4>
                                </ScrollRevealContainer>
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
                                        <Link to={image.link} style={{ cursor: "url(" + CustomCursor + "), auto" }}>
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
                    <div className="parallax-mobile-section">
                        <div className="overlay-content-mobile"></div>
                    </div>
                    <div className='contact-form'>
                        <RentalAppraisalForm />
                    </div>
                    <AutoPlay />
                    <Accordion />
                    <Footer />
                </section>
        </>
    );
}

export default HomePage;