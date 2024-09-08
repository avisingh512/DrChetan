// src/components/Blog.js
import React from 'react';
import './../styles/Blog.css';

function Blog() {
  return (
    <section id="blog">
      <div className="blog-content">
        <h2>Blog</h2>
        <article className="kidney-health-article">
          <h3>#WorldKidneyDay2024</h3>
          <p className="highlight-text">Wishing everyone good Kidney Health!!!!</p>
          <p>
            Kidney disease is often silent in early stages, and therefore, everyone at risk should get themselves checked regularly. People at risk of kidney disease include:
          </p>
          <ul className="risk-list">
            <li>High BP (Hypertension)</li>
            <li>Diabetes</li>
            <li>Obesity</li>
            <li>Long-term Smoking</li>
            <li>Renal Stone Disease</li>
          </ul>
          <p className="signature">
            #Consultant_Nephrologist<br />
            - Chetan Mudrabettu, MD (Medicine), DM (Nephrology)(PGI)
          </p>
          <p className="hospital-info">
            #Suchirayu_Hospital_Hubli<br />
            #Hubli
          </p>
        </article>
        <article>
          <h3>Tips for Kidney Health</h3>
          <p>Maintaining a healthy kidney is crucial for your overall well-being. Here are some tips to keep your kidneys in top shape...</p>
        </article>
        <article>
          <h3>Understanding Dialysis</h3>
          <p>Dialysis is a procedure that helps clean the blood of toxins, waste, and excess fluids. It's a lifesaving treatment for people with kidney failure...</p>
        </article>
      </div>
    </section>
  );
}

export default Blog;
