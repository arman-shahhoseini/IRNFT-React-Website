import React, { useState } from "react";
import './LiveAuction.css';

// Importing images
import liveAuction1 from '../assets/liveauction1.jpg';
import liveAuction2 from '../assets/liveauction2.jpg';
import liveAuction3 from '../assets/liveauction3.jpg';

const AuctionCard = ({ item }) => {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="details">
        <h3>{item.title}</h3>
        <p>{item.author}</p>
        <div className="price-section">
          <span className="eth-price">{item.price} ETH</span>
          <span className="stock">{item.stock}</span>
        </div>
        <div className="highest-bid">
          Highest Bid: {item.highestBid} ETH
        </div>
        <div className="buttons">
          <button>Place Bid</button>
          <button>View</button>
        </div>
      </div>
    </div>
  );
};

const LiveAuction = () => {
  const auctionItems = [
    {
      title: "Onus Medu",
      author: "by loremipsum",
      price: "2.45",
      stock: "10 min",
      highestBid: "0.0267",
      image: liveAuction1,
    },
    {
      title: "Dream Big",
      author: "by ltvrn",
      price: "2.45",
      stock: "6 in stock",
      highestBid: "0.02",
      image: liveAuction2,
    },
    {
      title: "Oddoties",
      author: "by brellas",
      price: "2.45",
      stock: "8 in stock",
      highestBid: "0.026",
      image: liveAuction3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? auctionItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === auctionItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="auction-container">
      <h2>Live Auction <span role="img" aria-label="gavel">🔨</span></h2>
      <div className="slider">
        <button className="prev-btn" onClick={handlePrev}>&lt;</button>
        <AuctionCard item={auctionItems[currentIndex]} />
        <button className="next-btn" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default LiveAuction;