import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Raja Aluminium Profile — Premium Glass Partition Systems | Bikaner & Navi Mumbai",
  description: "Manufacturer & Supplier of Demountable Glass Partition Profiles — Single Glaze, Double Glaze, Acoustic Systems, and Custom Extrusions. Serving Architects, Contractors and Developers Across India.",
  keywords: "aluminium profile, glass partition, demountable partition, single glaze, double glaze, acoustic partition, Bikaner, Navi Mumbai, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
