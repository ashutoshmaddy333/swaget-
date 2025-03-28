import React, { useState } from "react";

const AboutPage = () => {
  // Use a more efficient approach with a single state object for all accordions
  const [openAccordions, setOpenAccordions] = useState({});

  // Toggle function that handles all accordions
  const toggleAccordion = (id) => {
    setOpenAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Define accordion content for better maintenance and organization
  const accordionData = [
    {
      id: "smallBusiness",
      title: "Small Business Website Design",
      content: "Boost Your Small Business with a Top Website Design & Development Company in Delhi! Our tailored solutions are designed to give your small business a professional online presence that drives growth and engagement."
    },
    {
      id: "eCommerce",
      title: "E-Commerce Website Development for Seamless Online Selling",
      content: "Thinking of launching an online store? Our e-commerce website development services provide a feature-rich and user-friendly shopping experience. We integrate secure payment gateways, smooth checkout processes, product listing optimizations, and SEO strategies to help you generate sales effortlessly. Whether you're a small retailer or a large-scale enterprise, we ensure that your e-commerce platform is scalable, fast, and conversion-focused."
    },
    {
      id: "businessDesign",
      title: "Business Website Design That Converts Visitors into Customers",
      content: "Your website is your digital storefront, and first impressions matter. Our business website design services focus on attractive layouts, easy navigation, and SEO optimization to ensure that visitors stay longer and engage more. We use the latest technologies to create fast, secure, and mobile-responsive websites that work seamlessly across all devices."
    },
    {
      id: "customDevelopment",
      title: "Custom Website Development Tailored to Your Needs",
      content: "At Swaget, we understand that every business is unique. That's why we offer custom website development solutions designed to fit your brand, industry, and audience. Our best website designers work closely with you to create a site that's not just visually stunning but also high-performing and user-friendly. Whether you need a corporate website, e-commerce platform, or portfolio site, we bring your vision to life with modern designs and advanced functionalities."
    },
    {
      id: "seoDevelopment",
      title: "SEO-Friendly Web Development for Higher Google Rankings",
      content: "A great website is useless if no one can find it. That's why we integrate SEO-friendly web development strategies to help your website rank higher on search engines. From keyword optimization to fast-loading pages and mobile responsiveness, we build websites that Google loves. Get ahead of your competition with a professionally designed website that enhances visibility and drives organic traffic."
    },
    {
      id: "affordableCreation",
      title: "Affordable Website Creation Without Compromising on Quality",
      content: "Every business deserves a stunning website, regardless of its budget. That's why Swaget offers affordable web design solutions that don't compromise on quality. Our custom website development packages come with SEO optimization, fast loading speeds, and responsive designs, ensuring that your business stands out. From startups to large enterprises, we craft scalable websites that adapt as your business grows."
    },
    {
      id: "whyChooseUs",
      title: "Why Choose Swaget for Website Designing Services?",
      content: (
        <ul className="space-y-2 list-none">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span><strong>Experienced Team:</strong> Our expert web designers and developers create stunning and functional websites.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span><strong>SEO-Optimized Websites:</strong> Every website we build is designed to rank higher on Google with fast-loading pages and SEO-friendly structures.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span><strong>Mobile & User-Friendly Design:</strong> We ensure your website looks and functions perfectly on all devices.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span><strong>Affordable Web Design Solutions:</strong> Get a custom-designed website at a price that fits your budget.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span><strong>Ongoing Support & Maintenance:</strong> We provide 24/7 support to keep your website up and running.</span>
          </li>
        </ul>
      )
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 p-6">
    {/* Remove max-w-6xl and mx-auto to make it full width */}
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* Header section with improved styling */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
          About Swaget
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Your trusted partner for professional web development and digital marketing solutions
        </p>
      </div>
  
      {/* Main content with improved layout */}
      <div className="flex flex-col md:flex-row bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl w-full">
        {/* Left Section - Image with overlay and improved presentation */}
        <div className="md:w-1/2 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
          <img
  src="/2.jpg"  // Remove "/public"
  alt="About Swaget"
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
/>

          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h2 className="text-3xl font-bold text-yellow-400 mb-2">Swaget Infocomm Solutions LLP</h2>
            <p className="text-lg text-gray-200">Website Designing, Hosting & SEO Services | Fast & Affordable Solutions</p>
          </div>
        </div>
  
        {/* Right Section - Content with improved scrollable area */}
        <div className="md:w-1/2 p-6 md:p-8 md:max-h-[800px] md:overflow-y-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">About Us</h3>
            <p className="text-lg mb-6">
              Swaget Infocomm Solutions LLP is a leading web development company
              in India, offering a comprehensive range of services to enhance
              your online presence. We combine creativity with technical expertise
              to deliver websites that not only look great but also perform exceptionally.
            </p>
          </div>
  
          {/* Accordion section with improved styling and animations */}
          <div className="space-y-4">
            {accordionData.map((accordion) => (
              <div key={accordion.id} className="border border-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleAccordion(accordion.id)}
                  className="flex items-center justify-between w-full p-5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 transition-all focus:outline-none"
                >
                  <span className="text-lg font-semibold text-yellow-400 text-left pr-4">
                    {accordion.title}
                  </span>
                  <div className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openAccordions[accordion.id] ? "transform rotate-180" : ""}`}>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
  
                {/* Animated accordion content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openAccordions[accordion.id]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 bg-gray-700 text-gray-100">{accordion.content}</div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Call to action section */}
          <div className="mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to elevate your online presence?</h3>
            <p className="text-gray-800 mb-4">Contact us today for a free consultation and quote!</p>
            <button className="bg-gray-900 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AboutPage;