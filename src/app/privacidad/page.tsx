export default function Privacidad() {
  return (
    <main className="min-h-screen bg-[#080808] pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] font-semibold mb-4">Legal</p>
        <h1 className="text-4xl font-black text-white mb-12" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Política de Privacidad
        </h1>

        <div className="space-y-10 text-white/50 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-bold text-base mb-3">1. Responsable del tratamiento</h2>
            <ul className="space-y-1">
              <li><span className="text-white/70">Empresa:</span> DroneWorks Iberia S.L.</li>
              <li><span className="text-white/70">NIF:</span> B-XXXXXXXX</li>
              <li><span className="text-white/70">Email:</span> info@droneworksiberia.com</li>
              <li><span className="text-white/70">Teléfono:</span> +34 676 542 452</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">2. Datos que recopilamos</h2>
            <p>A través del formulario de contacto de este sitio web recopilamos los siguientes datos personales:</p>
            <ul className="mt-2 ml-4 space-y-1 list-disc">
              <li>Nombre o razón social</li>
              <li>Dirección de correo electrónico</li>
              <li>Localización del proyecto</li>
              <li>Descripción del proyecto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">3. Finalidad del tratamiento</h2>
            <p>Los datos recogidos a través del formulario de contacto se utilizan exclusivamente para:</p>
            <ul className="mt-2 ml-4 space-y-1 list-disc">
              <li>Responder a su solicitud de presupuesto o consulta</li>
              <li>Enviarle información comercial relacionada con nuestros servicios, previa solicitud</li>
              <li>Gestionar la relación comercial derivada de la prestación de servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">4. Base jurídica</h2>
            <p>El tratamiento de sus datos se basa en el consentimiento que usted otorga al cumplimentar el formulario de contacto, así como en el interés legítimo de DroneWorks Iberia S.L. para atender las consultas recibidas.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">5. Conservación de datos</h2>
            <p>Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades derivadas de dicha finalidad. Transcurrido dicho plazo, los datos serán suprimidos.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">6. Sus derechos</h2>
            <p>De conformidad con el RGPD (Reglamento UE 2016/679) y la LOPDGDD (Ley Orgánica 3/2018), usted tiene derecho a:</p>
            <ul className="mt-2 ml-4 space-y-1 list-disc">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la rectificación de datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Oponerse al tratamiento o solicitar su limitación</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p className="mt-3">Para ejercer estos derechos, puede contactar con nosotros en <span className="text-[#C9A84C]">info@droneworksiberia.com</span>. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">7. Comunicación a terceros</h2>
            <p>DroneWorks Iberia S.L. no cederá sus datos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio contratado.</p>
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
