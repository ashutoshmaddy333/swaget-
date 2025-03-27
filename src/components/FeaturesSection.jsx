import React from "react";
import {
  Server,
  Shield,
  Clock,
  Zap,
  Globe,
  BarChart,
  Headphones,
  ArrowUpCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: Server,
      title: "High-Performance Hosting",
      description:
        "Lightning-fast servers with SSD storage and optimized configurations for maximum speed.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description:
        "Free SSL certificates, DDoS protection, and automatic malware scanning to keep your site secure.",
    },
    {
      icon: Clock,
      title: "99.9% Uptime Guarantee",
      description:
        "We ensure your website stays online with our reliable infrastructure and redundant systems.",
    },
    {
      icon: Zap,
      title: "Creative Web Designing",
      description: "Get stunning, responsive, and user-friendly designs tailored to your brand's needs."
    }
    
    ,
    {
      icon: Globe,
      title: "Free Domain Name",
      description:
        "Get a free domain name for the first year with any annual hosting plan purchase.",
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description:
        "Our experienced support team is available around the clock to help you with any issues.",
    },
    {
      icon: BarChart,
      title: "Resource Management",
      description:
        "Easy-to-use control panel to manage your hosting resources and monitor performance.",
    },
    {
      icon: ArrowUpCircle,
      title: "Auto Updates",
      description:
        "Keep your applications and CMS up to date with automatic security updates.",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Web Developer",
      comment:
        "Switching to this hosting service was the best decision I made. The speed and support are unmatched!",
    },
    {
      name: "Jane Smith",
      role: "Small Business Owner",
      comment:
        "I love how easy it is to manage my website. The 24/7 support team is always there when I need help.",
    },
    {
      name: "Alex Johnson",
      role: "Freelance Designer",
      comment:
        "The free domain and 1-click installations saved me so much time. Highly recommend this service!",
    },
  ];

  const comparisonTable = [
    {
      feature: "Uptime Guarantee",
      ourService: "99.9%",
      competitorA: "99.5%",
      competitorB: "99.0%",
    },
    {
      feature: "Free SSL Certificate",
      ourService: "Yes",
      competitorA: "No",
      competitorB: "Yes",
    },
    {
      feature: "24/7 Support",
      ourService: "Yes",
      competitorA: "Yes",
      competitorB: "No",
    },
    {
      feature: "Free Domain",
      ourService: "Yes",
      competitorA: "No",
      competitorB: "No",
    },
    {
      feature: "1-Click Installations",
      ourService: "Yes",
      competitorA: "Yes",
      competitorB: "No",
    },
  ];

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Features Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-yellow-400 mb-4"
          >
            Why Choose Our Web Designing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            "Everything you need to design, build, and manage a stunning website—seamless, powerful, and user-friendly!" 🚀
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-6">
                <div className="p-3 bg-yellow-500 rounded-lg text-black">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-20"
        >
          <button className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
            Get Started Now
          </button>
        </motion.div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-yellow-400 text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-gray-800 rounded-xl shadow-lg"
              >
                <p className="text-gray-300 italic">"{testimonial.comment}"</p>
                <div className="mt-4">
                  <p className="text-yellow-400 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
        
      </div>
    </div>
  );
};

export default FeaturesSection;