import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute z-10 text-black-pearl-50 w-full h-24 xl:text-sm 2xl:text-base 3xl:text-xl 3xl:h-32">
      <div className="flex justify-between items-center h-full">
        <div className="ml-8 flex items-center justify-center h-3/4 gap-6">
          <div className="h-full flex justify-center items-center">
            <img src={logo} alt="ShyLittleI" className="max-h-full w-full" />
          </div>
          <h1 className="text-xl 3xl:text-2xl font-bold">
            Wayared Health Care
          </h1>
        </div>
        <div className="hidden xl:flex gap-8 mr-8">
          <Link
            to="/wayared?menu=batchpredict"
            className="transition-colors duration-300 ease-in-out hover:bg-black-pearl-500 p-4 rounded-sm"
          >
            CSV Predict
          </Link>
          <Link
            to="/wayared?menu=doc"
            className="transition-colors duration-300 ease-in-out hover:bg-black-pearl-500 p-4 rounded-sm"
          >
            Documentation
          </Link>
          <Link
            to="/wayared?menu=model"
            className="transition-colors duration-300 ease-in-out hover:bg-black-pearl-500 p-4 rounded-sm"
          >
            Models
          </Link>
          <Link
            to="/wayared?menu=dataset"
            className="transition-colors duration-300 ease-in-out hover:bg-black-pearl-500 p-4 rounded-sm"
          >
            About the dataset
          </Link>
          <Link
            to="/wayared?menu=contact"
            className="transition-colors duration-300 ease-in-out hover:bg-black-pearl-500 p-4 rounded-sm"
          >
            Contact us
          </Link>
        </div>
        <div className="block mr-8 xl:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={isMobileMenuOpen ? "block" : "hidden"}>
        <div>
          <Link id="link" to="/more">
            Documentation
          </Link>
          <Link id="link" to="/about">
            Models
          </Link>
          <Link id="link" to="/login">
            About the dataset
          </Link>
          <Link id="link" to="/login">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
