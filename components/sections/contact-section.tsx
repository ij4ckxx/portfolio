"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { NeonButton } from "@/components/ui/neon-button";
import { profile } from "@/constants/portfolio";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));

    if (!parsed.success) {
      toast.error("Transmission blocked. Check every field.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const payload = (await response.json()) as { message: string };
      if (!response.ok) throw new Error(payload.message);
      toast.success("Transmission successful.");
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Transmission failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-4 py-24" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="terminal-card">
          <p className="section-kicker">Secure Channel</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
            Initiate Contact
          </h2>
          <p className="mt-6 leading-7 text-white/65">
            Send a message to discuss engineering roles, product builds, frontend systems, or full-stack work.
          </p>
          <div className="mt-8 space-y-3 font-mono text-sm">
            <a className="block text-cyber-cyan" href={`mailto:${profile.email}`}>
              MAIL::{profile.email}
            </a>
            <a className="block text-cyber-cyan" href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              TEL::{profile.phone}
            </a>
            <a className="block text-cyber-violet" href={profile.linkedin} target="_blank" rel="noreferrer">
              LINKEDIN::mpjegannathanmech
            </a>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="terminal-card"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field name="name" label="IDENTITY" />
            <Field name="email" label="RETURN CHANNEL" type="email" />
          </div>
          <Field name="subject" label="SUBJECT" className="mt-4" />
          <label className="mt-4 block">
            <span className="field-label">MESSAGE PAYLOAD</span>
            <textarea name="message" rows={7} className="cyber-input resize-none" required />
          </label>
          <NeonButton className="mt-5 w-full sm:w-auto" disabled={loading}>
            {loading ? "Transmitting..." : "Transmit Message"} <Send size={16} />
          </NeonButton>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  className,
}: {
  name: string;
  label: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="field-label">{label}</span>
      <input name={name} type={type} className="cyber-input" required />
    </label>
  );
}
