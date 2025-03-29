import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, ShoppingCart, User } from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "order", label: "Order Now", href: "https://billing.swaget.in/index.php/store/web-designing-pricing-plan" },
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
  const mobileMenuRef = useRef(null);

  // Handle scroll event with throttling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Close dropdowns when clicking outside
  const handleClickOutside = useCallback((e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
    if (loginDropdownRef.current && !loginDropdownRef.current.contains(e.target)) {
      setLoginDropdown(false);
    }
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && e.target.closest('button')?.ariaLabel !== "Toggle Menu") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  // Close dropdowns on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setLoginDropdown(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = useCallback((path) => {
    return location.pathname === path;
  }, [location.pathname]);

  // Throttle function
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg py-2" : "bg-gray-800 py-3"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Left - Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={`relative text-base lg:text-lg font-medium transition-colors duration-200 group ${
                isActive(item.href) ? "text-yellow-300" : "text-yellow-400 hover:text-yellow-300"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
              <span 
                className={`absolute -bottom-1 left-0 w-full h-1 bg-yellow-500 transition-transform duration-200 origin-left ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
                aria-hidden="true"
              ></span>
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={`flex items-center text-base lg:text-lg font-medium transition-colors duration-200 ${
                services.some(service => isActive(service.href)) ? "text-yellow-300" : "text-yellow-400 hover:text-yellow-300"
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-controls="services-dropdown"
              aria-haspopup="true"
              aria-label="Services dropdown"
            >
              Services 
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>

            {dropdownOpen && (
              <div
                id="services-dropdown"
                className="absolute top-full left-0 mt-2 w-56 bg-gray-900 shadow-xl rounded-lg py-1 z-50 border border-gray-700"
                role="menu"
                aria-orientation="vertical"
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                      isActive(service.href) 
                        ? "bg-gray-800 text-yellow-300" 
                        : "text-yellow-400 hover:bg-gray-800 hover:text-yellow-300"
                    }`}
                    role="menuitem"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right - Login Dropdown, Cart, Get Started */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {/* Login Dropdown */}
          <div className="relative" ref={loginDropdownRef}>
            <button
              className="flex items-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg font-medium shadow-md hover:scale-[1.02] transition-transform duration-200"
              onClick={() => setLoginDropdown(!loginDropdown)}
              aria-expanded={loginDropdown}
              aria-controls="login-dropdown"
              aria-haspopup="true"
              aria-label="User account dropdown"
            >
              <User className="mr-1.5 h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
              Login <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform ${loginDropdown ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>

            {loginDropdown && (
              <div
                id="login-dropdown"
                className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-1 text-gray-900 z-50 border border-gray-200"
                role="menu"
                aria-orientation="vertical"
              >
                <p className="px-3 py-2 text-xs text-gray-500">New customer?</p>
                <Link
                  to="https://billing.swaget.in/register.php"
                  className="block px-3 py-2 text-sm text-blue-600 font-medium hover:bg-gray-50 transition-colors duration-150"
                  role="menuitem"
                  aria-label="Sign up for an account"
                >
                  Sign Up
                </Link>
                <div className="border-t border-gray-200 my-1" aria-hidden="true"></div>
                <Link
                  to="https://billing.swaget.in/dologin.php"
                  className="block px-3 py-2 text-sm text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-150"
                  role="menuitem"
                  aria-label="Login to your account"
                >
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Get Started Button */}
          <a
            href="https://billing.swaget.in/index.php/store/web-designing-pricing-plan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-4 py-1.5 lg:px-6 lg:py-2 rounded-lg font-medium text-base lg:text-lg shadow-md hover:scale-[1.02] transition-transform duration-200"
            aria-label="Get started with our web design services"
          >
            Get Started
          </a>

          {/* Cart Icon */}
          <a
            href="https://billing.swaget.in/cart.php?a=view"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 p-1.5 lg:p-2 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-200"
            aria-label="View shopping cart"
          >
            <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-yellow-400 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
              aria-hidden="true"
            ></span>
            <span
              className={`block h-0.5 w-full bg-yellow-400 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
              aria-hidden="true"
            ></span>
            <span
              className={`block h-0.5 w-full bg-yellow-400 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              aria-hidden="true"
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 py-3 bg-gray-900 shadow-lg space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={`block text-base font-medium py-2 px-2 rounded ${
                isActive(item.href) 
                  ? "bg-gray-800 text-yellow-300" 
                  : "text-yellow-400 hover:bg-gray-800 hover:text-yellow-300"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Services Dropdown */}
          <div className="px-2">
            <button
              className={`w-full flex justify-between items-center text-base font-medium py-2 px-2 rounded ${
                dropdownOpen || services.some(service => isActive(service.href))
                  ? "bg-gray-800 text-yellow-300" 
                  : "text-yellow-400 hover:bg-gray-800 hover:text-yellow-300"
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-controls="mobile-services-dropdown"
              aria-label="Mobile services dropdown"
            >
              Services 
              <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>

            <div
              id="mobile-services-dropdown"
              className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${
                dropdownOpen ? "max-h-96 py-2" : "max-h-0"
              }`}
              aria-hidden={!dropdownOpen}
            >
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-1.5 px-2 text-sm rounded ${
                    isActive(service.href)
                      ? "bg-gray-700 text-yellow-300"
                      : "text-yellow-400 hover:bg-gray-800 hover:text-yellow-300"
                  }`}
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-yellow-400 py-2 px-4 text-sm">
            <Phone size={16} className="text-yellow-500" aria-hidden="true" />
            <span>Call Us: 08069409932</span>
          </div>

          <div className="flex flex-col space-y-2 pt-1">
            <Link
              to="https://billing.swaget.in/dologin.php"
              className="w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-medium text-base shadow-md hover:scale-[1.02] transition-transform duration-200"
              aria-label="Login to your account"
            >
              Login
            </Link>
            <a
              href="https://billing.swaget.in/index.php/store/web-designing-pricing-plan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-medium text-base shadow-md hover:scale-[1.02] transition-transform duration-200"
              aria-label="Get started with our web design services"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;