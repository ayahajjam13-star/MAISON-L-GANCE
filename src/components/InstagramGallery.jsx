// src/components/InstagramGallery.jsx
import React from 'react';
import img1 from '../assets/instagram-1.webp';
import img2 from '../assets/instagram-2.webp';
import img3 from '../assets/instagram-3.webp';
import img4 from '../assets/instagram-4.webp';
import img5 from '../assets/instagram-5.webp';
import img6 from '../assets/instagram-6.webp';

const images = [img1, img2, img3, img4, img5, img6];

function InstagramGallery() {
  return (
    <section className="instagram-gallery">
      <div className="container">
        <div className="section-header">
          <h2>Suivez-nous sur <span>Instagram</span></h2>
          <p>@maisonelegance</p>
        </div>
        <div className="instagram-grid">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Instagram ${index+1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramGallery;