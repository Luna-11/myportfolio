import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import Script component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pann Ei Khin - Portfolio",
  description: "Computing Student & AI Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Use Next.js Script component for external scripts */}
        <Script
          src="https://example.com/your-script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}