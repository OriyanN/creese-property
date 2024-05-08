import React, { useState } from 'react';

import './Accordion.css';

import FAQS from './FAQS';

function Accordion () {
  const [faqs, setFaqs] = useState([
    {
      question: "What services does Creese Property offer to property owners?",
      answer: "Creese Property provides comprehensive property management services aimed at maximising property value and streamlining ownership. Our services include effective marketing of properties, precise tenant screening, prompt and reliable rent collection, detailed financial reporting, and ensuring legal compliance in all landlord-tenant matters.",
      open: false
    },
    {
      question: "What types of properties does Creese Property manage?",
      answer: "Creese Property manages a variety of residential properties, including apartments, townhouses, and duplexes. We tailor our management strategies to fit the unique needs of each property. Our broad expertise not only allows us to effectively manage these properties but also to advise property owners on how to maximise their investments.",
      open: false
    },
    {
      question: "What area does Creese Property service?",
      answer: "Creese Property services properties across South-East Queensland. Based out of the Gold Coast, we cover a wide area that includes major urban centres. Our reach extends to both coastal and inland areas, allowing us to offer a diverse range of properties that cater to different lifestyles. Our team is familiar with the unique characteristics of each area, ensuring we provide expert advice and tailored services to both property owners and tenants.",
      open: false
    },
    {
        question: "What should I look out for when choosing a property manager?",
        answer: "The right property manager will have a deep understanding of the local real estate market, including rental rates, vacancy rates, and any trends that may affect your property's value. Additionally, a competent property manager should offer a comprehensive range of services that cover all aspects of managing your property effectively. This includes marketing your property, screening tenants, handling lease agreements, managing rent collection, addressing maintenance and repair issues, and providing detailed financial reporting.",
        open: false
    },
    {
        question: "I’ve found a property manager with lower fees, why should I go with Creese Property?",
        answer: "At Creese Property, our fees reflect the high quality and comprehensive nature of our services. Unlike some competitors who may offer lower fees, we ensure that every aspect of property management is handled with the utmost professionalism and attention to detail. Our team of experienced professionals use their knowledge and expertise to successfully manage your property, from conducting thorough tenant screenings to maintaining timely communication and managing financial transactions with precision.",
        open: false
    },
    {
      question: "What legal compliances does Creese Property manage for property owners?",
      answer: "We ensure all properties are managed in accordance with local, state, and federal laws, including tenant-landlord laws, safety regulations, and fair housing mandates. We also keep property owners updated on legal changes that might affect their properties.",
      open: false
    }
  ]);
  
  const toggleFAQ = index => {
      setFaqs(
        faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open;
          } else {
            faq.open = false;
          }
  
          return faq;
        })
      );
  };
  
  return (
      <div className="accordion">
          <h2>FAQ'S</h2>
          <div className="faqs">
              {faqs.map((faq, index) => (
              <FAQS faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
              ))}
          </div>
      </div>
  );
}
    

export default Accordion;