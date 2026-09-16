export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-[#080808] pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold mb-4">Legal</p>
        <h1 className="text-4xl font-black text-white mb-12" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Aviso Legal
        </h1>

        <div className="space-y-10 text-white/50 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-bold text-base mb-3">1. Datos identificativos</h2>
            <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de los siguientes datos:</p>
            <ul className="mt-3 space-y-1 list-none">
              <li><span className="text-white/70">Denominación social:</span> DroneWorks Iberia S.L.</li>
              <li><span className="text-white/70">NIF:</span> B-XXXXXXXX</li>
              <li><span className="text-white/70">Domicilio social:</span> España</li>
              <li><span className="text-white/70">Email:</span> info@droneworksiberia.com</li>
              <li><span className="text-white/70">Teléfono:</span> +34 676 542 452</li>
              <li><span className="text-white/70">Actividad:</span> Servicios de limpieza e inspección de fachadas mediante drones industriales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">2. Objeto y ámbito de aplicación</h2>
            <p>El presente Aviso Legal regula el acceso y uso del sitio web droneworksiberia.com, titularidad de DroneWorks Iberia S.L. El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">3. Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, tecnología, software, así como el diseño gráfico y los códigos fuente) son propiedad de DroneWorks Iberia S.L. o de terceros que han autorizado su uso. Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación de dichos contenidos sin autorización expresa y por escrito.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">4. Exclusión de responsabilidades</h2>
            <p>DroneWorks Iberia S.L. no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso o uso del sitio web, ni de la información contenida en el mismo. La empresa se reserva el derecho a modificar, suspender, cancelar o restringir el contenido del sitio web sin necesidad de previo aviso.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">5. Legislación aplicable y jurisdicción</h2>
            <p>Las presentes condiciones se rigen por la legislación española vigente. Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten a los juzgados y tribunales competentes conforme a la normativa aplicable.</p>
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
