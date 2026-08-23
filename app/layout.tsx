import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://supercleaninglady.com"),

  title: {
    default: "Super Cleaning Lady | Household Comedy & Comics",
    template: "%s | Super Cleaning Lady",
  },

  description:
    "A humorous household comic universe starring Super Cleaning Lady, Super Handy Man, Spritzy, and Spongie—where everyday messes, repairs, laundry, clutter, and household chaos become superhero missions.",

  applicationName: "Super Cleaning Lady",

  keywords: [
    "Super Cleaning Lady",
    "Super Handy Man",
    "cleaning comics",
    "household comedy",
    "household humor",
    "cleaning humor",
    "funny household comics",
    "domestic satire",
    "cleaning motivation",
    "decluttering motivation",
    "room rescue missions",
    "no-shame cleaning",
    "home organization humor",
    "superhero cleaning comic",
  ],

  authors: [
    {
      name: "Pamela J. Terrell",
      url: "https://pamelajterrell.com",
    },
  ],

  creator: "Pamela J. Terrell",
  publisher: "Stabile USA",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Super Cleaning Lady | Household Comedy & Comics",
    description:
      "Meet Super Cleaning Lady, Super Handy Man, Spritzy, and Spongie in a comic universe where household messes, repairs, clutter, and everyday chaos become superhero missions.",
    url: "/",
    siteName: "Super Cleaning Lady",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/super-cleaning-lady-social.png",
        width: 1200,
        height: 630,
        alt: "Super Cleaning Lady household comedy and comic universe",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Super Cleaning Lady | Household Comedy & Comics",
    description:
      "A superhero household comedy where everyday messes, repairs, and minor domestic disasters become major missions.",
    images: ["/super-cleaning-lady-social.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    apple: "/scl.png",
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
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

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());
            gtag("config", "G-JRJYL8QNWL");
          `}
        </Script>
      </body>
    </html>
  );
}