import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./NavBar.css";
import "/src/index.css";

import logoWhite from "../assets/Creese Property Logo- White White.png";
import logoBeige from "../assets/Creese Property Logo-Beige.png";

function NavBar() {
    const [activeLink, setActiveLink] = useState("");
    const location = useLocation();
    const [isShrunk, setIsShrunk] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [logo, setLogo] = useState(logoWhite);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const setActive = (link) => {
        setActiveLink(link);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const toggleDropdown = (event) => {
        event.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const root = document.documentElement;
    
        if (location.pathname === "/about" || location.pathname === "/contact") {
          root.style.setProperty('--white', '#a4a4a4');
          setLogo(logoBeige);
        }else {
          root.style.setProperty('--white', '#ffffff');
          setLogo(logoWhite);
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
          setIsShrunk(window.scrollY > 120);
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const mobileNavbar = document.querySelector('#navbar');

        if (menuOpen) {
            navbar.classList.add('active');
            mobileNavbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
            mobileNavbar.classList.remove('active');
        }
    }, [menuOpen]);

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div>
            <div>
                <header className={`header ${isShrunk ? 'shrunk' : ''}`}>
                    <Link to="/" className="logo"><img src={logo} alt="Logo" /></Link>
                    <div className="menu-btn" onClick={toggleMenu}>
                        <div className={`menu-burger ${menuOpen ? 'open' : ''}`}></div>
                    </div>
                    <nav className="navbar flex-nav" id="navbar">
                        <Link 
                        to="/" 
                        className={isActive("/") ? "active" : ""}
                        onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                        <Link 
                    to="/about"
                    className={isActive("/about") ? "active" : ""}
                    onClick={handleLinkClick}
                    >
                        About
                    </Link>
                    <Link 
                    to="/services" 
                    className={isActive("/services") ? "active" : ""}
                    onClick={handleLinkClick}
                    >
                        Services
                    </Link>
                    <div className="dropdown">
                        <Link 
                        to="/locations" 
                        className={`dropdown-toggle ${isActive("/locations") ? "active" : ""}`} 
                        onClick={toggleDropdown}
                        >
                            Locations
                        </Link>
                        {dropdownOpen && (
                            <div className="dropdown-content-hover">
                                <div className="dropdown-content">
                                    <Link to="/locations/gold-coast">Gold Coast</Link>
                                    <Link to="/locations/logan">Logan</Link>
                                    <Link to="/locations/Ipswich">Ipswich</Link>
                                    <Link to="/locations/brisbane">Brisbane</Link>
                                    <Link to="/locations/sunshine-coast">Sunshine Coast</Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link 
                    to="/contact" 
                    className={isActive("/contact") ? "active" : ""}
                    onClick={handleLinkClick}
                    >
                        Contact
                    </Link>
                    </nav>
                </header>
                <Outlet />
            </div>
        </div>  
    );
}

export default NavBar;