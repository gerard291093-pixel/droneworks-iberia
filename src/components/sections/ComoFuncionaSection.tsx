'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const pasos = [
  {
    num: '01',
    title: 'Inspección inicial',
    desc: 'Enviamos nuestro dron de inspección para evaluar la superficie, mapear la fachada en 3D y detectar zonas de difícil acceso o daños estructurales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Planificación de vuelo',
    desc: 'Nuestros pilotos certificados AESA programan la ruta de vuelo óptima, definiendo los parámetros de limpieza según el tipo de superficie y nivel de suciedad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Operación de limpieza',
    desc: 'El dron DJI M400 con sistema AeroClean P3 T50 ejecuta la limpieza con microatomización de agua y productos ecológicos a alta presión controlada.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Informe y certificación',
    desc: 'Entregamos un informe fotogramétrico completo con comparativas antes/después, métricas de limpieza y documentación para auditorías de mantenimiento.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ComoFuncionaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="como-funciona" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold">
              El proceso
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
              Cómo limpiamos
              <br />
              tu edificio
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed text-sm">
              Un proceso eficiente de 4 pasos que garantiza la máxima calidad,
              seguridad y respeto medioambiental.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="divide-y divide-gray-100">
            {pasos.map((paso, i) => (
              <motion.div
                key={paso.num}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group flex gap-6 py-7 first:pt-0 last:pb-0 hover:bg-transparent"
              >
                {/* Big step number */}
                <div className="flex-shrink-0 w-14 text-right">
                  <span
                    className="font-light text-[#C9A84C]/30 group-hover:text-[#C9A84C]/70 transition-colors duration-300 leading-none"
                    style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3.5rem' }}
                  >
                    {paso.num}
                  </span>
                </div>

                {/* Divider */}
                <div className="flex-shrink-0 flex flex-col items-center pt-3 gap-1">
                  <div className="w-px h-full bg-gray-200 group-hover:bg-[#C9A84C]/40 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="pt-2 pb-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 border border-[#C9A84C]/30 group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/5 flex items-center justify-center transition-all duration-300 flex-shrink-0 text-[#C9A84C] [&_svg]:w-3.5 [&_svg]:h-3.5">
                      {paso.icon}
                    </div>
                    <h3 className="font-black text-gray-900 text-[15px] tracking-tight group-hover:text-[#C9A84C] transition-colors duration-300">{paso.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{paso.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/images/madrid-torres.jpg"
                alt="Torres de Madrid — edificios que limpiamos"
                fill
                className="object-cover object-center"
              />
              {/* Gold accent corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#C9A84C] flex items-end justify-end p-4">
                <p className="text-black text-xs font-black tracking-widest uppercase leading-tight text-right">
                  Certified<br/>AESA
                </p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -left-6 top-12 bg-white shadow-xl p-4 border-l-4 border-[#C9A84C]">
              <p className="text-2xl font-black text-gray-900">DJI M400</p>
              <p className="text-xs font-semibold text-[#C9A84C] tracking-wide">AeroClean P3 T50</p>
              <p className="text-[10px] tracking-wider text-gray-500 uppercase mt-0.5">Mejor tecnología del mercado</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
