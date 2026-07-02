// src/components/InstagramGallery.jsx
import React from 'react';

const images = [
  'instagram-1.webp',
  'instagram-2.webp',
  'instagram-3.webp',
  'instagram-4.webp',
  'instagram-5.webp',
  'instagram-6.webp',
];

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
            <img key={index} src={`/src/assets/${img}`} alt={`Instagram ${index+1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramGallery;