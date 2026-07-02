// src/components/About.jsx
import React from 'react';
import about from '../assets/about.webp';

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-image">
          <img src={about} alt="About Maison Élégance" />
        </div>
        <div className="about-content">
          <h2>Notre <span>Histoire</span></h2>
          <p>
            Maison Élégance est une boutique de mode féminine qui allie tradition et modernité. 
            Nous proposons des pièces uniques, confectionnées avec des matières nobles et un souci 
            du détail exceptionnel.
          </p>
          <p>
            Depuis plus de 10 ans, nous accompagnons les femmes dans leur quête d'élégance 
            et de confort au quotidien.
          </p>
          <div className="about-features">
            <div className="feature">
              <span>✨</span>
              <div>
                <h4>Qualité Premium</h4>
                <p>Des matières nobles</p>
              </div>
            </div>
            <div className="feature">
              <span>🤝</span>
              <div>
                <h4>Service Client</h4>
                <p>À votre écoute</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;