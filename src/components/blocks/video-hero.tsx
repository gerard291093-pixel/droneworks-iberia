'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

interface VideoHeroProps {
  videoSrc: string;
}

export default function VideoHero({ videoSrc }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {/* Fallback image for mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: 'url(/images/hero-poster.jpg)' }}
      />
      {/* Video background (hidden on mobile) */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-32 px-6 text-center">

        {/* Brand label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          DroneWorks Iberia
        </motion.p>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-1"
          style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.03em', textShadow: '0 2px 40px rgba(0,0,0,0.8)' }}
        >
          Limpiamos donde
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8"
          style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.03em', color: '#C9A84C', textShadow: '0 2px 40px rgba(201,168,76,0.3)' }}
        >
          otros no llegan.
        </motion.h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-4 px-8 py-4 text-[11px] tracking-[0.4em] uppercase font-semibold text-[#C9A84C] border border-[#C9A84C]/60 hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all duration-300 cursor-pointer"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Solicitar Presupuesto
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
