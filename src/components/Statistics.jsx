// src/components/Statistics.jsx
import React from 'react';

function Statistics() {
  return (
    <section className="statistics">
      <div className="container">
        <div className="statistics-grid">
          <div className="stat-card">
            <div className="number">10K+</div>
            <p>Clientes Heureuses</p>
          </div>
          <div className="stat-card">
            <div className="number">500+</div>
            <p>Commandes</p>
          </div>
          <div className="stat-card">
            <div className="number">200+</div>
            <p>Produits</p>
          </div>
          <div className="stat-card">
            <div className="number">10+</div>
            <p>Années d'Expérience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;