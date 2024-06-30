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

import AvalineEstate170 from '/assets/Brisbane/170-avaline-estate/170-avaline-estate.jpg';
import TysonStreet9 from '/assets/Ipswich/832-9-tyson-street/832-9-tyson-street.jpg';
import MilanCourt9 from '/assets/GoldCoast/9-milan-court/9-milan-court.jpeg';
import BrindisiAvenue17 from '/assets/GoldCoast/17-brindisi-ave/17-brindisi-ave.jpeg';
import MilanCourt7 from '/assets/GoldCoast/7-milan-court/7-milan-court.jpeg';
import NorthcliffeTerrace12_4 from '/assets/GoldCoast/12-4-6-northcliffe-terrace/12-4-6-northcliffe-terrace.jpg';
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
        { id: 1, url: TysonStreet9, address: '9 Tyson Street, Whiterock Ripley', description: 'Stunning 4 Bedroom Home in Lovely Deebing Heights, QLD', link: '/leasing/ipswich/properties/9-tyson-street' },
        { id: 2, url: AvalineEstate170, address: '170 Avaline Estate, Burpengary East', description: 'Executive Family Home in Beautiful Burpengary, QLD', link: '/leasing/brisbane/properties/170-avaline-estate' },
        { id: 3, url: NorthcliffeTerrace12_4, address: '12/4-6 Northcliffe Terrace, Surfers Paradise', description: 'Beachside Apartment for Rent in Surfers Paradise', link: '/leasing/gold-coast/properties/12-4-6-northcliffe-terrace' },
        { id: 4, url: MilanCourt7, address: '7 Milan Court, Surfers Paradise', description: 'Spacious 4-Bedroom Home in Beautiful Isle of Capri', link: '/leasing/gold-coast/properties/7-milan-court' },
        { id: 5, url: BrindisiAvenue17, address: '17 Brindisi Avenue, Surfers Paradise', description: '4 Bedroom, 2 Bathroom Home with Inground Swimming Pool', link: '/leasing/gold-coast/properties/17-brindisi-ave' },
        { id: 6, url: MilanCourt9, address: '9 Milan Court, Surfers Paradise', description: 'Short Stroll to Roma Park', link: '/leasing/gold-coast/properties/9-milan-court' },
        
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
                        <div className="overlay-home"></div>
                    </div>
                        <div className="text-home">
                            <p>Communication and authenticity guides us. Through innovation and a people first focus we believe we can create outcomes that change expectations of your property investment experience.</p>
                        </div>
                    <div className="home-property-slide" style={{ cursor: "url(" + CustomCursor + "), auto" }}> 
                            <div className="text-example">
                                <ScrollRevealContainer move="5rem" duration={900} delay={500} origin={'left'}>
                                    <h4>Most Recent Leasings</h4>
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