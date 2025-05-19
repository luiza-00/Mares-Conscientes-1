

// components/sections/AboutUsSection.js
import React from 'react';

export default function AboutUsSection() {
  return (
    <section id="sobre-nos" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <div data-aos="fade-up">
        <h1 style={{ fontSize: '4rem', padding: '2rem 0', color: '#B65B36' }}>BEM VINDO A BORDO!</h1>
      </div>
      <div>
        <img
          style={{ width: '90%', height: 'auto', marginTop: '2rem' }}
          data-aos="fade-up"
          alt="Ilustração"
          src="/images/paragrafo2.png"
          onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
        <img
          style={{ maxWidth: '40%', marginRight: '1rem' }}
          alt="Info"
          data-aos="fade-up"
          src="/images/paragrafo3.png"
          onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
        />
        <img
          style={{ maxWidth: '40%' }}
          alt="Celular"
          data-aos="fade-up"
          src="/images/celular.png"
          onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
        />
      </div>
    </section>
  );
}