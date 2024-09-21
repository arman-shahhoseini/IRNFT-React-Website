import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Explore Artworks ✨</h1>
      <nav className="nav">
        <button className="tab active">Recommendations</button>
        <button className="tab">Music</button>
        <button className="tab">Modern Art</button>
        <button className="tab">3D</button>
        <button className="tab">Watercolor</button>
      </nav>
    </header>
  );
};

export default Header;
