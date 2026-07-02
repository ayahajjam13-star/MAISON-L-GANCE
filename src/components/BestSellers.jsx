// src/components/BestSellers.jsx
import React from 'react';
import product1 from '../assets/product-1.webp';
import product4 from '../assets/product-4.webp';
import product6 from '../assets/product-6.webp';
import product5 from '../assets/product-5.webp';
import product3 from '../assets/product-3.webp';
import product8 from '../assets/product-8.webp';

const bestSellers = [
  { name: 'Robe Élégante à Drapé', price: '450 DH', img: product1 },
  { name: 'Robe Maxi Luxe Fleurie', price: '550 DH', img: product4 },
  { name: 'Robe Longue Oversized', price: '490 DH', img: product6 },
  { name: 'Ensemble Lin Confort', price: '420 DH', img: product5 },
  { name: "Ensemble d'Été Chic", price: '320 DH', img: product3 },
  { name: 'Robe Blanche Élégante', price: '620 DH', img: product8 },
];

function BestSellers() {
  return (
    <section className="best-sellers">
      <div className="container">
        <div className="section-header">
          <h2>Meilleures <span>Ventes</span></h2>
          <p>Les pièces que nos clientes adorent.</p>
        </div>
        <div className="best-sellers-slider">
          {bestSellers.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.img} alt={item.name} />
              <div className="product-info">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;