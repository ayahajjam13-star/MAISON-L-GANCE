// src/components/Categories.jsx
import React from 'react';
import dresses from '../assets/category-dresses.webp';
import jellaba from '../assets/category-jellaba.webp';
import burkini from '../assets/category-burkini.webp';
import abaya from '../assets/category-abaya.webp';

const categories = [
  { name: 'Ensembles', img: dresses },
  { name: 'Collection Été', img: jellaba },
  { name: 'Burkinis', img: burkini },
  { name: 'Nouvelle Collection', img: abaya },
];

function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-header">
          <h2>Nos <span>Catégories</span></h2>
          <p>Des styles pour toutes les occasions.</p>
        </div>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <img src={cat.img} alt={cat.name} />
              <div className="overlay">
                <h3>{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;