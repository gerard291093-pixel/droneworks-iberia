'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="quienes-somos" className="py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent mb-20" />

        <div ref={ref} className="max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold mb-8"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Quiénes somos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white leading-[1.1] font-black"
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            }}
          >
            Pioneros en limpieza
            <br />
            de fachadas con drones
            <br />
            <span className="text-[#C9A84C]">en España y Portugal.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/40 text-sm md:text-base leading-relaxed mt-8 max-w-2xl"
          >
            Eliminamos el riesgo humano en trabajos de altura con tecnología DJI M400
            y AeroClean P3 T50 — la combinación más avanzada del mercado para limpieza
            de superficies verticales en toda España.
          </motion.p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent mt-20 mb-8" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center gap-8"
        >
          {[
            { titulo: 'Operador UAS', sub: 'Registrado AESA' },
            { titulo: 'Empresa Certificada AESA', sub: 'Categoría Específica · SORA' },
            { titulo: 'ISO 9001', sub: 'Gestión de calidad' },
            { titulo: 'DJI Enterprise Partner', sub: 'Autorizado oficial' },
          ].map((c) => (
            <div key={c.titulo} className="flex items-start gap-2">
              <div className="w-1 h-1 bg-[#C9A84C] rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-white/50 text-[10px] font-semibold tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {c.titulo}
                </p>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#C9A84C]/50">
                  {c.sub}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
