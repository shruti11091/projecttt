import React from 'react';

const featuresData = [
  { title: 'Easy to Use', description: 'Our platform is user-friendly and intuitive.' },
  { title: 'High Quality', description: 'Get high-quality prints with minimal effort.' },
  { title: 'Global Shipping', description: 'Ship to customers worldwide with ease.' },
];

const Features = () => {
  return (
    <section id="features" className="container py-5">
      <h2 className="text-center">Features</h2>
      <div className="row mt-4">
        {featuresData.map((feature, index) => (
          <div key={index} className="col-md-4 text-center mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
