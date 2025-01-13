import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./NavBar.css";
import "/src/index.css";

import logoWhite from "../assets/Creese Property Logo- White White2.webp";
import ScrollToTop from "./ScrollToTop";

function NavBar() {
    const { pathname } = useLocation();
    const [state, setState] = useState({
        isShrunk: false,
        menuOpen: false,
    });

    const toggleMenu = () => {
        setState((prevState) => ({
            ...prevState,
            menuOpen: !prevState.menuOpen,
        }));
    };

    const handleLinkClick = () => {
        setState((prevState) => ({
            ...prevState,
            menuOpen: false,
        }));
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setState((prevState) => ({
                ...prevState,
                isShrunk: window.scrollY > 120,
            }));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("no-scroll", state.menuOpen);
    }, [state.menuOpen]);

    const isSpecialPage = pathname === "/privacy" || pathname === "/terms-conditions";
    const isActive = (path) => pathname === path;

    return (
        <>
            <ScrollToTop />
            <header
                className={`header ${state.isShrunk ? "shrunk" : ""} ${
                    isSpecialPage && !state.isShrunk ? "transparent" : ""
                }`}
            >
                <Link rel="preload" to="/" className="logo">
                    <img src={logoWhite} alt="Creese Property Logo"/>
                </Link>
                <div className="menu-btn" onClick={toggleMenu}>
                    <div className={`menu-burger ${state.menuOpen ? "open" : ""}`}></div>
                </div>
                <nav className={`navbar flex-nav ${state.menuOpen ? "active" : ""}`} id="navbar">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About" },
                        { to: "/services", label: "Services" },
                        { to: "/rentals", label: "Rentals" },
                        // { to: "/portfolio", label: "Portfolio" },
                        { to: "/contact", label: "Contact" },
                    ].map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            className={isActive(to) ? "active" : ""}
                            onClick={handleLinkClick}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default NavBar;