import React, { useState, } from 'react';

import "./LocationsPage.css";
import { Link } from 'react-router-dom';

function LocationsPage() {

    const initialImage = 'src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg';
    
    const locations = [
        {
          name: "Brisbane",
          mainImage: "src/assets/beautiful-shot-of-the-story-bridge-in-australia-un-2023-11-27-05-24-06-utc.jpg",
          images: ["src/assets/1.jpg", "/path/to/brisbane/image2.jpg", "/path/to/brisbane/image3.jpg"],
        },
        {
            name: "Gold Coast",
            mainImage: "src/assets/aerial-view-of-surfers-paradise-the-gold-coast-q-2023-11-27-04-49-20-utc.jpg",
            images: ["src/assets/2.jpg", "/path/to/brisbane/image2.jpg", "/path/to/brisbane/image3.jpg"],
        },
        {
            name: "Sydney",
            mainImage: "src/assets/sydney-harbour-bridge-with-an-amazing-sunset-2023-11-27-05-03-12-utc.jpg",
            images: ["src/assets/3.jpg", "/path/to/brisbane/image2.jpg", "/path/to/brisbane/image3.jpg"],
        },
    ];

    const [currentImage, setCurrentImage] = useState(initialImage);  
    const [selectedLocation, setSelectedLocation] = useState(null);
  
    const handleLocationClick = (location) => {
    setCurrentImage(location.mainImage);
    setSelectedLocation(location);
  };

  return (
    <section className="section locations">
      <div className="initial-image">
        <img src={currentImage} alt="Selected Location" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="overlay"></div>
      <div className="location-container">
        {locations.map((location) => (
            <Link
                key={location.name}
                onClick={() => handleLocationClick(location)}
                className={`location-button ${selectedLocation && selectedLocation.name === location.name ? 'active' : ''}`}
            >
                {location.name}
            </Link>
        ))}
      </div>
      {selectedLocation && (
        <div className="images-container" >
          {selectedLocation.images.map((image, index) => (
            <img key={index} src={image} alt="" className='image-item' />
          ))}
        </div>
      )}
    </section>
  );
}
  
  export default LocationsPage;