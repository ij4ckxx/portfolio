import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { IntroBubble } from "@/components/animation/intro-bubble";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ijackx-portfolio.vercel.app"),
  title: "Jegan Nathan M P | Software Developer & Full Stack Developer",
  description:
    "Software Developer and Full Stack Developer building enterprise commerce systems with Next.js, TypeScript, React, GraphQL, BigCommerce Catalyst, Makeswift, and AI integrations.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/portfolio-favicon.png",
    shortcut: "/portfolio-favicon.png",
    apple: "/portfolio-favicon.png",
  },
  openGraph: {
    title: "Jegan Nathan M P | Software Developer",
    description:
      "Enterprise commerce systems, scalable architectures, AI-powered products, and modern full-stack development.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jegan Nathan M P | Software Developer",
    description:
      "A futuristic command-center portfolio for a full stack engineer.",
  },
  keywords: [
    "Jegan Nathan",
    "Jegan Nathan M P",
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "GSAP",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <IntroBubble />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
