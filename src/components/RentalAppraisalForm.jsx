import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import ScrollRevealContainer from './ScrollReveal';

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
            <ScrollRevealContainer move="5rem" duration={900} delay={300} origin={'bottom'}>
                <h2>REQUEST A RENTAL APPRAISAL</h2>
            </ScrollRevealContainer>
            <ScrollRevealContainer move="5rem" duration={900} delay={500} origin={'bottom'}>
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
                            type="tel"
                            name="phoneNumber"
                            className='phoneNumber'
                            placeholder='Phone Number'
                            minLength={10}
                        />
                    </div>
                    <div className='address-section'>
                        <input type="text" name='address' rows='1' placeholder='Address of Property to Be Appraised'/>
                    </div>
                    <div className='message-section'>
                        <textarea type="text" name='message' rows='6' placeholder='Message'/>
                    </div>
                    <div className="radio-buttons-section">
                        <div className="radio-buttons rental-app-form">
                            <p>Preferred method of contact</p>
                            <div className="radio-buttons-mini-section">
                                <label htmlFor="" className='radio-button'>
                                    <input type="radio" name="PreferredMethod" value="phoneNumber" checked />
                                    Phone number
                                </label>
                                <label htmlFor="" className='radio-button'>
                                    <input type="radio" name="PreferredMethod" value="email" />
                                    Email
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter-signup">
                        <label htmlFor="">
                            <input type="checkbox" id="newsletterSignup" checked />
                            I agree to the Privacy Policy and the Terms and Conditions.
                        </label>
                    </div>
                    <div className="wrapper">
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </div>
                </form>
            </ScrollRevealContainer>
        </div>
    );
}

export default RentalAppraisalForm;