import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import LazyImage from '../../components/LazyImage';

import IpswichPropertiesData from './IpswichPropertiesData';
import "../LocationsPage.css";

import mainInitialImage from "../../assets/Ipswich/ipswich.jpg";

const IpswichPage = () => {

    const [filters, setFilters] = useState({
        suburbSearch: '',
        bedsFilter: '',
        bathsFilter: '',
        carFilter: '',
    });

    const filteredProperties = IpswichPropertiesData.filter(property => 
        (filters.suburbSearch === '' || property.address.toLowerCase().includes(filters.suburbSearch.toLowerCase())) &&
        (filters.bedsFilter === '' || (property.beds || '').toString() === filters.bedsFilter) &&
        (filters.bathsFilter === '' || (property.baths || '').toString() === filters.bathsFilter) &&
        (filters.carFilter === '' || (property.car || '').toString() === filters.carFilter)
    );    

    const createOptions = (key) => {
        const optionsSet = new Set(IpswichPropertiesData.map(property => property[key]));
        return [...optionsSet].sort((a, b) => a - b).map(option => 
            <option key={option} value={option}>{option}</option>
        );
    };

    const mapContainer = useRef(null);
    const map = useRef(null);
    const markers = useRef([]);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicHJvcGVsbHByb3BlcnR5IiwiYSI6ImNsdWttNWs1cjA1dGcycW9hZnRwZ2theHgifQ.erDmDuOiR1yww8zsDYuIaA';
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/propellproperty/clukscow600cw01pw1cai5fqu',
            center: [152.760850, -27.614429],
            zoom: 10
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
            <Helmet>
                <title>Ipswich | Creese Property</title>
                <meta name="description" content="Ipswich page description. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <link rel="canonical" href="/locations/ipswich" />
            </Helmet>
            <ScrollToTop />
            <section className="section location">
                <h1 className='location-name'>Ipswich</h1>
                <div className="initial-image">
                    <img src={mainInitialImage} alt="Ipswich" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="overlay"></div>
                </div>
                <div className="search">
                    <div className="suburb-search">
                    <input
                        type="text"
                        placeholder="Suburb"
                        value={filters.suburbSearch}
                        onChange={(e) => setFilters({ ...filters, suburbSearch: e.target.value })}
                    />
                    </div>
                    <div className="filters">
                        <div className="beds-filter">
                            <select 
                                id="bedsFilter"
                                value={filters.bedsFilter}
                                onChange={(e) => setFilters({ ...filters, bedsFilter: e.target.value })}
                                className={!filters.bedsFilter ? '' : ''}
                                aria-label="Filter by number of beds"
                            >
                                <option value="">Bed</option>
                                {createOptions('beds')}
                            </select>
                        </div>
                        <div className="baths-filter">
                            <select 
                                id="bathsFilter"
                                value={filters.bathsFilter}
                                onChange={(e) => setFilters({ ...filters, bathsFilter: e.target.value })}
                                className={!filters.bathsFilter ? '' : ''}
                                aria-label="Filter by number of baths"
                            >
                                <option value="">Bath</option>
                                {createOptions('baths')}
                            </select>
                        </div>
                        <div className="car-filter">
                            <select 
                                id="carFilter"
                                value={filters.carFilter}
                                onChange={(e) => setFilters({ ...filters, carFilter: e.target.value })}
                                className={!filters.carFilter ? '' : ''}
                                aria-label="Filter by car spaces"
                            >
                                <option value="">Car</option>
                                {createOptions('car')}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="properties-container">
                    <div className="images-container">
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map((property) => (
                                <div key={property.id} className="image-item-container">
                                    <Link to={`/locations/gold-coast/properties/${property.id}`}>
                                        <LazyImage src={property.images[0]} alt={`Property ${property.id}`} className="image-item" />
                                    </Link>
                                    <div className="location-details">
                                        <h4>{property.address}</h4>
                                        <p>{property.beds} Bed - {property.baths} Bath - {property.car} Car</p>
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

export default IpswichPage;
