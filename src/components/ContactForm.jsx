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
    const [enquiryType, setEnquiryType] = useState('');
    const [locationProperty, setLocationProperty] = useState('');
    const [bedsNumber, setBedsNumber] = useState('');
    const [bathsNumber, setBathsNumber] = useState('');
    const [rentalAppraisal, setRentalAppraisal] = useState('');

    useEffect(() => {
        if (selectedLocation) {
            setPropertiesOptions(PropertiesData[selectedLocation] || []);
        } else {
            setPropertiesOptions([]);
        }
        setSelectedProperty('');
    }, [selectedLocation]);

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Form submission logic here
    };

    useEffect(() => {
        console.log("Enquiry Type Changed:", enquiryType);
    }, [enquiryType]);    

    return (
        <div className='contact-form'>
            <h2>Contact Us</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="name-section">
                    <input 
                        type="text"
                        name="firstName"
                        placeholder='First Name'
                    />
                    <input 
                        type="text"
                        name="lastName"
                        className='lastName'
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
                        className='phoneNumber'
                        placeholder='Phone Number'
                    />
                </div>
                <div className="dropdowns-section">
                    {/* Dropdown for selecting a location */}
                    {/* <select 
                        className="dropdown-section" 
                        value={selectedLocation} 
                        onChange={e => setSelectedLocation(e.target.value)}
                        name="location"
                    >
                        <option value="">Select a Location</option>
                        {Object.keys(PropertiesData).map((location) => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select> */}
                    {/* Dropdown for selecting a property based on location */}
                    {/* <select 
                        className="dropdown-section" 
                        value={selectedProperty} 
                        onChange={e => setSelectedProperty(e.target.value)} 
                        disabled={!selectedLocation}
                    >
                        <option value="">Select a Property</option>
                        {propertiesOptions.map((property) => (
                            <option key={property.id} value={property.id}>{property.address}</option>
                        ))}
                    </select> */}
                    
                    {/* Enquiry Type Dropdown */}
                    <select
                        className="dropdown-section"
                        value={enquiryType}
                        onChange={e => setEnquiryType(e.target.value)}
                        name="enquiryType"
                    >
                        <option value="">Select Enquiry Type</option>
                        <option value="rental">Rental Enquiry</option>
                        <option value="general">General Enquiry</option>
                        <option value="propertyNotification">Be Notified About a Property</option>
                        <option value="requestRentalAppraisal">Request a Rental Appraisal</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                {enquiryType === "propertyNotification" && (
                    <div className="additional-selects">
                        <select
                            className="additional-selects-dropdown location"
                            value={locationProperty}
                            onChange={e => setLocationProperty(e.target.value)}
                            name="locationProperty"
                        >
                            <option value="">Location</option>
                            <option value="GoldCoast">Gold Coast</option>
                            <option value="Logan">Logan</option>
                            <option value="Ipswich">Ipswich</option>
                            <option value="Brisbane">Brisbane</option>
                            <option value="SunshineCoast">Sunshine Coast</option>
                        </select>
                        <select
                            className="additional-selects-dropdown beds"
                            value={bedsNumber}
                            onChange={e => setBedsNumber(e.target.value)}
                            name="bedsNumber"
                        >
                            <option value="">Beds</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        <select
                            className="additional-selects-dropdown baths"
                            value={bathsNumber}
                            onChange={e => setBathsNumber(e.target.value)}
                            name="bathsNumber"
                        >
                            <option value="">Baths</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </div>
                )}
                {enquiryType === "requestRentalAppraisal" && (
                    <div className="additional-selects">
                        <input
                            className="additional-selects-dropdown appraisal"
                            type="text"
                            value={rentalAppraisal}
                            onChange={e => setRentalAppraisal(e.target.value)}
                            name="rentalAppraisal"
                            placeholder='Enter Address of Property to Be Appraised'
                        >
                        </input>
                    </div>
                )}
                <div className='message-section'>
                    <textarea type="text" name='message' rows='6' placeholder='Message'/>
                </div>
                <div className="newsletter-signup">
                    <label htmlFor="">
                        <input type="checkbox" name="newsletterSignup" id="newsletterSignup" />
                        I  would like to sign up for news and updates from Creese Property and agree to the Privacy Policy.
                    </label>
                </div>
                <AnimatedButton onSubmit={handleFormSubmit} />
            </form>
        </div>
    );
}

export default ContactForm;