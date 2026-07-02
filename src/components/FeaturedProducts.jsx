// src/components/FeaturedProducts.jsx
import React from 'react';
import product1 from '../assets/product-1.webp';
import product2 from '../assets/product-2.webp';
import product3 from '../assets/product-3.webp';
import product4 from '../assets/product-4.webp';
import product5 from '../assets/product-5.webp';
import product6 from '../assets/product-6.webp';
import product7 from '../assets/product-7.webp';
import product8 from '../assets/product-8.webp';
import product9 from '../assets/product-9.webp';
import product10 from '../assets/product-10.webp';
import product11 from '../assets/product-11.webp';
import product12 from '../assets/product-12.webp';

const products = [
  { name: 'Robe Élégante à Drapé', category: 'Robes', price: '450 DH', rating: 5, img: product1 },
  { name: "Ensemble d'Été Chic", category: 'Ensembles', price: '380 DH', rating: 5, img: product2 },
  { name: 'Ensemble Abaya & Kimono', category: 'Ensembles', price: '550 DH', rating: 5, img: product3 },
  { name: 'Robe Maxi Fleurie', category: 'Robes', price: '420 DH', rating: 5, img: product4 },
  { name: 'Ensemble Lin Confort', category: 'Ensembles', price: '490 DH', rating: 5, img: product5 },
  { name: 'Robe Longue Oversized', category: 'Robes', price: '290 DH', rating: 5, img: product6 },
  { name: 'Ensemble Casual Loungewear', category: 'Ensembles', price: '620 DH', rating: 5, img: product7 },
  { name: 'Robe Blanche Élégante', category: 'Robes', price: '370 DH', rating: 5, img: product8 },
  { name: 'Kimono Long Blanc', category: 'Kimonos', price: '430 DH', rating: 5, img: product9 },
  { name: 'Abaya Royale en Satin', category: 'Abayas', price: '260 DH', rating: 5, img: product10 },
  { name: 'Ensemble Tailleur Fluide', category: 'Ensembles', price: '580 DH', rating: 5, img: product11 },
  { name: 'Ensemble Épuré en Lin', category: 'Ensembles', price: '320 DH', rating: 5, img: product12 },
];

function FeaturedProducts() {
  return (
    <section className="featured-products" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Produits <span>Phare</span></h2>
          <p>Découvrez nos pièces les plus appréciées.</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="price">{product.price}</p>
                <p className="rating">{'⭐'.repeat(product.rating)}</p>
                <div className="actions">
                  <button className="add-to-cart">Ajouter</button>
                  <button className="quick-view">Voir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;