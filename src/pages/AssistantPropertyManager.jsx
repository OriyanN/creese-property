import React from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import assistantManager from '/assets/assistant-property-manager.jpg';

function AssistantPropertyManagerPage() {

    return (
        <> 
            <Helmet>
                <title>Careers | Creese Property</title>
                <meta name="description" content="Browse Creese Property's portfolio of expertly managed residential properties." />
                <meta name="robots" content="noindex"/>
                <link rel="canonical" href="/assistant-property-manager" />
            </Helmet>
            <ScrollToTop />
            <div>
                <div className="contact-about-header career-ad-specific">
                    <img src={assistantManager} alt="Creese Property-Assistant Property Manager" />
                    <h1>Assistant Property Manager</h1>
                    <div className="overlay"></div>
                </div>
                <div className="description-section">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim quidem hic aut quo nam, dolore nostrum, ullam maxime cum ex ut temporibus recusandae aspernatur! Nulla ut quod neque ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim quidem hic aut quo nam, dolore nostrum, ullam maxime cum ex ut temporibus recusandae aspernatur! Nulla ut quod neque ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim quidem hic aut quo nam, dolore nostrum, ullam maxime cum ex ut temporibus recusandae aspernatur! Nulla ut quod neque ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim quidem hic aut quo nam, dolore nostrum, ullam maxime cum ex ut temporibus recusandae aspernatur! Nulla ut quod neque ratione!</p>
                    <div className="description-mini-section qualification-section">
                        <h3>Qualifications and Expertise</h3>
                        <ul>
                            <li>A minimum of 5 years of experience in an agency setting is essential for this role.</li>
                            <li>Comprehensive knowledge of PPC/Media and substantial experience in managing advertising campaigns on Google, Meta and Programmatic platforms (such as DV360, Stackadapt, or similar).</li>
                            <li>Solid understanding of various media platforms including Google Ads, Bing Ads, Facebook & Instagram, LinkedIn, TikTok, and programmatic advertising.</li>
                            <li>Knowledge of B2B marketing strategies.</li>
                            <li>Exceptional analytical abilities and a keen insight into important metrics.</li>
                            <li>Demonstrated capability to effectively convey information to diverse audiences.</li>
                            <li>The skill to oversee multiple projects concurrently.</li>
                            <li>Strong communication and teamwork skills are crucial.</li>
                            <li>A relentless drive to achieve objectives within time and budget constraints.</li>
                            <li>Valued but not essential: Experience in media planning and purchasing via DSPs.</li>
                        </ul>
                    </div>
                    <div className="description-mini-section">
                        <h3>What We Offer</h3>
                        <ul>
                            <li>A minimum of 5 years of experience in an agency setting is essential for this role.</li>
                            <li>Comprehensive knowledge of PPC/Media and substantial experience in managing advertising campaigns on Google, Meta and Programmatic platforms (such as DV360, Stackadapt, or similar).</li>
                            <li>Solid understanding of various media platforms including Google Ads, Bing Ads, Facebook & Instagram, LinkedIn, TikTok, and programmatic advertising.</li>
                            <li>Knowledge of B2B marketing strategies.</li>
                        </ul>
                    </div>
                    <div className="description-mini-section">
                        <h3>Salary</h3>
                        <p>Structured upon experience and capacity of person (negotiable)</p>
                    </div>
                    <div className="description-mini-section">
                        <h3>How to Apply</h3>
                        <p>To apply for this position, please submit your resume and a cover letter outlining your relevant experience and qualifications to hello@creeseproperty.com. Be sure to include “Assistant Property Manager” in the subject line of your email.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default AssistantPropertyManagerPage;