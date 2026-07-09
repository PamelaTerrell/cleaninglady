import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Super Cleaning Lady",
  description:
    "Cleaning motivation, room rescue missions, sparkle tricks, and real-life resets for people who are tired of feeling buried by their own homes.",
  icons: {
    icon: "/super-spray-hero.png",
    shortcut: "/super-spray-hero.png",
    apple: "/super-spray-hero.png",
  },
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
      <body className="min-h-full flex flex-col">
        {children}

        <Analytics />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JRJYL8QNWL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JRJYL8QNWL');
          `}
        </Script>
      </body>
    </html>
  );
}