// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import BestSellers from './components/BestSellers';
import PromotionBanner from './components/PromotionBanner';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BestSellers />
      <PromotionBanner />
      <About />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;