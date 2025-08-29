import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Products from './components/sections/Products';
import Features from './components/sections/Features';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;