'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTABannerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-0 overflow-hidden" ref={ref}>
      <div
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: '#C9A84C' }}
      >
        {/* Big background letter */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span
            className="text-[300px] font-black text-black/5 select-none leading-none"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            DW
          </span>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-6">
              Tu edificio merece
              <br />
              la mejor limpieza
            </h2>
            <p className="text-black/70 text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Contrato anual de mantenimiento integral — inspección estructural
              y limpieza de cristales y fachada con productos 100% sostenibles.
              Sin andamios. Sin interrupciones. Sin riesgo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase font-black text-[#C9A84C] bg-black hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
              >
                Solicitar Presupuesto Gratuito
                <ArrowRight size={14} />
              </a>
              <a
                href="mailto:info@droneworksiberia.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase font-bold text-black border-2 border-black hover:bg-black hover:text-[#C9A84C] transition-colors duration-300 cursor-pointer"
              >
                info@droneworksiberia.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
