import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    
    return (
        <div className="block-featured-container">    
            <div className="featured-container">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default AutoPlay;
