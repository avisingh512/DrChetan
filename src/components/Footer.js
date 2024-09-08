// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonial">Testimonial</Link></li>
            <li><Link to="/booknow">Book Now</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/suchirayuhospitalhubli/posts/worldkidneyday2020wishing-everyone-good-kidney-healthkidney-disease-is-often-sil/2612189465772662/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://x.com/chetanmudrabett?t=xD-ah6dzng1PtPBrWrm_9g&s=08" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://www.linkedin.com/in/chetan-mudrabettu-828434287/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
          </ul>
        </div>
        <div className="contactInfo">
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
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Dr. Chetan. All Rights Reserved.</p>
        <p>Developed By Shravan & Avinash</p>
      </div>
    </footer>
  );
}

export default Footer;