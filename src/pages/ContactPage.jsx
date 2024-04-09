import React, { useEffect, useRef } from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';

import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
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
            <ScrollToTop />
            <div>
                <div className="contact-about-header">
                    <img src="src/assets/contact-image.jpg" alt="" />
                    <h1>Contact</h1>
                    <div className="overlay"></div>
                </div>
                <div className="contact-body">
                    <div className="contact-text">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Mattis pellentesque id nibh tortor id aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada. Urna porttitor rhoncus dolor purus non enim praesent elementum. Scelerisque purus semper eget duis at tellus. At imperdiet dui accumsan sit amet nulla. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Curabitur gravida arcu ac tortor dignissim convallis. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Risus feugiat in ante metus dictum at tempor commodo. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris a diam maecenas sed. Faucibus a pellentesque sit amet porttitor eget.</p>
                    </div>
                    <div className="contact-map" ref={mapContainerRef} ></div>
                </div>
                <ContactForm />
                <Footer />
            </div>
        </>
    );
}

export default ContactPage;