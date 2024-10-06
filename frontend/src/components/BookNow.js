// src/components/BookNow.js
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import './../styles/BookNow.css';

function BookNow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001';

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
      const response = await fetch(`${API_URL}/book-now`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', date: '', time: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="booknow">
      <div className="booknow-content">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Date:
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </label>
          <label>
            Time:
            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
        {submitStatus === 'success' && (
          <p className="success-message">Booking confirmed! A confirmation email has been sent.</p>
        )}
        {submitStatus === 'error' && (
          <p className="error-message">An error occurred. Please try again later.</p>
        )}
      </div>
    </section>
  );
}

export default BookNow;
