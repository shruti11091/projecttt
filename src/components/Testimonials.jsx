import React from 'react';
import './Testimonials.css'; // Import CSS for Testimonials

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-card">
        <blockquote>
          "Printify has transformed my business!"
          <footer>- User A</footer>
        </blockquote>
      </div>
      <div className="testimonial-card">
        <blockquote>
          "Fantastic service and support!"
          <footer>- User B</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
