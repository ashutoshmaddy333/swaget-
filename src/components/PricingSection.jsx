import React, { useState, useEffect, useCallback } from 'react';
import { Check, Star, Plus, Zap, Shield, LifeBuoy } from 'lucide-react';

const PricingSection = () => {
    const [isINR, setIsINR] = useState(true);
    const [animatedElements, setAnimatedElements] = useState([]);
    const exchangeRate = 87;

    // Memoized plan data to prevent unnecessary re-renders
    const plans = useCallback(() => [
        {
            name: "Startup Plan",
            description: "Free Domain + SEO-Ready Website",
            monthlyPriceINR: 4999,
            annualRenewalINR: 2450,
            buttonLink: "https://billing.swaget.in/cart.php?a=add&pid=3&sld=example&tld=.in",
            icon: <Zap className="w-6 h-6" />,
            features: [
                "1 Domain Name (.in or .co.in)",
                "6 Page (Dynamic Website)",
                "SSL Certificate",
                "5 Business Email ID",
                "Unlimited Images & Videos*",
                "Unlimited (Bandwidth/Space)*",
                "SEO Ready Website",
                "WhatsApp Integration",
                "Social Media Integration",
                "Google Map Integration",
                "100% Responsive Website",
                "24/7 Support (Phone/Email/Chat)",
                "Google Analytics Integration",
                "Live Chat Integration",
                "Basic SEO Optimization"
            ]
        },
        {
            name: "Pro Plan",
            description: ".com Domain + Website + Admin Panel",
            monthlyPriceINR: 7999,
            annualRenewalINR: 3650,
            buttonLink: "https://billing.swaget.in/cart.php?a=add&pid=10&sld=example&tld=.com",
            popular: true,
            tag: "POPULAR",
            icon: <Star className="w-6 h-6" />,
            features: [
                "1 Domain Name (.com or .in or .co.in)",
                "10 Pages* (Dynamic Website)",
                "SSL Certificate",
                "10 Business Email ID",
                "Unlimited Images & Videos*",
                "Unlimited (Bandwidth/ Space)*",
                "SEO (Express) Ready Website",
                "Live Chat & WhatsApp",
                "Social Media Integration",
                "Payment Gateway Integration",
                "Google Map Integration",
                "Admin Panel",
                "100% Responsive Website",
                "24/7 Support (Phone/Email/Chat)",
                "Backup & Restore "
            ]
        },
        {
            name: "Enterprise Plan",
            description: "Advanced features for large businesses",
            monthlyPriceINR: 10999,
            annualRenewalINR: 4450,
            buttonLink: "https://billing.swaget.in/cart.php?a=add&pid=11&carttpl=standard_cart",
            icon: <Shield className="w-6 h-6" />,
            features: [
                "1 Domain Name (.com or .in or .co.in)",
                "15-18 Pages* (Dynamic Website)",
                "SSL Certificate",
                "15 Email ID*",
                "Unlimited Images & Videos*",
                "Unlimited (Bandwidth/ Space)*",
                "SEO (Express) Ready Website",
                "Live Chat & WhatsApp",
                "Social Media Integration",
                "Payment Gateway Integration",
                "Google Map Integration",
                "Admin Panel",
                "C Panel Access*",
                "100% Responsive Website",
                "24/7 Support (Phone/Email/Chat)",
            ]
        }
    ], []);

    const ecommercePlans = useCallback(() => [
        {
            name: "Business Plan",
            description: "Ecommerce Website Designing – Price",
            priceINR: 14999,
            annualRenewalINR: 3950,
            buttonLink: "https://billing.swaget.in/cart.php?a=add&pid=12&carttpl=standard_cart",
            icon: <LifeBuoy className="w-6 h-6" />,
            features: [
                "1 Free Domain",
                "Free Android Application",
                "5 Pages Website",
                "5 Business Email IDs",
                "Unlimited Product Listings",
                "Unlimited Images & Videos",
                "Unlimited (Bandwidth/Space)",
                "SEO Ready Website",
                "SSL Certificate",
                "Payment Gateway Integration",
                "WhatsApp Integration",
                "Social Media Integration",
                "Google Map Integration",
                "100% Responsive Website",
                "24/7 Support (Phone/Email/Chat)",
            ],
            note: "GST @ 18% Applicable on All Purchase"
        },
        {
            name: "Mega Plan",
            description: "Ecommerce Website Designing – Price",
            priceINR: 19499,
            annualRenewalINR: 4750,
            buttonLink: "https://billing.swaget.in/cart.php?a=add&pid=13&carttpl=standard_cart",
            icon: <Plus className="w-6 h-6" />,
            features: [
                "1 Free Domain Name",
                "Free Android Application (APK)",
                "15-20 Pages* (Dynamic Website)",
                "Unlimited Product Listings",
                "Unlimited Images & Videos",
                "Unlimited (Bandwidth/Space)",
                "SEO (Express) Ready Website",
                "100% Responsive Website",
                "Live Chat & WhatsApp Integration",
                "Social Media Integration",
                "SSL Certificate",
                "Admin Panel",
                "Google Map Integration",
                "cPanel Access*",
                "24/7 Support (Phone/Email/Chat)",
            ],
            note: "GST @ 18% Applicable on All Purchase"
        },
        {
            name: "Custom Plan",
            description: "A custom plan allows a client to modify a website according to their business needs.",
            icon: <Star className="w-6 h-6" />,
            features: [
                "Fully Customizable Website",
                "Custom Feature Development",
                "Dedicated Developer Support",
                "Advanced SEO Integration",
                "E-commerce & Payment Integration",
                "Business-Oriented Modifications",
                "Multi-Vendor Support",
                "Advanced Analytics & Reporting",
                "AI-Based Chatbot Integration",
                "Custom Admin Panel",
                "Performance Optimization",
                "Third-Party API Integration",
                "Membership & Subscription Features",
                "Advanced Security Enhancements",
                "Custom UI/UX Design",
                "Scalability & Future Expansion Support",
                "Cloud Hosting Integration for better scalability and performance",
                "Real-Time Collaboration Tools for team and partner collaboration"
            ],
            note: "Call Now for a custom quote!"
        }
    ], []);

    useEffect(() => {
        // Simulate elements appearing with staggered animation
        const timer = setTimeout(() => {
            setAnimatedElements(['header', 'toggles', 'plans', 'ecommerce']);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const handleChatNow = useCallback(() => {
        window.open("https://wa.me/9935353574", "_blank");
    }, []);

    return (
        <section className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-yellow-900/10 to-gray-900 animate-gradient-shift"></div>
            
            <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16">
                {/* Header */}
                <header className={`transform transition-all duration-1000 ${animatedElements.includes('header') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-text-shimmer">
                        Pricing Plans
                    </h1>
                    <p className="text-lg md:text-xl text-center mb-8 md:mb-12 text-yellow-300/80">Informative Website Designing – Price</p>
                </header>

                {/* Enhanced Currency Toggle */}
                <div className={`transition-all duration-1000 delay-300 ${animatedElements.includes('toggles') ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 md:mb-16 p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-yellow-500/20">
                        <div className="flex items-center p-1 md:p-2 bg-gray-800 rounded-lg shadow-inner">
                            {/* INR Option */}
                            <button
                                className={`flex items-center space-x-2 px-3 md:px-4 py-1 md:py-2 rounded-lg cursor-pointer transition-all duration-300 ${isINR ? 'bg-yellow-500/30 text-white shadow-md' : 'text-gray-400 hover:text-yellow-300'}`}
                                onClick={() => setIsINR(true)}
                                aria-label="Switch to Indian Rupees"
                            >
                                <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden border-2 border-yellow-500/50 bg-white/10 flex items-center justify-center">
                                    <div className="text-yellow-500 font-bold text-xs md:text-sm">₹</div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm md:text-base font-medium">INR</span>
                                    <span className="text-xs opacity-70">Indian Rupee</span>
                                </div>
                            </button>
                            
                            {/* Divider */}
                            <div className="h-8 md:h-10 w-px bg-gray-700 mx-1 md:mx-2"></div>
                            
                            {/* USD Option */}
                            <button
                                className={`flex items-center space-x-2 px-3 md:px-4 py-1 md:py-2 rounded-lg cursor-pointer transition-all duration-300 ${!isINR ? 'bg-yellow-500/30 text-white shadow-md' : 'text-gray-400 hover:text-yellow-300'}`}
                                onClick={() => setIsINR(false)}
                                aria-label="Switch to US Dollars"
                            >
                                <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden border-2 border-yellow-500/50 bg-white/10 flex items-center justify-center">
                                    <div className="text-yellow-500 font-bold text-xs md:text-sm">$</div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm md:text-base font-medium">USD</span>
                                    <span className="text-xs opacity-70">US Dollar</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Plans */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24 transition-all duration-1000 delay-500 ${animatedElements.includes('plans') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {plans().map((plan, index) => (
                        <article 
                            key={index} 
                            className="relative group overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 md:hover:-translate-y-2"
                        >
                            {/* Animated glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-glow"></div>
                            
                            {/* Plan tag */}
                            {plan.tag === "POPULAR" && (
                                <div className="absolute right-0 top-0 bg-yellow-500 text-gray-900 text-xs font-bold py-1 px-2 md:px-3 rounded-bl-lg z-10">
                                    {plan.tag}
                                </div>
                            )}
                            
                            {/* Header */}
                            <div className="p-4 md:p-6 text-center border-b border-yellow-500/20">
                                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 rounded-full bg-yellow-500/20 text-yellow-400">
                                    {plan.icon}
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-yellow-400">{plan.name}</h2>
                                <p className="text-xs md:text-sm text-yellow-300/70">{plan.description}</p>
                                
                                {/* GET STARTED BUTTON AT TOP */}
                                <a 
                                    href={plan.buttonLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="mt-3 md:mt-4 inline-block w-full"
                                    aria-label={`Get started with ${plan.name}`}
                                >
                                    <button className="relative overflow-hidden w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-yellow-500/50">
                                        <span className="relative z-10 text-sm md:text-base">Get Started</span>
                                        <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                    </button>
                                </a>
                            </div>
                            
                            {/* Pricing */}
                            <div className="p-4 md:p-6 text-center">
                                <div className="text-gray-400 line-through text-xs md:text-sm">
                                    {index === 0 ? '₹7999' : index === 1 ? '₹10999' : '₹17999'}
                                </div>
                                <div className="flex items-center justify-center">
                                    {/* Enhanced Currency Display */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-1 md:mr-2 shadow-lg">
                                            <span className="text-xl md:text-2xl font-bold text-gray-900">
                                                {isINR ? '₹' : '$'}
                                            </span>
                                        </div>
                                        <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                                            {isINR 
                                                ? plan.monthlyPriceINR.toLocaleString() 
                                                : Math.round(plan.monthlyPriceINR / exchangeRate).toLocaleString()
                                            }
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Currency flag indicator */}
                                <div className="mt-1 md:mt-2 flex items-center justify-center">
                                    <div className="flex items-center px-2 py-0.5 md:px-3 md:py-1 bg-gray-800 rounded-full">
                                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full overflow-hidden flex-shrink-0 mr-1 md:mr-2 border border-gray-600">
                                            {isINR ? (
                                                <div className="w-full h-full bg-gradient-to-b from-orange-500 via-white to-green-500"></div>
                                            ) : (
                                                <div className="w-full h-full bg-blue-900 flex items-center justify-center">
                                                    <div className="text-white text-xxs md:text-xs">US</div>
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-xxs md:text-xs text-gray-400">
                                            {isINR ? "Indian Rupee" : "US Dollar"}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Features */}
                                <div className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-left">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start text-gray-300 group/feature hover:text-yellow-300 transition-colors duration-200">
                                            <Check className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 mr-1 md:mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-xs md:text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* CHAT NOW BUTTON AT BOTTOM */}
                                <button
                                    onClick={handleChatNow}
                                    className="relative mt-6 md:mt-8 w-full overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
                                    aria-label="Chat with us about this plan"
                                >
                                    <span className="relative z-10 text-sm md:text-base">Chat Now</span>
                                    <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </button>
                                
                                {/* Footer info */}
                                <div className="mt-2 md:mt-4 text-xs md:text-sm text-gray-400">
                                    Annual Renewal {isINR ? 'Rs.' : '$'} {isINR ? plan.annualRenewalINR : Math.round(plan.annualRenewalINR / exchangeRate)}
                                    <div>Note: GST @ 18% Applicable on All Purchase</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Ecommerce Section */}
                <div className={`transition-all duration-1000 delay-700 ${animatedElements.includes('ecommerce') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 animate-text-shimmer">
                        Ecommerce Website Designing – Price
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {ecommercePlans().map((plan, index) => (
                            <article 
                                key={index} 
                                className="relative group overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 md:hover:-translate-y-2"
                            >
                                {/* Animated glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-glow"></div>
                                
                                {/* Header */}
                                <div className="p-4 md:p-6 text-center border-b border-yellow-500/20">
                                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 rounded-full bg-yellow-500/20 text-yellow-400">
                                        {plan.icon}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-yellow-400">{plan.name}</h2>
                                    <p className="text-xs md:text-sm text-yellow-300/70">{plan.description || "Ecommerce Website Designing"}</p>
                                    
                                    {/* GET STARTED BUTTON AT TOP FOR BUSINESS AND MEGA PLANS */}
                                    {(index === 0 || index === 1) && (
                                        <a 
                                            href={plan.buttonLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="mt-3 md:mt-4 inline-block w-full"
                                            aria-label={`Get started with ${plan.name}`}
                                        >
                                            <button className="relative overflow-hidden w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-yellow-500/50">
                                                <span className="relative z-10 text-sm md:text-base">Get Started</span>
                                                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                            </button>
                                        </a>
                                    )}
                                </div>
                                
                                {/* Pricing */}
                                <div className="p-4 md:p-6">
                                    {plan.priceINR && (
                                        <div className="flex items-center justify-center mb-4 md:mb-6">
                                            {/* Enhanced Currency Display */}
                                            <div className="flex items-center justify-center">
                                                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-1 md:mr-2 shadow-lg">
                                                    <span className="text-xl md:text-2xl font-bold text-gray-900">
                                                        {isINR ? '₹' : '$'}
                                                    </span>
                                                </div>
                                                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
                                                    {isINR 
                                                        ? plan.priceINR.toLocaleString() 
                                                        : Math.round(plan.priceINR / exchangeRate).toLocaleString()
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Currency flag indicator */}
                                    {plan.priceINR && (
                                        <div className="mt-1 md:mt-2 flex items-center justify-center mb-4 md:mb-6">
                                            <div className="flex items-center px-2 py-0.5 md:px-3 md:py-1 bg-gray-800 rounded-full">
                                                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full overflow-hidden flex-shrink-0 mr-1 md:mr-2 border border-gray-600">
                                                    {isINR ? (
                                                        <div className="w-full h-full bg-gradient-to-b from-orange-500 via-white to-green-500"></div>
                                                    ) : (
                                                        <div className="w-full h-full bg-blue-900 flex items-center justify-center">
                                                            <div className="text-white text-xxs md:text-xs">US</div>
                                                        </div>
                                                    )}
                                                </div>
                                                <span className="text-xxs md:text-xs text-gray-400">
                                                    {isINR ? "Indian Rupee" : "US Dollar"}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Features */}
                                    <div className="space-y-2 md:space-y-3 text-left">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start text-gray-300 group/feature hover:text-yellow-300 transition-colors duration-200">
                                                <Check className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 mr-1 md:mr-2 mt-0.5 flex-shrink-0" />
                                                <span className="text-xs md:text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* CHAT NOW BUTTON AT BOTTOM */}
                                    <button
                                        onClick={handleChatNow}
                                        className="relative mt-6 md:mt-8 w-full overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
                                        aria-label="Chat with us about this plan"
                                    >
                                        <span className="relative z-10 text-sm md:text-base">Chat Now</span>
                                        <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                    </button>
                                    
                                    {/* Footer info */}
                                    {(plan.note || plan.annualRenewalINR) && (
                                        <div className="mt-2 md:mt-4 text-xs md:text-sm text-gray-400 text-center">
                                            {plan.note && <div>{plan.note}</div>}
                                            {plan.annualRenewalINR && (
                                                <div>Annual Renewal {isINR ? 'Rs.' : '$'} {isINR ? plan.annualRenewalINR : Math.round(plan.annualRenewalINR / exchangeRate)}</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes glow {
                    0% { opacity: 0.1; }
                    50% { opacity: 0.3; }
                    100% { opacity: 0.1; }
                }
                
                @keyframes text-shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                
                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 15s ease infinite;
                }
                
                .animate-glow {
                    animation: glow 3s ease-in-out infinite;
                }
                
                .animate-text-shimmer {
                    background-size: 200% auto;
                    animation: text-shimmer 3s linear infinite;
                }

                @media (max-width: 768px) {
                    .animate-text-shimmer {
                        animation: none;
                        background-size: 100% auto;
                    }
                    .animate-gradient-shift {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default PricingSection;