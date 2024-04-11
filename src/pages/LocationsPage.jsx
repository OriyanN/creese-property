import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./LocationsPage.css";

function LocationsPage() {

    const initialImage = 'src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg';
    
    const locations = [
        {
            name: "Sunshine Coast",
            mainImage: "src/assets/sydney-harbour-bridge-with-an-amazing-sunset-2023-11-27-05-03-12-utc.jpg",
            images: [
                {
                  url: "src/assets/1.jpg",
                  address: "Address 1, Sunshine Coast",
                  beds: 3,
                  baths: 2,
                },
                {
                    url: "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg",
                    address: "Address 2, Sunshine Coast",
                    beds: 4,
                    baths: 3,
                },
                {
                    url: "src/assets/backyard-2023-11-27-04-52-38-utc.jpg",
                    address: "Address 3, Sunshine Coast",
                    beds: 5,
                    baths: 4,
                },
                {
                    url: "src/assets/1.jpg",
                    address: "Address 1, Sunshine Coast",
                    beds: 6,
                    baths: 7,
                },
                {
                    url: "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg",
                    address: "Address 2, Sunshine Coast",
                    beds: 7,
                    baths: 8,
                },
                {
                    url: "src/assets/backyard-2023-11-27-04-52-38-utc.jpg",
                    address: "Address 3, Sunshine Coast",
                    beds: 8,
                    baths: 9,
                },
            ],
        },
        {
            name: "Somerset",
            mainImage: "src/assets/sydney-harbour-bridge-with-an-amazing-sunset-2023-11-27-05-03-12-utc.jpg",
            images: ["src/assets/2.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg", "src/assets/1.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg"],
        },
        {
            name: "Moreton Bay",
            mainImage: "src/assets/sydney-harbour-bridge-with-an-amazing-sunset-2023-11-27-05-03-12-utc.jpg",
            images: ["src/assets/3.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg", "src/assets/1.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg"],
        },
        {
            name: "Lockyer Valley",
            mainImage: "src/assets/sydney-harbour-bridge-with-an-amazing-sunset-2023-11-27-05-03-12-utc.jpg",
            images: ["src/assets/4.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg", "src/assets/1.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg"],
        },
        {
            name: "Brisbane",
            mainImage: "src/assets/beautiful-shot-of-the-story-bridge-in-australia-un-2023-11-27-05-24-06-utc.jpg",
            images: ["src/assets/5.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg", "src/assets/1.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg"],
            address: "123 Brisbane Rd, Brisbane",
            beds: 3,
            baths: 2,
        },
        {
            name: "Ipswich",
            mainImage: "src/assets/sydney-harbour-bridge-with-an-amazing-sunset-2023-11-27-05-03-12-utc.jpg",
            images: ["src/assets/6.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg", "src/assets/1.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg"],
        },
        {
            name: "Logan",
            mainImage: "src/assets/sydney-harbour-bridge-with-an-amazing-sunset-2023-11-27-05-03-12-utc.jpg",
            images: ["src/assets/7.JPG", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg", "src/assets/1.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg"],
        },
        {
            name: "Redland",
            mainImage: "src/assets/sydney-harbour-bridge-with-an-amazing-sunset-2023-11-27-05-03-12-utc.jpg",
            images: ["src/assets/8.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg", "src/assets/1.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg"],
        },
        {
            name: "Gold Coast",
            mainImage: "src/assets/aerial-view-of-surfers-paradise-the-gold-coast-q-2023-11-27-04-49-20-utc.jpg",
            images: ["src/assets/2.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg", "src/assets/1.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg"],
            address: "456 Gold Coast Blvd, Gold Coast",
            beds: 4,
            baths: 3,
        },
        {
            name: "Scenic Rim",
            mainImage: "src/assets/sydney-harbour-bridge-with-an-amazing-sunset-2023-11-27-05-03-12-utc.jpg",
            images: ["src/assets/3.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg", "src/assets/1.jpg", "src/assets/aerial-view-of-the-big-luxury-homes-on-the-hill-du-2023-11-27-04-49-28-utc.jpg", "src/assets/backyard-2023-11-27-04-52-38-utc.jpg"],
        },
    ];

    const [currentImage, setCurrentImage] = useState(initialImage);  
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [filterQuery, setFilterQuery] = useState('');
  
    const handleLocationClick = (location) => {
        setCurrentImage(location.mainImage);
        setSelectedLocation(location);
    };

    const handleFilter = (query) => {
        setFilterQuery(query);
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
                <div>
                    <div className="images-container">
                    {selectedLocation.images.map((image, index) => (
                        <div key={index} className="image-item-container">
                            <img src={image.url} alt={`Location ${selectedLocation.name}`} className="image-item" />
                            <div className="location-details">
                                <h4>{image.address}</h4>
                                <p>{image.beds} Beds • {image.baths} Baths</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </section>
    );
}
  
  export default LocationsPage;