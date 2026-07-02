// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  { name: 'Sarah', comment: 'Une qualité exceptionnelle ! Les robes sont magnifiques et le service est impeccable.', rating: 5 },
  { name: 'Leila', comment: 'J\'adore ma nouvelle abaya ! La coupe est parfaite et le tissu est très doux.', rating: 5 },
  { name: 'Nadia', comment: 'Livraison rapide et produit conforme à la photo. Je recommande vivement !', rating: 5 },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Ce que disent <span>nos clientes</span></h2>
          <p>Des retours authentiques de nos clientes.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">{'⭐'.repeat(item.rating)}</div>
              <p>"{item.comment}"</p>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;