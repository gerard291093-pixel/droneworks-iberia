'use client';

import Image from 'next/image';

const socials = [
  {
    name: 'Instagram',
    href: '#contacto',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#contacto',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#contacto',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
];

const navCols = [
  {
    title: 'Servicios',
    links: [
      { label: 'Urbano', href: '#modulos' },
      { label: 'Industrial', href: '#modulos' },
      { label: 'Marine', href: '#modulos' },
      { label: 'Inspección', href: '#modulos' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Quiénes somos', href: '#quienes-somos' },
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: '+34 676 542 452', href: 'tel:+34676542452' },
      { label: 'info@droneworksiberia.com', href: 'mailto:info@droneworksiberia.com' },
      { label: 'ES · PT — España y Portugal', href: '#contacto' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505]">

      {/* ── Certification strip ─────────────────────────────── */}
      <div className="border-t border-b border-[#C9A84C]/15">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p
            className="text-[9px] tracking-[0.5em] uppercase text-[#C9A84C]/50 mb-7 text-center"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Certificaciones y habilitaciones
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">

            {/* AESA — logo real */}
            <div className="flex items-center gap-3 border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-colors duration-300 px-5 py-4">
              <div className="bg-white px-3 py-1.5 flex items-center justify-center">
                <Image src="/images/logo-aesa.png" alt="AESA" width={72} height={28} className="object-contain" />
              </div>
              <div>
                <p className="text-white/70 text-[10px] font-semibold leading-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>Operador</p>
                <p className="text-white/70 text-[10px] font-semibold leading-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>Certificado</p>
                <p className="text-white/25 text-[8px] tracking-wide mt-1">Seguridad Aérea España</p>
              </div>
            </div>

            {/* EASA — logo real */}
            <div className="flex items-center gap-3 border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-colors duration-300 px-5 py-4">
              <div className="bg-white px-3 py-1.5 flex items-center justify-center">
                <Image src="/images/logo-easa.svg" alt="EASA" width={72} height={28} className="object-contain" />
              </div>
              <div>
                <p className="text-white/70 text-[10px] font-semibold leading-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>Operador</p>
                <p className="text-white/70 text-[10px] font-semibold leading-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>Registrado</p>
                <p className="text-white/25 text-[8px] tracking-wide mt-1">Reglamento UE 2019/947</p>
              </div>
            </div>

            {/* C5 — logo real */}
            <div className="flex items-center gap-3 border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-colors duration-300 px-5 py-4">
              <div className="bg-white px-3 py-1.5 flex items-center justify-center">
                <Image src="/images/logo-c5.jpg" alt="C5 EASA" width={72} height={28} className="object-contain" />
              </div>
              <div>
                <p className="text-white/70 text-[10px] font-semibold leading-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>Clase EASA</p>
                <p className="text-white/70 text-[10px] font-semibold leading-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>Específica</p>
                <p className="text-white/25 text-[8px] tracking-wide mt-1">Categoría Específica EASA</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Main footer ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col mb-5">
              <span
                className="text-base font-bold tracking-[0.2em] uppercase text-white"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                DroneWorks
              </span>
              <span
                className="text-[9px] tracking-[0.5em] uppercase text-[#C9A84C] font-light"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Iberia
              </span>
            </div>
            <p className="text-white/25 text-xs leading-relaxed mb-7 max-w-[200px]">
              Limpieza de fachadas con drones en España. Aerial Luxury Cleaning.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-colors duration-200 cursor-pointer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {navCols.map((col) => (
            <div key={col.title}>
              <p
                className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-xs text-white/30 hover:text-white/70 transition-colors duration-200 cursor-pointer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[9px] text-white/20 tracking-wide">
            © {new Date().getFullYear()} DroneWorks Iberia S.L. · NIF: B-XXXXXXXX — Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            <a href="/aviso-legal" className="text-[9px] text-white/20 hover:text-white/50 transition-colors tracking-wide">Aviso Legal</a>
            <span className="text-white/10">·</span>
            <a href="/privacidad" className="text-[9px] text-white/20 hover:text-white/50 transition-colors tracking-wide">Privacidad</a>
            <span className="text-white/10">·</span>
            <a href="/cookies" className="text-[9px] text-white/20 hover:text-white/50 transition-colors tracking-wide">Cookies</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
