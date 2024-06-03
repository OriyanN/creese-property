import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import "../pages/HomePage.css";
import './AnimatedButton.css';

function RentalAppraisalForm() {
    const [state, handleSubmit] = useForm("mrgnwkaj");

    if (state.succeeded) {
        return (
            <>
                <div className="verification-message appraisal-message">
                    <p>Thank you for enquiring with us.</p>
                    <p>Our team will reach out to you within the next 24 to 48 hours.</p>
                </div>
            </>
        );
    }

    return (
        <div>
            <h2>REQUEST A RENTAL APPRAISAL</h2>
            <form onSubmit={handleSubmit}>
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
                <div className='address-section'>
                    <input type="text" name='address' rows='1' placeholder='Address of Property to Be Appraised'/>
                </div>
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

export default RentalAppraisalForm;