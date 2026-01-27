import type { Metadata } from "next";
import { Inter, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import GlobalErrorBoundary from "@/components/GlobalErrorBoundary";

// Font imports
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Robin Gautam | MBA-Backed Digital Product Studio",
  description: "I build high-performance digital revenue engines. From idea to launch in weeks, not months. Professional websites, booking systems, and digital infrastructure that drives growth.",
  keywords: ["digital agency", "web development", "startup", "Next.js", "founder", "Robin Gautam", "MBA", "product studio"],
  authors: [{ name: "Robin Gautam" }],
  creator: "Robin Gautam",
  metadataBase: new URL("https://robingautam.in"),
  openGraph: {
    title: "Robin Gautam | MBA-Backed Digital Product Studio",
    description: "I build high-performance digital revenue engines. From idea to launch in weeks.",
    url: "https://robingautam.in",
    siteName: "Robin Gautam",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Robin Gautam - Digital Product Studio for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robin Gautam | MBA-Backed Digital Product Studio",
    description: "I build high-performance digital revenue engines. From idea to launch in weeks.",
    images: ["/og-image.jpg"],
    creator: "@robingautam",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Robin Gautam',
  url: 'https://robingautam.in',
  jobTitle: 'Product Strategist & Developer',
  alumniOf: 'IIM Rohtak',
  sameAs: [
    'https://www.linkedin.com/in/robin-gautam-09b693240',
    'https://github.com/Robingautam1',
    'https://twitter.com/robingautam'
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Robin Gautam Studio'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${oswald.variable} font-sans antialiased bg-[#050505] text-white noise-bg overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>

        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
