import React from 'react';

import ScrollRevealContainer from './ScrollReveal';

import process1 from '/assets/process1.png';
import process2 from '/assets/process2.png';
import process3 from '/assets/process3.png';

import "../pages/HomePage.css";

const HomeDividerSection = () => {

    return (
        <div className="divider-section">
            <ScrollRevealContainer move="5rem" duration={900} delay={300} origin={'bottom'}>
                <h2>The <span>Creese Property</span> Promise</h2>
            </ScrollRevealContainer>
            <div className="services home-promise-section">
                <ScrollRevealContainer move="5rem" duration={900} delay={500} origin={'bottom'}>
                    <div className="service home-promise">
                        <img src={process1} height={100} alt="Creese Property Experience" />
                        <h3>Attention to Detail</h3>
                        <p>Creese Property commits to every aspect of property management to ensure nothing is overlooked. From the precision in our tenant screening processes to the thoroughness of our property inspections, we prioritise detail to prevent issues and enhance the overall management service.</p>
                    </div>
                </ScrollRevealContainer>
                <ScrollRevealContainer move="5rem" duration={900} delay={500} origin={'bottom'}>
                    <div className="service home-promise">
                        <img src={process2} height={100} alt="Creese Property Off Market Deals" />
                        <h3>Industry Knowledge</h3>
                        <p>With extensive experience in the South-East Queensland real estate market, Creese Property offers unmatched expertise and a deep understanding of local market dynamics. Ongoing research and professional development ensure that our team is equipped with the latest knowledge to advise and act effectively.</p>
                    </div>
                </ScrollRevealContainer>
                <ScrollRevealContainer move="5rem" duration={900} delay={500} origin={'bottom'}>
                    <div className="service home-promise">
                        <img src={process3} height={100} alt="Creese Property Specialisation" />
                        <h3>Authenticity</h3>
                        <p>Creese Property values genuine relationships with clients and tenants. We believe in straightforward communication and ethical business practices. Our team is approachable and committed to providing personalised service, ensuring that every client feels listened to, respected, and valued.</p>
                    </div>
                </ScrollRevealContainer>
            </div>
        </div>
    );
}

export default HomeDividerSection;