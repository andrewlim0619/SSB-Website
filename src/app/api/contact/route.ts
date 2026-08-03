import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Mohon lengkapi semua field wajib." }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 200 || (phone && phone.length > 30) || message.length > 5000) {
      return NextResponse.json({ error: "Input melebihi batas maksimal." }, { status: 400 });
    }

    const safeName    = escapeHtml(name);
    const safeEmail   = escapeHtml(email);
    const safePhone   = escapeHtml(phone ?? "");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SSB Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? "sales@selerasuksesbersama.com",
      replyTo: email,
      subject: `[INQUIRY VIA SSB WEBSITE] ${safeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B3A6B; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">Inquiry Baru via SSB Website</h2>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; width: 140px; vertical-align: top;">Nama</td>
                <td style="padding: 10px 0; color: #1B3A6B; font-weight: 600; font-size: 14px;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #00A896;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; vertical-align: top;">Nomor Telepon</td>
                <td style="padding: 10px 0; color: #1B3A6B; font-size: 14px;">${safePhone || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; vertical-align: top; border-top: 1px solid #e2e8f0;">Pesan</td>
                <td style="padding: 10px 0; color: #334155; font-size: 14px; line-height: 1.6; border-top: 1px solid #e2e8f0;">${safeMessage}</td>
              </tr>
            </table>
            <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
              Balas email ini langsung ke pengirim: <a href="mailto:${safeEmail}" style="color: #00A896;">${safeEmail}</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Gagal mengirim pesan. Silakan coba lagi." }, { status: 500 });
  }
}
