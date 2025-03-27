import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, ShoppingCart, User } from "lucide-react";

// Move these to a separate constants file if used in multiple components
export const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "order", label: "Order Now", href: "/order-now" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "support", label: "Support", href: "/support" },
  { id: "contact", label: "Contact Us", href: "/contact" },
  { id: "careers", label: "Careers", href: "/careers" },
];

export const services = [
  { label: "Graphic Designing", href: "/graphic-design" },
  { label: "Animated Videos", href: "/animated-videos" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Website Pricing", href: "/website-pricing" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const loginDropdownRef = useRef(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(e.target)) {
        setLoginDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setLoginDropdown(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-gray-900 shadow-lg py-4" : "bg-gray-800 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left - Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={`relative text-lg font-semibold transition-all duration-300 group hover:scale-105 ${
                isActive(item.href) ? "text-yellow-300" : "text-yellow-400"
              }`}
            >
              {item.label}
              <span 
                className={`absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transition-transform duration-300 ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={`flex items-center text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                services.some(service => isActive(service.href)) ? "text-yellow-300" : "text-yellow-400"
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-controls="services-dropdown"
              aria-haspopup="true"
            >
              Services <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div
                id="services-dropdown"
                className="absolute top-full left-0 mt-2 w-56 bg-gray-900 shadow-lg rounded-lg py-2 z-50"
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block px-4 py-2 transition-all duration-200 ${
                      isActive(service.href) 
                        ? "bg-gray-700 text-yellow-300" 
                        : "text-yellow-400 hover:bg-gray-700"
                    }`}
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right - Login Dropdown, Cart, Get Started */}
        <div className="hidden md:flex items-center space-x-7">
          {/* Login Dropdown */}
          <div className="relative" ref={loginDropdownRef}>
            <button
              className="flex items-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={() => setLoginDropdown(!loginDropdown)}
              aria-expanded={loginDropdown}
              aria-controls="login-dropdown"
              aria-haspopup="true"
            >
              <User className="mr-2 h-5 w-5" />
              Login <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${loginDropdown ? "rotate-180" : ""}`} />
            </button>

            {loginDropdown && (
              <div
                id="login-dropdown"
                className="absolute top-full right-0 mt-2 w-52 bg-white shadow-lg rounded-lg py-2 text-gray-900 z-50"
              >
                <p className="px-4 py-2 text-sm">New customer?</p>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-blue-600 font-medium hover:bg-gray-100 transition-all duration-200"
                >
                  Sign Up
                </Link>
                <div className="border-t border-gray-200 my-1"></div>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 transition-all duration-200"
                >
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Get Started Button */}
          <Link
            to="/order-now"
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-6 py-2 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Cart Icon */}
        <a
          href="https://billing.swaget.in/cart.php?a=view"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 p-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          aria-label="Shopping Cart"
        >
          <ShoppingCart className="h-7 w-7" />
        </a>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-expanded={isOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-yellow-400 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-yellow-400 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-yellow-400 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 bg-gray-900 shadow-lg space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={`block text-lg font-medium py-2 ${
                isActive(item.href) ? "text-yellow-300" : "text-yellow-400 hover:text-yellow-300"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Services Dropdown */}
          <div>
            <button
              className={`w-full text-left text-lg font-medium py-2 flex justify-between items-center ${
                services.some(service => isActive(service.href)) 
                  ? "text-yellow-300" 
                  : "text-yellow-400 hover:text-yellow-300"
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-controls="mobile-services-dropdown"
            >
              Services 
              <ChevronDown className={`h-5 w-5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div
                id="mobile-services-dropdown"
                className="mt-2 pl-4 space-y-2"
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${
                      isActive(service.href) 
                        ? "text-yellow-300" 
                        : "text-yellow-400 hover:text-yellow-300"
                    }`}
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-yellow-400 py-3">
            <Phone size={18} className="text-yellow-500" />
            <span>Call Us: 08069409932</span>
          </div>

          <div className="flex flex-col space-y-3">
            <Link
              to="/login"
              className="w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-medium text-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Login
            </Link>
            <Link
              to="/order-now"
              className="w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-medium text-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;