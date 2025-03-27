import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const AboutUs = () => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Throttle mouse move and scroll events
  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 50);

    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 50);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax effect for heading
  const calcHeadingTransform = () => {
    const x = (mousePosition.x / window.innerWidth - 0.5) * 20;
    const y = (mousePosition.y / window.innerHeight - 0.5) * 10;
    return `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-hidden">
      {/* Optimized Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-yellow-500 opacity-10 rounded-full animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                willChange: 'transform',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* 3D Animated Title */}
        <div 
          className="text-center mb-16 glitter-container"
          style={{ transform: calcHeadingTransform(), willChange: 'transform' }}
        >
          <h2 className="text-5xl font-extrabold mb-8 glowing-text gradient-text">
            About Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Main content with hover effect */}
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-8 rounded-2xl shadow-neon hover-float transition-all duration-500 border border-gray-700">
          <p className="mb-6 text-xl font-light leading-relaxed">
            Welcome to Swaget Infocomm Solutions!
          </p>
          <p className="mb-8 text-gray-300 hover-brighten">
            At Swaget Infocomm Solutions, we are passionate about harnessing the power of technology to transform businesses and elevate their digital presence. As a leading IT consultancy and web designing company, we specialize in delivering innovative solutions that propel our clients towards success.
          </p>
          
          <div className="space-y-12">
            {/* Section with 3D effect on hover */}
            <div className="transform-section">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 section-title">
                Our Mission:
              </h3>
              <p className="mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600 hover-brighten">
                We strive to empower businesses of all sizes with cutting-edge technology solutions and exceptional web designs. Our mission is to provide personalized services that drive growth, enhance efficiency, and create a lasting impact in the digital landscape.
              </p>
            </div>
            
            <div className="transform-section">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 section-title">
                Our Expertise:
              </h3>
              <p className="mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600 hover-brighten">
                With a team of highly skilled professionals, we bring together a diverse range of expertise in IT consultancy and web designing. From understanding your business goals to implementing strategic solutions, we have the knowledge and experience to guide you every step of the way.
              </p>
            </div>
            
            <div className="transform-section">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 section-title">
                IT Consultancy:
              </h3>
              <p className="mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600 hover-brighten">
                We offer comprehensive IT consultancy services tailored to your specific needs. Whether you require assistance in infrastructure setup, network security, cloud computing, or software solutions, our experts will analyze your requirements and provide customized recommendations to optimize your IT environment.
              </p>
            </div>
            
            <div className="transform-section">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 section-title">
                Web Designing:
              </h3>
              <p className="mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600 hover-brighten">
                Our web designing team is dedicated to crafting visually stunning and user-friendly websites that leave a lasting impression. We understand that your website is a vital tool for attracting customers and building credibility. With meticulous attention to detail, we create captivating designs that reflect your brand identity and deliver an exceptional user experience.
              </p>
            </div>
            
            <div className="transform-section">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 section-title">
                Our Approach:
              </h3>
              <p className="mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600 hover-brighten">
                At Swaget Infocomm Solutions, we believe in building strong partnerships with our clients. We prioritize open communication, collaboration, and transparency throughout the entire project lifecycle. Our approach is centered around understanding your unique business needs, goals, and target audience, allowing us to create tailor-made solutions that drive tangible results.
              </p>
            </div>
            
            <div className="transform-section">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 section-title">
                Why Choose Us:
              </h3>
              <ul className="mb-6 space-y-4 pl-4 border-l-4 border-yellow-600">
                <li className="hover-card">
                  <span className="font-semibold text-yellow-300">Experience:</span> 
                  <span className="text-gray-300"> With years of industry experience, we bring a wealth of knowledge and insights to every project we undertake.</span>
                </li>
                <li className="hover-card">
                  <span className="font-semibold text-yellow-300">Customized Solutions:</span> 
                  <span className="text-gray-300"> We understand that every business is unique, and we pride ourselves on delivering personalized solutions that align with your specific requirements.</span>
                </li>
                <li className="hover-card">
                  <span className="font-semibold text-yellow-300">Quality Assurance:</span> 
                  <span className="text-gray-300"> We have a strict quality assurance process in place to ensure that our deliverables meet the highest standards of excellence.</span>
                </li>
                <li className="hover-card">
                  <span className="font-semibold text-yellow-300">Timely Delivery:</span> 
                  <span className="text-gray-300"> We value your time and strive to deliver projects within agreed-upon deadlines, without compromising on quality.</span>
                </li>
                <li className="hover-card">
                  <span className="font-semibold text-yellow-300">Customer Satisfaction:</span> 
                  <span className="text-gray-300"> Our dedicated team is committed to your satisfaction. We listen attentively, address your concerns promptly, and go the extra mile to exceed your expectations.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 transform-section">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 section-title">
              Get in Touch:
            </h3>
            <p className="mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600 hover-brighten">
              Ready to take your business to new heights? Contact us today to discuss your IT consultancy and web designing needs. We look forward to partnering with you on your journey towards digital success.
            </p>
          </div>
          
          <p className="mb-2 text-gray-300 hover-brighten">
            Thank you for considering Swaget Infocomm Solutions as your trusted technology partner.
          </p>
          
          <div className="mt-8 flex items-end">
            <div className="signature-container">
              <p className="text-gray-400">
                Sincerely,
              </p>
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 text-xl">
                Dhananjay Shukla
              </p>
              <p className="text-yellow-500">
                Founder & CEO, Swaget Infocomm Solutions
              </p>
            </div>
            <div className="ml-4 signature-stamp">
              <div className="w-16 h-16 rounded-full bg-yellow-600 bg-opacity-20 flex items-center justify-center border border-yellow-500">
                <span className="text-xl font-bold text-yellow-500">SIS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3D Cards Section with advanced effects */}
      <div className="py-16">
        <h2 className="text-4xl font-extrabold mb-16 text-center glowing-text gradient-text">
          Our Core Values
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl mx-auto perspective-3d">
          {/* Left Card - Vision with advanced 3D effects */}
          <div 
            className="w-full md:w-1/3 h-96 perspective-card"
            style={{
              transform: `translateZ(${scrollY * 0.05}px) rotateY(${(mousePosition.x / window.innerWidth - 0.5) * 10}deg)`
            }}
          >
            <div className="advanced-flip-card w-full h-full">
              <div 
                className={`advanced-flip-card-inner w-full h-full ${isHoveredLeft ? 'is-flipped' : ''}`}
                onMouseEnter={() => setIsHoveredLeft(true)}
                onMouseLeave={() => setIsHoveredLeft(false)}
              >
                <div className="advanced-flip-card-front w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-600 p-6 shadow-neon">
                  <div className="h-full flex flex-col justify-center items-center relative card-content-3d">
                    <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-yellow-500 opacity-5 glow-pulse"></div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-6 card-title">Our Vision</h3>
                    <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 flex items-center justify-center shadow-xl">
                      <span className="text-4xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">👁️</span>
                    </div>
                    <p className="text-center text-yellow-300 hover-pulse">Hover to discover</p>
                    <div className="card-shine"></div>
                  </div>
                </div>
                
                <div className="advanced-flip-card-back w-full h-full rounded-2xl shadow-neon">
                  <div className="h-full bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-800 p-8 rounded-2xl card-content-3d">
                    <div className="h-full flex flex-col justify-center relative">
                      <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-yellow-500 opacity-10 glow-pulse"></div>
                      <h3 className="text-2xl font-bold text-white mb-6 card-title text-center">Our Vision</h3>
                      <p className="text-white text-center leading-relaxed">
                        Our vision has always been to strive and find newer challenges in the field of Web development and use technology and knowledge to the fullest to create solutions for our customers, partners and professionals like you.
                      </p>
                      <div className="absolute bottom-4 right-4">
                        <div className="w-8 h-8 rounded-full bg-yellow-200 bg-opacity-20 flex items-center justify-center">
                          <span className="text-sm text-white">SIS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Image with advanced 3D effects */}
          <div 
            className="w-full md:w-1/3 h-96 flex items-center justify-center perspective-card"
            style={{
              transform: `translateZ(${scrollY * 0.1}px)`
            }}
          >
            <div 
              className="w-64 h-64 rounded-full logo-container"
              style={{
                transform: `rotateX(${(mousePosition.y / window.innerHeight - 0.5) * -20}deg) rotateY(${(mousePosition.x / window.innerWidth - 0.5) * 20}deg)`
              }}
            >
              <div className="logo-inner w-full h-full rounded-full p-2">
                <div className="w-full h-full rounded-full bg-gray-800 p-8 border-4 border-yellow-500 border-opacity-50 shadow-neon overflow-hidden flex items-center justify-center">
                  <img 
                    src="/public/swaget.jpg"
                    alt="Swaget Infocomm Logo" 
                    className="w-full h-full object-cover rounded-full image-tilt"
                  />
                  <div className="absolute inset-0 logo-glow"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Card - Mission with advanced 3D effects */}
          <div 
            className="w-full md:w-1/3 h-96 perspective-card"
            style={{
              transform: `translateZ(${scrollY * 0.05}px) rotateY(${(mousePosition.x / window.innerWidth - 0.5) * -10}deg)`
            }}
          >
            <div className="advanced-flip-card w-full h-full">
              <div 
                className={`advanced-flip-card-inner w-full h-full ${isHoveredRight ? 'is-flipped' : ''}`}
                onMouseEnter={() => setIsHoveredRight(true)}
                onMouseLeave={() => setIsHoveredRight(false)}
              >
                <div className="advanced-flip-card-front w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-600 p-6 shadow-neon">
                  <div className="h-full flex flex-col justify-center items-center relative card-content-3d">
                    <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-yellow-500 opacity-5 glow-pulse"></div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-6 card-title">Our Mission</h3>
                    <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 flex items-center justify-center shadow-xl">
                      <span className="text-4xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">🚀</span>
                    </div>
                    <p className="text-center text-yellow-300 hover-pulse">Hover to discover</p>
                    <div className="card-shine"></div>
                  </div>
                </div>
                
                <div className="advanced-flip-card-back w-full h-full rounded-2xl shadow-neon">
                  <div className="h-full bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-800 p-8 rounded-2xl card-content-3d">
                    <div className="h-full flex flex-col justify-center relative">
                      <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-yellow-500 opacity-10 glow-pulse"></div>
                      <h3 className="text-2xl font-bold text-white mb-6 card-title text-center">Our Mission</h3>
                      <p className="text-white text-center leading-relaxed">
                        Each of us has an individual mission / goal and we endeavor to surpass such goals, so that we collectively can build trust for the people who come to us for their IT needs while searching for web development and SEO companies.
                      </p>
                      <div className="absolute bottom-4 right-4">
                        <div className="w-8 h-8 rounded-full bg-yellow-200 bg-opacity-20 flex items-center justify-center">
                          <span className="text-sm text-white">SIS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  @keyframes shine {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes glitter {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.5); }
    50% { box-shadow: 0 0 40px rgba(234, 179, 8, 0.8); }
  }
  
  @keyframes rotateAround {
    0% { transform: rotate(0deg) translateX(3px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(3px) rotate(-360deg); }
  }
  
  .animate-float {
    animation: float 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .hover-float:hover {
    transform: translateY(-8px);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .gradient-text {
    background: linear-gradient(to right, #eab308, #facc15, #eab308);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 200% auto;
    animation: shine 3s linear infinite;
  }
  
  .glowing-text {
    text-shadow: 0 0 8px rgba(234, 179, 8, 0.6), 0 0 20px rgba(234, 179, 8, 0.4);
  }
  
  .shadow-neon {
    box-shadow: 0 0 15px rgba(234, 179, 8, 0.3), 0 0 30px rgba(234, 179, 8, 0.1);
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .shadow-yellow {
    box-shadow: 0 0 10px rgba(234, 179, 8, 0.2);
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hover-brighten:hover {
    color: #f8fafc;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hover-pulse:hover {
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .glow-pulse {
    animation: glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .perspective-3d {
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  
  .perspective-card {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .transform-section:hover .section-title {
    transform: translateX(10px);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hover-card {
    padding: 0.75rem;
    border-radius: 0.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hover-card:hover {
    background-color: rgba(234, 179, 8, 0.1);
    transform: translateX(5px);
  }
  
  .glitter-container::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 10px;
    background-image: radial-gradient(circle, rgba(234, 179, 8, 0.8) 10%, transparent 70%);
    background-size: 8px 8px;
    animation: glitter 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .signature-container {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .signature-container:hover {
    transform: translateY(-5px);
  }
  
  .signature-stamp {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .signature-stamp:hover {
    transform: rotate(15deg);
  }
  
  /* Advanced 3D flip card styles */
  .advanced-flip-card {
    perspective: 1500px;
  }
  
  .advanced-flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }
  
  .advanced-flip-card-inner.is-flipped {
    transform: rotateY(180deg);
  }
  
  .advanced-flip-card-front,
  .advanced-flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
  
  .advanced-flip-card-front {
    z-index: 1;
  }
  
  .advanced-flip-card-back {
    transform: rotateY(180deg);
  }
  
  .card-content-3d {
    transform: translateZ(30px);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .advanced-flip-card:hover .card-content-3d {
    transform: translateZ(50px);
  }
  
  .card-title {
    position: relative;
    text-shadow: 0 0 10px rgba(234, 179, 8, 0.5);
  }
  
  .card-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(234, 179, 8, 0.8), transparent);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .advanced-flip-card:hover .card-title::after {
    width: 80%;
  }
  
  .card-shine {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 40%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.05) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 200%;
    animation: shine 3s linear infinite;
  }
  
  .logo-container {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .logo-inner {
    transform-style: preserve-3d;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .logo-container:hover .logo-inner {
    transform: scale(1.05);
  }
  
  .logo-glow {
    border-radius: 50%;
    box-shadow: 0 0 30px rgba(234, 179, 8, 0.6);
    animation: glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .image-tilt {
    transform-style: preserve-3d;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .logo-container:hover .image-tilt {
    transform: translateZ(20px) rotate(5deg);
  }
  
  .section-title {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    display: inline-block;
  }
  
  .section-title::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: rgba(234, 179, 8, 0.5);
    border-radius: 50%;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .transform-section:hover .section-title::before {
    opacity: 1;
  }
`;

const AboutUsWithStyles = () => (
  <>
    <style>{styles}</style>
    <AboutUs />
  </>
);

export default AboutUsWithStyles;