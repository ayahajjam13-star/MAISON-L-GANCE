// src/components/Hero.jsx
import React from 'react';
import hero from '../assets/hero.webp';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Élégance <br /><span>Intemporelle</span></h1>
          <p>Découvrez notre collection de mode féminine, où le luxe rencontre le confort. Des pièces uniques pour chaque femme.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Collection Printemps</button>
            <button className="btn-secondary">Découvrir</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Fashion collection" />
        </div>
      </div>
    </section>
  );
}

export default Hero;