import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from "react-router-dom";

import 'mapbox-gl/dist/mapbox-gl.css';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import AnimatedButton from '../../components/AnimatedButton.jsx';
import Footer from '../../components/Footer.jsx';
import ScrollToTop from '../../components/ScrollToTop.jsx';

import GoldCoastPropertiesData from "./GoldCoastPropertiesData.js";
import '../LocationsPropertyDetailsPage.css';

const GoldCoastPropertyDetailsPage = () => {
  const { propertyId } = useParams();
  const property = GoldCoastPropertiesData.find((p) => p.id === propertyId);

  const [open, setOpen] = React.useState(false);
  const galleryButtonRef = useRef(null);
  const fullscreenRef = React.useRef(null);
  const slideshowRef = React.useRef(null);
  const thumbnailsRef = React.useRef(null);
  const slides = property.images.map(src => ({ src }));

  if (!property) {
    return <div>Property not found</div>;
  }

  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!property) return; 

    mapboxgl.accessToken = 'pk.eyJ1IjoicHJvcGVsbHByb3BlcnR5IiwiYSI6ImNsdWttNWs1cjA1dGcycW9hZnRwZ2theHgifQ.erDmDuOiR1yww8zsDYuIaA';
    
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/propellproperty/clukscow600cw01pw1cai5fqu',
      center: [property.lng, property.lat], 
      zoom: 13,
    });

    new mapboxgl.Marker()
      .setLngLat([property.lng, property.lat])
      .addTo(map);

    return () => map.remove();
  }, [propertyId, property]);

  // State for contact form fields
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '', // Pre-select based on the property details
    property: '', // Pre-select based on the property details
  });

  // Populate form with pre-selected values when the component mounts or when the propertyId changes
  useEffect(() => {
    if (property) {
      setContactForm(prev => ({
        ...prev,
        location: 'Gold Coast', // Example static value, adjust as needed
        property: property.address, // Using address as unique identifier
      }));
    }
  }, [propertyId, property]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };
  
  return (
    <>
      <ScrollToTop />
      <div>
        <Link href="#!" className='gallery-button' ref={galleryButtonRef} onClick={() => setOpen(true)}>
          <img className="main-property-image" src={property.images[0]} alt="Main Property" style={{ height: '100vh', width: '100%' }} />
          <div className="main-property-overlay"></div>
        </Link>

        {/* Property Details */}
        <div className="property-details">
          <div className="property-heading-details">
            <h1 className='property-addrress'>{property.address}</h1>
            <div className="mini-heading">
              <ul>
                <li>{property.beds} Beds -</li>
                <li>{property.car} Baths -</li>
                <li>{property.car} Cars</li>
              </ul>
              <a href="#!" className='gallery-button' ref={galleryButtonRef} onClick={() => setOpen(true)}>Gallery</a>
                <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Fullscreen, Slideshow, Thumbnails]}
                fullscreen={{ ref: fullscreenRef }}
                slideshow={{ ref: slideshowRef }}
                thumbnails={{ ref: thumbnailsRef }}
                on={{
                  click: () => {
                    // Enter fullscreen mode
                    fullscreenRef.current?.enter();
              
                    // Toggle slideshow play/pause
                    if (slideshowRef.current?.playing) {
                      slideshowRef.current?.pause();
                    } else {
                      slideshowRef.current?.play();
                    }
              
                    // Toggle visibility of thumbnails
                    if (thumbnailsRef.current?.visible) {
                      thumbnailsRef.current?.hide();
                    } else {
                      thumbnailsRef.current?.show();
                    }
                  },
                }}
                />
            </div>
          </div>
          <p>{property.description}</p>
          <div className="property-features">
            {property.features.map((feature, index) => (
              <div key={index} className="feature-box">
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div ref={mapContainerRef} style={{ margin: '2rem 26%', height: '60vh', width: '48%', borderRadius: '0.25rem', padding: '1rem 0'}}></div>
        
        <div className='property-contact-form'>
          <h2>Enquire Now</h2>
          <form action=''>
            <div className="property-name-section">
                <input 
                  type="text"
                  name="firstName"
                  placeholder='First Name'
                />
                <input 
                  type="text"
                  name="lastName"
                  placeholder='Last Name'
                />
            </div>
            <div className="property-details-section">
                <input 
                  type="email"
                  name="email"
                  placeholder='Contact Email'
                />
                <input 
                  type="number"
                  name="phoneNumber"
                  placeholder='Phone Number'
                />
            </div>
            <div className="property-dropdowns-section">
              {/* Pre-selected Location */}
              <select className="property-dropdown-section" name="location" value={contactForm.location} onChange={handleChange} disabled>
                <option value={contactForm.location}>{contactForm.location}</option>
              </select>
              
              {/* Pre-selected Property */}
              <select className="property-dropdown-section" name="property" value={contactForm.property} onChange={handleChange} disabled>
                <option value={contactForm.property}>{contactForm.property}</option>
              </select>
            </div>

            <div className='property-message-section'>
              <textarea type="text" name='message' rows='6' placeholder='Message'/>
            </div>
            
            <AnimatedButton />
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GoldCoastPropertyDetailsPage;