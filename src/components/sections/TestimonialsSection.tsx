'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TestimonialCard, TestimonialAuthor } from '@/components/ui/testimonial-card';

const testimonials: Array<{ author: TestimonialAuthor; text: string; href?: string }> = [
  {
    author: {
      name: 'Javier Moreno',
      handle: 'Director de Operaciones · Torre Cristal, Madrid',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&fit=crop&crop=face',
    },
    text: 'Limpiaron los 42 pisos de nuestra torre en 3 días. Con andamios hubiera tardado dos semanas y el coste habría sido cuatro veces mayor. Servicio impecable.',
  },
  {
    author: {
      name: 'Carmen Vidal',
      handle: 'Gerente de Mantenimiento · Hotel Arts Barcelona',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100&h=100&fit=crop&crop=face',
    },
    text: 'La fachada de cristal del hotel quedó perfecta sin interrumpir ni una sola noche de hospedaje. Los huéspedes ni se enteraron. Increíble.',
  },
  {
    author: {
      name: 'Miguel Ángel Torres',
      handle: 'Jefe de Planta · Repsol, Puertollano',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&fit=crop&crop=face',
    },
    text: 'Limpiaron los silos de 60 metros de altura en condiciones en las que ningún operario habría podido trabajar. La planta siguió funcionando al 100%.',
  },
  {
    author: {
      name: 'Sophia Andersson',
      handle: 'Fleet Manager · MSC Cruises, Valencia',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&fit=crop&crop=face',
    },
    text: 'Tres cruceros en una semana de escala en Valencia. Antes era imposible. Con DroneWorks lo hacemos en paralelo y los buques salen perfectos.',
  },
  {
    author: {
      name: 'Raúl Fernández',
      handle: 'Administrador · Comunidad Paseo de la Castellana 200',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&fit=crop&crop=face',
    },
    text: 'Llevábamos años sin poder limpiar la fachada por el coste. DroneWorks lo hizo en un fin de semana por un tercio del precio que nos habían presupuestado.',
  },
  {
    author: {
      name: 'Ana Sousa',
      handle: 'Directora de Facility Management · EDP, Lisboa',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=100&h=100&fit=crop&crop=face',
    },
    text: 'En Portugal son de los pocos operadores con certificación completa para trabajar en espacios urbanos densamente poblados. Profesionalidad máxima.',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="testimonios" className="py-20 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold">
            Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
            Lo que dicen
            <span className="text-[#C9A84C]"> nuestros clientes.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="group flex overflow-hidden [--gap:1.25rem] [gap:var(--gap)] [--duration:60s]">
        <div className="flex shrink-0 [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`a-${i}`} {...t} />
          ))}
        </div>
        <div className="flex shrink-0 [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`b-${i}`} {...t} />
          ))}
        </div>
      </div>

    </section>
  );
}
