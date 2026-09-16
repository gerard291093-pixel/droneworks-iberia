'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem('dw_cookies_accepted')) setVisible(true);
    } catch {}
  }, []);

  const accept = () => {
    try { localStorage.setItem('dw_cookies_accepted', '1'); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] border-t border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-white/50 text-xs leading-relaxed max-w-2xl">
          Usamos cookies propias y de terceros para mejorar tu experiencia de navegación y analizar el tráfico.
          Al continuar navegando aceptas nuestra{' '}
          <a href="/cookies" className="text-[#C9A84C] hover:text-white transition-colors underline">
            Política de Cookies
          </a>{' '}
          y nuestra{' '}
          <a href="/privacidad" className="text-[#C9A84C] hover:text-white transition-colors underline">
            Política de Privacidad
          </a>.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a href="/cookies" className="text-[10px] tracking-wider uppercase text-white/30 hover:text-white/60 transition-colors cursor-pointer">
            Configurar
          </a>
          <button
            onClick={accept}
            className="px-5 py-2 text-[11px] tracking-[0.3em] uppercase font-black text-black bg-[#C9A84C] hover:bg-white transition-colors cursor-pointer"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
