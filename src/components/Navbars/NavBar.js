import logo from "assets/images/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="absolute z-10 text-black-pearl-50 h-32 text-2xl w-full">
            <div className="flex justify-between items-center h-full">
                <div className="ml-8 flex items-center justify-center h-3/4 gap-6">
                    <div className="h-full flex justify-center items-center">
                        <img src={logo} alt="ShyLittleI" className="max-h-full w-full" />
                    </div>
                    <h1 className="text-3xl font-bold">Wayared Health Care</h1>
                </div>
                <div className="hidden lg:flex gap-8 mr-8">
                    <Link to="/wayared?menu=doc" className="hover:bg-black-pearl-500 p-4 rounded-sm">Documentation</Link>
                    <Link to="/wayared?menu=models" className="hover:bg-black-pearl-500 p-4 rounded-sm">Models</Link>
                    <Link to="/wayared?menu=results" className="hover:bg-black-pearl-500 p-4 rounded-sm">Analytical Results</Link>
                    <Link to="/wayared?menu=contact" className="hover:bg-black-pearl-500 p-4 rounded-sm">Contact us</Link>
                </div>
                <div className="block mr-8 lg:hidden">
                    <button type="button" onClick={toggleMobileMenu} aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen}>
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

            <div className={isMobileMenuOpen ? "block" : "hidden"}>
                <div>
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