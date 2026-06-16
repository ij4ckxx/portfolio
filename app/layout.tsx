import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
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
  metadataBase: new URL("https://jegan-nathan.dev"),
  title: "Jegan Nathan | Futuristic Full Stack Portfolio",
  description:
    "A futuristic hacker command-center portfolio for Jegan Nathan, Software Engineer and Full Stack Developer.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jegan Nathan | Software Engineer",
    description:
      "Enterprise commerce systems, scalable architectures, AI-powered products, and cinematic frontend craft.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jegan Nathan | Software Engineer",
    description:
      "A futuristic command-center portfolio for a full stack engineer.",
  },
  keywords: [
    "Jegan Nathan",
    "Software Engineer",
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
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
