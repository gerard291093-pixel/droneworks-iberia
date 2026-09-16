'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const beneficios = [
  {
    num: '−70%',
    titulo: 'Coste vs andamios',
    body: 'Montar un andamio para un edificio de 20 plantas cuesta semanas y una fortuna. Nuestros drones operan en horas, sin estructuras y sin permisos de corte de calle.',
    tag: 'Ahorro económico',
  },
  {
    num: '6×',
    titulo: 'Más rápido',
    body: 'Una fachada de 1.000 m² que con métodos tradicionales tarda 3 días se completa en menos de 6 horas. Su edificio sigue operando sin interrupciones.',
    tag: 'Velocidad',
  },
  {
    num: '0',
    titulo: 'Cero riesgo humano',
    body: 'Las caídas en altura suponen el 30% de los accidentes mortales en construcción en España. Con DroneWorks no hay nadie en altura. Cero exposición, cero responsabilidad.',
    tag: 'Seguridad total',
  },
  {
    num: 'RO',
    titulo: 'Agua ionizada — sin marcas',
    body: 'Planta de ósmosis inversa integrada en el sistema. El agua se purifica e ioniza eliminando todos los minerales: sin cal, sin vetas, sin residuos. Resultado impecable desde el primer servicio.',
    tag: 'Calidad superior',
  },
  {
    num: '±2cm',
    titulo: 'Precisión RTK absoluta',
    body: 'Navegación RTK centimétrica en cada vuelo. Cornisas, retranqueos, cúpulas, antenas — zonas donde nadie debería estar son accesibles con precisión milimétrica.',
    tag: 'Acceso total',
  },
  {
    num: 'ECO',
    titulo: 'Presión adaptada · Materiales sostenibles',
    body: 'Ajustamos la presión según cada superficie: desde cristal delicado hasta hormigón industrial. Productos biodegradables certificados, 85% menos consumo de agua frente a métodos convencionales.',
    tag: 'Sostenibilidad',
  },
];

export default function TecnologiaIndustriaSection() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const gridInView = useInView(gridRef, { once: true });

  return (
    <section id="tecnologia" className="bg-[#070707] overflow-hidden">
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div ref={headerRef} className="max-w-3xl mb-20">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="block text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Por qué DroneWorks
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white font-black leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-montserrat)', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Limpiar en altura
              <br />nunca debió ser
              <br /><span className="text-[#C9A84C]">tan caro ni tan peligroso.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/35 text-sm leading-relaxed max-w-xl"
            >
              Andamios, góndolas, alpinistas industriales — todos suponen coste elevado,
              semanas de espera y riesgo humano. DroneWorks elimina los tres factores
              con tecnología de drones industriales certificados.
            </motion.p>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beneficios.map((b, i) => (
              <motion.div
                key={b.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#070707] p-8 border border-[#C9A84C]/20 hover:border-[#C9A84C]/70 hover:bg-[#0d0d0d] transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-[#C9A84C] font-black leading-none"
                    style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
                  >
                    {b.num}
                  </span>
                  <span
                    className="text-[8px] tracking-[0.4em] uppercase text-[#C9A84C]/50 border border-[#C9A84C]/20 px-2 py-1 mt-1"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {b.tag}
                  </span>
                </div>
                <h3
                  className="text-white font-bold text-base mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {b.titulo}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {b.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
