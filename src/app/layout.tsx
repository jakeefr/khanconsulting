import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackgroundLayer } from "@/components/BackgroundLayer";
import { ScrollToHash } from "@/components/ScrollToHash";

export const metadata: Metadata = {
  title: "Khan Consulting | Paid Acquisition + Custom AI Systems",
  description:
    "We generate booked appointments with paid ads and automate follow-up with custom AI systems.",
  icons: {
    icon: "/flavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body className="min-h-screen flex flex-col bg-navy relative">
        <BackgroundLayer />
        <Nav />
        <ScrollToHash />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
