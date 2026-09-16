'use client';

import VideoHero from '@/components/blocks/video-hero';
import Navbar from '@/components/sections/Navbar';
import StatsSection from '@/components/sections/StatsSection';
import ModulosSection from '@/components/sections/ModulosSection';
import ComoFuncionaSection from '@/components/sections/ComoFuncionaSection';
import GaleriaSection from '@/components/sections/GaleriaSection';
import CTABannerSection from '@/components/sections/CTABannerSection';
import TecnologiaIndustriaSection from '@/components/sections/TecnologiaIndustriaSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactoSection from '@/components/sections/ContactoSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden" style={{ background: '#080808' }}>
      <Navbar />
      <VideoHero
        videoSrc="/videos/Create-an-8-second-ultra-photorealistic.mp4"
      />
      <div className="bg-white w-full">
        <StatsSection />
        <ModulosSection />
        <ComoFuncionaSection />
        <GaleriaSection />
        <CTABannerSection />
        <TecnologiaIndustriaSection />
        <TestimonialsSection />
        <ContactoSection />
        <Footer />
      </div>
    </main>
  );
}
