import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Linear Digital Limited - Build Your editorial Design & Development.",
  description: "Linear Digital: We craft stunning websites & captivating graphic design. Grow your brand online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
