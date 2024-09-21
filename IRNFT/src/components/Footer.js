import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="column">
          <h4>Explore</h4>
          <ul>
            <li>Art</li>
            <li>Photography</li>
            <li>Music</li>
            <li>Games</li>
          </ul>
        </div>
        <div className="column">
          <h4>My Account</h4>
          <ul>
            <li>My profile</li>
            <li>My collections</li>
            <li>My favorites</li>
            <li>Account settings</li>
          </ul>
        </div>
        <div className="column">
          <h4>Resources</h4>
          <ul>
            <li>Help Centre</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="column">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Rankings</li>
            <li>Activity</li>
          </ul>
        </div>
      </div>
      <p>&copy; 2024 IRNFT. All rights reserved.</p>
      <div className="footer-social">
          <a href="https://ir.linkedin.com/in/arman-shahhoseini-4447152a0" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://t.me/armnre" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram"></i>
          </a>
          <a href="https://github.com/arman-shahhoseini" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
          </a>
      </div>



    </footer>
  );
};

export default Footer;
