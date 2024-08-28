import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            text: "Kym is a fabulous property manager who has made the process of renting my unit very simple and easy. She has excellent knowledge of the local market and found good tenants very quickly. I highly recommend her services.",
            author: "J. C"
        },
        {
            id: 2,
            text: "I found Kym to be very professional and friendly. She was always available to answer any questions I had. The whole process was very easy and took away any anxiety I had. Her Knowledge of local area is great and she kept my mind at ease throughout the whole process. I highly recommend Kym.",
            author: "S. Co"
        },
        {
            id: 3,
            text: "Kym has been excellent to work with. As tenants, we have previously had negative experiences with other property managers. This was not the case with Kym. We would trust Kym with our own property when we eventually put it up for rent!",
            author: "A. Lyster"
        },
        {
            id: 4,
            text: "Our Property Manager Kym has been absolutely outstanding in her service she has provided us as our property manager. Diligent, great communication, and thorough. Could not recommend using her services more highly. I have seen first hand the damage a poor property manager can do, so extremely grateful I don’t have to worry with Kym.",
            author: "T.W. G"
        },
        {
            id: 5,
            text: "I would like to open by saying that in our time with an investment property, we have been soooo impressed by not only their professionalism but also with their general manner. You feel you are talking to a friend when you have occasion to be in contact. In particular this applies to our property manager Kym Bayley.",
            author: "P. Walker"
        },
        {
            id: 6,
            text: "We had an excellent experience with Kym. Communication with her has been easy and smooth, she's flexible, prompt and friendly with her responses.",
            author: "M. Carolina"
        },
        {
            id: 7,
            text: "Kym has been fantastic to deal with. Is very quick on getting things rectified. She has gone out of her way to do extra viewings when we needed and dropping keys off etc. I highly recommend Kym.",
            author: "R. Watts"
        },
        {
            id: 8,
            text: "A pleasure to deal with, excellent communication and follow up. Thank you to Kym for your dedication and expertise.",
            author: "T. Tomaz"
        },
    ];

    return (
        <div className="testimonials-container">    
            <div className="testimonials-inner-container">
                <Swiper
                    modules = {[ Autoplay, Pagination ]}
                    slidesPerView={2}
                    spaceBetween={75}
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        250: {
                            slidesPerView: 1,
                        },  
                        950: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="testimonial-card">
                                <p className="testimonial-text">{testimonial.text}</p>
                                <p className="testimonial-author">- {testimonial.author}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;