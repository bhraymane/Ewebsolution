import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import ScroolUp from "@/components/scroolUp";

const fontPoppins = Poppins({
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Création des sites web Marrakech et et le référencement web Marrakech",
  description: "Création des sites web Marrakech et offshore au Maroc expert en création site web professionnels, application mobile, et le référencement web Marrakech. Creation site internet & réferencer votre site web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPoppins.className}  antialiased `}
      >
        <Navbar />
        {children}
        <Footer />
        <ScroolUp />
        
      </body>
      
    </html>
  );
}
