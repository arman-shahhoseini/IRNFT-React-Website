import React from 'react';
import './ArtworkCard.css';

const ArtworkCard = ({ img, title, artist, price }) => {
  return (
    <div className="art-card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>by {artist}</p>
      <div className="price">{price}</div>
    </div>
  );
};

export default ArtworkCard;
