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
                    <p>
                        Creese Property is a dynamic property management firm with a culture first focus. We believe in changing industry expectation surrounding the level of service that should be expected from landlords and tenants alike. Through innovation and understanding we continue to shape our business to reflect the everchanging requirements and expectations of the industry.
                    </p>
                        <br></br>
                    <p>
                        As a business we are firm believers in being united, as Together Everyone Achieves More (T.E.A.M.). While this acronym is tacky, it has allowed us to build invaluable trust with our clients to care for their investments as our own. 
                        We facilitate the realities of life, putting our workplace culture and staff’s individual needs as a top priority; fostering business foundation and workplace environment that they can pursue a lifelong career.
                    </p>
                    <div className="description-mini-section qualification-section">
                        <h3>Job Description</h3>
                        <p>As an Assistant Property Manager, you will work directly with the Senior Property Management team, assisting and learning from them. This will be through general property admin, entry/exit reporting, and processing rental applications. The goal of this role is to be trained up to become a senior property manager with your own portfolio.</p>
                    </div>
                    <div className="description-mini-section">
                        <h3>Qualifications and Expertise</h3>
                        <ul>
                            <li>QLD Real Estate License or Registration.</li>
                            <li>Previous experience in a similar role.</li>
                            <li>Strong communication and interpersonal skills.</li>
                            <li>Excellent organisational and time management abilities.</li>
                            <li>Attention to detail with accuracy first approach.</li>
                            <li>Previous experience using PropertyMe (preferred).</li>
                        </ul>
                    </div>
                    <div className="description-mini-section">
                        <h3>What We Offer</h3>
                        <ul>
                            <li>Opportunities for professional development and growth.</li>
                            <li>A supportive and collaborative work environment.</li>
                            <li>The chance to be immersed in multiple areas of the Property sector.</li>
                        </ul>
                    </div>
                    <div className="description-mini-section">
                        <h3>Salary</h3>
                        <p>Structured upon experience and capacity of person.</p>
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