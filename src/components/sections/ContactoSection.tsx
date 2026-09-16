'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const sectores = [
  'Edificio urbano', 'Hotel de lujo', 'Planta industrial',
  'Crucero / Barco', 'Yate privado', 'Edificio público', 'Otro',
];

export default function ContactoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [sector, setSector] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [localizacion, setLocalizacion] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    try {
      await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ empresa, email, sector, localizacion, descripcion }),
      });
      setEnviado(true);
    } catch {
      setEnviado(true);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="relative py-36 bg-[#0a0a0a] overflow-hidden border-t-2 border-[#C9A84C]/40">

      {/* Decorative background "24H" */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(14rem, 30vw, 26rem)',
          fontWeight: 900,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(201,168,76,0.08)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        24H
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left side */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold">
                  Contacto
                </span>
                <h2
                  className="font-black text-white mt-4 mb-8 leading-[0.95]"
                  style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
                >
                  Presupuesto
                  <br />
                  <span className="text-[#C9A84C]">gratuito</span>
                  <br />
                  en 24h
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-sm">
                  Cuéntanos tu proyecto y recibirás un presupuesto detallado
                  con nuestra propuesta técnica sin compromiso.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+34676542452"
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-9 h-9 border border-white/15 group-hover:border-[#C9A84C]/60 flex items-center justify-center transition-colors">
                      <Phone size={14} className="text-[#C9A84C]" />
                    </div>
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                      +34 676 542 452
                    </span>
                  </a>
                  <a
                    href="mailto:info@droneworksiberia.com"
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-9 h-9 border border-white/15 group-hover:border-[#C9A84C]/60 flex items-center justify-center transition-colors">
                      <Mail size={14} className="text-[#C9A84C]" />
                    </div>
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                      info@droneworksiberia.com
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom quote */}
              <div className="mt-16 pt-8 border-t border-white/10 hidden lg:block">
                <p className="text-white/70 italic leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem' }}>
                  &ldquo;El futuro de la limpieza industrial no tiene andamios.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {enviado ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center border border-[#C9A84C]/20 p-12 bg-white/5">
                <div className="w-16 h-16 border border-[#C9A84C] flex items-center justify-center mb-6">
                  <ArrowRight size={24} className="text-[#C9A84C]" />
                </div>
                <p className="text-3xl font-black text-white mb-3">¡Enviado!</p>
                <p className="text-white/50 text-sm">Te contactamos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2 font-medium">
                      Empresa / Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu empresa"
                      value={empresa}
                      onChange={e => setEmpresa(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#C9A84C]/60 px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#C9A84C]/60 px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-3 font-medium">
                    Tipo de instalación
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sectores.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSector(s)}
                        className={`px-3 py-1.5 text-[9px] tracking-wider uppercase border transition-all duration-200 font-semibold cursor-pointer ${
                          sector === s
                            ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]'
                            : 'border-white/15 text-white/40 hover:border-white/30 hover:text-white/60'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2 font-medium">
                    Localización
                  </label>
                  <input
                    type="text"
                    placeholder="Madrid, Barcelona, Lisboa..."
                    value={localizacion}
                    onChange={e => setLocalizacion(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#C9A84C]/60 px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2 font-medium">
                    Descripción del proyecto
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe tu instalación, tipo de suciedad, frecuencia..."
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#C9A84C]/60 px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full py-4 text-[11px] tracking-[0.4em] uppercase font-black text-black bg-[#C9A84C] hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {enviando ? 'Enviando...' : 'Solicitar Presupuesto Gratuito'}
                  {!enviando && <ArrowRight size={14} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
