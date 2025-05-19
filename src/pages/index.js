import React from 'react';
import Head from 'next/head';

import Navbar from '@/components/common/Nav/Navbar'
import ImageCarousel from '@/components/common/Carrossel/ImageCarousel'
import HomeSection from '@/components/sections/HomeSection/HomeSection'
import AboutUsSection from '@/components/sections/AboutUsSection/AboutUsSection'
import SponsorSection from '@/components/sections/SponsorSection/SponsorSection'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mares Conscientes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Navbar />
        <HomeSection />
        <AboutUsSection />
        <ImageCarousel />
        <SponsorSection />
        <Footer />
      </div>
    </>
  );
}
