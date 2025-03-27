import React, { useState, useEffect, useMemo } from "react";
import { Phone } from "lucide-react";

const SwagerHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Memoized dark mode state to avoid re-renders
  const prefersDarkMode = useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateDarkMode = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", updateDarkMode);
    window.addEventListener("scroll", handleScroll);

    return () => {
      mediaQuery.removeEventListener("change", updateDarkMode);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
          ${scrolled ? "py-2 shadow-lg backdrop-blur-md" : "py-4"}
          ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
        `}
        style={{
          backgroundColor: darkMode
            ? "rgba(17, 24, 39, 0.9)"
            : "rgba(255, 255, 255, 0.9)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo with Hover Effect */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              aria-label="Company Logo"
            >
              <h1
                className={`text-3xl md:text-4xl font-extrabold tracking-wider transition-all duration-500 ${
                  hovered ? "scale-110" : "scale-100"
                }`}
              >
                {/* Shadowed Text Layers */}
                {["2px", "4px", "6px"].map((offset, index) => (
                  <span
                    key={index}
                    className={`absolute opacity-${80 - index * 10}`}
                    style={{ transform: `translate(${offset}, ${offset})` }}
                  >
                    स्वागत
                  </span>
                ))}

                {/* Main Gradient Text */}
                <span
                  className={`relative bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-transparent bg-clip-text transition-all duration-500 ${
                    hovered ? "blur-sm" : ""
                  }`}
                >
                  स्वागत
                </span>

                {/* Hover Effect */}
                {hovered && (
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 text-transparent bg-clip-text transition-all duration-500 transform scale-110 blur-sm"
                  >
                    स्वागत
                  </span>
                )}
              </h1>
            </div>

            {/* Phone Number with Hover Animation */}
            <div
              className={`flex items-center gap-2 font-medium transition-all duration-300 transform hover:scale-105 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              <Phone className="text-orange-500" size={20} />
              <a
                href="tel:08069409932"
                className="group relative overflow-hidden"
                aria-label="Call Us"
              >
                <span className="relative z-10 transition-colors duration-300">
                  Call Us: <span className="font-bold">08069409932</span>
                </span>
                {/* Underline Hover Effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Prevent Overlap with Content */}
      <div className="pt-[80px] md:pt-[100px]"></div>
    </>
  );
};

export default SwagerHeader;
