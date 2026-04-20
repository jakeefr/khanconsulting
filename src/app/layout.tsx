import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollToHash } from "@/components/ScrollToHash";
import ParallaxBackground from "@/components/ParallaxBackgroundDynamic";

export const metadata: Metadata = {
  title: "Khan Consulting",
  description:
    "Pipeline and follow-up systems for owner-led contractors—clear demand, fast qualification, and reporting from first touch to booked job.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-white relative">
        <ParallaxBackground />
        <Nav />
        <ScrollToHash />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
