import React from 'react';
import { Link } from "react-router-dom";

import ScrollToTop from './ScrollToTop';

import logo from "../../public/assets/Creese Property Logo- White White.png";

import facebook_blue from "/assets/facebook-blue.png";
import facebook_white from "/assets/facebook-white.png";
import instagram_blue from "/assets/icons8-instagram-48 (1).png";
import instagram_white from "/assets/icons8-instagram-48.png";
import linkedin_blue from "/assets/icons8-linkedin-48.png";
import linkedin_white from "/assets/icons8-linkedin-48 (1).png";

import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
    
  return (
    <>
      <ScrollToTop />
      <footer className="footer">
        <Link to="/" className="logo logo-footer"><img src={logo} alt="Creese Property Logo" /></Link>
        <div className="social-media">
          <ul>
            <li className="linkedin-icon">
              <div className="linkedin-icon">
                <a href="https://www.linkedin.com/company/creeseproperty/" target="_blank" rel="noopener noreferrer">
                  <img className="social-media-white" width="20" height="20" src={linkedin_white} alt="Linkedin Icon (icon8)"/>
                  <img className="social-media-blue" width="20" height="20" src={linkedin_blue} alt="Linkedin Icon (icon8)"/>
                </a>
              </div>
            </li>
            <li className="facebook-icon">
              <a href="https://www.facebook.com/creesepropertyau/" target="_blank" rel="noopener noreferrer">
                <img className="social-media-white" width="20" height="20" src={facebook_white} alt="Facebook Icon (icon8)"/>
                <img className="social-media-blue" width="20" height="20" src={facebook_blue} alt="Facebook Icon (icon8)"/>
              </a>
            </li>
            <li className="instagram-icon">
              <a href="https://www.instagram.com/creeseproperty/" target="_blank" rel="noopener noreferrer">
                <img className="social-media-white" width="20" height="20" src={instagram_white} alt="Instagram Icon (icon8)"/>
                <img className="social-media-blue" width="20" height="20" src={instagram_blue} alt="Instagram Icon (icon8)"/>
              </a>
            </li>
          </ul> 
        </div>
        <div className="footer-links">
          <Link to="/" onClick={scrollToTop}>
            Home
          </Link>
          <Link to="/about" onClick={scrollToTop}>
            About
          </Link>
          <Link to="/services" >
            Services
          </Link>
          {/* <Link to="/portfolio" onClick={scrollToTop}>
            Portfolio
          </Link> */}
          <Link to="/contact" onClick={scrollToTop}>
            Contact
          </Link>
          <Link to="/careers" onClick={scrollToTop}>
            Careers
          </Link>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Creese Property. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy" >
              Privacy
            </Link>
            <Link to="/terms-conditions" >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;