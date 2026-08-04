import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
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
  metadataBase: new URL("https://supercleaninglady.com"),

  title: {
    default: "Super Cleaning Lady",
    template: "%s | Super Cleaning Lady",
  },

  description:
    "A humorous household comic and no-shame cleaning motivation website that turns everyday messes into villains, rescue missions, and small victories.",

  applicationName: "Super Cleaning Lady",

  keywords: [
    "cleaning motivation",
    "household comedy",
    "domestic satire",
    "cleaning comics",
    "decluttering motivation",
    "funny cleaning website",
    "room rescue missions",
    "no-shame cleaning",
    "home organization humor",
  ],

  authors: [
    {
      name: "Pamela J. Terrell",
      url: "https://pamelajterrell.com",
    },
  ],

  creator: "Pamela J. Terrell",
  publisher: "Stabile USA",

  openGraph: {
    title: "Super Cleaning Lady",
    description:
      "Household comedy and no-shame cleaning motivation that turns laundry mountains, doom baskets, dish goblins, and everyday messes into superhero missions.",
    url: "https://supercleaninglady.com",
    siteName: "Super Cleaning Lady",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/super-cleaning-lady-social.png",
        width: 1200,
        height: 630,
        alt: "Super Cleaning Lady household comedy and cleaning motivation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Super Cleaning Lady",
    description:
      "A humorous household comic where everyday messes become villains, missions, and small victories.",
    images: ["/super-cleaning-lady-social.png"],
  },

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
      <body className="flex min-h-full flex-col">
        <Header />

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