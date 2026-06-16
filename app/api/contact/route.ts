import { Resend } from "resend";
import { z } from "zod";
import { profile } from "@/constants/portfolio";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  subject: z.string().trim().min(3).max(140),
  message: z.string().trim().min(10).max(2000),
});

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

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  if (!allowed(ip)) {
    return Response.json({ message: "Rate limit active. Try again shortly." }, { status: 429 });
  }

  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ message: "Invalid transmission payload." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ message: "Resend key missing. Use direct email for now." }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: profile.email,
    replyTo: parsed.data.email,
    subject: `Portfolio contact: ${parsed.data.subject}`,
    text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
  });

  return Response.json({ message: "Transmission successful." });
}
