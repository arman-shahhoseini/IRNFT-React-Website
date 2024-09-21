import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How it works 👍</h2>
      <p>Getting started and selling your NFTs. Explore the full process so you don't have any confusions.</p>
      <div className="steps">
        <div className="step">
          <h3>Set up your wallet</h3>
          <p>Once you've set up your wallet of choice, connect it to the NFT marketplace.</p>
        </div>
        <div className="step">
          <h3>Create collection</h3>
          <p>Click create and set up your collection. Add social links, a description, and a profile.</p>
        </div>
        <div className="step">
          <h3>Add your NFTs</h3>
          <p>Upload your work, add a title and description, and customize your NFTs with properties.</p>
        </div>
        <div className="step">
          <h3>List item for sale</h3>
          <p>Choose between auctions, fixed price listings, and declining price listings.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
