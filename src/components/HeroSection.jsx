import React, { useState } from "react";
import { RefreshCw, Check, Loader, ChevronDown, Smartphone, HeadphonesIcon, Share2, MessageCircle, CreditCard, Search, Globe } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const QuoteRequestForm = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    websiteType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRecaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaVerified) {
      console.log("Form submitted:", formData);
    } else {
      alert("Please verify that you are not a robot.");
    }
  };

  return (
    <article className="mt-4 md:mt-0 bg-gray-900 bg-opacity-80 p-6 md:p-8 rounded-2xl w-full md:w-1/2 shadow-2xl transition-transform duration-300 hover:scale-105">
      <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6">Request A Quote</h2>
      <form className="space-y-1" onSubmit={handleSubmit}>
        <label className="block">
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-yellow-400 outline-none transition-all duration-300" 
            required
            aria-label="Email address"
          />
        </label>
        
        <label className="block">
          <input 
            type="tel" 
            name="phone"
            placeholder="Phone" 
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-yellow-400 outline-none transition-all duration-300" 
            required
            aria-label="Phone number"
          />
        </label>
        
        <label className="block">
          <select 
            name="websiteType"
            value={formData.websiteType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-yellow-400 outline-none transition-all duration-300"
            required
            aria-label="Website type"
          >
            <option value="">Select Website Type</option>
            <option value="informative">Informative Website</option>
            <option value="ecommerce">E-Commerce Website</option>
            <option value="portfolio">Portfolio Website</option>
            <option value="business">Business Website</option>
          </select>
        </label>
        
        <label className="block">
          <textarea 
            name="message"
            placeholder="Message" 
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-yellow-400 outline-none transition-all duration-300"
            required
            aria-label="Your message"
            rows="4"
          ></textarea>
        </label>

        <div className="flex justify-center my-4 md:my-6">
          <ReCAPTCHA
            sitekey="6LfhJ7opAAAAAJwarSFjIYcnMWm052wDgJ4hl7ER"
            onChange={handleRecaptchaChange}
            theme="dark"
          />
        </div>

        <button 
          type="submit" 
          className={`w-full bg-yellow-500 text-black py-3 px-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105 shadow-xl ${!captchaVerified && 'opacity-90'}`}
          aria-label="Submit quote request"
        >
          Request A Quote
        </button>
      </form>
    </article>
  );
};

