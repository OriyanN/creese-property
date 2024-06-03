import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Select from 'react-select';

import "./ContactForm.css";
import './AnimatedButton.css';

import GoldCoastPropertiesData from "../pages/GoldCoast/GoldCoastPropertiesData.js";
import BrisbanePropertiesData from "../pages/Brisbane/BrisbanePropertiesData.js";
import IpswichPropertiesData from "../pages/Ipswich/IpswichPropertiesData.js";
import LoganPropertiesData from "../pages/Logan/LoganPropertiesData.js";

function ContactForm() {
    const PropertiesData = {
        'Gold Coast': GoldCoastPropertiesData,
        'Brisbane': BrisbanePropertiesData,
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

    const [state, handleSubmit] = useForm("mkndlbbq");
    if (state.succeeded) {
        return (
            <>
                <div className="verification-message">
                    <p>Thank you for contacting us.</p>
                    <p>Our team will reach out to you within the next 24 to 48 hours.</p>
                </div>
            </>
        );
    }

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
    ];
    
    const bedsOptions = Array.from({ length: 7 }, (_, i) => ({ value: i + 1, label: `${i + 1}` }));
    
    const bathsOptions = Array.from({ length: 7 }, (_, i) => ({ value: i + 1, label: `${i + 1}` }));

    return (
        <div className='contact-form'>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="name-section">
                    <input 
                        type="text"
                        name="firstName"
                        placeholder='First Name'
                        required
                    />
                    <input 
                        type="text"
                        name="lastName"
                        className='lastName'
                        placeholder='Last Name'
                        required
                    />
                </div>
                <div className="details-section">
                    <input 
                        type="email"
                        name="email"
                        placeholder='Contact Email'
                        required
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <input 
                        type="number"
                        name="phoneNumber"
                        className='phoneNumber'
                        placeholder='Phone Number'
                    />
                </div>
                <div className="dropdowns-section">
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
                        name="typeOfEnquiry"
                    />
                </div>
                {enquiryType === "propertyNotification" && (
                    <div className="additional-selects property-notification">
                        <div className="section-one">
                            <Select
                                options={locationOptions}
                                styles={customStyles}
                                onChange={option => setLocationProperty(option ? option.value : '')}
                                placeholder="Location"
                                isClearable={true}
                                name="location"
                                className="additional-selects-dropdown location"
                            />
                            <span style={{ position:'absolute', marginLeft:'10.5rem', marginTop:'1.6rem', fontSize:'2.5rem'}}>$</span>
                            <input 
                                type="number"
                                name="priceRange"
                                className="additional-selects-dropdown price"
                                placeholder='Price per Week'
                            />
                        </div>
                        <div className="section-two">
                            <Select
                                options={bedsOptions}
                                styles={customStyles}
                                onChange={option => setBedsNumber(option ? option.value : '')}
                                placeholder="Beds"
                                isClearable={true}
                                className="additional-selects-dropdown beds"
                                name="beds"
                            />
                            <Select
                                options={bathsOptions}
                                styles={customStyles}
                                onChange={option => setBathsNumber(option ? option.value : '')}
                                placeholder="Baths"
                                isClearable={true}
                                className="additional-selects-dropdown baths"
                                name="baths"
                            />
                        </div>
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
                <div className="wrapper">
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;