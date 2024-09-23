import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks'; // Import new component
import Pricing from './components/Pricing'; // Import new component
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <HowItWorks />  {/* Add How It Works section */}
      <Pricing />      {/* Add Pricing section */}
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
