import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p>$10/month</p>
          <button className="btn">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h3>Standard Plan</h3>
          <p>$20/month</p>
          <button className="btn">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h3>Premium Plan</h3>
          <p>$30/month</p>
          <button className="btn">Choose Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
