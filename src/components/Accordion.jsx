import React, { useState } from 'react';

import './Accordion.css';

import FAQS from './FAQS';

const generalFAQs = [
  {
    question: "What services does Creese Property offer to property owners?",
    answer: "Creese Property provides comprehensive property management services aimed at maximising property value and streamlining ownership. Our services include effective marketing of properties, precise tenant screening, prompt and reliable rent collection, detailed financial reporting, and ensuring legal compliance in all landlord-tenant matters.",
    open: false
  },
  {
    question: "What types of properties does Creese Property manage?",
    answer: "Creese Property manages a variety of residential property types. We tailor our management strategies to fit the unique needs of each property. Our broad expertise not only allows us to effectively manage these properties but also to advise property owners on how to maximise their investments.",
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
];

const landlordFAQs = [
  {
    question: "How long will it take to find a tenant?",
    answer: "There is no set time frame for finding a tenant. However, the sooner advertising begins, the sooner we can commence the process of finding a suitable tenant for your property.",
    open: false
  },
  {
    question: "Who looks after the property expenses?",
    answer: "You can nominate Creese Property to manage the expenses relating to your rental property including landlord insurance, council rates, water rates, maintenance invoices and any other invoices related to your property. Expenses are paid from the rent funds that we will collect on your behalf. If you prefer to look after majority of expenses yourself, that may also be arranged.",
    open: false
  },
  {
    question: "What happens if my tenant is late on rent?",
    answer: "Creese Property has a zero-tolerance policy for late rental payments. However, should the tenant fall behind on their payments, we will routinely contact them to ensure payment is made. The following procedure may be implemented to handle late rent: Days 1-7: Tenants receive text, phone, and email correspondence daily. Day 8: Breach notice issued, providing 7 days for the tenant to pay all monies owed. If the tenant does not remedy the breach, at the owner’s discretion, the tenant can be sent a notice to vacate the property within 7 days.",
    open: false
  },
  {
    question: "Do I have to allow pets at my property?",
    answer: "As a landlord, the choice to allow pets is up to you. Unless your property is in a strata/ body corporate complex which has a pet clause in the by-laws. Keep in mind that an increasing number of quality tenants are looking for a pet-friendly rental property.",
    open: false
  },
  {
    question: "What legal compliances does Creese Property manage for property owners?",
    answer: "We ensure all properties are managed in accordance with local, state, and federal laws, including tenant-landlord laws, safety regulations, and fair housing mandates. We also keep property owners updated on legal changes that might affect their properties.",
    open: false
  }
];

const tenantFAQs = [
  {
    question: "Who do I contact after hours?",
    answer: "If you need an emergency repair to be done after hours, then you will need to contact the tradespeople listed in your lease agreement and lodge the repair through your PropertyMe portal. Should the emergency contact not be available, please speak with your property manager first before calling an alternative tradesperson. Please note: if the repair is not considered an emergency and you have someone attend, you may be responsible for some or all the repair cost.",
    open: false
  },
  {
    question: "Can I sublet?",
    answer: "Sub-letting is prohibited unless there is written approval from Creese Property. This includes assigning the tenancy over to a third party or allowing other occupants to move in without our permission. Permission usually involves a formal application being completed and submitted by the prospective tenant / occupant.",
    open: false
  },
  {
    question: "What happens if I want to break my lease?",
    answer: "Should you wish to leave during a fixed-term lease, we require your notice in writing. In the case of breaking a fixed-term lease, the following costs will be incurred: Rent until a tenant approved by the landlord takes possession, or the lease expires (whichever occurs first). Reletting fees and marketing costs to relet the premises. Should the premises be vacant before a new tenant is secured, it is also your responsibility to ensure the grounds are watered and maintained for this period and you remain responsible for the property until a new tenant takes possession. Cleaning and normal exit costs associated with returning the property back to its original state when you moved in.",
    open: false
  },
  {
    question: "What happens if I can’t make my rent payment?",
    answer: "Creese Property has a zero-tolerance policy for late rental payments. However, if you are unable to make a payment due to unforeseen circumstances you will need to let Creese Property know in advance. An alternate arrangement may be discussed.",
    open: false
  },
];

function Accordion() {
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [faqs, setFaqs] = useState(generalFAQs);

  const toggleFAQ = index => {
      setFaqs(faqs.map((faq, i) => {
          faq.open = i === index ? !faq.open : false;
          return faq;
      }));
  };

  const handleCategoryChange = (event) => {
      const category = event.target.value;
      setSelectedCategory(category);
      switch (category) {
          case 'Landlords':
              setFaqs(landlordFAQs);
              break;
          case 'Tenants':
              setFaqs(tenantFAQs);
              break;
          default:
              setFaqs(generalFAQs);
              break;
      }
  };

  return (
      <div className="accordion">
          <h2>FAQ'S</h2>
          <div className="accordion-label">
            <label>
                <input type="radio" value="General" checked={selectedCategory === 'General'} onChange={handleCategoryChange} />
                General
            </label>
            <label>
                <input type="radio" value="Landlords" checked={selectedCategory === 'Landlords'} onChange={handleCategoryChange} />
                Landlords
            </label>
            <label>
                <input type="radio" value="Tenants" checked={selectedCategory === 'Tenants'} onChange={handleCategoryChange} />
                Tenants
            </label>
          </div>
          <div className="faqs">
              {faqs.map((faq, index) => (
                <FAQS faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
          </div>
      </div>
  );
}

export default Accordion;