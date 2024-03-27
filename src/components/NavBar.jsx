import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./NavBar.css";
import "/src/index.css";

function NavBar() {
    const [activeLink, setActiveLink] = useState("");
    const location = useLocation();

    const [isShrunk, setIsShrunk] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    const setActive = (link) => {
        setActiveLink(link);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
          setIsShrunk(window.scrollY > 90);
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
                    <Link to="/" className="logo"><img src="src/assets/Creese Property Logo- White White.png" alt="" /></Link>
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
                    to="/locations" 
                    className={isActive("/locations") ? "active" : ""}
                    onClick={handleLinkClick}
                    >
                        Locations
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
    );
}

export default NavBar;