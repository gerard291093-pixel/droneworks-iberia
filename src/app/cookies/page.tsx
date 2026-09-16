export default function Cookies() {
  return (
    <main className="min-h-screen bg-[#080808] pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold mb-4">Legal</p>
        <h1 className="text-4xl font-black text-white mb-12" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Política de Cookies
        </h1>

        <div className="space-y-10 text-white/50 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-bold text-base mb-3">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita. Se utilizan ampliamente para que los sitios web funcionen de manera eficiente y para proporcionar información a los propietarios del sitio.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">¿Qué cookies utilizamos?</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-4">
                <p className="text-white/80 font-semibold mb-1">Cookies técnicas (necesarias)</p>
                <p>Imprescindibles para el funcionamiento básico del sitio web. No requieren consentimiento. Duración: sesión.</p>
              </div>
              <div className="border border-white/10 p-4">
                <p className="text-white/80 font-semibold mb-1">Cookies analíticas</p>
                <p>Nos permiten medir y analizar el comportamiento de los usuarios para mejorar nuestros servicios. Utilizamos Google Analytics de forma anonimizada. Duración: hasta 2 años.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">¿Cómo gestionar las cookies?</h2>
            <p>Puede configurar su navegador para bloquear o eliminar las cookies. A continuación le indicamos cómo hacerlo en los principales navegadores:</p>
            <ul className="mt-3 ml-4 space-y-1 list-disc">
              <li><span className="text-white/70">Google Chrome:</span> Configuración → Privacidad y seguridad → Cookies</li>
              <li><span className="text-white/70">Mozilla Firefox:</span> Opciones → Privacidad y seguridad</li>
              <li><span className="text-white/70">Safari:</span> Preferencias → Privacidad</li>
              <li><span className="text-white/70">Microsoft Edge:</span> Configuración → Privacidad y servicios</li>
            </ul>
            <p className="mt-3">Tenga en cuenta que desactivar las cookies puede afectar al funcionamiento del sitio web.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">Contacto</h2>
            <p>Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en <span className="text-[#C9A84C]">info@droneworksiberia.com</span>.</p>
          </section>

          <p className="text-white/25 text-xs pt-6 border-t border-white/10">
            Última actualización: septiembre 2026
          </p>
        </div>

        <a href="/" className="inline-flex items-center gap-2 mt-12 text-[11px] tracking-wider uppercase text-[#C9A84C] hover:text-white transition-colors">
          ← Volver al inicio
        </a>
      </div>
    </main>
  );
}
