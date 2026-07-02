// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contactez-<span>Nous</span></h2>
          <p>Nous sommes à votre écoute pour toute question.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="item">
              <div className="icon">📞</div>
              <div>
                <h4>Téléphone</h4>
                <p>+212 6 88 47 16 67</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>contact@maisonelegance.ma</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">📍</div>
              <div>
                <h4>Adresse</h4>
                <p>Al Hoceima, Maroc</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">📷</div>
              <div>
                <h4>Instagram</h4>
                <p>@maisonelegance</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre email" />
            <input type="tel" placeholder="Votre téléphone" />
            <textarea placeholder="Votre message" rows="5"></textarea>
            <button type="submit" className="btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;