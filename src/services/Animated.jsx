import React, { useState, useEffect } from 'react';
import { 
  Film, 
  Lightbulb, 
  Award, 
  Clock, 
  Search, 
  Heart, 
  BrainCircuit, 
  Check, 
  ChevronRight, 
  Users, 
  PlayCircle, 
  FolderOpen,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const AnimatedVideosPage = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    intro: false,
    process: false,
    services: false,
    qualities: false,
    portfolio: false,
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
            <Film className="text-yellow-500 mr-2" size={24} />
            <span className="text-xl font-bold text-yellow-500">MotionCraft</span>
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
              Bring your stories to life with <span className="text-yellow-500">animated videos</span>.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your ideas into captivating visual stories that engage, inspire, and drive results.
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition-colors flex items-center">
                Get Started <ChevronRight className="ml-2" size={18} />
              </button>
              <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-md font-medium hover:bg-yellow-500/10 transition-colors">
                View Portfolio
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
                <span className="text-yellow-500">Animated Videos</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Animation is the art of bringing static elements to life through motion. It’s a powerful tool for storytelling, marketing, and education, capable of conveying complex ideas in an engaging and memorable way.
              </p>
              <p className="text-gray-300">
                Our team of animators and storytellers specializes in creating custom animated videos that resonate with your audience. From concept to completion, we ensure every frame is crafted to perfection.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg bg-gray-800 border border-yellow-500/30 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="text-yellow-500" size={64} />
                </div>
                <div className="absolute top-2 right-2">
                  <Film className="text-yellow-500" size={24} />
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
            <h2 className="text-3xl font-bold mb-4">Our Animation <span className="text-yellow-500">Process</span></h2>
            <p className="text-gray-300">
              We follow a structured process to ensure your animated video is not only visually stunning but also aligns with your goals and resonates with your audience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Users size={32} className="text-yellow-500" />,
                title: "Discover",
                description: "We learn about your audience, goals, and brand to create a video that speaks directly to your viewers."
              },
              {
                icon: <BrainCircuit size={32} className="text-yellow-500" />,
                title: "Conceptualize",
                description: "Our team brainstorms ideas and develops a storyboard that aligns with your vision."
              },
              {
                icon: <PlayCircle size={32} className="text-yellow-500" />,
                title: "Animate",
                description: "We bring your story to life with smooth animations, vibrant visuals, and engaging effects."
              },
              {
                icon: <Sparkles size={32} className="text-yellow-500" />,
                title: "Refine",
                description: "We fine-tune every detail, from timing to transitions, to ensure the final product exceeds expectations."
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
            Our <span className="text-yellow-500">Animation Services</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FolderOpen className="text-yellow-500" size={24} />,
                title: "Explainer Videos",
                description: "Simplify complex ideas with engaging and easy-to-understand animations."
              },
              {
                icon: <PlayCircle className="text-yellow-500" size={24} />,
                title: "Motion Graphics",
                description: "Create dynamic visuals for ads, presentations, and social media."
              },
              {
                icon: <Users className="text-yellow-500" size={24} />,
                title: "Character Animation",
                description: "Bring characters to life with expressive movements and personalities."
              },
              {
                icon: <Film className="text-yellow-500" size={24} />,
                title: "Product Demos",
                description: "Showcase your product’s features and benefits with animated visuals."
              },
              {
                icon: <Lightbulb className="text-yellow-500" size={24} />,
                title: "Educational Videos",
                description: "Make learning fun and engaging with animated educational content."
              },
              {
                icon: <BrainCircuit className="text-yellow-500" size={24} />,
                title: "Logo Animations",
                description: "Add motion to your logo for a memorable brand identity."
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

      {/* Our Animations Are */}
      <section className={`py-16 bg-yellow-500/10 transition-all duration-700 ease-out ${fadeIn('qualities')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Animations <span className="text-yellow-500">Are</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { quality: "Creative", icon: <Lightbulb size={20} /> },
              { quality: "Engaging", icon: <Heart size={20} /> },
              { quality: "Dynamic", icon: <BrainCircuit size={20} /> },
              { quality: "Researched", icon: <Search size={20} /> },
              { quality: "Effective", icon: <Check size={20} /> },
              { quality: "Compelling", icon: <Sparkles size={20} /> },
              { quality: "On Time", icon: <Clock size={20} /> },
              { quality: "Award-Winning", icon: <Award size={20} /> }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 border border-yellow-500/20 p-4 rounded-lg flex items-center justify-center flex-col text-center hover:bg-yellow-500 hover:text-gray-900 transition-all group">
                <div className="mb-2 text-yellow-500 group-hover:text-gray-900 transition-colors">
                  {item.icon}
                </div>
                <p className="font-medium">{item.quality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className={`py-16 transition-all duration-700 ease-out ${fadeIn('portfolio')}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Featured <span className="text-yellow-500">Work</span>
            </h2>
            <a href="#" className="text-yellow-500 hover:text-yellow-400 flex items-center transition-colors">
              View all projects <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-full h-full bg-gradient-to-br from-gray-800 via-yellow-500/20 to-gray-800 opacity-70`}></div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-yellow-500/80 flex items-center justify-center transition-opacity">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Project {index + 1}</h3>
                    <p className="text-gray-900 mb-4">Explainer video, motion graphics, and character animation</p>
                    <a href="#" className="inline-flex items-center text-gray-900 font-medium border-b border-gray-900 hover:border-transparent transition-colors">
                      View Project <ArrowRight size={16} className="ml-1" />
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
              <h2 className="text-3xl font-bold mb-4">Ready to bring your <span className="text-yellow-500">story to life</span>?</h2>
              <p className="text-gray-300 mb-8">
                Let’s collaborate to create an animated video that captivates your audience and drives results. Our team is ready to turn your vision into reality.
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

export default AnimatedVideosPage;