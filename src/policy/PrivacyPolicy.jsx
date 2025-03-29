import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "information",
      title: "Information We Collect",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            We collect information when you voluntarily provide it to us or when you use our services. This information may include but not limited:
          </p>
          <ol className="list-decimal pl-5 mb-4 space-y-2 text-gray-300">
            <li><span className="font-medium text-yellow-400">Personal Information:</span> Name, email address, phone number, postal address, and other contact details.</li>
            <li><span className="font-medium text-yellow-400">Usage Data:</span> Information about your interactions with our Site, such as IP address, browser type, pages visited, and timestamps.</li>
            <li><span className="font-medium text-yellow-400">Client Information:</span> Information provided by clients in the course of business interactions, such as project requirements and specifications.</li>
          </ol>
        </div>
      )
    },
    {
      id: "use",
      title: "How We Use Your Information",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            We may use the collected information for the following purposes:
          </p>
          <ol className="list-decimal pl-5 mb-4 space-y-2 text-gray-300">
            <li>To provide and maintain our services to you.</li>
            <li>To improve, customize, and enhance your experience with our Site and services.</li>
            <li>To communicate with you regarding updates, news, offers, and other relevant information.</li>
            <li>To fulfill legal or regulatory requirements.</li>
          </ol>
        </div>
      )
    },
    {
      id: "sharing",
      title: "Data Sharing and Disclosure",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            We do not sell, trade, or rent your personal information to third parties. However, we may disclose your information in the following circumstances:
          </p>
          <ol className="list-decimal pl-5 mb-4 space-y-2 text-gray-300">
            <li>With your consent or at your direction.</li>
            <li>To our trusted service providers who assist us in delivering our services.</li>
            <li>When required by law or to protect our legal rights.</li>
          </ol>
        </div>
      )
    },
    {
      id: "security",
      title: "Data Security",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p className="text-gray-300 mb-4">
            While we are committed to implementing and maintaining high standards of security, it's important to note that despite our best efforts, no method of data transmission over the internet or electronic storage can guarantee absolute security.
          </p>
          <p className="text-gray-300 mb-4">
            Therefore, while we strive to protect your information, we cannot provide a 100% guarantee of security. Rest assured, we continuously evaluate and enhance our security measures to stay abreast of evolving threats and technology. Our dedication to safeguarding your data remains unwavering, and we are committed to addressing any potential security concerns promptly and effectively.
          </p>
        </div>
      )
    },
    {
      id: "rights",
      title: "Your Rights",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            You have the right to:
          </p>
          <ol className="list-decimal pl-5 mb-4 space-y-2 text-gray-300">
            <li>Access, update, or correct your personal information.</li>
            <li>Request the deletion of your personal information.</li>
            <li>Opt-out of receiving marketing communications.</li>
          </ol>
        </div>
      )
    },
    {
      id: "third-party",
      title: "Third-Party Links",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Our Site may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties.
          </p>
        </div>
      )
    },
    {
      id: "children",
      title: "Children's Privacy",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Our services are not directed at individuals under the age of 13. We do not knowingly collect personal information from children under 13 years of age. If you believe that we have inadvertently collected such information, please contact us immediately.
          </p>
        </div>
      )
    },
    {
      id: "changes",
      title: "Changes to This Privacy Policy",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective upon posting the revised policy on this page.
          </p>
        </div>
      )
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us at info@swaget.in.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-400">Swaget</h1>
              <span className="ml-2 text-xs sm:text-sm text-gray-400">Infocomm Solutions LLP</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <article className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {/* Title Section */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-6 sm:py-8 px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-yellow-100 mt-1 sm:mt-2 text-xs sm:text-sm">
              Last updated: <time dateTime="2025-03-23">March 23, 2025</time>
            </p>
          </div>
          
          {/* Introduction */}
          <div className="p-4 sm:p-6 border-b border-gray-700">
            <p className="text-gray-300">
              Thank you for choosing Swaget Infocomm Solutions LLP ("us", "we", or "our"). This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website swaget.in (the "Site") or engage with our services. By accessing our Site or using our services, you agree to the terms and practices described in this Privacy Policy. If you do not agree with the terms herein, please refrain from using our Site or services.
            </p>
          </div>
          
          {/* Accordion Sections */}
          <div className="divide-y divide-gray-700">
            {sections.map((section) => (
              <section key={section.id} className="border-b border-gray-700">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors"
                  aria-expanded={activeSection === section.id}
                  aria-controls={`${section.id}-content`}
                >
                  <h2 className="text-base sm:text-lg font-semibold text-yellow-400">{section.title}</h2>
                  <svg
                    className={`w-5 h-5 text-yellow-400 transform transition-transform duration-200 ${activeSection === section.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div
                  id={`${section.id}-content`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeSection === section.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-700">
                    {section.content}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </article>
        
        {/* Bottom Contact Card */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-yellow-500 to-yellow-600 border border-yellow-400 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Need more information?</h3>
          <p className="mt-2 text-gray-800 text-sm sm:text-base">
            If you have any questions about our privacy practices or would like to exercise your rights, 
            please don't hesitate to contact our privacy team.
          </p>
          <div className="mt-3 sm:mt-4">
            <a 
              href="mailto:info@swaget.in" 
              className="inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-sm sm:text-base font-medium rounded-md text-yellow-600 bg-gray-900 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              aria-label="Contact us via email"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;