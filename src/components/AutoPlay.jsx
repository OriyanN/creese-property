import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import ABC from '../assets/Featured/9.png';
import Australian_Financial_Review from '../assets/Featured/10.png';
import Australian_Property_Institute from '../assets/Featured/7.png';
import COHORT_Innovation_Spaces from '../assets/Featured/8.png';
import Gold_Coast_Bulletin from '../assets/Featured/6.png';
import Property_Investment_Professionals_of_Australia from '../assets/Featured/5.png';
import Real_Estate_Institute_of_Queensland from '../assets/Featured/4.png';
import Realestate_com_au from '../assets/Featured/3.png';
import The_Australian from '../assets/Featured/2.png';
import The_Urban_Developer from '../assets/Featured/1.png';

import './AutoPlay.css';

function AutoPlay() {

    const images = [
        { src: ABC, alt: 'ABC' },
        { src: Australian_Financial_Review, alt: 'Australian Financial Review' },
        { src: Australian_Property_Institute, alt: 'Australian Property Institute' },
        { src: COHORT_Innovation_Spaces, alt: 'COHORT Innovation Spaces' },
        { src: Gold_Coast_Bulletin, alt: 'Gold Coast Bulletin' },
        { src: Property_Investment_Professionals_of_Australia, alt: 'Property Investment Professionals of Australia' },
        { src: Real_Estate_Institute_of_Queensland, alt: 'Real Estate Institute of Queensland' },
        { src: Realestate_com_au, alt: 'Realestate.com.au' },
        { src: The_Australian, alt: 'The Australian' },
        { src: The_Urban_Developer, alt: 'The Urban Developer' }
    ];

    return (
        <div className="block-featured-container">    
            <div className="featured-container swiper-wrapper">
                <Swiper
                    modules = {[ Autoplay, FreeMode ]}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={5}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        reverseDirection: false,
                    }}
                    speed={4000}
                    freeMode={true}
                    freeModeMomentum={false}
                    breakpoints={{
                        380: {
                            slidesPerView: 3,
                        },
                        650: {
                            slidesPerView: 4,
                        },  
                        950: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image.src} alt={image.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default AutoPlay;