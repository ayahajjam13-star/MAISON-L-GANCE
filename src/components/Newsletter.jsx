// src/components/Newsletter.jsx
import React from 'react';

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <h2>📩 Abonnez-vous</h2>
        <p>Recevez nos offres exclusives et les nouvelles collections.</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Votre email" />
          <button type="submit" className="btn-primary">S'abonner</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;