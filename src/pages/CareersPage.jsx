import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LazyImage from '../components/LazyImage';

import careersImage from '/assets/careers-image.jpg';
import assistantManager from '/assets/assistant-property-manager.jpg';

import "./ContactAboutPage.css"

function CareersPage() {

  return (
    <>
          <Helmet
            title="Careers"
            description="Join the Creese Property team and build a rewarding career in property management. Join our growing team!"
            link="/careers"
            addPostfixTitle
          >
          <script type="application/ld+json">
              {JSON.stringify({
                  "@context": "https://schema.org/",
                  "@graph": [
                    {
                      "@type": "BreadcrumbList",
                      "@id": "https://www.creeseproperty.com/about/#breadcrumb",
                      "itemListElement": [
                        {
                          "@type": "ListItem",
                          "name": "Home",
                          "position": "1",
                          "item": "https://www.creeseproperty.com/"
                        },
                        {
                          "@type": "ListItem",
                          "name": "About",
                          "position": "2",
                          "item": "https://www.creeseproperty.com/about/"
                        },
                        {
                          "@type": "ListItem",
                          "name": "Services",
                          "position": "3",
                          "item": "https://www.creeseproperty.com/services/"
                        },
                        {
                          "@type": "ListItem",
                          "name": "Portfolio",
                          "position": "4",
                          "item": "https://www.creeseproperty.com/portfolio/"
                        },
                        {
                          "@type": "ListItem",
                          "name": "Leasing",
                          "position": "5",
                          "item": "https://www.creeseproperty.com/leasing/"
                        },
                        {
                          "@type": "ListItem",
                          "name": "Contact",
                          "position": "6",
                          "item": "https://www.creeseproperty.com/contact/"
                        },
                        {
                          "@type": "ListItem",
                          "name": "Careers",
                          "position": "7",
                          "item": "https://www.creeseproperty.com/careers/"
                        }
                      ]
                    }
                  ]
              })}
          </script>
        </Helmet>
        <ScrollToTop />
        <div>
          <div className="contact-about-header">
            <img src={careersImage} alt="Creese Property Careers Page" />
            <h1>Careers</h1>
            <div className="overlay"></div>
          </div>
          <div className="careers-container">
            <div className="who">
                <h3>Who We Are?</h3>
                <p>
                Every day is an opportunity at Creese Property. Whether in the pursuit of a better process or other innovation we want to be better, and we want you to continue evolving too. T.E.A.M. – Together Everyone Achieves More. Despite being a tacky acronym, it is true. Through collaboration, honesty, and empathy, we can collectively find greater success.
                </p>
            </div>
            <div className="what">
                <h3>What We Do?</h3>
                <p>Creese Property is a dynamic property service provider. The foundation of our business is built upon a people first focused property management service, with growing opportunities in Buyers Advocacy and Strategic Investment Consultancy.</p>
            </div>
            <div className="why">
                <h3>Why Creese Property?</h3>
                <p>At Creese Property, our culture first priority and focus on innovation drives us. We believe in fostering an environment where every team member is not just an employee, but a valued individual where aspirations can flourish. Operating within an open plan office, we embrace a flat management system that encourages collaboration and ensures that no one’s voice goes unheard. With a different approach to the property profession we have no requirement to follow the herd, and a determination to create a service level that outstrips current standards.</p>
            </div>
            <p>Join us at Creese Property where dynamicity, collaboration and a culture first focus grounds us in who we are and aspire to expand on becoming.</p>
          </div>
          <div className="careers-listings">
            <div className="careers-listing">
              <div className="images-container images-container-portfolio">
                <div className="image-item-container image-item-container-portfolio">
                  <Link to='/careers/assistant-property-manager'>
                    <LazyImage src={assistantManager} alt={'Creese Property-Assistant Property Manager'} className="image-item image-item-portfolio" />
                  </Link>
                  <div className="location-details">
                    <h4>Assistant Property Manager</h4>
                    <p>Location: Bundall, Gold Coast</p>
                    <p>Employment Type: Full-Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    </>
  );
}

export default CareersPage;