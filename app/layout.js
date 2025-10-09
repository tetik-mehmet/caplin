import { Montserrat, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Caplin 3D Yazıcı",
  description:
    "Yüksek hassasiyetli, güvenilir ve hızlı 3D yazıcı tanıtım sayfası",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${montserrat.variable} ${orbitron.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <div className="pt-16 sm:pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