const FeatureCard = ({ icon: Icon, title, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <figure 
      className="flex flex-col items-center px-4 py-4 md:px-6 md:py-4 transition-all duration-500 transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
      }}
    >
      <div 
        className={`rounded-full p-4 md:p-5 mb-3 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-500 shadow-lg`}
        style={{
          background: isHovered 
            ? 'linear-gradient(145deg, #ffd500, #ffaa00)' 
            : 'linear-gradient(145deg, #282828, #1a1a1a)',
          boxShadow: isHovered 
            ? '0 10px 25px rgba(255, 213, 0, 0.4)' 
            : '0 5px 15px rgba(0, 0, 0, 0.3)'
        }}
      >
        <Icon 
          size={24}
          className="transition-all duration-500"
          style={{ 
            color: isHovered ? '#1a1a1a' : color,
            transform: isHovered ? 'scale(1.2)' : 'scale(1)'
          }} 
          aria-hidden="true"
        />
      </div>
      <figcaption 
        className="font-medium text-base md:text-lg transition-all duration-500 text-center"
        style={{ 
          color: isHovered ? '#ffd500' : '#e0e0e0'
        }}
      >
        {title}
      </figcaption>
    </figure>
  );
};

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-0">
      {/* Background - YouTube Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/23C-DpNLVTs?si=qkYjT74K-muhMhOT&autoplay=1&mute=1&loop=1&playlist=23C-DpNLVTs&controls=0&showinfo=0&rel=0"
          title="Background video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 mt-4 md:mt-0">
          <QuoteRequestForm />

          <article className="text-center md:text-left md:w-1/2 space-y-4 md:space-y-6 relative">
            <div className="absolute -top-10 left-0 md:left-1/4 animate-bounce">
              <ChevronDown 
                size={60}
                className="text-yellow-400 drop-shadow-2xl transition-transform duration-300 transform hover:scale-125"
                aria-hidden="true"
              />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow-xl">
              Welcome to Swaget Infocomm Solutions
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-light tracking-wide">
              We Bring Future Closer
            </p>
            <p className="text-base md:text-lg text-white">We Provide the Best Web Services</p>
            <p className="text-lg md:text-xl lg:text-2xl text-yellow-300 font-semibold">
              Starting at ₹4999 – Ready in just 12 hours
            </p>

            <button 
              className="mt-6 md:mt-8 bg-yellow-500 text-black px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-lg transition-transform duration-300 shadow-lg hover:scale-110"
              aria-label="Chat with us"
            >
              Chat Now
            </button>
          </article>
        </section>
        
        {/* Domain Search Section */}
        <section className="w-full mt-12 md:mt-16">
          <article className="bg-gray-900 bg-opacity-80 p-6 md:p-8 rounded-2xl w-full shadow-2xl transition-transform duration-300 hover:scale-105 border-2 border-yellow-500 border-opacity-30">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <Globe size={28} className="text-yellow-400 mr-3" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">Find Your Perfect Domain</h2>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[".com", ".in", ".net", ".org"].map((ext) => (
                  <span key={ext} className="bg-gray-800 text-yellow-300 px-2 py-1 rounded-lg text-xs md:text-sm">
                    {ext}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">Secure your online identity with a domain name that represents your brand</p>
            
            <form action="https://billing.swaget.in/cart.php?a=add&domain=register" method="post" className="space-y-4">
              <div className="relative w-full shadow-lg">
                <input 
                  type="text" 
                  name="query" 
                  placeholder="Enter your domain name..." 
                  className="w-full px-4 py-3 pl-10 md:pl-12 rounded-xl bg-gray-800 text-white border-2 border-gray-600 focus:border-yellow-400 outline-none transition-all duration-300 text-base md:text-lg"
                  aria-label="Domain search"
                />
                <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} aria-hidden="true" />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black px-4 py-1 md:px-6 md:py-2 rounded-lg font-semibold text-base md:text-lg hover:bg-yellow-600 transition-all duration-300 flex items-center"
                  aria-label="Search domain"
                >
                  <Search size={16} className="mr-1 md:mr-2" aria-hidden="true" />
                  <span className="hidden md:inline">Search Domain</span>
                  <span className="md:hidden">Search</span>
                </button>
              </div>
            </form>
            
            <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              {[
                { ext: ".com", price: "₹1,117.00/yr" },
                { ext: ".in", price: "₹649/yr" },
                { ext: ".net", price: "₹1,432.00/yr" },
                { ext: ".org", price: "₹1,466.00 /yr" }
              ].map((item) => (
                <div key={item.ext} className="bg-gray-800 bg-opacity-70 p-2 md:p-3 rounded-lg flex flex-col items-center">
                  <p className="text-yellow-400 font-semibold text-sm md:text-base">{item.ext}</p>
                  <p className="text-white text-xs md:text-sm">{item.price}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
        
        {/* Service Features Section */}
        <section className="w-full mt-12 md:mt-16 bg-gray-900 rounded-2xl py-6 px-4 md:py-8 md:px-6" style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
        }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-yellow-400 text-center text-xl md:text-2xl font-bold mb-6 md:mb-8 animate-pulse">Premium Features</h2>
            
            <div className="grid grid-cols-2 md:flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-6">
              <FeatureCard 
                icon={Smartphone} 
                title="Responsive Design" 
                color="#3b82f6"
              />
              
              <FeatureCard 
                icon={HeadphonesIcon} 
                title="24/7 Support" 
                color="#f59e0b"
              />
              
              <FeatureCard 
                icon={Share2} 
                title="Social Media" 
                color="#ef4444"
              />
              
              <FeatureCard 
                icon={MessageCircle} 
                title="Live Chat" 
                color="#10b981"
              />
              
              <FeatureCard 
                icon={CreditCard} 
                title="Payment Gateway" 
                color="#3b82f6"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;