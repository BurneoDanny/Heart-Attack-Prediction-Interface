import logo from "assets/images/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav id="navbar">
            <div id="sm-navbar">
                <div id="logo-holder">
                    <img src={logo} alt="ShyLittleI" className="h-8 w-8" />
                </div>
                <div id="menu">
                    <div id="tryit_button">
                        <Link to="/demo" className="btn btn--stripe">Try it live!</Link>
                    </div>
                    <Link id="link" to="/more">Predict</Link>
                    <Link id="link" to="/about">Statistics</Link>
                    <Link id="link" to="/login">Login</Link>
                    <Link id="link" to="/login">Contact</Link>
                </div>
                <div id="toogle_menu_div">
                    <button id="toogle_menu_button" type="button" onClick={toggleMobileMenu} aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen}>
                        {isMobileMenuOpen ? (
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <div id="mobile-menu" className={isMobileMenuOpen ? "block" : "hidden"}>
                <div id="mobile-menu-content">
                    <Link id="link" to="/more">Predict</Link>
                    <Link id="link" to="/about">Statistics</Link>
                    <Link id="link" to="/login">Login</Link>
                    <Link id="link" to="/login">Contact</Link>
                </div>
            </div>

        </nav >
    );
}

export default NavBar;