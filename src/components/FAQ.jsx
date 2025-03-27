import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, ArrowDown, ArrowUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const scrollContainerRef = useRef(null);
    const [isScrollable, setIsScrollable] = useState({top: false, bottom: true});
    const [hoveredQuestion, setHoveredQuestion] = useState(null);

    const faqData = [
        {
            question: "What services does Swaget Infocomm Solutions LLP offer?",
            answer: "We provide website development, logo design, digital marketing, animated videos, web hosting, and domain registration services."
        },
        {
            question: "Where is Swaget Infocomm Solutions LLP located?",
            answer: "We are based in India, providing services nationwide."
        },
        {
            question: "What types of websites do you develop?",
            answer: "We develop informative websites, e-commerce websites, and custom solutions tailored to your needs."
        },
        {
            question: "What is the cost of developing a website?",
            answer: "Our plans start at ₹4,999 for informative websites and ₹14,999 for e-commerce websites."
        },
        {
            question: "Do you provide custom website designs?",
            answer: "Yes, we create unique designs tailored to your business requirements."
        },
        {
            question: "Can you integrate a payment gateway into my website?",
            answer: "Yes, we can integrate secure payment gateways for your e-commerce needs."
        },
        {
            question: "Do you offer technical support after the website is launched?",
            answer: "Yes, we provide 24/7 technical support for all our clients."
        },
        {
            question: "What happens if my website goes down?",
            answer: "Our team will immediately address the issue to minimize downtime and restore your website."
        },
        {
            question: "Do you offer website redesign services?",
            answer: "Yes, we can redesign and upgrade your existing website to meet current standards."
        }
    ];

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const checkScrollability = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollTop, scrollHeight, clientHeight } = container;
            setIsScrollable({
                top: scrollTop > 0,
                bottom: scrollTop < scrollHeight - clientHeight - 5
            });
        }
    };

    const scrollTo = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === 'up' ? -200 : 200;
            container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            checkScrollability();
            container.addEventListener('scroll', checkScrollability);
            return () => container.removeEventListener('scroll', checkScrollability);
        }
    }, []);

    return (
        <section id="faq" className="py-3 bg-gradient-to-b from-gray-900 to-gray-950 text-yellow-400 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-20 -top-20 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header section - now properly rendered */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center mb-6 animate-float">
                        <HelpCircle className="w-16 h-16 text-yellow-400 drop-shadow-lg" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Everything you need to know about our services and solutions
                    </p>
                </div>
                
                {/* Main FAQ container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-10 animate-pulse"></div>
                    
                    {/* Main container */}
                    <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-blur-sm">
                        {/* Header with floating controls */}
                        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 border-b border-gray-700/50 flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                                <h3 className="text-2xl font-bold text-yellow-400">Questions & Answers</h3>
                            </div>
                            <div className="flex space-x-3">
                                <button 
                                    className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
                                        isScrollable.top 
                                            ? 'bg-yellow-500/90 text-gray-900 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500/30' 
                                            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    }`}
                                    onClick={() => scrollTo('up')}
                                    disabled={!isScrollable.top}
                                >
                                    <ArrowUp className="w-5 h-5" />
                                </button>
                                <button 
                                    className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
                                        isScrollable.bottom 
                                            ? 'bg-yellow-500/90 text-gray-900 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500/30' 
                                            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    }`}
                                    onClick={() => scrollTo('down')}
                                    disabled={!isScrollable.bottom}
                                >
                                    <ArrowDown className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        
                        {/* Scrollable content area */}
                        <div 
                            ref={scrollContainerRef}
                            className="max-h-[32rem] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500/80 scrollbar-track-gray-700/50"
                        >
                            <div className="p-6 space-y-5">
                                {faqData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`rounded-xl overflow-hidden transition-all duration-500 ${
                                            activeQuestion === index 
                                                ? 'ring-2 ring-yellow-500/50 shadow-lg' 
                                                : 'hover:ring-1 hover:ring-yellow-400/30 hover:shadow-md'
                                        }`}
                                        onMouseEnter={() => setHoveredQuestion(index)}
                                        onMouseLeave={() => setHoveredQuestion(null)}
                                    >
                                        <div className="bg-gradient-to-r from-gray-800/80 via-gray-800/90 to-gray-800/80 relative">
                                            {/* Hover glow effect */}
                                            <div className={`absolute inset-0 bg-yellow-500/5 rounded-xl transition-opacity duration-300 ${
                                                hoveredQuestion === index ? 'opacity-100' : 'opacity-0'
                                            }`}></div>
                                            
                                            <button
                                                className={`flex items-center justify-between w-full p-6 transition-all duration-300 focus:outline-none relative z-10 ${
                                                    activeQuestion === index 
                                                        ? 'bg-gradient-to-r from-gray-700/50 to-gray-800/50' 
                                                        : 'hover:bg-gradient-to-r hover:from-gray-700/30 hover:to-gray-800/30'
                                                }`}
                                                onClick={() => toggleQuestion(index)}
                                            >
                                                <span className="text-xl font-semibold text-left pr-6 text-gray-200 group-hover:text-yellow-300 transition-colors duration-300">
                                                    {item.question}
                                                </span>
                                                <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                                                    activeQuestion === index 
                                                        ? 'bg-yellow-500 text-gray-900 shadow-lg' 
                                                        : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                                                }`}>
                                                    {activeQuestion === index ? (
                                                        <ChevronUp className="w-6 h-6" />
                                                    ) : (
                                                        <ChevronDown className="w-6 h-6" />
                                                    )}
                                                </div>
                                            </button>

                                            {/* Answer section with slide-down animation */}
                                            <div 
                                                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                                                    activeQuestion === index 
                                                        ? 'max-h-96 opacity-100' 
                                                        : 'max-h-0 opacity-0'
                                                }`}
                                            >
                                                <div className="p-6 bg-gradient-to-b from-gray-800/70 to-gray-900/80 text-gray-300 border-t border-gray-700/50 text-lg leading-relaxed">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Footer with subtle animation */}
                        <div className="bg-gradient-to-b from-gray-900/70 to-gray-900 p-5 border-t border-gray-700/50 text-center">
                            <div className="text-gray-500 hover:text-yellow-400 transition-colors duration-300 inline-flex items-center">
                                <span className="mr-2">Still have questions?</span>
                                <a href="/contact" className="font-medium text-yellow-400 hover:underline">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating particles animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-float-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${Math.random() * 10 + 10}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Animation styles */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes float-particle {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    10% { opacity: 0.3; }
                    100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float-particle { animation: float-particle linear forwards; }
            `}</style>
        </section>
    );
};

export default FAQ;