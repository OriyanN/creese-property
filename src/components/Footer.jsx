import React from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";

import logo from "../assets/Creese Property Logo- White White.png";

import facebook_blue from "../assets/icons8-facebook-50.png";
import facebook_white from "../assets/icons8-facebook-50 copy.png";
import instagram_blue from "../assets/icons8-instagram-50.png";
import instagram_white from "../assets/icons8-instagram-50 (1).png";
import linkedin_blue from "../assets/icons8-linkedin-50.png";
import linkedin_white from "../assets/icons8-linkedin-50 (1).png";

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="logo"><img src={logo} alt="Logo" /></Link>
      <div className="footer-links">
        <Link to="/" >
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/contact" >
          Contact
        </Link>
        <Link to="/privacy" >
          Privacy
        </Link>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Creese Property. All Rights Reserved.</p>
        <div className="social-media">
          <ul>
            <li className="facebook-icon">
              <Link href="">
                <img className="social-media-blue" width="30" height="30" src={facebook_blue} alt="facebook-new--v3-icon8"/>
                <img className="social-media-white" width="30" height="30" src={facebook_white} alt="facebook-new--v3-icon8"/>
              </Link>
            </li>
            <li className="instagram-icon">
              <Link href="">
                  <img className="social-media-blue" width="30" height="30" src={instagram_blue} alt="instagram-new--v3-icon8"/>
                  <img className="social-media-white" width="30" height="30" src={instagram_white} alt="instagram-new--v3-icon8"/>
              </Link>
            </li>
            <li className="linkedin-icon">
              <div className="linkedin-icon">
                <Link href="">
                  <img className="social-media-blue" width="30" height="30" src={linkedin_blue} alt="linkedin-2--v2-icon8"/>
                  <img className="social-media-white" width="30" height="30" src={linkedin_white} alt="linkedin-2--v2-icon8"/>
                </Link>
              </div>
            </li>
          </ul> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;