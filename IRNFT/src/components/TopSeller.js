import React from 'react';
import './TopSeller.css';

const sellers = [
  { name: 'Armin Tehrani', price: '885.6 Eth', img: require('../assets/person1.jpg') },
  { name: 'Reza Farhadi', price: '24.56 Eth', img: require('../assets/person2.jpg') },
  { name: 'Leila Mehran', price: '34.56 Eth', img: require('../assets/person3.jpg') },
  { name: 'Yasmin Golshani', price: '52.56 Eth', img: require('../assets/person4.jpg') },
  { name: 'Amir Hosseini', price: '94.56 Eth', img: require('../assets/person5.jpg') },
];

const TopSellers = () => {
  return (
    <div className="top-sellers">
      <h1>Top Sellers ⚡</h1>
      <div className="seller-grid">
        {sellers.map((seller, index) => (
          <div key={index} className="seller-card">
            <img src={seller.img} alt={seller.name} className="seller-img" />
            <div className="seller-info">
              <h3>{seller.name}</h3>
              <p>{seller.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default TopSellers;
