import type { Metadata } from "next";
import "./globals.css";
import './Tailwind.css'
import 'swiper/css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "react-hot-toast";
import LocationDetector from "@/util/LocationDetector";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

type GAParams = {
  measurementId: string; // Explicitly define the expected type
};

export const metadata: Metadata = {
  title: "Linear Digital Limited - Build Your Design & Development.",
  description: "Linear Digital: We craft stunning websites & captivating graphic design. Grow your brand online.",
  icons: {
    icon: { url: "/favicon.ico" },
    shortcut: { url: "/favicon.ico" },
    apple: { url: "/favicon.ico" },
  },
  openGraph: {
    title: "Linear Digital Limited - Build Your Design & Development.",
    description: "Linear Digital: We craft stunning websites & captivating graphic design. Grow your brand online.",
    images: [
      'https://lineardigital.co/logo.png'
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-3PNPEWRPT8`}
        />
        <Script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></Script>

        <Script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3PNPEWRPT8');
          `,
          }}
        />
        <LocationDetector />
        <SpeedInsights />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
