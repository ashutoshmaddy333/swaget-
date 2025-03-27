import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const recaptchaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Verify reCAPTCHA
      const captchaToken = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      // Add your form submission logic here
      console.log('Form submitted', formData, captchaToken);
    } catch (error) {
      console.error('Submission error', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
        {/* Contact Form Section */}
        <div className="bg-gray-900 p-10 text-white">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">Got A Question?</h2>
          <p className="text-gray-400 mb-6">
            We're here to help! Whether you have a question, 
            need support, or want to explore collaboration, 
            our team is ready to assist you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-800 border-b border-gray-700 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-800 border-b border-gray-700 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-800 border-b border-gray-700 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-800 border-b border-gray-700 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300 h-24 resize-none"
              required
            />

            <ReCAPTCHA
              ref={recaptchaRef}
              size="normal"
              theme="dark"
              sitekey="6LfhJ7opAAAAAJwarSFjIYcnMWm052wDgJ4hl7ER"
            />

            <button 
              type="submit" 
              className="w-full py-3 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-600 transition-colors flex items-center justify-center group"
            >
              <Send className="mr-2 group-hover:rotate-45 transition-transform" />
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="bg-gray-800 p-10 text-white">
          <h2 className="text-3xl font-bold mb-6 text-yellow-500">Contact Us</h2>
          
          <div className="space-y-6">
            {[
              { 
                icon: Phone, 
                title: 'Phone', 
                content: '08069409932' 
              },
              { 
                icon: Mail, 
                title: 'WhatsApp', 
                content: '+919935353574' 
              },
              { 
                icon: Mail, 
                title: 'E-Mail', 
                content: 'info@swaget.in' 
              },
              { 
                icon: MapPin, 
                title: 'Office Address (North)', 
                content: 'L-87 B, Saket, New Delhi - 110017' 
              },
              { 
                icon: MapPin, 
                title: 'Office Address (East)', 
                content: 'Newtown, Action Area I, Kolkata - 700135' 
              },
              { 
                icon: MapPin, 
                title: 'Registered Address', 
                content: 'Shop No 02 Pahari, Diggha Near Nakain Tiraha, Rohaniya, DLW Road, Varanasi, Uttar Pradesh - 221108' 
              }
            ].map(({ icon: Icon, title, content }) => (
              <div key={title} className="flex items-start">
                <Icon className="mr-4 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 font-medium">{title}</p>
                  <p className="text-gray-200">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;