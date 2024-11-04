import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav-bar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#articles">Articles</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href=".announcements">Announcements</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
