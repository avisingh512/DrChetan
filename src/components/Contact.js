// src/components/Contact.js
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const response = await fetch('http://localhost:3001/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-info">
          <div className="address">
            <FaMapMarkerAlt />
            <p>123 Main Street, Anytown USA</p>
          </div>
          <div className="phone">
            <FaPhoneAlt />
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="email">
            <FaEnvelope />
            <p>info@kidneyspecialist.com</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          {submitStatus === 'success' && (
            <p className="success-message">Thank you for your message. We'll get back to you soon!</p>
          )}
          {submitStatus === 'error' && (
            <p className="error-message">An error occurred. Please try again later.</p>
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
          
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15389.762453633422!2d75.1244712!3d15.3526056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d73bf6a02d87%3A0x6f87c8f3931ba1d8!2sHCG%20Suchirayu%20Hospitals%2C%20Hubli!5e0!3m2!1sen!2sin!4v1725739381689!5m2!1sen!2sin" 
        width="100%" 
        height="400" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  );
}

export default Contact;
