"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/referans", label: "Referanslar" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "#hizmet", label: "Kapsam" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-50/95 via-slate-100/92 to-slate-200/90 backdrop-blur-xl">
      {/* Üst Ayrım: Kalın nötr gradient + ince accent çizgi */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-transparent via-gray-300/70 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      {/* Ana İçerik */}
      <div className="container-px py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Logo ve Açıklama */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="group inline-block">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Caplin 3D"
                  width={200}
                  height={70}
                  className="h-16 sm:h-20 w-auto object-contain rounded-lg transition-all duration-300 group-hover:scale-105"
                />
                {/* Logo glow efekti */}
                <div className="absolute inset-0 bg-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              3D Baskı, prototip ve maket üretiminde profesyonel çözümler. Hızlı
              teslimat, yüksek kalite.
            </p>
            {/* Sosyal Medya */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/60 hover:bg-white/80 border border-gray-300/50 hover:border-accent transition-all duration-300 overflow-hidden"
                  aria-label={social.name}
                >
                  <div className="relative z-10 text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {social.icon}
                  </div>
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-accent" />
              <h3 className="text-base font-bold text-gray-900 tracking-wide">
                Hızlı Linkler
              </h3>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-accent" />
              <h3 className="text-base font-bold text-gray-900 tracking-wide">
                İletişim
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/60 border border-gray-300/50 group-hover:border-accent/50 transition-all duration-300">
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="pt-1.5">
                  <div className="text-xs text-gray-500 mb-1">Adres</div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    İstanbul, Türkiye
                  </span>
                </div>
              </li>
              <li className="group flex items-start gap-3 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/60 border border-gray-300/50 group-hover:border-accent/50 transition-all duration-300">
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="pt-1.5">
                  <div className="text-xs text-gray-500 mb-1">E-posta</div>
                  <a
                    href="mailto:info@caplin.com.tr"
                    className="text-gray-700 hover:text-accent transition-colors"
                  >
                    info@caplin.com.tr
                  </a>
                </div>
              </li>
              <li className="group flex items-start gap-3 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/60 border border-gray-300/50 group-hover:border-accent/50 transition-all duration-300">
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="pt-1.5">
                  <div className="text-xs text-gray-500 mb-1">Telefon</div>
                  <a
                    href="tel:+905XXXXXXXXX"
                    className="text-gray-700 hover:text-accent transition-colors"
                  >
                    +90 5XX XXX XX XX
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300/40 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-transparent">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <div className="h-1 w-1 rounded-full bg-accent/60" />
                <div className="h-0.5 w-0.5 rounded-full bg-accent/40" />
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 border border-accent/30">
              <span className="text-accent font-bold text-sm">C</span>
            </div>
            <div>
              <p className="text-sm text-gray-800">
                © {currentYear}{" "}
                <span className="text-accent font-bold">Caplin 3D</span>
              </p>
              <p className="text-xs text-gray-500">Tüm hakları saklıdır.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="#"
              className="group inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="h-1 w-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              Gizlilik Politikası
            </Link>
            <Link
              href="#"
              className="group inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="h-1 w-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              Kullanım Koşulları
            </Link>
            <Link
              href="#"
              className="group inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="h-1 w-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>

      {/* Alt Dekoratif Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
    </footer>
  );
}
