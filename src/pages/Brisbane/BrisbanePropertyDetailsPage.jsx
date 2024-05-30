import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

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
import LazyImage from '../../components/LazyImage.jsx';

import BrisbanePropertiesData from "./BrisbanePropertiesData.js";
import '../LocationsPropertyDetailsPage.css';

const BrisbanePropertyDetailsPage = () => {
  const { propertyId } = useParams();
  const property = BrisbanePropertiesData.find((p) => p.id === propertyId);
  const [suggestedProperties, setSuggestedProperties] = useState([]);

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

  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '', 
    property: '', 
  });

  useEffect(() => {
    if (property) {
      setContactForm(prev => ({
        ...prev,
        location: 'Brisbane',
        property: property.address,
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

  useEffect(() => {
    const getThreeRandomProperties = () => {
        const otherProperties = BrisbanePropertiesData.filter(p => p.id !== propertyId);
        const shuffled = otherProperties.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    if (property) {
        setSuggestedProperties(getThreeRandomProperties());
    }
  }, [propertyId]);
  
  if (!property) {
    return <div>There are no current similar properties.</div>;
  }

  return (
    <>
      <Helmet>
          <title>Brisbane | Creese Property</title>
          <meta name="description" content="Discover Creese Property's expert residential management and consultancy services in the Brisbane area." />
          <meta name="robots" content="noindex"/>
          <link rel="canonical" href={'/leasing/brisbane/properties/${property.id}'} />
      </Helmet>
      <ScrollToTop />
      <div>
        <Link href="#!" className='gallery-button' ref={galleryButtonRef} onClick={() => setOpen(true)}>
          <img className="main-property-image" src={property.images[0]} alt={`Creese Property ${property.address}`} style={{ height: '100vh', width: '100%', objectFit: 'cover'}} />
          <div className="main-property-overlay"></div>
        </Link>

        <div className="property-details">
          <div className="property-heading-details">
            <h1 className='property-addrress'>{property.address}</h1>
            <div className="mini-heading">
              <div className='property-details-list'>
                <ul>
                  <li className='property-price'>${property.price}/week</li>
                </ul>
                <ul>
                  <li>{property.beds} Beds -</li>
                  <li>{property.car} Baths -</li>
                  <li>{property.car} Cars</li>
                </ul>
              </div>
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
                    fullscreenRef.current?.enter();
              
                    if (slideshowRef.current?.playing) {
                      slideshowRef.current?.pause();
                    } else {
                      slideshowRef.current?.play();
                    }
              
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
          <div className="property-description">
            {Array.isArray(property.description) ? (
              property.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))
            ) : (
              <p>{property.description}</p>
            )}
          </div>
          <div className="property-features">
            {property.features.map((feature, index) => (
              <div key={index} className="feature-box">
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div ref={mapContainerRef} className='map-property' style={{ margin: '2rem 26%', height: '60vh', width: '48%', borderRadius: '0.25rem', padding: '1rem 0'}}></div>
        
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
              <select className="property-dropdown-section" name="location" value={contactForm.location} onChange={handleChange} disabled>
                <option value={contactForm.location}>{contactForm.location}</option>
              </select>
              
              <select className="property-dropdown-section" name="property" value={contactForm.property} onChange={handleChange} disabled>
                <option value={contactForm.property}>{contactForm.property}</option>
              </select>
            </div>

            <div className='property-message-section'>
              <textarea type="text" name='message' rows='6' placeholder='Message'/>
            </div>
            
            <AnimatedButton />
          </form>
          <div className="disclaimer">
            <p>PLEASE NOTE: You must register for inspections. If you do not register for inspections, we cannot notify you of time changes or cancellations to inspections. The property must be inspected prior to an application being submitted.
              <br />
              <br />
              ADVERTISING DISCLAIMER - Please note - All parties should make and rely upon their own enquiries in order to determine the accuracy of the information supplied. Some file photographs in use may have been taken some time ago. Please rely on your own inspection and investigations as the property may have changed since the photographs were taken. Creese Property bears no liability for any loss sustained due to inaccuracy or omission.
            </p>
          </div>
        </div>
        <div className="you-may-also-like-section images-container">
          <h3>You May Also Like</h3>
          <div className="images-container">
            {suggestedProperties.length > 0 ? (
              suggestedProperties.map((p) => (
                <div key={p.id} className="image-item-container">
                  <Link to={`/leasing/gold-coast/properties/${p.id}`}>
                    <LazyImage src={p.images[0]} alt={p.address} className="image-item" />
                  </Link>
                  <div className="location-details">
                    <h4>{p.address}</h4>
                    <div className="locations-page-properties-details">
                      <p>{p.beds} Bed - {p.baths} Bath - {p.car} Car</p>
                      <p className='property-bottom-price'>${p.price}/week</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-other-properties">
                <p>There are no current similar properties.</p>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BrisbanePropertyDetailsPage;