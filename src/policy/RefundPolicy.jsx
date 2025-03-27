import React, { useState } from 'react';

const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "advance-payments",
      title: "Refund Policy for Advance (Partial) Payments",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Swaget Infocomm Solutions LLP (referred to as "Swaget" hereafter) collects a 50% advance payment for services rendered on https://www.swaget.in after the domain booking, hosting setup, and demonstration of the basic design to customers. This advance payment is non-refundable.
          </p>
        </div>
      )
    },
    {
      id: "exception-advance",
      title: "Exception for Advance (Partial) Payments",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            The 50% advance deposit is refundable only if the domain has not been booked, hosting has not been set up, and the basic design has not been showcased within 72 hours of placing the order for silver, gold, and customized plans.
          </p>
        </div>
      )
    },
    {
      id: "full-payment",
      title: "Refund Policy for Second (Full) Payment",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Swaget collects the remaining 50% of the payment upon successful completion of work, and these payments are non-refundable.
          </p>
        </div>
      )
    },
    {
      id: "seo-services",
      title: "Digital Marketing (SEO) Services Refund Policy",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Cancellation of Digital Marketing (SEO) Services is permissible at any time, and billing for future months will cease, except for the upcoming month. However, there will be no refund for the cost of the upcoming month or any previous months since the service has been planned, prepared, or executed.
          </p>
          <p className="text-gray-300 mb-4">
            Should cancellation and refund requests occur within 48 hours of initial purchase or renewal, a full refund for that service month can be provided. Past this 48-hour window, you are accountable for the current month's payment but will not be billed for future months.
          </p>
        </div>
      )
    },
    {
      id: "mode-of-refund",
      title: "Mode of Refund",
      content: (
        <div>
          <p className="text-gray-300 mb-4">
            Refunds by Swaget are processed based on the initial payment mode. Below are the refund methods initiated for various payment options:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-300">
            <li>
              <span className="font-medium text-yellow-400">Credit Card/Debit Card/Internet Banking:</span> Refunds will be credited back to the respective credit/debit card or internet banking account used for the payment. Swaget initiates refunds within a maximum of 5 working days. However, it might take up to 7-10 working days for the respective banks to process and reflect the refund in your credit/debit card statement or internet banking account. Contact your bank directly for any delays post-confirmation of the refund by Swaget.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "refund-time-frame",
      title: "Refund Time Frame",
      content: (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-700 border border-gray-600 rounded-lg">
              <thead>
                <tr className="bg-gray-600">
                  <th className="py-3 px-4 text-left border-b border-gray-600 font-medium text-yellow-400">Mode of Payment</th>
                  <th className="py-3 px-4 text-left border-b border-gray-600 font-medium text-yellow-400">Refund Mode</th>
                  <th className="py-3 px-4 text-left border-b border-gray-600 font-medium text-yellow-400">Refund Time (up to, from the date of order cancellation)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">Credit Card</td>
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">Credit Card</td>
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">10 Working Days</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">Net Banking</td>
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">Net Banking</td>
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">10 Working Days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">Debit Card</td>
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">Debit Card</td>
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">10 Working Days</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">UPI</td>
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">UPI</td>
                  <td className="py-3 px-4 border-b border-gray-600 text-gray-300">10 Working Days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-300">
            For any queries regarding the refund policy, please{" "}
            <a href="#contact" className="text-yellow-400 hover:text-yellow-500 font-medium">
              Contact Us
            </a>
            .
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
              <div className="text-2xl font-bold text-yellow-400">Swaget</div>
              <div className="ml-2 text-sm text-gray-400">Infocomm Solutions LLP</div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Services</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {/* Title Section */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-8 px-6">
            <h1 className="text-3xl font-bold text-gray-900">Refund Policy</h1>
            <p className="text-yellow-100 mt-2 text-sm">Last updated: March 23, 2025</p>
          </div>
          
          {/* Introduction */}
          <div className="p-6 border-b border-gray-700">
            <div className="mb-4">
              <h2 className="text-lg font-medium text-yellow-400 mb-2">Swaget Infocomm Solutions LLP – STANDARD REFUND POLICY</h2>
              <p className="text-gray-300 italic">
                This Policy is provided in English. In the event of any discrepancy between the English version and any translation provided for convenience, the English version will prevail.
              </p>
            </div>
          </div>
          
          {/* Accordion Sections */}
          <div>
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-700">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 focus:outline-none transition-colors"
                >
                  <h2 className="text-lg font-semibold text-yellow-400">{section.title}</h2>
                  <svg
                    className={`w-5 h-5 text-yellow-400 transform ${activeSection === section.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeSection === section.id && (
                  <div className="px-6 py-4 bg-gray-700">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Contact Card */}
        <div className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-600 border border-yellow-400 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900">Need clarification about our refund process?</h3>
          <p className="mt-2 text-gray-800">
            Our customer support team is available to assist you with any questions regarding our refund policy or to help process your refund request.
          </p>
          <div className="mt-4">
            <a href="mailto:info@swaget.in" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-yellow-600 bg-gray-900 hover:bg-gray-800 transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RefundPolicy;