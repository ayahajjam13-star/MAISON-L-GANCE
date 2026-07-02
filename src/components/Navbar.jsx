// src/components/Navbar.jsx
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">MAISON <span>ÉLÉGANCE</span></div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#categories">Catégories</a></li>
          <li><a href="#products">Boutique</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-icons">
          <span>🔍</span>
          <span>🛒</span>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;