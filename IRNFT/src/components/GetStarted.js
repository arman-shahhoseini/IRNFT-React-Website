import React from 'react';
import './GetStarted.css';
import backgroundVideo from '../assets/bg_get-started.mp4'; 
import { NavLink } from 'react-router-dom'; // اضافه کردن NavLink

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <video autoPlay muted loop id="backgroundVideo">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="content">
        <h1>Welcome to IR NFT</h1>
        <div className="description">
          <p>
            We are a passionate team dedicated to exploring the vibrant world of NFTs in Iran. Our goal is to create innovative solutions that bridge traditional art with blockchain technology.
          </p>
          <p>
            With our user-friendly platform, we aim to make NFTs accessible to all artists and collectors. Join us in this exciting journey to discover and create unique digital assets.
          </p>
          <p>
            Let's shape the future of digital art together!
          </p>
        </div>
        <div className="cta-buttons">
            <NavLink to="/" className="btn">Back to Home</NavLink>
        </div>

      </div>
    </div>
  );
};

export default GetStarted;
