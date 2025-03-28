import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { navItems, services } from "./Navbar";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate(path), 300);
  };

  const quickLinks = navItems.filter(item => item.id !== "order");

  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, text: "08069409932", href: "tel:08069409932", type: "telephone" },
    { icon: <Mail className="h-5 w-5" />, text: "info@swaget.in", href: "mailto:info@swaget.in", type: "email" },
    { icon: <MapPin className="h-5 w-5" />, text: "Swaget Infocomm Solutions LLP, India", href: "https://goo.gl/maps/XYZ123", type: "location" },
  ];

  const socialMedia = [
    { icon: <Facebook />, href: "https://www.facebook.com/swaget.in", name: "Facebook" },
    { icon: <Instagram />, href: "https://www.instagram.com/swaget.in", name: "Instagram" },
    { icon: <Twitter />, href: "https://x.com/Swagetinfocomm", name: "Twitter" },
    { icon: <Linkedin />, href: "http://linkedin.com/in/dhananjay-shukla-73322332b", name: "LinkedIn" },
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Swaget Digital",
            "url": "https://swaget.in",
            "logo": "https://swaget.in/logo.png",
            "sameAs": [
              "https://www.facebook.com/swaget.in",
              "https://www.instagram.com/swaget.in",
              "https://x.com/Swagetinfocomm",
              "http://linkedin.com/in/dhananjay-shukla-73322332b"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+918069409932",
              "contactType": "customer service",
              "email": "info@swaget.in",
              "areaServed": "IN"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India",
              "addressLocality": "Delhi",
              "addressRegion": "Delhi"
            }
          })}
        </script>
      </Helmet>

      <footer className="bg-gray-900 text-yellow-400 pt-16 pb-8" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div itemScope itemType="https://schema.org/Organization">
              <h3 className="text-2xl font-bold mb-6" itemProp="name">Swaget Digital</h3>
              <p className="text-gray-400 mb-6" itemProp="description">
                Your trusted partner for professional web development, digital marketing, and design solutions that drive business growth.
              </p>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                    itemProp="sameAs"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <nav aria-label="Quick links">
              <h3 className="text-xl font-semibold mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      className="flex items-center text-gray-400 hover:text-yellow-400 transition-all duration-300 group"
                      aria-label={link.label}
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="https://billing.swaget.in/index.php/store/web-designing-pricing-plan"
                    className="flex items-center text-gray-400 hover:text-yellow-400 transition-all duration-300 group"
                    aria-label="Order Now"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform duration-300" />
                    Order Now
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Our services">
              <h3 className="text-xl font-semibold mb-6 relative inline-block">
                Our Services
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="flex items-center text-gray-400 hover:text-yellow-400 transition-all duration-300 group"
                      aria-label={service.label}
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform duration-300" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <address itemScope itemType="https://schema.org/Organization">
              <h3 className="text-xl font-semibold mb-6 relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></span>
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index} itemProp={contact.type === 'location' ? 'address' : ''}>
                    <a
                      href={contact.href}
                      className="flex items-center text-gray-400 hover:text-yellow-400 transition-all duration-300"
                      aria-label={contact.type === 'telephone' ? 'Call us' : contact.type === 'email' ? 'Email us' : 'Our location'}
                      itemProp={contact.type}
                    >
                      <span className="bg-gray-800 p-2 rounded-full mr-3 text-yellow-500">
                        {contact.icon}
                      </span>
                      <span itemProp={contact.type === 'email' ? 'email' : 'text'}>{contact.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </address>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-12 border-t border-gray-800/30 text-center relative overflow-hidden bg-gradient-to-b from-transparent to-gray-900/20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/5 to-transparent opacity-30"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCI+PHBhdGggZD0iTTAgMEg0MFY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMSAxMSAyOSAxMSAyOSAyOSAxMSAyOSAxMSAxMSAxMSAxMSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] opacity-10"></div>
            </div>

            <div className="relative z-10">
              <nav aria-label="Legal links">
                <div className="flex justify-center mt-6 space-x-10">
                  {[
                    { name: "Privacy Policy", path: "/privacy-policy" },
                    { name: "Refund Policy", path: "/refund-policy" },
                    { name: "Terms & Conditions", path: "/terms-and-conditions" }
                  ].map((link) => (
                    <div
                      key={link.name}
                      onClick={() => handleLinkClick(link.path)}
                      className="relative group px-4 py-2 transition-all duration-700 hover:duration-300 cursor-pointer"
                      style={{ perspective: "1000px" }}
                      role="link"
                      tabIndex="0"
                      aria-label={link.name}
                    >
                      <div className="relative transition-transform duration-700 group-hover:duration-300 group-hover:[transform:rotateY(10deg)_rotateX(-5deg)_translateZ(10px)]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-[length:200%_100%] group-hover:bg-[length:100%_100%] transition-all duration-500 font-medium tracking-wider">
                          {link.name}
                        </span>
                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-yellow-400/30 blur-[2px]"></div>
                        </div>
                        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {[...Array(6)].map((_, i) => (
                            <div 
                              key={i}
                              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-float"
                              style={{
                                left: `${Math.random() * 80 + 10}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: `${Math.random() * 2 + 3}s`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </nav>

              <div className="mt-10 relative">
                <div className="inline-block relative group">
                  <p className="text-gray-400/80 text-sm font-mono tracking-widest">
                    © {new Date().getFullYear()} SWAGET DIGITAL — ALL RIGHTS RESERVED
                  </p>
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(234,179,8,0.05)_50%,_transparent_100%)] opacity-0 group-hover:opacity-100 group-hover:animate-scanline transition-opacity duration-500"></div>
                  <div className="absolute -bottom-5 left-0 right-0 h-4 overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,_#000_0%,_transparent_50%,_#000_100%)]"></div>
                    <div className="whitespace-nowrap text-[10px] tracking-[0.2em] text-yellow-400/50 animate-scroll">
                      01001000 01101001 01110010 01101001 01101110 01100111 00100000 01010000 01110010 01101111 01110011
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <style jsx global>{`
              @keyframes float {
                0% { transform: translateY(0) translateX(0); opacity: 0; }
                50% { opacity: 0.7; }
                100% { transform: translateY(-20px) translateX(5px); opacity: 0; }
              }
              @keyframes scanline {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
              }
              @keyframes scroll {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
              .animate-float { animation: float linear forwards; }
              .animate-scanline { animation: scanline 1.5s linear; }
              .animate-scroll { animation: scroll 15s linear infinite; }
            `}</style>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;