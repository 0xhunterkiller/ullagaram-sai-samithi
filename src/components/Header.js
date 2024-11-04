import React from 'react';
import './Header.css';

function Header({ logo }) {
  return (
    <header className="header">
      <div className="header-content">
        {console.log(logo)}
        <img src={logo} alt="Ullagaram Sathya Sai Samithi Logo" className="logo" />
        <h1>Ullagaram Sathya Sai Samithi</h1>
      </div>
    </header>
  );
}

export default Header;
