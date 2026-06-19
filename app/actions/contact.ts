"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { z } from "zod";
import { profile } from "@/constants/portfolio";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  subject: z.string().trim().min(3).max(140),
  message: z.string().trim().min(10).max(2000),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const limits = new Map<string, { count: number; resetAt: number }>();

function allowed(ip: string) {
  const now = Date.now();
  const current = limits.get(ip);

  if (!current || current.resetAt < now) {
    limits.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  if (current.count >= 5) return false;
  current.count += 1;
  return true;
}

function clientIp(requestHeaders: Headers) {
  const forwardedFor = requestHeaders.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "local";
}

function isValidSender(value: string) {
  const sender = value.match(/<(.+)>$/)?.[1] ?? value;
  return z.string().email().safeParse(sender.trim()).success;
}

function smtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM_EMAIL || (user ? `Portfolio <${user}>` : "");
  const to = process.env.CONTACT_TO_EMAIL || profile.email;

  if (!host || !user || !pass || !from) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: {
      user,
      pass,
    },
    from,
    to,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function contactEmailHtml(data: z.infer<typeof schema>) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || profile.portfolio).replace(/\/$/, "");
  const logoUrl = `${siteUrl}/portfolio-logo.png`;
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message).replaceAll("\n", "<br />");

  return `
    <!doctype html>
    <html>
      <body style="margin:0;background:#050816;color:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
        <div style="padding:32px 16px;background:linear-gradient(135deg,#050816 0%,#08111f 55%,#12091f 100%);">
          <div style="max-width:640px;margin:0 auto;border:1px solid rgba(0,217,255,0.35);border-radius:16px;overflow:hidden;background:#070b14;box-shadow:0 0 32px rgba(0,217,255,0.18);">
            <div style="padding:28px 28px 22px;border-bottom:1px solid rgba(139,92,246,0.35);background:linear-gradient(135deg,rgba(0,217,255,0.12),rgba(139,92,246,0.12));">
              <img src="${logoUrl}" alt="${escapeHtml(profile.name)}" width="64" height="64" style="display:block;border-radius:14px;margin-bottom:18px;" />
              <p style="margin:0 0 8px;color:#00d9ff;font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">Portfolio Contact</p>
              <h1 style="margin:0;color:#ffffff;font-size:26px;line-height:1.25;font-weight:800;">New transmission received</h1>
            </div>

            <div style="padding:28px;">
              <div style="margin-bottom:18px;padding:16px;border:1px solid rgba(0,217,255,0.22);border-radius:12px;background:rgba(255,255,255,0.035);">
                <p style="margin:0 0 6px;color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1.2px;">Identity</p>
                <p style="margin:0;color:#ffffff;font-size:16px;font-weight:700;">${safeName}</p>
              </div>

              <div style="margin-bottom:18px;padding:16px;border:1px solid rgba(0,217,255,0.22);border-radius:12px;background:rgba(255,255,255,0.035);">
                <p style="margin:0 0 6px;color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1.2px;">Return Channel</p>
                <a href="mailto:${safeEmail}" style="color:#00d9ff;font-size:16px;font-weight:700;text-decoration:none;">${safeEmail}</a>
              </div>

              <div style="margin-bottom:18px;padding:16px;border:1px solid rgba(139,92,246,0.28);border-radius:12px;background:rgba(139,92,246,0.08);">
                <p style="margin:0 0 6px;color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1.2px;">Subject</p>
                <p style="margin:0;color:#ffffff;font-size:16px;font-weight:700;">${safeSubject}</p>
              </div>

              <div style="padding:18px;border-left:3px solid #00d9ff;border-radius:12px;background:#0b1220;">
                <p style="margin:0 0 10px;color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1.2px;">Message Payload</p>
                <p style="margin:0;color:#dbeafe;font-size:15px;line-height:1.7;">${safeMessage}</p>
              </div>
            </div>

            <div style="padding:18px 28px;border-top:1px solid rgba(255,255,255,0.08);color:#64748b;font-size:12px;">
              Sent from <a href="${siteUrl}" style="color:#8b5cf6;text-decoration:none;">${escapeHtml(profile.portfolio)}</a>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const requestHeaders = await headers();
  if (!allowed(clientIp(requestHeaders))) {
    return {
      status: "error",
      message: "Rate limit active. Try again shortly.",
    };
  }

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Transmission blocked. Check every field.",
    };
  }

  const mailConfig = smtpConfig();
  if (!mailConfig) {
    return {
      status: "error",
      message: "Email credentials missing. Check SMTP settings in .env.local.",
    };
  }

  if (!isValidSender(mailConfig.from)) {
    return {
      status: "error",
      message: "Invalid sender email. Check SMTP_FROM_EMAIL in .env.local.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: mailConfig.secure,
      auth: mailConfig.auth,
    });

    const response = await transporter.sendMail({
      from: mailConfig.from,
      to: mailConfig.to,
      replyTo: parsed.data.email,
      subject: `Portfolio contact: ${parsed.data.subject}`,
      html: contactEmailHtml(parsed.data),
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        `Subject: ${parsed.data.subject}`,
        "",
        parsed.data.message,
      ].join("\n"),
    });

    if (response.rejected.length > 0 || response.accepted.length === 0) {
      return {
        status: "error",
        message: "Email service rejected the message. Try again shortly.",
      };
    }
  } catch {
    return {
      status: "error",
      message: "Email service unavailable. Try again shortly.",
    };
  }

  return {
    status: "success",
    message: "Transmission successful.",
  };
}
