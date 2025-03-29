import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PricingPlans from './components/PricingSection';
import FeaturesSection from './components/FeaturesSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AboutPage from './components/About';
import GraphicDesignPage from './services/Graphic';
import AnimatedVideosPage from './services/Animated';
import DigitalMarketingPage from './services/Digital';
import WebsitePricingPage from './services/WebsitePricing';
import HostingComparisonTable from './components/HostingComparisonTable';
import OrderNow from './components/OrderNow';
import PrivacyPolicy from './policy/PrivacyPolicy';
import RefundPolicy from './policy/RefundPolicy';
import TermsAndConditions from './policy/TermsandConditions';
import SupportForm from './components/Support';
import ContactUsPage from './components/ContactUsPage';

// SEO Component for common meta tags
const SEO = ({ title, description, keywords, path }) => (
  <Helmet>
    <title>{title} | Swaget Infocomm Solutions LLP</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://swaget.in${path}`} />
    <link rel="canonical" href={`https://swaget.in${path}`} />
  </Helmet>
);

function HomePage() {
  return (
    <>
      <SEO
        title="Web Design & Digital Solutions"
        description="Professional web design, development, and digital marketing services in Varanasi. Custom solutions for businesses of all sizes."
        keywords="web design, web development, digital marketing, Varanasi, IT services"
        path="/"
      />
      <div id="hero"><HeroSection /></div>
      <AboutPage />
      <div id="pricing"><PricingPlans /></div>
      <div id="features"><FeaturesSection /></div>
      <div id="faq"><FAQ /></div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Global SEO defaults */}
        <Helmet defaultTitle="Swaget Infocomm Solutions LLP">
          <meta 
            name="description" 
            content="Professional IT services and digital solutions provider based in Varanasi, India" 
          />
          <meta 
            name="keywords" 
            content="web design, web development, digital marketing, graphic design, hosting, Varanasi IT company" 
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Swaget Infocomm Solutions LLP",
              "url": "https://swaget.in",
              "logo": "https://swaget.in/logo.png",
              "sameAs": [
                "https://facebook.com/swagetinfocomm",
                "https://twitter.com/swagetinfocomm",
                "https://linkedin.com/company/swaget-infocomm"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "email": "info@swaget.in",
                "areaServed": "India"
              }
            })}
          </script>
        </Helmet>

        {/* Navbar */}
        <Navbar />

        {/* Main content with top padding to prevent navbar overlap */}
        <div className="pt-[80px]">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />

            {/* Service Routes */}
            <Route path="/order-now" element={
              <>
                <SEO
                  title="Order Now"
                  description="Get started with our services. Place your order for web design, development, or digital marketing solutions."
                  keywords="order website, web design order, digital services order"
                  path="/order-now"
                />
                <OrderNow />
              </>
            } />
            
            <Route path="/about" element={
              <>
                <SEO
                  title="About Our Hosting Services"
                  description="Compare our hosting packages and find the perfect solution for your website's needs."
                  keywords="web hosting, hosting comparison, Varanasi hosting"
                  path="/about"
                />
                <HostingComparisonTable />
              </>
            } />
            
            <Route path="/contact" element={
              <>
                <SEO
                  title="Contact Us"
                  description="Get in touch with our team for inquiries, support, or project discussions."
                  keywords="contact web developers, IT support Varanasi, website help"
                  path="/contact"
                />
                <ContactUsPage />
              </>
            } />
            
            <Route path="/graphic-design" element={
              <>
                <SEO
                  title="Professional Graphic Design Services"
                  description="Custom graphic design solutions including logos, branding, and marketing materials."
                  keywords="graphic design, logo design, branding, Varanasi designers"
                  path="/graphic-design"
                />
                <GraphicDesignPage />
              </>
            } />
            
            <Route path="/animated-videos" element={
              <>
                <SEO
                  title="Animated Video Production"
                  description="Engaging animated videos for marketing, explainers, and brand storytelling."
                  keywords="animated videos, explainer videos, video production"
                  path="/animated-videos"
                />
                <AnimatedVideosPage />
              </>
            } />
            
            <Route path="/digital-marketing" element={
              <>
                <SEO
                  title="Digital Marketing Services"
                  description="Comprehensive digital marketing strategies including SEO, social media, and PPC."
                  keywords="digital marketing, SEO services, social media marketing"
                  path="/digital-marketing"
                />
                <DigitalMarketingPage />
              </>
            } />
            
            <Route path="/website-pricing" element={
              <>
                <SEO
                  title="Website Pricing Packages"
                  description="Transparent pricing for our web design and development services."
                  keywords="website pricing, web design cost, affordable websites"
                  path="/website-pricing"
                />
                <WebsitePricingPage />
              </>
            } />

            {/* Policy Routes */}
            <Route path="/privacy-policy" element={
              <>
                <SEO
                  title="Privacy Policy"
                  description="Learn how we collect, use, and protect your personal information."
                  keywords="privacy policy, data protection, GDPR compliance"
                  path="/privacy-policy"
                />
                <PrivacyPolicy />
              </>
            } />
            
            <Route path="/refund-policy" element={
              <>
                <SEO
                  title="Refund Policy"
                  description="Our policies regarding refunds and service cancellations."
                  keywords="refund policy, money back guarantee, service cancellation"
                  path="/refund-policy"
                />
                <RefundPolicy />
              </>
            } />
            
            <Route path="/terms-and-conditions" element={
              <>
                <SEO
                  title="Terms and Conditions"
                  description="The terms governing your use of our website and services."
                  keywords="terms and conditions, service agreement, legal terms"
                  path="/terms-and-conditions"
                />
                <TermsAndConditions />
              </>
            } />

            {/* Support Route */}
            <Route path="/support" element={
              <>
                <SEO
                  title="Customer Support"
                  description="Get help with our services, technical support, and account assistance."
                  keywords="customer support, help desk, technical assistance"
                  path="/support"
                />
                <SupportForm />
              </>
            } />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;