import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import 'mapbox-gl/dist/mapbox-gl.css';

import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import contactImage from '/assets/contact-image.jpg';

import "./ContactAboutPage.css"

function ContactPage() {
    const mapContainerRef = useRef(null);

    useEffect(() => {
    
        mapboxgl.accessToken = 'pk.eyJ1IjoicHJvcGVsbHByb3BlcnR5IiwiYSI6ImNsdWttNWs1cjA1dGcycW9hZnRwZ2theHgifQ.erDmDuOiR1yww8zsDYuIaA';
        
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/propellproperty/clukscow600cw01pw1cai5fqu',
          center: [153.411620, -28.010370], 
          zoom: 13,
        });
    
        new mapboxgl.Marker()
          .setLngLat([153.411620, -28.010370])
          .addTo(map);
    
        return () => map.remove();
    },);

    return (
        <>
            <Helmet
                title="Contact"
                description="Connect with Creese Property for expert property solutions and personalised support."
                link="/contact"
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
                    <img src={contactImage} alt="Creese Property Contact" />
                    <h1>Contact</h1>
                    <div className="overlay"></div>
                </div>
                <div className="contact-body">
                    <div>
                        <div className="contact-map" ref={mapContainerRef} ></div>
                    </div>
                    <div className="contact-text">
                        <p>Centerally located in Bundall on the Gold Coast. Creese Property is open 9am to 5pm every Monday to Friday, excluding public holidays.</p>
                        <br></br>
                        <br></br>
                        <p>Unit 1, 42 Bundall Rd Bundall, QLD 4217</p>
                        <br></br>
                        <br></br>
                        <h4>GENERAL CONTACT</h4>
                        <p>hello@creeseproperty.com.au</p>
                        <p>0412 345 678</p>
                    </div>
                </div>
                <ContactForm />
                <Footer />
            </div>
        </>
    );
}

export default ContactPage;