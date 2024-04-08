import React, { useState, useEffect } from 'react';

import "./ContactForm.css"

import AnimatedButton from './AnimatedButton.jsx';

import GoldCoastPropertiesData from "../pages/GoldCoast/GoldCoastPropertiesData.js";
import BrisbanePropertiesData from "../pages/Brisbane/BrisbanePropertiesData.js";
import IpswichPropertiesData from "../pages/Ipswich/IpswichPropertiesData.js";
import LoganPropertiesData from "../pages/Logan/LoganPropertiesData.js";
import SunshineCoastPropertiesData from "../pages/SunshineCoast/SunshineCoastPropertiesData.js";

function ContactForm() {
    const PropertiesData = {
        'Gold Coast': GoldCoastPropertiesData,
        'Brisbane': BrisbanePropertiesData,
        'Sunshine Coast': SunshineCoastPropertiesData,
        'Logan': LoganPropertiesData,
        'Ipswich': IpswichPropertiesData,
    };

    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedProperty, setSelectedProperty] = useState('');
    const [propertiesOptions, setPropertiesOptions] = useState([]);

    useEffect(() => {
        if (selectedLocation) {
            setPropertiesOptions(PropertiesData[selectedLocation] || []);
        } else {
            setPropertiesOptions([]);
        }
        setSelectedProperty('');
    }, [selectedLocation]);

    const handleFormSubmit = () => {
        
      };

    return (
        <div className='contact-form'>
            <h2>Contact Us</h2>
            <form action=''>
                <div className="name-section">
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
                <div className="details-section">
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
                <div className="dropdowns-section">
                    {/* Dropdown for selecting a location */}
                    <select 
                        className="dropdown-section" 
                        value={selectedLocation} 
                        onChange={e => setSelectedLocation(e.target.value)}
                        name="location"
                    >
                        <option value="">Select a Location</option>
                        {Object.keys(PropertiesData).map((location) => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                    {/* Dropdown for selecting a property based on location */}
                    <select 
                        className="dropdown-section" 
                        value={selectedProperty} 
                        onChange={e => setSelectedProperty(e.target.value)} 
                        disabled={!selectedLocation}
                    >
                        <option value="">Select a Property</option>
                        {propertiesOptions.map((property) => (
                            <option key={property.id} value={property.id}>{property.address}</option>
                        ))}
                    </select>
                </div>
                <div className='message-section'>
                    <textarea type="text" name='message' rows='3' placeholder='Message'/>
                </div>
                <AnimatedButton onSubmit={handleFormSubmit} />
            </form>
        </div>
    );
}

export default ContactForm;