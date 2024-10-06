// src/components/Testimonial.js
import React from 'react';
import './../styles/Testimonial.css';

function Testimonial() {
  return (
    <section id="testimonial">
      <div className="testimonial-content">
        <h2>Patient Testimonials</h2>
        <blockquote>
          <p>"Dr. Chetan is the best! They helped me manage my kidney condition and improved my quality of life."</p>
          <footer>- Kumara Subramayam</footer>
        </blockquote>
        <blockquote>
          <p>"Excellent care and attention. Highly recommend Dr. Chetan!"</p>
          <footer>- Anil N</footer>
        </blockquote>
      </div>
    </section>
  );
}

export default Testimonial;
