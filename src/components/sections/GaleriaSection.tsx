'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const proyectos = [
  {
    title: 'Torre Corporativa · Madrid',
    type: 'Urban',
    surface: '4.200 m²',
    img: '/images/madrid-torre-negra.jpg',
    span: 'col-span-1 row-span-2',
  },
  {
    title: 'Hotel 5* · Barcelona',
    type: 'Urban',
    surface: '2.800 m²',
    img: '/images/hotel-arts-bcn.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Planta Industrial · Bilbao',
    type: 'Industrial',
    surface: '8.500 m²',
    img: '/images/planta-depuradora.jpg',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Crucero MSC · Valencia',
    type: 'Marine',
    surface: '12.000 m²',
    img: '/images/msc-crucero.jpg',
    span: 'col-span-2 row-span-1',
  },
];

export default function GaleriaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold">
              Proyectos
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
              Algunos de nuestros
              <br />
              trabajos
            </h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            href="#contacto"
            className="inline-flex items-center gap-2 text-[11px] tracking-wider uppercase font-bold text-gray-900 border-b-2 border-[#C9A84C] pb-0.5 hover:text-[#C9A84C] transition-colors cursor-pointer"
          >
            Ver todos los proyectos →
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Large left card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden group cursor-pointer md:row-span-2 min-h-[300px] md:min-h-[500px]"
          >
            <Image
              src={proyectos[0].img}
              alt={proyectos[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-semibold bg-black/30 px-2 py-1 mb-2 inline-block">
                {proyectos[0].type}
              </span>
              <p className="text-white font-bold text-lg leading-tight">{proyectos[0].title}</p>
              <p className="text-white/60 text-xs mt-1">{proyectos[0].surface}</p>
            </div>
          </motion.div>

          {/* Top right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden group cursor-pointer min-h-[240px]"
          >
            <Image
              src={proyectos[1].img}
              alt={proyectos[1].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <span className="text-[8px] tracking-[0.4em] uppercase text-[#C9A84C] font-semibold mb-1 block">{proyectos[1].type}</span>
              <p className="text-white font-bold text-sm">{proyectos[1].title}</p>
            </div>
          </motion.div>

          {/* Middle right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden group cursor-pointer min-h-[240px]"
          >
            <Image
              src={proyectos[2].img}
              alt={proyectos[2].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <span className="text-[8px] tracking-[0.4em] uppercase text-[#C9A84C] font-semibold mb-1 block">{proyectos[2].type}</span>
              <p className="text-white font-bold text-sm">{proyectos[2].title}</p>
            </div>
          </motion.div>

          {/* Bottom wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden group cursor-pointer min-h-[200px] md:col-span-2"
          >
            <Image
              src={proyectos[3].img}
              alt={proyectos[3].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between">
              <div>
                <span className="text-[8px] tracking-[0.4em] uppercase text-[#C9A84C] font-semibold mb-1 block">{proyectos[3].type}</span>
                <p className="text-white font-bold text-sm">{proyectos[3].title}</p>
              </div>
              <p className="text-white/60 text-xs">{proyectos[3].surface}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
