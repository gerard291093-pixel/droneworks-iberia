'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const datos = [
  {
    valor: '$11.2B',
    unidad: 'mercado global',
    desc: 'El sector de drones para mantenimiento de edificios alcanzará los $11.2 billones en 2030, con un crecimiento anual del 15%.',
  },
  {
    valor: '85%',
    unidad: 'ahorro de agua',
    desc: 'Los sistemas de limpieza con drones reducen el consumo de agua hasta un 85% frente a los métodos convencionales con presión.',
  },
  {
    valor: '6 horas',
    unidad: 'vs 3 días',
    desc: 'Una fachada de 1.000 m² que tarda 3 días con andamios se completa en menos de 6 horas con nuestros drones.',
  },
  {
    valor: '30%',
    unidad: 'de los accidentes',
    desc: 'Las caídas en altura representan el 30% de los accidentes mortales en construcción en España. Con drones, este riesgo desaparece.',
  },
];

const comparativa = [
  { aspecto: 'Instalación', tradicional: '2–5 días', dron: '2 horas', mejor: true },
  { aspecto: 'Riesgo laboral', tradicional: 'Alto', dron: 'Nulo', mejor: true },
  { aspecto: 'Coste total', tradicional: '100%', dron: '20–35%', mejor: true },
  { aspecto: 'Consumo de agua', tradicional: '100%', dron: '15%', mejor: true },
  { aspecto: 'Interrupción del negocio', tradicional: 'Sí', dron: 'No', mejor: true },
  { aspecto: 'Certificación', tradicional: 'Variable', dron: 'AESA · ISO 9001', mejor: true },
];

export default function IndustriaSection() {
  const ref = useRef(null);
  const tableRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const tableInView = useInView(tableRef, { once: true });

  return (
    <section className="bg-[#070707] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold">
              El sector
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
              La industria del futuro,
              <span className="text-[#C9A84C]"> hoy.</span>
            </h2>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-lg">
              Los drones están redefiniendo el mantenimiento de edificios. Más rápido, más seguro,
              más económico — y con un impacto ambiental mínimo.
            </p>
          </motion.div>
        </div>

        {/* Data grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C9A84C]/20 mb-20">
          {datos.map((d, i) => (
            <motion.div
              key={d.unidad}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="bg-[#070707] p-8 group hover:bg-[#0e0e0e] transition-colors duration-300"
            >
              <p
                className="text-4xl md:text-5xl font-light text-[#C9A84C] mb-1 leading-none"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {d.valor}
              </p>
              <p className="text-[9px] tracking-[0.4em] uppercase text-white/30 mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {d.unidad}
              </p>
              <p className="text-white/40 text-xs leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <div ref={tableRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold">
              Comparativa
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white mt-2">
              Drones vs. métodos tradicionales
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={tableInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-[9px] tracking-[0.4em] uppercase text-white/30 pb-4 pr-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Aspecto
                  </th>
                  <th className="text-left text-[9px] tracking-[0.4em] uppercase text-white/30 pb-4 pr-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Tradicional
                  </th>
                  <th className="text-left text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] pb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    DroneWorks
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((row, i) => (
                  <tr key={row.aspecto} className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 pr-8 text-xs text-white/50 font-medium">{row.aspecto}</td>
                    <td className="py-4 pr-8 text-xs text-white/25 line-through">{row.tradicional}</td>
                    <td className="py-4 text-xs text-[#C9A84C] font-semibold">{row.dron}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
