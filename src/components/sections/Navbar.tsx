'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Quiénes Somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#modulos' },
  { label: 'Cómo Funciona', href: '#como-funciona' },
  { label: 'Proyectos', href: '#galeria' },
  { label: 'Clientes', href: '#testimonios' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 cursor-pointer group">
            <Image
              src="/images/logo-icon.svg"
              alt="DroneWorks Iberia"
              width={38}
              height={38}
              className="flex-shrink-0"
            />
            <div className="flex flex-col leading-none">
              <span
                className={`text-[15px] font-bold tracking-[0.18em] uppercase transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                DroneWorks
              </span>
              <span
                className="text-[10px] tracking-[0.4em] uppercase font-semibold text-[#C9A84C]"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Iberia
              </span>
            </div>
          </a>

          {/* Desktop links + CTA */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-wider uppercase font-semibold cursor-pointer transition-colors duration-200 ${
                  scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-[#C9A84C]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-5 py-2.5 text-[11px] tracking-wider uppercase font-semibold text-black bg-[#C9A84C] hover:bg-[#b8924a] transition-colors duration-300 cursor-pointer"
            >
              Contacto
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden cursor-pointer transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
            aria-label="Menú"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-6 text-gray-800 cursor-pointer"
            >
              <X size={24} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-light text-gray-900 hover:text-[#C9A84C] transition-colors cursor-pointer"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 px-8 py-3 text-sm tracking-widest uppercase font-semibold text-black bg-[#C9A84C] cursor-pointer"
            >
              Contacto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
