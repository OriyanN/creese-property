import React from "react";

import "./Accordion.css";

import arrowDown from '../../public/assets/icons8-forward-100.png';

const FAQS = ({ faq, index, toggleFAQ }) => {
    return (
        <div
            className={`faq ${faq.open ? "open" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">
                {faq.question}
                <img src={arrowDown} alt="Creese Property FAQS Toggle" className={`arrow ${faq.open ? "rotate" : ""}`} />
            </div>
            <div className="faq-answer">{faq.answer}</div>
        </div>
    );
};

export default FAQS;
