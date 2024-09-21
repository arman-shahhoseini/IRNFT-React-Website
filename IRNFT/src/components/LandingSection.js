import React from 'react';
import './LandingSection.css'; // فایل CSS برای استایل‌دهی

const LandingSection = () => {
  return (
    <section className="landing">
      <div className="landing-content">
        <h1>Discover, collect and sell dope NFTs</h1>
        <p>The IRAN digital marketplace for crypto collectibles and non-fungible tokens (NFTs)</p>
        <div className="buttons">
          <button className="explore-btn">Explore</button>
          <button className="create-btn">Create</button>
        </div>
        <div className="stats">
          <div className="stat">
            <span>42k+</span>
            <p>User Active</p>
          </div>
          <div className="stat">
            <span>8k+</span>
            <p>Artworks</p>
          </div>
          <div className="stat">
            <span>2k+</span>
            <p>Artist</p>
          </div>
        </div>
      </div>
      <div className="auction-info">
        <div className="bid-info">
          <h2>Current Bid</h2>
          <p>5.00 ETH</p>
          <span>$11,373.55</span>
        </div>
        <div className="auction-timer">
          <p>Auction ends in</p>
          <div className="timer">
            <span>18</span> Hours <span>25</span> Mins <span>32</span> Secs
          </div>
        </div>
        <div className="bid-actions">
          <button className="bid-now-btn">Bid now</button>
          <button className="see-item-btn">See item</button>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
