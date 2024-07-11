import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import LazyImage from '../components/LazyImage';
import Helmet from '../components/Helmet.jsx';

import GoldCoastPropertiesData from '../pages/GoldCoast/GoldCoastPropertiesData';
import BrisbanePropertiesData from '../pages/Brisbane/BrisbanePropertiesData';
import IpswichPropertiesData from '../pages/Ipswich/IpswichPropertiesData';
// import LoganPropertiesData from '../pages/Logan/LoganPropertiesData';
import "./LocationsPage.css";

import mainInitialImage from "/assets/leasing-image.jpg";
import mainGoldCoast from "/assets/GoldCoast/gold-coast.jpg";
import mainBrisbane from "/assets/Brisbane/brisbane.jpg";
import mainIpswich from "/assets/Ipswich/ipswich.jpg";
// import mainLogan from "/assets/Logan/logan.jpg";

const LocationsPage = () => {
    const allPropertiesData = [
        ...GoldCoastPropertiesData.map(item => ({ ...item, location: 'Gold Coast' })),
        // ...BrisbanePropertiesData.map(item => ({ ...item, location: 'Brisbane' })),
        ...IpswichPropertiesData.map(item => ({ ...item, location: 'Ipswich' })),
        // ...LoganPropertiesData.map(item => ({ ...item, location: 'Logan' })),
    ];

    const featureOptions = [
        { value: 'Air conditioning', label: 'Air conditioning' },
        { value: 'Outdoor area', label: 'Outdoor area' },
        { value: 'Pool', label: 'Pool' },
        { value: 'Single Garage', label: 'Single Garage' },
        { value: 'Double Garage', label: 'Double Garage' },
        { value: 'Ensuite', label: 'Ensuite' }
    ];

    const [filters, setFilters] = useState({
        locationFilter: null,
        suburbSearch: '',
        bedsFilter: null,
        bathsFilter: null,
        carFilter: null,
        featuresFilter: []
    });

    const [currentMainImage, setCurrentMainImage] = useState(mainInitialImage);
    const locationImages = {
        "All": mainInitialImage,
        "Gold Coast": mainGoldCoast,
        // "Brisbane": mainBrisbane,
        "Ipswich": mainIpswich,
        // "Logan": mainLogan,
    };

    const [selectedLocation, setSelectedLocation] = useState({ value: 'All', label: 'All Locations' });

    const locationOptions = [
        { value: 'All', label: 'All Locations' },
        { value: 'Gold Coast', label: 'Gold Coast' },
        // { value: 'Brisbane', label: 'Brisbane' },
        { value: 'Ipswich', label: 'Ipswich' },
        // { value: 'Logan', label: 'Logan' },
    ];

    const bedsOptions = Array.from(new Set(allPropertiesData.map(p => p.beds)))
        .map(beds => ({ value: beds, label: `${beds}` }));
    const bathsOptions = Array.from(new Set(allPropertiesData.map(p => p.baths)))
        .map(baths => ({ value: baths, label: `${baths}` }));
    const carOptions = Array.from(new Set(allPropertiesData.map(p => p.car)))
        .map(car => ({ value: car, label: `${car}` }));

    useEffect(() => {
        if (filters.locationFilter && locationImages[filters.locationFilter]) {
            setCurrentMainImage(locationImages[filters.locationFilter]);
        } else {
            setCurrentMainImage(mainInitialImage);
        }
    }, [filters.locationFilter]);

    const handleLocationChange = selectedOption => {
        setFilters(currentFilters => ({ ...currentFilters, locationFilter: selectedOption ? selectedOption.value : null }));
    };
    const handleFeatureChange = selectedOptions => {
        setFilters(currentFilters => ({ ...currentFilters, featuresFilter: selectedOptions || [] }));
    };

    const filteredProperties = allPropertiesData.filter(property => {
        return (
            (!filters.locationFilter || filters.locationFilter === 'All' || property.location === filters.locationFilter) &&
            (!filters.suburbSearch || property.address.toLowerCase().includes(filters.suburbSearch.toLowerCase())) &&
            (!filters.bedsFilter || property.beds === filters.bedsFilter.value) &&
            (!filters.bathsFilter || property.baths === filters.bathsFilter.value) &&
            (!filters.carFilter || property.car === filters.carFilter.value) &&
            (filters.featuresFilter.length === 0 || filters.featuresFilter.every(f => property.features.some(feature => feature.toLowerCase().includes(f.value.toLowerCase()))))
        );
    });
    
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#616e89' : (state.isFocused ? '#294162' : provided.backgroundColor),
            color: state.isSelected ? 'white' : (state.isFocused ? 'white' : provided.color),
        }),
        multiValue: (provided, state) => ({
            ...provided,
            backgroundColor: '#a4a4a4',
            color: 'white'
        }),
        multiValueLabel: (provided, state) => ({
            ...provided,
            color: 'white',
        }),
        multiValueRemove: (provided, state) => ({
            ...provided,
            color: 'white',
            backgroundColor: '#a4a4a4',
            ':hover': {
                backgroundColor: '#294162',
                color: 'white',
                cursor: 'pointer'
            },
        }),
    };

    useEffect(() => {
        setCurrentMainImage(locationImages[selectedLocation.value]);
    }, [selectedLocation]);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const markers = useRef([]);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicHJvcGVsbHByb3BlcnR5IiwiYSI6ImNsdWttNWs1cjA1dGcycW9hZnRwZ2theHgifQ.erDmDuOiR1yww8zsDYuIaA';
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/propellproperty/clukscow600cw01pw1cai5fqu',
            center: [153.1, -27.4],
            zoom: 8
        });

        return () => map.current?.remove();
    }, []);

    useEffect(() => {
        markers.current.forEach(marker => marker.remove());
        markers.current = [];

        filteredProperties.forEach(property => {

            if (isNaN(property.lng) || isNaN(property.lat)) {
                console.error("Invalid coordinates for property:", property);
                return;
            }

            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<div>
                    <img src="${property.images[0]}" alt="Property Image" style="width: 100%; height: auto;" />
                    <h3>${property.address}</h3>
                    <p>Beds: ${property.beds}, Baths: ${property.baths}, Cars: ${property.car}</p>
                </div>`
            );

            const marker = new mapboxgl.Marker()
                .setLngLat([property.lng, property.lat])
                .setPopup(popup)
                .addTo(map.current);

            markers.current.push(marker);
        });
    }, [filteredProperties]);
    
    return (
        <>
            <Helmet
                title="Rentals"
                description="Discover where Creese Property excels in residential property management across prime locations."
                link="/rentals"
                addPostfixTitle
            >
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@graph": [
                          {
                            "@type": "BreadcrumbList",
                            "@id": "https://www.creeseproperty.com/#breadcrumb",
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
                                "name": "Rentals",
                                "position": "5",
                                "item": "https://www.creeseproperty.com/rentals/"
                              }
                            ]
                          }
                        ]
                    })}
                </script>
            </Helmet>
            <ScrollToTop />
            <section className="section location">
                <h1 className='location-name'>Rentals</h1>
                <div className="initial-image">
                    <img src={currentMainImage} alt="Creese Property - Gold Coast" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="overlay"></div>
                </div>
                <div className="search">
                    <div className="location-search">
                        <div className="location-filter">
                            <Select
                                options={locationOptions}
                                onChange={handleLocationChange}
                                styles={customStyles}
                                placeholder="Location"
                                isClearable
                            />
                        </div>
                        <div className="bottom-filtering">
                            <div className="suburb-filter">
                                <input
                                    type="text"
                                    placeholder="Suburb"
                                    value={filters.suburbSearch}
                                    onChange={(e) => setFilters({ ...filters, suburbSearch: e.target.value })}
                                />
                            </div>
                            <div className="beds-filter">
                                <Select
                                    options={bedsOptions}
                                    onChange={option => setFilters(f => ({ ...f, bedsFilter: option }))}
                                    styles={customStyles}
                                    placeholder="Beds"
                                    isClearable
                                />
                            </div>
                        </div>
                    </div>
                    <div className="filters">
                        <div className="feature-dropdown">
                            <Select
                                options={featureOptions}
                                onChange={handleFeatureChange}
                                styles={customStyles}
                                placeholder="Features"
                                isMulti
                                isClearable
                            />
                        </div>
                        <div className="car-bath-filter">
                            <div className="baths-filter">
                                <Select
                                    options={bathsOptions}
                                    onChange={option => setFilters(f => ({ ...f, bathsFilter: option }))}
                                    styles={customStyles}
                                    placeholder="Baths"
                                    isClearable
                                />
                            </div>
                            <div className="car-filter">
                                <Select
                                    options={carOptions}
                                    onChange={option => setFilters(f => ({ ...f, carFilter: option }))}
                                    styles={customStyles}
                                    placeholder="Cars"
                                    isClearable
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="properties-container">
                    <div className="images-container">
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map((property) => (
                                <div key={property.id} className="image-item-container">
                                    {property.availability && (
                                        <div className="availability-banner">
                                            {property.availability}
                                        </div>
                                    )}
                                    <Link to={`/rentals/${property.location.toLowerCase().replace(' ', '-')}/properties/${property.id}`}>
                                        <LazyImage src={property.images[0]} alt={`Property ${property.id}`} className="image-item" />
                                    </Link>
                                    <div className="location-details">
                                        <h4>{property.address}</h4>
                                        <div className="locations-page-properties-details">
                                            <p>{property.beds} Bed - {property.baths} Bath - {property.car} Car</p>
                                            <p className='property-bottom-price'>${property.price}/week</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No properties match your criteria.</p>
                        )}
                    </div>
                    <div ref={mapContainer} className="map-container" style={{ height: '85vh', width: '100%', borderRadius: '0.25rem', position: 'sticky' }} />
                </div>
                <Footer />
            </section>
        </>
    );
};

export default LocationsPage;