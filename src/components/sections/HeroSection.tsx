'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-20 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-6 mb-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-[#f4f0e8] border border-[#C9A84C]/30 px-4 py-1.5">
              <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold">
                Limpieza de Fachadas con Dron
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight max-w-4xl">
              Edificios limpios.
              <br />
              <span className="text-[#C9A84C]">Sin andamios.</span>
              <br />
              Sin riesgo.
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed font-light">
              Tecnología de drones de última generación para la limpieza de fachadas urbanas,
              industriales y marinas en toda la Península Ibérica.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wider uppercase font-bold text-white bg-[#111111] hover:bg-[#C9A84C] transition-colors duration-300 cursor-pointer"
              >
                Solicitar Presupuesto
                <ArrowRight size={14} />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wider uppercase font-bold text-gray-900 border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 cursor-pointer"
              >
                Cómo funciona
              </a>
            </div>
          </div>
        }
      >
        {/* Hero image inside ContainerScroll card */}
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=85&w=2000&auto=format&fit=crop"
            alt="Drone limpieza fachadas"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay with stats */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <p className="text-white font-bold text-2xl">DJI M400</p>
              <p className="text-white/70 text-xs tracking-widest uppercase">Sistema AeroClean Pro</p>
            </div>
            <div className="flex gap-6">
              <div className="text-right">
                <p className="text-white font-bold text-xl">99%</p>
                <p className="text-white/70 text-[10px] tracking-widest uppercase">Eficiencia</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-xl">-80%</p>
                <p className="text-white/70 text-[10px] tracking-widest uppercase">Agua</p>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Scroll hint */}
      <div className="flex flex-col items-center pb-8 -mt-10 relative z-10">
        <div style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}>
          <ChevronDown size={20} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}
