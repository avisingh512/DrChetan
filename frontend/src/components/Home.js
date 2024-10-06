// src/components/Home.js
import React from 'react';
import './../styles/Home.css';

function Home() {
  return (
    <section id="home">
      <div className="carousel">
        <div className="carousel-slide">
          <img src="/images/DrChetan.png" alt="Image 1" />
          <img src="/images/DrChetan2.png" alt="Image 2" />
          <img src="/images/DrChetan3.png" alt="Image 3" />
        </div>
      </div>
      <div className="home-content">
        <h1>Dr. Chetan Mudrabettu</h1>
        <p>Consultant Nephrologist & Kidney Transplant physician</p>
      </div>
      <br/>
      <p>
        Chetan Mudrabettu, director with Sanchaya Unity Hospital Private Limited, is registered with the Ministry of Corporate Affairs (MCA), bearing DIN 09120874. He is an Indian staying in Dharwad, Karnataka, India.
        Chetan Mudrabettu is currently associated with Sanchaya Unity Hospital Private Limited appointed as Director and the paid-up capital Sanchaya Unity Hospital Private Limited ₹30,100,000.00.
      </p>
    </section>
  );
}

export default Home;
