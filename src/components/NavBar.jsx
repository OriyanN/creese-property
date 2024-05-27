import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./NavBar.css";
import "/src/index.css";

import logoWhite from "../assets/Creese Property Logo- White White2.png";

import ScrollToTop from "./ScrollToTop";

function NavBar() {
    const [activeLink, setActiveLink] = useState("");
    const { pathname } = useLocation();
    const [isShrunk, setIsShrunk] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [logo] = useState(logoWhite);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
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

    const isSpecialPage = pathname === "/privacy" || pathname === "/terms-conditions";
    const isActive = (path) => pathname === path;

    return (
        <>
            <ScrollToTop />
            <div>
                <div>
                    <header className={`header ${isShrunk ? 'shrunk' : ''} ${isSpecialPage && !isShrunk ? 'transparent' : ''}`}>
                        <Link to="/" className="logo"><img src={logo} height={'8vh'} width={'auto'} alt="Creese Property Logo" /></Link>
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