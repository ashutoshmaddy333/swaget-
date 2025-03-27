import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const OrderForm = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('No file chosen');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    websitePlan: 'Startup Plan - 4999',
    address: '',
    district: '',
    pincode: '',
    gstNumber: '',
    domainName: '',
    couponCode: '',
    termsAccepted: false
  });
  
  const [fileUpload, setFileUpload] = useState(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileUpload(file);
    setSelectedFileName(file ? file.name : 'No file chosen');
  };
  
  const handleRecaptchaChange = (value) => {
    console.log("ReCAPTCHA Token:", value);
    setCaptchaVerified(!!value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please verify that you are not a robot');
      return;
    }
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    console.log('Form Data:', formData);
    console.log('File Upload:', fileUpload);
    alert('Form submitted successfully!');
  };

  const handlePlanSelect = (plan) => {
    setFormData({
      ...formData,
      websitePlan: plan
    });
    setDropdownOpen(false);
  };

  const plans = [
    'Startup Plan - 4999',
    'Pro Plan - 7999',
    'Enterprise Plan - 10999',
    'Business Plan - 14999',
    'Mega Plan - 19499',
    'Custom Plan - NA',
    'Logo Design - 999',
    'Digital Marketing - 3000',
    'Digital Marketing - 5000',
    'Digital Marketing - 8000'
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-10 animate-pulse"></div>
        
        {/* Main container */}
        <div className="relative bg-gray-900/90 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-blur-sm">
          {/* ORDER NOW Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-yellow-500/20 py-6 px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              ORDER NOW
            </h1>
            <div className="mt-2 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"></div>
            </div>
          </div>
          
          <div className="p-8">
            {/* Form Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-yellow-500 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                Fill the Details to Order
              </h2>
              <p className="mt-2 text-sm text-gray-400">Complete the form below to place your order</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">First Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">Last Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* Company & Plan Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Optional"
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="websitePlan" className="block text-sm font-medium text-gray-300">Website Plan <span className="text-red-500">*</span></label>
                  <div className="mt-1 relative">
                    <button
                      type="button"
                      className="relative w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-left text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span>{formData.websitePlan}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                    
                    {dropdownOpen && (
                      <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
                        <ul className="py-1 text-base">
                          {plans.map((plan, index) => (
                            <li
                              key={index}
                              className={`cursor-pointer px-4 py-3 hover:bg-gray-700 transition-colors duration-200 ${
                                formData.websitePlan === plan ? 'bg-yellow-500 text-black font-medium' : 'text-gray-300'
                              }`}
                              onClick={() => handlePlanSelect(plan)}
                            >
                              {plan}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="domainName" className="block text-sm font-medium text-gray-300">Domain Name</label>
                  <input
                    type="text"
                    id="domainName"
                    name="domainName"
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    value={formData.domainName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* Address Section */}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300">Address <span className="text-red-500">*</span></label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    required
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="district" className="block text-sm font-medium text-gray-300">District <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="district"
                      name="district"
                      required
                      className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      value={formData.district}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-300">Pincode <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      required
                      className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-300">GST Number</label>
                  <input
                    type="text"
                    id="gstNumber"
                    name="gstNumber"
                    placeholder="Optional"
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    value={formData.gstNumber}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="couponCode" className="block text-sm font-medium text-gray-300">Please Enter Coupon / Promo Code Here</label>
                  <input
                    type="text"
                    id="couponCode"
                    name="couponCode"
                    className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    value={formData.couponCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Please Upload GST/ ID Proof</label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-md hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
                  >
                    Choose File
                  </button>
                  <span className="ml-3 text-sm text-gray-400">{selectedFileName}</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              
              {/* reCAPTCHA */}
              <div className="flex justify-center my-6">
                <ReCAPTCHA
                  sitekey="6LfhJ7opAAAAAJwarSFjIYcnMWm052wDgJ4hl7ER"
                  onChange={handleRecaptchaChange}
                  theme="dark"
                />
              </div>
              
              {/* Terms and Conditions */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="termsAccepted"
                    name="termsAccepted"
                    type="checkbox"
                    className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-700 rounded bg-gray-800"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="termsAccepted" className="font-medium text-gray-300">
                    I accept Terms & Condition, Refund Policy & Privacy Policy
                  </label>
                </div>
              </div>
              
              {/* Note */}
              <div className="text-sm text-gray-400 italic">
                Note: These Details are for invoice purpose, We maintain your privacy
              </div>
              
              {/* Submit Button */}
              <div className="pt-6 flex justify-center">
                <button
                  type="submit"
                  className="px-10 py-3.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-md shadow-lg hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-500/40"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;