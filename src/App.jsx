import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

function HomePage() {
  return (
    <>
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
        {/* Navbar */}
        <Navbar />

        {/* Main content with top padding to prevent navbar overlap */}
        <div className="pt-[80px]"> {/* Adjust this value based on your navbar's actual height */}
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />

            {/* Service Routes */}
            <Route path="/order-now" element={<OrderNow />} />
            <Route path="/about" element={<HostingComparisonTable />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/animated-videos" element={<AnimatedVideosPage />} />
            <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/website-pricing" element={<WebsitePricingPage />} />

            {/* Policy Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            {/* Support Route */}
            <Route path="/support" element={<SupportForm />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;