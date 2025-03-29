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
    },
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
      name: "Amit Sharma",
      role: "Web Designer",
      comment:
        "The custom web design solutions provided by this team are outstanding. My website now looks professional, modern, and highly responsive!",
    },
    {
      name: "Priya Verma",
      role: "E-commerce Business Owner",
      comment:
        "Their web design expertise transformed my online store. The clean layout and fast loading speed have significantly improved my sales!",
    },
    {
      name: "Rajesh Iyer",
      role: "Freelance Developer",
      comment:
        "The UI/UX design enhancements they provided have taken my website to the next level. The attention to detail is truly remarkable!",
    },
  ];

  return (
    <section className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Header */}
        <header className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4"
          >
            Why Choose Our Web Designing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            "Everything you need to design, build, and manage a stunning website—seamless, powerful, and user-friendly!" 🚀
          </motion.p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-5 md:p-6 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-5 left-5 md:-top-6 md:left-6">
                <div className="p-2 md:p-3 bg-yellow-500 rounded-lg text-black">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
              <div className="pt-10 md:pt-8">
                <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">{feature.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16 md:mt-20"
        >
          <button 
            type="button"
            aria-label="Get started with our services"
            className="bg-yellow-500 text-black font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Get Started Now
          </button>
        </motion.div>

        {/* Testimonials */}
        <section className="mt-16 md:mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-6 md:mb-8">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-5 md:p-6 bg-gray-800 rounded-xl shadow-lg"
              >
                <blockquote className="text-gray-300 italic text-sm md:text-base">
                  "{testimonial.comment}"
                </blockquote>
                <figcaption className="mt-4">
                  <p className="text-yellow-400 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default FeaturesSection;