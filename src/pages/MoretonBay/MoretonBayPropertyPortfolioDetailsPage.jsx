import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Footer from '../../components/Footer.jsx';
import ScrollToTop from '../../components/ScrollToTop.jsx';
import LazyImage from '../../components/LazyImage.jsx';

import MoretonBayPropertiesDataPortfolio from "./MoretonBayPropertiesDataPortfolio.js";
import '../LocationsPropertyDetailsPage.css';
import MoretonBayPropertyFormPortfolio from './MoretonBayPropertyFormPortfolio.jsx';

const MoretonBayPropertyPortfolioDetailsPage = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const property = MoretonBayPropertiesDataPortfolio.find((p) => p.id === propertyId);
  const [suggestedProperties, setSuggestedProperties] = useState([]);

  const [open, setOpen] = React.useState(false);
  const galleryButtonRef = useRef(null);
  const fullscreenRef = React.useRef(null);
  const slideshowRef = React.useRef(null);
  const thumbnailsRef = React.useRef(null);
  const slides = property ? property.images.map(src => ({ src })) : [];

  useEffect(() => {
    if (!property || !property.images || slides.length === 0) {
      navigate('/404');
    }
  }, [property, navigate, slides.length]);

  useEffect(() => {
    const getThreeRandomProperties = () => {
        const otherProperties = MoretonBayPropertiesDataPortfolio.filter(p => p.id !== propertyId);
        const shuffled = otherProperties.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    if (property) {
        setSuggestedProperties(getThreeRandomProperties());
    }
  }, [propertyId, property]);

  if (!property) return null;

  return (
    <>
      <Helmet>
          <title>Moreton Bay | Creese Property</title>
          <meta name="description" content="Discover Creese Property's expert residential management and consultancy services in the Moreton Bay area." />
          <meta name="robots" content="noindex"/>
          <link rel="canonical" href={`/portfolio/moreton-bay/properties/${property.id}`} />
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
                  <li>{property.baths} Baths -</li>
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
        
        <MoretonBayPropertyFormPortfolio />
        
        <div className="you-may-also-like-section images-container">
          <h3>You May Also Like</h3>
          <div className="images-container">
            {suggestedProperties.length > 0 ? (
              suggestedProperties.map((p) => (
                <div key={p.id} className="image-item-container">
                  <Link to={`/portfolio/moreton-bay/properties/${p.id}`}>
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

export default MoretonBayPropertyPortfolioDetailsPage;