import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>Step 1: Sign Up</h3>
          <p>Create an account easily.</p>
        </div>
        <div className="step">
          <h3>Step 2: Create Products</h3>
          <p>Design and list your products.</p>
        </div>
        <div className="step">
          <h3>Step 3: Sell & Ship</h3>
          <p>Let us handle the rest!</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
