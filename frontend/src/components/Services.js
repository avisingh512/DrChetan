// components/Services.js
import React from 'react';
import './../styles/Services.css';

function Services() {
  return (
    <section id="services">
      <div className="services-content">
        <h2>Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Service 1</h3>
            <p>[Description of Service 1]</p>
          </div>
          <div className="service-item">
            <h3>Service 2</h3>
            <p>[Description of Service 2]</p>
          </div>
          <div className="service-item">
            <h3>Service 3</h3>
            <p>[Description of Service 3]</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
