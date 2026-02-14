import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Homero | Developer",
  description: "Personal site for Homero. Projects, writing, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100`}
      >
        <div className="min-h-screen flex flex-col">
          
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
              <span>© {new Date().getFullYear()} Homero</span>
              <span>Building on the web and learning in public.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
