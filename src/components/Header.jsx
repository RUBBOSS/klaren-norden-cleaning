import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {" "}
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo/logo.png"
                alt="KlarerNorden Logo"
                className="h-24 w-24 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  console.log("Logo failed to load");
                }}
              />
              <div>
                <h1
                  className="text-2xl font-bold leading-tight"
                  style={{ color: "#004a77" }}
                >
                  KlarerNorden
                </h1>
                <p
                  className="text-xl font-medium leading-tight"
                  style={{ color: "#c2e7ff" }}
                >
                  Sauberkeit mit Qualität
                </p>
              </div>
            </div>
          </div>
          {/* Navigation Menu (right side) */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
            >
              Über uns
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
            >
              Kontakt
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm focus:outline-none">
              Angebot anfordern
            </button>
          </nav>{" "}
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Über uns
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </a>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm mx-2 mt-2 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Angebot anfordern
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
