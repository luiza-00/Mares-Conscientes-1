// src/pages/Home.js
import React from 'react';
import Navbar from '@/components/common/Nav/Navbar'
import ImageCarousel from '@/components/common/Carrossel/ImageCarousel'
import HeroSection from '@/components/sections/HomeSection/HomeSection'
import AboutUsSection from '@/components/sections/AboutUsSection/AboutUsSection'
import SponsorSection from '@/components/sections/SponsorSection/SponsorSection'
import Footer from '@/components/footer/Footer'


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ImageCarousel/>
      <SponsorSection />
      <Footer />
    </div>
  );
}