import React, { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";

import 'mapbox-gl/dist/mapbox-gl.css';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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
  
  return (
    <div>
      <img className="main-property-image" src={property.images[0]} alt="Main Property" style={{ height: '100vh', width: '100%' }} />
      <div className="main-property-overlay"></div>

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
                click: () => fullscreenRef.current?.enter(),
                click: () => {
                  (slideshowRef.current?.playing
                    ? slideshowRef.current?.pause
                    : slideshowRef.current?.play)?.();
                },
                click: () => {
                  (thumbnailsRef.current?.visible
                    ? thumbnailsRef.current?.hide
                    : thumbnailsRef.current?.show)?.();
                },
              }}
              />
          </div>
        </div>
        <div className="property-features">
          {property.features.map((feature, index) => (
            <div key={index} className="feature-box">
              {feature}
            </div>
          ))}
        </div>
        <p>{property.description}</p>
      </div>

      <div ref={mapContainerRef} style={{ margin: '2rem 26%', height: '60vh', width: '48%', borderRadius: '0.25rem', padding: '1rem 0'}}></div>
      
    </div>
  );
};

export default GoldCoastPropertyDetailsPage;