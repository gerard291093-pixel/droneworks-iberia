import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { empresa, email, sector, localizacion, descripcion } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'DroneWorks Iberia <contacto@droneworksiberia.com>',
      to: 'info@droneworksiberia.com',
      replyTo: email,
      subject: `Nuevo presupuesto — ${empresa}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px;">
          <div style="border-left: 4px solid #C9A84C; padding-left: 20px; margin-bottom: 32px;">
            <h1 style="color: #C9A84C; font-size: 24px; margin: 0 0 4px;">Nueva solicitud de presupuesto</h1>
            <p style="color: #888; margin: 0; font-size: 14px;">DroneWorks Iberia — Formulario web</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px; width: 140px;">Empresa / Nombre</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-size: 14px; font-weight: bold;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #C9A84C; font-size: 14px;">${email}</td>
            </tr>
            ${sector ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Tipo instalación</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-size: 14px;">${sector}</td>
            </tr>` : ''}
            ${localizacion ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px;">Localización</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-size: 14px;">${localizacion}</td>
            </tr>` : ''}
            ${descripcion ? `<tr>
              <td style="padding: 12px 0; color: #888; font-size: 13px; vertical-align: top;">Descripción</td>
              <td style="padding: 12px 0; color: #fff; font-size: 14px; line-height: 1.6;">${descripcion}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #111; border: 1px solid #C9A84C22;">
            <p style="color: #888; font-size: 12px; margin: 0;">Responde directamente a este email para contactar con ${empresa} — el reply-to está configurado a ${email}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
