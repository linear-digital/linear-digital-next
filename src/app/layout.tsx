import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';



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

      <body >
        {children}
      </body>
    </html>
  );
}
