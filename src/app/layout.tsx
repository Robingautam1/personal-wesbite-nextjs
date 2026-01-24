import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#050505] text-white noise-bg overflow-x-hidden`}>
        <GlobalErrorBoundary>
          {children}
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}
