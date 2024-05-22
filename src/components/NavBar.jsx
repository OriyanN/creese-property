import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./NavBar.css";
import "/src/index.css";

import logoWhite from "../assets/Creese Property Logo- White White.png";
import logoGreyBeige from "../assets/CP (2).png";

import ScrollToTop from "./ScrollToTop";

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

    const handleLinkClick = (path) => {
        setMenuOpen(false);
        setDropdownOpen(false);
        history.push(path);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const toggleDropdown = (event) => {
        event.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };  

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeShrunk = window.scrollY > 120;
            setIsShrunk(shouldBeShrunk);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isSpecialPage = location.pathname === "/privacy" || location.pathname === "/terms-conditions";
    
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
            document.body.classList.add('no-scroll');
        } else {
            navbar.classList.remove('active');
            mobileNavbar.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen]);

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <ScrollToTop />
            <div>
                <div>
                    <header className={`header ${isShrunk ? 'shrunk' : ''} ${isSpecialPage && !isShrunk ? 'transparent' : ''}`}>
                        <Link to="/" className="logo"><img src={logo} alt="Creese Property Logo" /></Link>
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
                            <Link 
                                to="/portfolio" 
                                className={isActive("/portfolio") ? "active" : ""}
                                onClick={handleLinkClick}
                            >
                                Portfolio
                            </Link>
                            <Link 
                                to="/leasing" 
                                className={isActive("/leasing") ? "active" : ""}
                                onClick={handleLinkClick}
                            >
                                Leasing
                            </Link>
                            {/* <div 
                                className={`dropdown ${dropdownOpen ? 'open' : ''}`} 
                                aria-haspopup="true" 
                                aria-expanded={dropdownOpen}>
                                <Link 
                                    to="#" 
                                    className={`dropdown-toggle ${isActive("/locations") ? "active" : ""}`} 
                                    onClick={toggleDropdown}
                                    aria-haspopup="true"
                                    aria-expanded={dropdownOpen}
                                >
                                    Locations
                                </Link>
                                {dropdownOpen && (
                                    <div className="dropdown-content-hover">
                                        <div className="dropdown-content" role="menu">
                                            <Link to="/locations/gold-coast" onClick={handleLinkClick} role="menuitem">Gold Coast</Link>
                                            <Link to="/locations/logan" onClick={handleLinkClick} role="menuitem">Logan</Link>
                                            <Link to="/locations/Ipswich" onClick={handleLinkClick} role="menuitem">Ipswich</Link>
                                            <Link to="/locations/brisbane" onClick={handleLinkClick} role="menuitem">Brisbane</Link>
                                            <Link to="/locations/sunshine-coast" onClick={handleLinkClick} role="menuitem">Sunshine Coast</Link>
                                        </div>
                                    </div>
                                )}
                            </div> */}
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
        </>
    );
}

export default NavBar;