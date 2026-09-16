'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const specs = [
  { label: 'Dron', value: 'DJI M400', icon: '▲' },
  { label: 'Sistema Limpieza', value: 'AeroClean P3 T50', icon: '◉' },
  { label: 'Autonomía', value: '55 min', icon: '◷' },
  { label: 'Alcance', value: '15 km', icon: '◎' },
  { label: 'Precisión RTK', value: '±2 cm', icon: '◈' },
  { label: 'Cámara', value: '8K + IR', icon: '◧' },
];

const ventajas = [
  { title: 'Sin andamios', desc: 'Hasta 70% menos coste vs. métodos tradicionales' },
  { title: 'Cero accidentes', desc: 'Sin personal en altura. Cumplimiento total AESA' },
  { title: 'Eco-friendly', desc: '-80% consumo agua. Productos biodegradables' },
  { title: 'Informe digital', desc: 'Fotogrametría 3D antes/después en 24h' },
];

export default function TecnologiaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="tecnologia" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: content */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold">
                Equipamiento
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                Tecnología
                <br />
                de vanguardia
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                Operamos con el sistema más avanzado del mercado. El DJI M400 combinado
                con el sistema de limpieza Foxtech AeroClean P3 T50 representa la
                cúspide de la tecnología de drones industriales.
              </p>

              {/* Spec grid */}
              <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100 mb-10">
                {specs.map((spec) => (
                  <div key={spec.label} className="bg-white p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#C9A84C] text-xs">{spec.icon}</span>
                      <span className="text-[9px] tracking-widest uppercase text-gray-400 font-medium">{spec.label}</span>
                    </div>
                    <p className="text-base font-bold text-gray-900">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Ventajas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ventajas.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="w-1 bg-[#C9A84C] flex-shrink-0 mt-1 self-start h-full min-h-[3rem]" style={{ width: '2px' }} />
                    <div>
                      <p className="font-bold text-sm text-gray-900 mb-0.5">{v.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: image + certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="relative h-72 overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=85&w=1200&auto=format&fit=crop"
                alt="Dron DJI M400"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden bg-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1569025591289-c34ea3843745?q=85&w=1200&auto=format&fit=crop"
                alt="Limpieza fachada edificio"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-black text-white">AESA</p>
                  <p className="text-xs tracking-[0.5em] uppercase text-white/60 mt-1">Operador Certificado</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
