import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ReCAPTCHA from "react-google-recaptcha";
import { Mail, Phone, User, FileText, ChevronDown, Upload } from 'lucide-react';

const SupportForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        department: "General",
        priority: "Low",
        message: "",
        file: null,
        recaptcha: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleRecaptchaChange = (value) => {
        setFormData({ ...formData, recaptcha: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (
        <>
            <Helmet>
                <title>Customer Support | Swaget Digital - Technical Assistance</title>
                <meta 
                    name="description" 
                    content="Contact Swaget Digital support team for technical assistance with email issues, domain problems, or general inquiries. We're here to help!" 
                />
                <meta 
                    name="keywords" 
                    content="website support, technical help, email issues, domain problems, customer service" 
                />
                <meta property="og:title" content="Customer Support | Swaget Digital" />
                <meta property="og:description" content="Get technical support for your website, email, or domain issues from our expert team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://swaget.in/support" />
                <link rel="canonical" href="https://swaget.in/support" />
                
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Customer Support",
                        "description": "Technical support form for Swaget Digital services",
                        "potentialAction": {
                            "@type": "ContactPage",
                            "url": "https://swaget.in/support"
                        }
                    })}
                </script>
            </Helmet>

            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center p-4">
                <div className="bg-gray-800 bg-opacity-90 p-10 rounded-2xl shadow-2xl max-w-6xl w-full mx-auto">
                    <h1 className="text-4xl font-extrabold mb-8 text-center text-yellow-400 tracking-tight">
                        Customer Support Request
                    </h1>
                    
                    <form onSubmit={handleSubmit} className="space-y-6" itemScope itemType="https://schema.org/ContactPage">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative">
                                <label htmlFor="name" className="block mb-3 text-yellow-300 font-semibold flex items-center">
                                    <User className="mr-2 text-yellow-400" size={20} />
                                    Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-700 text-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                                        required
                                        placeholder="Enter your full name"
                                        itemProp="name"
                                    />
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                </div>
                            </div>
                            
                            <div className="relative">
                                <label htmlFor="email" className="block mb-3 text-yellow-300 font-semibold flex items-center">
                                    <Mail className="mr-2 text-yellow-400" size={20} />
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-700 text-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                                        required
                                        placeholder="Enter your email address"
                                        itemProp="email"
                                    />
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative">
                                <label htmlFor="phone" className="block mb-3 text-yellow-300 font-semibold flex items-center">
                                    <Phone className="mr-2 text-yellow-400" size={20} />
                                    Phone
                                </label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-700 text-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                                        required
                                        placeholder="Enter your phone number"
                                        itemProp="telephone"
                                    />
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                </div>
                            </div>
                            
                            <div className="relative">
                                <label htmlFor="subject" className="block mb-3 text-yellow-300 font-semibold flex items-center">
                                    <FileText className="mr-2 text-yellow-400" size={20} />
                                    Subject
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-700 text-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                                        required
                                        placeholder="Enter support request subject"
                                        itemProp="subject"
                                    />
                                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="department" className="block mb-3 text-yellow-300 font-semibold flex items-center">
                                    <ChevronDown className="mr-2 text-yellow-400" size={20} />
                                    Department
                                </label>
                                <select
                                    id="department"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-700 text-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 appearance-none"
                                    aria-label="Select department"
                                >
                                    <option value="General">General</option>
                                    <option value="Email Creation">Email Creation</option>
                                    <option value="Email issue">Email issue</option>
                                    <option value="Domain">Domain</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Designing & Development">Designing & Development</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-3 text-yellow-300 font-semibold">
                                    Priority Level
                                </label>
                                <div className="flex gap-4 justify-between" role="radiogroup" aria-labelledby="priority-label">
                                    {["Low", "Medium", "High"].map((level) => (
                                        <div key={level} className="flex-1">
                                            <input
                                                type="radio"
                                                id={`priority-${level}`}
                                                name="priority"
                                                value={level}
                                                checked={formData.priority === level}
                                                onChange={handleChange}
                                                className="hidden peer"
                                                aria-labelledby={`priority-${level}-label`}
                                            />
                                            <label 
                                                htmlFor={`priority-${level}`} 
                                                id={`priority-${level}-label`}
                                                className={`
                                                    block w-full text-center p-3 rounded-xl cursor-pointer transition-all duration-300
                                                    ${formData.priority === level 
                                                        ? 'bg-yellow-500 text-gray-900 font-bold' 
                                                        : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'}
                                                `}
                                            >
                                                {level}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-3 text-yellow-300 font-semibold">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-4 bg-gray-700 text-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                                rows="6"
                                placeholder="Describe your support request in detail..."
                                required
                                itemProp="description"
                            ></textarea>
                        </div>

                        <div>
                            <label htmlFor="file" className="block mb-3 text-yellow-300 font-semibold flex items-center">
                                <Upload className="mr-2 text-yellow-400" size={20} />
                                File Upload
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    aria-label="Upload support file"
                                />
                                <div className="flex items-center w-full p-4 bg-gray-700 text-yellow-400 rounded-xl border-2 border-dashed border-gray-600 hover:border-yellow-500 transition-all duration-300">
                                    {formData.file ? (
                                        <span className="truncate">{formData.file.name}</span>
                                    ) : (
                                        <span className="text-gray-400">Click to select a file</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mb-6">
                            <ReCAPTCHA
                                sitekey="6LfhJ7opAAAAAJwarSFjIYcnMWm052wDgJ4hl7ER"
                                onChange={handleRecaptchaChange}
                                theme="dark"
                                aria-label="Verify you are not a robot"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full p-4 bg-yellow-500 text-gray-900 font-bold text-xl rounded-xl 
                            hover:bg-yellow-400 transform hover:scale-105 transition duration-300 
                            shadow-xl shadow-yellow-500/30 
                            disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!formData.recaptcha}
                            aria-label="Submit support request"
                        >
                            Submit Support Request
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SupportForm;