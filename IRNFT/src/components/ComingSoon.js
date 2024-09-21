import React from 'react';
import './ComingSoon.css'; 
import bgComingSoon from '../assets/bg_coming-soon.mp4';
import { NavLink } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <video autoPlay muted loop id="myVideo">
        <source src={bgComingSoon} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="content">
        <h1>Coming Soon</h1>
        <p>We are working hard to bring you this feature. Stay tuned!</p>
        <NavLink to="/" className="btn">Back to Home</NavLink>
      </div>
    </div>
  );
};

export default ComingSoon;
