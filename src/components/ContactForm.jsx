import React, { useState, useEffect } from 'react';
import Select from 'react-select';

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

    // useEffect(() => {
    //     console.log("Enquiry Type Changed:", enquiryType);
    // }, [enquiryType]);

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#616e89' : (state.isFocused ? '#294162' : provided.backgroundColor),
            color: state.isSelected ? 'white' : (state.isFocused ? 'white' : provided.color),
        }),
        control: styles => ({ ...styles, backgroundColor: 'white' }),
    };
    const locationOptions = [
        { value: "GoldCoast", label: "Gold Coast" },
        { value: "Logan", label: "Logan" },
        { value: "Ipswich", label: "Ipswich" },
        { value: "Brisbane", label: "Brisbane" },
        { value: "SunshineCoast", label: "Sunshine Coast" }
    ];
    
    const bedsOptions = Array.from({ length: 7 }, (_, i) => ({ value: i + 1, label: `${i + 1}` }));
    
    const bathsOptions = Array.from({ length: 7 }, (_, i) => ({ value: i + 1, label: `${i + 1}` }));

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
                    {/* <select
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
                    </select> */}
                    <Select
                        options={[
                            { value: "rental", label: "Rental Enquiry" },
                            { value: "general", label: "General Enquiry" },
                            { value: "propertyNotification", label: "Be Notified About a Property" },
                            { value: "requestRentalAppraisal", label: "Request a Rental Appraisal" },
                            { value: "other", label: "Other" }
                        ]}
                        styles={customStyles}
                        onChange={option => setEnquiryType(option ? option.value : '')}
                        placeholder="Select Enquiry Type"
                        isClearable
                    />
                </div>
                {/* {enquiryType === "propertyNotification" && (
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
                )} */}
                {enquiryType === "propertyNotification" && (
                    <div className="additional-selects">
                        <Select
                            options={locationOptions}
                            styles={customStyles}
                            onChange={option => setLocationProperty(option ? option.value : '')}
                            placeholder="Location"
                            isClearable={true}
                            className="additional-selects-dropdown location"
                        />
                        <Select
                            options={bedsOptions}
                            styles={customStyles}
                            onChange={option => setBedsNumber(option ? option.value : '')}
                            placeholder="Beds"
                            isClearable={true}
                            className="additional-selects-dropdown beds"
                        />
                        <Select
                            options={bathsOptions}
                            styles={customStyles}
                            onChange={option => setBathsNumber(option ? option.value : '')}
                            placeholder="Baths"
                            isClearable={true}
                            className="additional-selects-dropdown baths"
                        />
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