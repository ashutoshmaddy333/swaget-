import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Lightbulb,
  Award,
  Clock,
  Search,
  Heart,
  BrainCircuit,
  Check,
  ChevronRight,
  Users,
  PenTool,
  FolderOpen,
  Sparkles,
  ArrowRight,
  BarChart,
  Target,
  Mail,
  Globe,
  Smartphone,
  DollarSign,
  Shield,
  ThumbsUp,
  PieChart,
  Zap
} from 'lucide-react';

const DigitalMarketingPage = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    intro: false,
    process: false,
    services: false,
    strategies: false,
    testimonials: false,
    caseStudies: false,
    cta: false
  });

  useEffect(() => {
    // Staggered animation on page load
    const timeouts = [];
    
    Object.keys(isVisible).forEach((key, index) => {
      const timeout = setTimeout(() => {
        setIsVisible(prev => ({ ...prev, [key]: true }));
      }, index * 300);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  const fadeIn = (section) => {
    return isVisible[section] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      {/* Header/Navigation */}
      <header className="bg-gray-900 border-b border-yellow-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <TrendingUp className="text-yellow-500 mr-2" size={24} />
            <span className="text-xl font-bold text-yellow-500">MarketMasters</span>
          </div>
         
          <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative bg-gray-800 py-20 overflow-hidden transition-all duration-700 ease-out ${fadeIn('hero')}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Grow your business with <span className="text-yellow-500">data-driven</span> digital marketing.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We craft tailored strategies to boost your online presence, drive traffic, and convert leads into loyal customers.
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition-colors flex items-center">
                Get Started <ChevronRight className="ml-2" size={18} />
              </button>
              <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-md font-medium hover:bg-yellow-500/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={`py-16 transition-all duration-700 ease-out ${fadeIn('intro')}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-yellow-500">Digital Marketing</span> that delivers results.
              </h2>
              <p className="text-gray-300 mb-6">
                In today’s digital-first world, having a strong online presence is crucial. Our team specializes in creating and executing strategies that drive measurable results, from SEO and social media to paid advertising and email marketing.
              </p>
              <p className="text-gray-300">
                We combine creativity, analytics, and cutting-edge tools to ensure your brand stands out and achieves its goals.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg bg-gray-800 border border-yellow-500/30 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart className="text-yellow-500" size={64} />
                </div>
                <div className="absolute top-2 right-2">
                  <TrendingUp className="text-yellow-500" size={24} />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 rounded-lg p-4 shadow-lg">
                <Lightbulb className="text-gray-900" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className={`py-16 bg-gray-800/50 transition-all duration-700 ease-out ${fadeIn('process')}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our <span className="text-yellow-500">Process</span></h2>
            <p className="text-gray-300">
              We follow a proven process to ensure your digital marketing strategy is effective, scalable, and aligned with your business goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Search size={32} className="text-yellow-500" />,
                title: "Research",
                description: "We analyze your industry, competitors, and audience to identify opportunities."
              },
              {
                icon: <Target size={32} className="text-yellow-500" />,
                title: "Strategy",
                description: "We develop a customized plan tailored to your goals and budget."
              },
              {
                icon: <Zap size={32} className="text-yellow-500" />,
                title: "Execution",
                description: "We implement campaigns across multiple channels for maximum impact."
              },
              {
                icon: <BarChart size={32} className="text-yellow-500" />,
                title: "Optimization",
                description: "We continuously monitor and refine campaigns for better performance."
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-1 w-12 bg-yellow-500 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`py-16 transition-all duration-700 ease-out ${fadeIn('services')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="text-yellow-500" size={24} />,
                title: "SEO & Content Marketing",
                description: "Boost your organic traffic with optimized content and proven SEO strategies."
              },
              {
                icon: <Smartphone className="text-yellow-500" size={24} />,
                title: "Social Media Marketing",
                description: "Engage your audience and grow your brand on platforms like Instagram, Facebook, and LinkedIn."
              },
              {
                icon: <DollarSign className="text-yellow-500" size={24} />,
                title: "PPC Advertising",
                description: "Drive instant results with targeted pay-per-click campaigns on Google and social media."
              },
              {
                icon: <Mail className="text-yellow-500" size={24} />,
                title: "Email Marketing",
                description: "Nurture leads and retain customers with personalized email campaigns."
              },
              {
                icon: <PieChart className="text-yellow-500" size={24} />,
                title: "Analytics & Reporting",
                description: "Track performance and make data-driven decisions with detailed insights."
              },
              {
                icon: <Shield className="text-yellow-500" size={24} />,
                title: "Reputation Management",
                description: "Build and protect your brand’s online reputation with proactive strategies."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors group">
                <div className="mb-4 bg-gray-700 inline-block p-3 rounded-md group-hover:bg-yellow-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <a href="#" className="inline-flex items-center mt-4 text-yellow-500 hover:text-yellow-400 transition-colors">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className={`py-16 bg-yellow-500/10 transition-all duration-700 ease-out ${fadeIn('strategies')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Proven <span className="text-yellow-500">Strategies</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="text-yellow-500" size={24} />,
                title: "Data-Driven Approach",
                description: "We use analytics to identify trends, optimize campaigns, and maximize ROI."
              },
              {
                icon: <Users className="text-yellow-500" size={24} />,
                title: "Audience Targeting",
                description: "We create personalized campaigns to reach the right people at the right time."
              },
              {
                icon: <Sparkles className="text-yellow-500" size={24} />,
                title: "Creative Content",
                description: "We craft compelling content that resonates with your audience and drives engagement."
              }
            ].map((strategy, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="mb-4">{strategy.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{strategy.title}</h3>
                <p className="text-gray-400">{strategy.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-1 w-12 bg-yellow-500 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-16 transition-all duration-700 ease-out ${fadeIn('testimonials')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our <span className="text-yellow-500">Clients Say</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "MarketMasters transformed our online presence. Our traffic has doubled, and our sales have never been better!",
                author: "John Doe, CEO of TechCorp"
              },
              {
                quote: "Their team is incredibly professional and knowledgeable. They delivered results beyond our expectations.",
                author: "Jane Smith, Founder of CreativeStudio"
              },
              {
                quote: "We’ve seen a significant increase in engagement and conversions since partnering with MarketMasters.",
                author: "Mike Johnson, Marketing Director at HealthPlus"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="mb-4">
                  <ThumbsUp className="text-yellow-500" size={24} />
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-gray-400 font-medium">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={`py-16 bg-gray-800/50 transition-all duration-700 ease-out ${fadeIn('caseStudies')}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Our <span className="text-yellow-500">Case Studies</span>
            </h2>
            <a href="#" className="text-yellow-500 hover:text-yellow-400 flex items-center transition-colors">
              View all case studies <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-full h-full bg-gradient-to-br from-gray-800 via-yellow-500/20 to-gray-800 opacity-70`}></div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-yellow-500/80 flex items-center justify-center transition-opacity">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Case Study {index + 1}</h3>
                    <p className="text-gray-900 mb-4">How we helped a client achieve 3x ROI in 6 months.</p>
                    <a href="#" className="inline-flex items-center text-gray-900 font-medium border-b border-gray-900 hover:border-transparent transition-colors">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 transition-all duration-700 ease-out ${fadeIn('cta')}`}>
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-yellow-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to <span className="text-yellow-500">grow your business</span>?</h2>
              <p className="text-gray-300 mb-8">
                Let’s create a digital marketing strategy that drives real results. Our team is ready to help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition-colors flex items-center justify-center">
                  Start Your Project <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-md font-medium hover:bg-yellow-500/10 transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    </div>
  );
};

export default DigitalMarketingPage;