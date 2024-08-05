import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';

import GoldCoastPropertiesData from "./GoldCoastPropertiesData.js";
import '../LocationsPropertyDetailsPage.css';
import '../../components/AnimatedButton.css';

const GoldCoastPropertyForm = () => {
    const { propertyId } = useParams();
    const property = GoldCoastPropertiesData.find((p) => p.id === propertyId);
  
    const [state, handleSubmit] = useForm("mbjnvyqq");
  
    if (!property) {
      return <div>Property not found</div>;
    }
  
    const [contactForm, setContactForm] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      location: '', 
      property: '', 
    });

    useEffect(() => {
        if (property) {
          setContactForm(prev => ({
            ...prev,
            location: 'Gold Coast',
            property: property.address,
          }));
        }
    }, [propertyId, property]);
  
    if (state.succeeded) {
      return (
          <>
              <div className="verification-message">
                  <p>Thank you for enquiring with us.</p>
                  <p>Our team will reach out to you within the next 24 to 48 hours.</p>
              </div>
          </>
      );
    }
  
    return (
      <>
        <div className='property-contact-form'>
            <h2>Enquire Now</h2>
            <form onSubmit={handleSubmit}>
              <div className="property-name-section">
                  <input 
                    type="text"
                    name="firstName"
                    placeholder='First Name'
                    required
                  />
                  <input 
                    type="text"
                    name="lastName"
                    placeholder='Last Name'
                    required
                  />
              </div>
              <div className="property-details-section">
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
              <div className="property-dropdowns-section">
                <input type="text" name="location" value={contactForm.location} readOnly />
            
                <input type="text" name="property" value={contactForm.property} readOnly />
              </div>
  
              <div className='property-message-section'>
                <textarea type="text" name='message' rows='6' placeholder='Message'/>
              </div>
              <div className="radio-buttons-section">
                    <div className="radio-buttons">
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
            <div className="disclaimer">
              <p>The tenant is responsible for all water usage. This is charged at the current rates set by the local City Council.</p>
                <br />
                <br />
              <p>Before applying, it is the tenant’s responsibility to ensure that the property can accommodate any services they require (e.g. phone, internet, pay TV etc). The agent cannot provide information beyond general guidance on the connection of non-essential services.</p>
                <br />
                <br />
              <p>PLEASE NOTE: You must register for inspections. If you do not register for inspections, we cannot notify you of time changes or cancellations to inspections. The property must be inspected prior to an application being submitted.
                <br />
                <br />
                ADVERTISING DISCLAIMER - Please note - All parties should make and rely upon their own enquiries in order to determine the accuracy of the information supplied. Some file photographs in use may have been taken some time ago. Please rely on your own inspection and investigations as the property may have changed since the photographs were taken. Creese Property bears no liability for any loss sustained due to inaccuracy or omission.
              </p>
            </div>
        </div>
      </>
    );
  };
  
  export default GoldCoastPropertyForm;