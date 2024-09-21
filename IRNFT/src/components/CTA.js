import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <h3>Are you a digital creator?</h3>
      <p>Learn how Nifter helps you protect and sell your digital creations.</p>
      <input type="email" placeholder="Enter your email" />
      <button>Get Started</button>
    </section>
  );
};

export default CTA;
