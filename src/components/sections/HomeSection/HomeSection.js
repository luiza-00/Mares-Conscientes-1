
// components/HomeSection.js
import React from 'react';
import Image from 'next/image';

export default function HomeSection() {
  return (
    <section
      id="home"
      data-aos="fade-in"
      style={{
        backgroundImage: 'url(/images/capa.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Image src="/images/logo.png" alt="Logo" height={200} width={600} />
        <p style={{ fontSize: '1.5rem' }}>
          A esperança navega em águas conscientes!
        </p>
      </div>
    </section>
  );
}
