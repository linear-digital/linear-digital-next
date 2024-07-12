import type { Metadata } from "next";
import "./globals.css";
import './Tailwind.css'
import 'swiper/css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "react-hot-toast";
import LocationDetector from "@/util/LocationDetector";
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

        <LocationDetector />
        <SpeedInsights />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
