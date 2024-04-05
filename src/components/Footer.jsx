import React from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";

import logo from "../assets/Creese Property Logo- White White.png";

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
                <img className="social-media-blue" width="30" height="30" src="src/assets/icons8-facebook-50.png" alt="facebook-new--v3-icon8"/>
                <img className="social-media-white" width="30" height="30" src="src/assets/icons8-facebook-50 copy.png" alt="facebook-new--v3-icon8"/>
              </Link>
            </li>
            <li className="instagram-icon">
              <Link href="">
                  <img className="social-media-blue" width="30" height="30" src="src/assets/icons8-instagram-50.png" alt="instagram-new--v3-icon8"/>
                  <img className="social-media-white" width="30" height="30" src="src/assets/icons8-instagram-50 (1).png" alt="instagram-new--v3-icon8"/>
              </Link>
            </li>
            <li className="linkedin-icon">
              <div className="linkedin-icon">
                <Link href="">
                  <img className="social-media-blue" width="30" height="30" src="src/assets/icons8-linkedin-50.png" alt="linkedin-2--v2-icon8"/>
                  <img className="social-media-white" width="30" height="30" src="src/assets/icons8-linkedin-50 (1).png" alt="linkedin-2--v2-icon8"/>
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