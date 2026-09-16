'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const modulos = [
  {
    id: 'urbano',
    num: '01',
    label: 'Urbano',
    title: 'Entornos Urbanos',
    desc: 'Rascacielos, hoteles y edificios corporativos. Precisión milimétrica sin interrumpir la actividad.',
    tags: ['Fachadas de cristal', 'Hoteles de lujo', 'Torres y rascacielos'],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=95&w=1200&auto=format&fit=crop',
  },
  {
    id: 'industrial',
    num: '02',
    label: 'Industrial',
    title: 'Sector Industrial',
    desc: 'Tanques, silos y estructuras de gran altura. Donde el acceso humano es imposible.',
    tags: ['Tanques y silos', 'Plantas petroquímicas', 'Paneles solares'],
    img: '/images/industrial-silos.jpg',
  },
  {
    id: 'marine',
    num: '03',
    label: 'Marine',
    title: 'Sector Marino',
    desc: 'Cruceros, superyates y plataformas offshore. Certificados para entornos salinos del Mediterráneo.',
    tags: ['Cruceros y buques', 'Superyates', 'Plataformas offshore'],
    img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=95&w=1200&auto=format&fit=crop',
  },
  {
    id: 'inspeccion',
    num: '04',
    label: 'Inspección',
    title: 'Inspección con Drones',
    desc: 'Cámaras 8K y termografía infrarroja. Detectamos patologías invisibles con informe técnico.',
    tags: ['Termografía infrarroja', 'Inspección estructural', 'Informe AESA'],
    img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=95&w=1200&auto=format&fit=crop',
  },
];

export default function ModulosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="modulos" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold">
              Nuestros Servicios
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
              Cuatro sectores.{' '}
              <span className="text-[#C9A84C]">Una tecnología.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-sm leading-relaxed max-w-xs"
          >
            Sin andamios. Sin interrupciones. Sin riesgo.
          </motion.p>
        </div>
      </div>

      {/* Grid — 4 columnas en desktop, 2 en tablet, 1 en móvil */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modulos.map((mod, i) => (
            <motion.div
              key={mod.id}
              id={mod.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ height: '380px' }}
            >
              {/* Background image */}
              <Image
                src={mod.img}
                alt={mod.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                style={mod.id === 'industrial' ? { objectPosition: 'center 38%' } : {}}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/20 group-hover:to-transparent transition-all duration-500" />

              {/* Gold border + glow on hover */}
              <div className="absolute inset-0 border border-[#C9A84C]/30 group-hover:border-[#C9A84C] transition-all duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 40px rgba(201,168,76,0.12)' }}
              />

              {/* Full-height content column */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">

                {/* Top: number badge */}
                <div className="flex items-center gap-3">
                  <span
                    className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-semibold"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {mod.num}
                  </span>
                  <div className="w-6 h-px bg-[#C9A84C]/50" />
                </div>

                {/* Bottom: title + tags + CTA */}
                <div>
                  <h3
                    className="font-black text-white leading-none mb-3"
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {mod.label}
                  </h3>

                  {/* Service tags */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    {mod.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-2">
                        <div className="w-3 h-px bg-[#C9A84C] flex-shrink-0" />
                        <span
                          className="text-[10px] tracking-wider uppercase text-white/70 group-hover:text-white/90 transition-colors"
                          style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-bold text-[#C9A84C] hover:text-white transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Solicitar presupuesto
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
