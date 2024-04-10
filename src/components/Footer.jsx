import React from 'react';
import { Link } from "react-router-dom";

import ScrollToTop from './ScrollToTop';

import logo from "../assets/Creese Property Logo- White White.png";

import facebook_blue from "../assets/facebook-blue.png";
import facebook_white from "../assets/facebook-white.png";
import instagram_blue from "../assets/icons8-instagram-48 (1).png";
import instagram_white from "../assets/icons8-instagram-48.png";
import linkedin_blue from "../assets/icons8-linkedin-48.png";
import linkedin_white from "../assets/icons8-linkedin-48 (1).png";

import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
  };
    
  return (
    <>
      <ScrollToTop />
      <footer className="footer">
        <Link to="/" className="logo"><img src={logo} alt="Logo" /></Link>
        <div className="social-media">
          <ul>
            <li className="facebook-icon">
              <Link href="">
                <img className="social-media-white" width="20" height="20" src={facebook_white} alt="facebook-new--v3-icon8"/>
                <img className="social-media-blue" width="20" height="20" src={facebook_blue} alt="facebook-new--v3-icon8"/>
              </Link>
            </li>
            <li className="linkedin-icon">
              <div className="linkedin-icon">
                <Link href="">
                  <img className="social-media-white" width="20" height="20" src={linkedin_white} alt="linkedin-2--v2-icon8"/>
                  <img className="social-media-blue" width="20" height="20" src={linkedin_blue} alt="linkedin-2--v2-icon8"/>
                </Link>
              </div>
            </li>
            <li className="instagram-icon">
              <Link href="">
                  <img className="social-media-white" width="20" height="20" src={instagram_white} alt="instagram-new--v3-icon8"/>
                  <img className="social-media-blue" width="20" height="20" src={instagram_blue} alt="instagram-new--v3-icon8"/>
              </Link>
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
          <Link to="/portfolio" onClick={scrollToTop}>
            Portfolio
          </Link>
          <Link to="/contact" onClick={scrollToTop}>
            Contact
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