// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>MAISON <span>ÉLÉGANCE</span></h3>
            <p>La mode féminine qui allie tradition et modernité.</p>
            <div className="social">
              <a href="#">📷</a>
              <a href="#">📘</a>
              <a href="#">📌</a>
            </div>
          </div>
          <div>
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#categories">Catégories</a></li>
              <li><a href="#products">Boutique</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Catégories</h4>
            <ul>
              <li><a href="#">Robes</a></li>
              <li><a href="#">Jellabas</a></li>
              <li><a href="#">Burkinis</a></li>
              <li><a href="#">Abayas</a></li>
            </ul>
          </div>
          <div>
            <h4>Service Client</h4>
            <ul>
              <li><a href="#">Livraison</a></li>
              <li><a href="#">Retours</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Maison Élégance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;