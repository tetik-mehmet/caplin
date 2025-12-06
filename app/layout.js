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
  metadataBase: new URL("https://caplin3dteknoloji.com"),
  title: {
    default: "Caplin 3D Teknoloji - 3D Baskı, Prototip ve Maket Üretimi",
    template: "%s | Caplin 3D Teknoloji",
  },
  description:
    "Yüksek hassasiyetli 3D baskı, prototip üretimi, maket imalatı ve 3D yazıcı eğitimi hizmetleri. Savunma sanayi, mimari ve endüstriyel çözümler. Hızlı teslimat, profesyonel kalite.",
  keywords: [
    "3D baskı",
    "3D yazıcı",
    "prototip üretimi",
    "maket imalatı",
    "3D yazıcı eğitimi",
    "FDM baskı",
    "reçine baskı",
    "savunma sanayi",
    "mimari maket",
    "endüstriyel prototip",
    "Caplin 3D",
    "3D tasarım",
    "küçük seri üretim",
  ],
  authors: [{ name: "Caplin 3D Teknoloji" }],
  creator: "Caplin 3D Teknoloji",
  publisher: "Caplin 3D Teknoloji",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://caplin3dteknoloji.com",
    siteName: "Caplin 3D Teknoloji",
    title: "Caplin 3D Teknoloji - 3D Baskı, Prototip ve Maket Üretimi",
    description:
      "Yüksek hassasiyetli 3D baskı, prototip üretimi, maket imalatı ve 3D yazıcı eğitimi hizmetleri. Savunma sanayi, mimari ve endüstriyel çözümler.",
    images: [
      {
        url: "https://caplin3dteknoloji.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Caplin 3D Teknoloji Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caplin 3D Teknoloji - 3D Baskı, Prototip ve Maket Üretimi",
    description:
      "Yüksek hassasiyetli 3D baskı, prototip üretimi, maket imalatı ve 3D yazıcı eğitimi hizmetleri.",
    images: ["https://caplin3dteknoloji.com/logo.png"],
    creator: "@caplin3dteknoloji",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification code buraya eklenecek
    // google: "your-google-verification-code",
  },
};

// Structured Data (JSON-LD) for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Caplin 3D Teknoloji",
  url: "https://caplin3dteknoloji.com",
  logo: {
    "@type": "ImageObject",
    url: "https://caplin3dteknoloji.com/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://caplin3dteknoloji.com/logo.png",
  description:
    "Yüksek hassasiyetli 3D baskı, prototip üretimi, maket imalatı ve 3D yazıcı eğitimi hizmetleri sunan teknoloji şirketi",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Akşemsettin Mah. 1086 Sokak 16/B",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-543-551-88-11",
    contactType: "customer service",
    email: "info@caplin.com.tr",
    availableLanguage: "Turkish",
  },
  sameAs: [
    "https://www.linkedin.com/in/h%C3%BCseyin-demirel-667285214/",
    "https://www.instagram.com/caplin3dteknoloji/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Caplin 3D Teknoloji",
  url: "https://caplin3dteknoloji.com",
  description:
    "3D baskı, prototip üretimi, maket imalatı ve 3D yazıcı eğitimi hizmetleri",
  publisher: {
    "@type": "Organization",
    name: "Caplin 3D Teknoloji",
    logo: {
      "@type": "ImageObject",
      url: "https://caplin3dteknoloji.com/logo.png",
      width: 512,
      height: 512,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
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
