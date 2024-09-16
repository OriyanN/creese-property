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
import RentalAppraisalForm from '../components/RentalAppraisalForm.jsx';

import videoBg from "/assets/CreeseHomePageVideo3.mp4";
import preloaderImage from '../../public/assets/CreesePropertyInitialImage.png';
import posterImage from '../../public/assets/Creese-Property-Home-Image.png'
import CustomCursor from '../../public/assets/icons8-arrow-50.png';

import ChatswoodRoad425 from '/assets/Logan/425-chatswood-road/1.jpg';
import BaturaStreet10 from '/assets/Brisbane/10-Batura-Street/1.jpg';
import MilanCourt7 from '/assets/GoldCoast/7-milan-court/7-milan-court.jpeg';
import BeamingRoad32 from '/assets/Ipswich/32-beaming-road/1.jpg';

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
        { id: 1, url: ChatswoodRoad425, address: '425 Chatswood Road, Shailer Park', description: 'Private Retreat with Panoramic Views”', link: '/rentals/logan/properties/425-chatswood-road' },
        { id: 2, url: BeamingRoad32, address: '32 Beaming Road, Ripley', description: 'This Home is “BEAMING”', link: '/rentals/ipswich/properties/32-beaming-road' },
        { id: 3, url: MilanCourt7, address: '7 Milan Court, Surfers Paradise', description: 'Spacious 4-bedroom Family Home in Prime Isle of Capri Location', link: '/rentals/gold-coast/properties/7-milan-court' },
        { id: 4, url: BaturaStreet10, address: '10 Batura Street, Pallara', description: 'Peaceful Lifestyle', link: '/rentals/brisbane/properties/10-Batura-Street' },
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
                description="Creese Property: Your expert partner in residential property management, buyer’s agency, and consultancy."
                link="/" 
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
                          },
                        //   {
                        //     "@type": "FAQPage",
                        //     "mainEntity": [
                        //       {
                        //         "@type": "Question",
                        //         "name": "What services does Creese Property offer to property owners?",
                        //         "acceptedAnswer": {
                        //           "@type": "Answer",
                        //           "text": "Creese Property provides comprehensive property management services aimed at maximising property value and streamlining ownership. Our services include effective marketing of properties, precise tenant screening, prompt and reliable rent collection, detailed financial reporting and ensuring legal compliance in all landlord-tenant matters."
                        //         }
                        //       },
                        //       {
                        //         "@type": "Question",
                        //         "name": "What types of properties does Creese Property manage?",
                        //         "acceptedAnswer": {
                        //           "@type": "Answer",
                        //           "text": "Creese Property manages a variety of residential property types. We tailor our management strategies to fit the unique needs of each property. Our broad expertise not only allows us to effectively manage these properties but also to advise property owners on how to maximise their investments."
                        //         }
                        //       },
                        //       {
                        //         "@type": "Question",
                        //         "name": "What area does Creese Property service?",
                        //         "acceptedAnswer": {
                        //           "@type": "Answer",
                        //           "text": "Creese Property services properties across South-East Queensland. Based out of the Gold Coast, we cover a wide area that includes major urban centres. Our reach extends to both coastal and inland areas, allowing us to offer a diverse range of properties that cater to different lifestyles. Our team is familiar with the unique characteristics of each area, ensuring we provide expert advice and tailored services to both property owners and tenants."
                        //         }
                        //       },
                        //       {
                        //         "@type": "Question",
                        //         "name": "What should I look out for when choosing a property manager?",
                        //         "acceptedAnswer": {
                        //           "@type": "Answer",
                        //           "text": "The right property manager will have a deep understanding of the local real estate market, including rental rates, vacancy rates and any trends that may affect your property's value. Additionally, a competent property manager should offer a comprehensive range of services that cover all aspects of managing your property effectively. This includes marketing your property, screening tenants, handling lease agreements, managing rent collection, addressing maintenance and repair issues and providing detailed financial reporting."
                        //         }
                        //       },
                        //       {
                        //         "@type": "Question",
                        //         "name": "I’ve found a property manager with lower fees, why should I go with Creese Property?",
                        //         "acceptedAnswer": {
                        //           "@type": "Answer",
                        //           "text": "At Creese Property, our fees reflect the high quality and comprehensive nature of our services. Unlike some competitors who may offer lower fees, we ensure that every aspect of property management is handled with the utmost professionalism and attention to detail. Our team of experienced professionals use their knowledge and expertise to successfully manage your property, from conducting thorough tenant screenings to maintaining timely communication and managing financial transactions with precision."
                        //         }
                        //       }
                        //     ]
                        //   }
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
                        <video
                            className="header-video"
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            poster={posterImage}
                            alt="Creese Property Video"
                        />
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