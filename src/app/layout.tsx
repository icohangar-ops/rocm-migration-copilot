import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROCm Migration Copilot — Free your GPU code from CUDA lock-in",
  description:
    "An AI agent that ports CUDA codebases to AMD HIP/ROCm automatically — analyzing, translating, building, testing, and tuning GPU code on MI300X. Team ROCm Rangers · AMD AI Academy Challenge.",
  keywords: ["ROCm", "HIP", "CUDA", "AMD", "AI agent", "code migration", "MI300X", "lablab"],
  authors: [{ name: "Team ROCm Rangers" }],
  openGraph: {
    title: "ROCm Migration Copilot",
    description: "The AI agent that frees GPU code from CUDA lock-in.",
    siteName: "ROCm Migration Copilot",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#16161A]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
