// src/components/WhyChooseUs.jsx
import React from 'react';

const reasons = [
  { icon: '👗', title: 'Qualité Premium', desc: 'Des matières nobles et une finition impeccable.' },
  { icon: '🚀', title: 'Livraison Rapide', desc: 'Expédition sous 24-48h partout au Maroc.' },
  { icon: '🔄', title: 'Retours Faciles', desc: 'Retour sous 14 jours, satisfaite ou remboursée.' },
  { icon: '💬', title: 'Support 24/7', desc: 'Une équipe à votre écoute pour vous conseiller.' },
  { icon: '🔒', title: 'Paiement Sécurisé', desc: 'Paiement 100% sécurisé par carte ou livraison.' },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Pourquoi <span>Choisir Nous</span></h2>
          <p>La différence Maison Élégance</p>
        </div>
        <div className="why-grid">
          {reasons.map((item, index) => (
            <div key={index} className="why-card">
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;