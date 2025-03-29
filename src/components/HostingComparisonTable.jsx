import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const AboutUs = () => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = throttle(() => {
      setIsMobile(window.innerWidth < 768);
    }, 200);

    const handleMouseMove = throttle((e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    }, 100);

    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const calcHeadingTransform = () => {
    if (isMobile) return '';
    const x = (mousePosition.x / window.innerWidth - 0.5) * 20;
    const y = (mousePosition.y / window.innerHeight - 0.5) * 10;
    return `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
  };

  const handleCardClick = (side) => {
    if (isMobile) {
      if (side === 'left') {
        setIsHoveredLeft(!isHoveredLeft);
        setIsHoveredRight(false);
      } else {
        setIsHoveredRight(!isHoveredRight);
        setIsHoveredLeft(false);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-hidden">
      {/* Background Elements (reduced for mobile) */}
      {!isMobile && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(5)].map((_, i) => (
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
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        {/* 3D Animated Title */}
        <section 
          className="text-center mb-12 md:mb-16 glitter-container"
          style={{ transform: calcHeadingTransform() }}
          aria-label="About Us section"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 glowing-text gradient-text">
            About Us
          </h1>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 mx-auto rounded-full"></div>
        </section>

        {/* Main content */}
        <article className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-neon transition-all duration-500 border border-gray-700">
          <p className="mb-4 md:mb-6 text-lg md:text-xl font-light leading-relaxed">
            Welcome to Swaget Infocomm Solutions!
          </p>
          <p className="mb-6 md:mb-8 text-gray-300">
            At Swaget Infocomm Solutions, we are passionate about harnessing the power of technology to transform businesses and elevate their digital presence. As a leading IT consultancy and web designing company, we specialize in delivering innovative solutions that propel our clients towards success.
          </p>
          
          <div className="space-y-8 md:space-y-12">
            {/* Mission section */}
            <section className="transform-section">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-3 md:mb-4 section-title">
                Our Mission:
              </h2>
              <p className="mb-4 md:mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600">
                We strive to empower businesses of all sizes with cutting-edge technology solutions and exceptional web designs. Our mission is to provide personalized services that drive growth, enhance efficiency, and create a lasting impact in the digital landscape.
              </p>
            </section>
            
            {/* Expertise section */}
            <section className="transform-section">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-3 md:mb-4 section-title">
                Our Expertise:
              </h2>
              <p className="mb-4 md:mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600">
                With a team of highly skilled professionals, we bring together a diverse range of expertise in IT consultancy and web designing. From understanding your business goals to implementing strategic solutions, we have the knowledge and experience to guide you every step of the way.
              </p>
            </section>
            
            {/* IT Consultancy section */}
            <section className="transform-section">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-3 md:mb-4 section-title">
                IT Consultancy:
              </h2>
              <p className="mb-4 md:mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600">
                We offer comprehensive IT consultancy services tailored to your specific needs. Whether you require assistance in infrastructure setup, network security, cloud computing, or software solutions, our experts will analyze your requirements and provide customized recommendations to optimize your IT environment.
              </p>
            </section>
            
            {/* Web Designing section */}
            <section className="transform-section">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-3 md:mb-4 section-title">
                Web Designing:
              </h2>
              <p className="mb-4 md:mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600">
                Our web designing team is dedicated to crafting visually stunning and user-friendly websites that leave a lasting impression. We understand that your website is a vital tool for attracting customers and building credibility. With meticulous attention to detail, we create captivating designs that reflect your brand identity and deliver an exceptional user experience.
              </p>
            </section>
            
            {/* Approach section */}
            <section className="transform-section">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-3 md:mb-4 section-title">
                Our Approach:
              </h2>
              <p className="mb-4 md:mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600">
                At Swaget Infocomm Solutions, we believe in building strong partnerships with our clients. We prioritize open communication, collaboration, and transparency throughout the entire project lifecycle. Our approach is centered around understanding your unique business needs, goals, and target audience, allowing us to create tailor-made solutions that drive tangible results.
              </p>
            </section>
            
            {/* Why Choose Us section */}
            <section className="transform-section">
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-3 md:mb-4 section-title">
                Why Choose Us:
              </h2>
              <ul className="mb-4 md:mb-6 space-y-3 md:space-y-4 pl-4 border-l-4 border-yellow-600">
                {[
                  "Experience: With years of industry experience, we bring a wealth of knowledge and insights to every project we undertake.",
                  "Customized Solutions: We understand that every business is unique, and we pride ourselves on delivering personalized solutions that align with your specific requirements.",
                  "Quality Assurance: We have a strict quality assurance process in place to ensure that our deliverables meet the highest standards of excellence.",
                  "Timely Delivery: We value your time and strive to deliver projects within agreed-upon deadlines, without compromising on quality.",
                  "Customer Satisfaction: Our dedicated team is committed to your satisfaction. We listen attentively, address your concerns promptly, and go the extra mile to exceed your expectations."
                ].map((item, index) => (
                  <li key={index} className="hover-card">
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          {/* Get in Touch section */}
          <section className="mt-8 md:mt-12 transform-section">
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-3 md:mb-4 section-title">
              Get in Touch:
            </h2>
            <p className="mb-4 md:mb-6 text-gray-300 pl-4 border-l-4 border-yellow-600">
              Ready to take your business to new heights? Contact us today to discuss your IT consultancy and web designing needs. We look forward to partnering with you on your journey towards digital success.
            </p>
          </section>
          
          <p className="mb-2 text-gray-300">
            Thank you for considering Swaget Infocomm Solutions as your trusted technology partner.
          </p>
          
          <div className="mt-6 md:mt-8 flex items-end">
            <div className="signature-container">
              <p className="text-gray-400">
                Sincerely,
              </p>
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 text-lg md:text-xl">
                Dhananjay Shukla
              </p>
              <p className="text-yellow-500 text-sm md:text-base">
                Founder & CEO, Swaget Infocomm Solutions
              </p>
            </div>
            <div className="ml-4 signature-stamp">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-600 bg-opacity-20 flex items-center justify-center border border-yellow-500">
                <span className="text-lg md:text-xl font-bold text-yellow-500">SIS</span>
              </div>
            </div>
          </div>
        </article>
      </div>
      
      {/* 3D Cards Section */}
      <section className="py-12 md:py-16" aria-label="Our Core Values">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-12 md:mb-16 text-center glowing-text gradient-text">
          Our Core Values
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 max-w-5xl mx-auto perspective-3d">
          {/* Left Card - Vision */}
          <article 
            className="w-full md:w-1/3 h-64 md:h-96 perspective-card"
            style={{
              transform: isMobile ? '' : `translateZ(${scrollY * 0.05}px) rotateY(${(mousePosition.x / window.innerWidth - 0.5) * 10}deg)`
            }}
            onClick={() => handleCardClick('left')}
            onTouchStart={() => handleCardClick('left')}
            aria-label="Our Vision card"
          >
            <div className="advanced-flip-card w-full h-full">
              <div 
                className={`advanced-flip-card-inner w-full h-full ${isHoveredLeft ? 'is-flipped' : ''}`}
                onMouseEnter={() => !isMobile && setIsHoveredLeft(true)}
                onMouseLeave={() => !isMobile && setIsHoveredLeft(false)}
              >
                <div className="advanced-flip-card-front w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-600 p-4 md:p-6 shadow-neon">
                  <div className="h-full flex flex-col justify-center items-center relative">
                    <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 md:mb-6 card-title">Our Vision</h3>
                    <div className="w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 flex items-center justify-center shadow-xl">
                      <span className="text-2xl md:text-4xl">👁️</span>
                    </div>
                    <p className="text-center text-yellow-300 text-sm md:text-base">
                      {isMobile ? 'Tap to discover' : 'Hover to discover'}
                    </p>
                  </div>
                </div>
                
                <div className="advanced-flip-card-back w-full h-full rounded-2xl shadow-neon">
                  <div className="h-full bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-800 p-6 md:p-8 rounded-2xl">
                    <div className="h-full flex flex-col justify-center relative">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 card-title text-center">Our Vision</h3>
                      <p className="text-white text-sm md:text-base text-center leading-relaxed">
                        Our vision has always been to strive and find newer challenges in the field of Web development and use technology and knowledge to the fullest to create solutions for our customers, partners and professionals like you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          
          {/* Center Logo */}
          <figure 
            className="w-full md:w-1/3 h-64 md:h-96 flex items-center justify-center perspective-card my-6 md:my-0"
            style={{
              transform: isMobile ? '' : `translateZ(${scrollY * 0.1}px)`
            }}
            aria-label="Company logo"
          >
            <div 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full logo-container"
              style={{
                transform: isMobile ? '' : `rotateX(${(mousePosition.y / window.innerHeight - 0.5) * -20}deg) rotateY(${(mousePosition.x / window.innerWidth - 0.5) * 20}deg)`
              }}
            >
              <div className="w-full h-full rounded-full p-2">
                <div className="w-full h-full rounded-full bg-gray-800 p-6 md:p-8 border-4 border-yellow-500 border-opacity-50 shadow-neon overflow-hidden flex items-center justify-center">
                  <img 
                    src="/swaget.jpg"
                    alt="Swaget Infocomm Solutions Logo"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </figure>
          
          {/* Right Card - Mission */}
          <article 
            className="w-full md:w-1/3 h-64 md:h-96 perspective-card"
            style={{
              transform: isMobile ? '' : `translateZ(${scrollY * 0.05}px) rotateY(${(mousePosition.x / window.innerWidth - 0.5) * -10}deg)`
            }}
            onClick={() => handleCardClick('right')}
            onTouchStart={() => handleCardClick('right')}
            aria-label="Our Mission card"
          >
            <div className="advanced-flip-card w-full h-full">
              <div 
                className={`advanced-flip-card-inner w-full h-full ${isHoveredRight ? 'is-flipped' : ''}`}
                onMouseEnter={() => !isMobile && setIsHoveredRight(true)}
                onMouseLeave={() => !isMobile && setIsHoveredRight(false)}
              >
                <div className="advanced-flip-card-front w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-600 p-4 md:p-6 shadow-neon">
                  <div className="h-full flex flex-col justify-center items-center relative">
                    <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 md:mb-6 card-title">Our Mission</h3>
                    <div className="w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 flex items-center justify-center shadow-xl">
                      <span className="text-2xl md:text-4xl">🚀</span>
                    </div>
                    <p className="text-center text-yellow-300 text-sm md:text-base">
                      {isMobile ? 'Tap to discover' : 'Hover to discover'}
                    </p>
                  </div>
                </div>
                
                <div className="advanced-flip-card-back w-full h-full rounded-2xl shadow-neon">
                  <div className="h-full bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-800 p-6 md:p-8 rounded-2xl">
                    <div className="h-full flex flex-col justify-center relative">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 card-title text-center">Our Mission</h3>
                      <p className="text-white text-sm md:text-base text-center leading-relaxed">
                        Each of us has an individual mission / goal and we endeavor to surpass such goals, so that we collectively can build trust for the people who come to us for their IT needs while searching for web development and SEO companies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes shine {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 10px rgba(234, 179, 8, 0.3); }
    50% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.6); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .gradient-text {
    background: linear-gradient(to right, #eab308, #facc15, #eab308);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 200% auto;
    animation: shine 3s linear infinite;
  }
  
  .glowing-text {
    text-shadow: 0 0 5px rgba(234, 179, 8, 0.4);
  }
  
  .shadow-neon {
    box-shadow: 0 0 10px rgba(234, 179, 8, 0.2);
  }
  
  .perspective-3d {
    perspective: 1000px;
  }
  
  .perspective-card {
    transition: transform 0.3s ease-out;
  }
  
  /* Flip card styles */
  .advanced-flip-card {
    perspective: 1200px;
  }
  
  .advanced-flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  
  .advanced-flip-card-inner.is-flipped {
    transform: rotateY(180deg);
  }
  
  .advanced-flip-card-front,
  .advanced-flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1rem;
  }
  
  .advanced-flip-card-back {
    transform: rotateY(180deg);
  }
  
  @media (max-width: 768px) {
    .advanced-flip-card-inner {
      transition: transform 0.4s;
    }
    
    .gradient-text {
      animation: none;
    }
    
    .shadow-neon {
      box-shadow: 0 0 5px rgba(234, 179, 8, 0.1);
    }
  }
`;

const AboutUsWithStyles = () => (
  <>
    <style>{styles}</style>
    <AboutUs />
  </>
);

export default AboutUsWithStyles;