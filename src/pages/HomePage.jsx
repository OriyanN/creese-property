import React, { useState, useEffect, useRef } from 'react';
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

import videoBg from "/assets/CreeseHomePageVideo3.mp4";
import preloaderImage from '/assets/CreesePropertyInitialImage.png';
import CustomCursor from '../../public/assets/icons8-arrow-50.png';

import AbbeyWay8 from '/assets/MoretonBay/AbbeyWay8/1.jpg';
import BaturaStreet10 from '/assets/Brisbane/10-Batura-Street/1.jpg';
import MilanCourt7 from '/assets/GoldCoast/7-milan-court/7-milan-court.jpeg';
import RentalAppraisalForm from '../components/RentalAppraisalForm.jsx';

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

    const images = [
        { id: 1, url: AbbeyWay8, address: '8 Abbey Way, Warner', description: 'Relaxing Lifestyle', link: '/rentals/moreton-bay/properties/8-abbey-way' },
        { id: 2, url: BaturaStreet10, address: '10 Batura Street, Pallara', description: 'Peaceful Lifestyle', link: '/rentals/brisbane/properties/10-Batura-Street' },
        { id: 3, url: MilanCourt7, address: '7 Milan Court, Surfers Paradise', description: 'Spacious 4-Bedroom Home in Beautiful Isle of Capri', link: '/rentals/gold-coast/properties/7-milan-court' },
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
            <Helmet
                title="Home"
                description="Creese Property: Your expert partner in residential property management, buyer’s agency, and consultancy."
                link="/"
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
                                "position": 1,
                                "name": "Home"
                              }
                            ]
                          }
                        ]
                    })}
                </script>
                <meta name="description" content="Creese Property: Your expert partner in residential property management, buyer’s agency, and consultancy." />
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