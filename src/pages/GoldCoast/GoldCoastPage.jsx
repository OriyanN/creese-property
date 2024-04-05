import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import GoldCoastPropertiesData from './GoldCoastPropertiesData';
import "../LocationsPage.css";

import mainInitialImage from "../../assets/GoldCoast/gold-coast.jpg";

const GoldCoastPage = () => {

    const [filters, setFilters] = useState({
        suburbSearch: '',
        bedsFilter: '',
        bathsFilter: '',
        carFilter: '',
    });

    const filteredImages = GoldCoastPropertiesData.filter(property => 
        (filters.suburbSearch === '' || property.address.toLowerCase().includes(filters.suburbSearch.toLowerCase())) &&
        (filters.bedsFilter === '' || (property.beds || '').toString() === filters.bedsFilter) &&
        (filters.bathsFilter === '' || (property.baths || '').toString() === filters.bathsFilter) &&
        (filters.carFilter === '' || (property.car || '').toString() === filters.carFilter)
    );    

    const createOptions = (key) => {
        const optionsSet = new Set(GoldCoastPropertiesData.map(property => property[key]));
        return [...optionsSet].sort((a, b) => a - b).map(option => 
            <option key={option} value={option}>{option}</option>
        );
    };
    
    return (
        <section className="section location">
            <h1 className='location-name'>Gold Coast</h1>
            <div className="initial-image">
                <img src={mainInitialImage} alt="Gold Coast" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            <div className="images-container">
                {filteredImages.length > 0 ? (
                    filteredImages.map((property) => ( 
                    <div key={property.id} className="image-item-container"> 
                        <Link to={`/locations/gold-coast/properties/${property.id}`}>
                            <img src={property.images[0]} alt={`Property ${property.id}`} className="image-item" />
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
        </section>
    );
};

export default GoldCoastPage;
