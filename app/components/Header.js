"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll durumunu kontrol et
      setIsScrolled(currentScrollY > 20);

      // Mobil menü açıksa her zaman görünür tut
      if (isOpen) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Scroll yönünü kontrol et
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Yukarı scroll veya sayfanın üstündeyse - göster
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Aşağı scroll ve sayfanın aşağısındaysa - gizle
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY, isOpen]);

  const navItems = [
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/projelerimiz", label: "Projelerimiz" },
    { href: "/referans", label: "Referanslar" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 backdrop-blur-xl bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/80 ${
        isScrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      {/* Dekoratif üst glow çizgisi */}
      <div
        className={`absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-50"
        }`}
      />

      <div className="container-px relative">
        <nav className="flex h-20 sm:h-24 items-center justify-between">
          {/* Mobile Menu Button - Mobilde solda */}
          <button
            className="md:hidden relative inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Menüyü Aç/Kapat"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span
                initial={false}
                animate={
                  isOpen
                    ? { rotate: 45, y: 7, backgroundColor: "rgb(225, 6, 0)" }
                    : { rotate: 0, y: 0, backgroundColor: "rgb(255, 255, 255)" }
                }
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="block h-0.5 w-full rounded-full origin-center"
              />
              <motion.span
                initial={false}
                animate={
                  isOpen
                    ? { opacity: 0, scale: 0.5 }
                    : {
                        opacity: 1,
                        scale: 1,
                        backgroundColor: "rgb(255, 255, 255)",
                      }
                }
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full rounded-full"
              />
              <motion.span
                initial={false}
                animate={
                  isOpen
                    ? { rotate: -45, y: -7, backgroundColor: "rgb(225, 6, 0)" }
                    : { rotate: 0, y: 0, backgroundColor: "rgb(255, 255, 255)" }
                }
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="block h-0.5 w-full rounded-full origin-center"
              />
            </div>
          </button>

          {/* Logo - Desktop'ta solda, mobilde sağda */}
          <Link
            href="/"
            className="group flex-shrink-0 relative z-10 md:order-first"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Caplin 3D"
                width={180}
                height={60}
                className="h-14 sm:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 rounded-lg"
                priority
              />
              {/* Logo glow efekti */}
              <div className="absolute inset-0 bg-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
            </div>
          </Link>

          {/* Desktop Navigation - Desktop'ta sağda */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm lg:text-base font-medium text-white/80 hover:text-white transition-all duration-300"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Hover background */}
                <span className="absolute inset-0 rounded-lg bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                {/* Aktif indicator */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/teklif"
              className="group relative ml-2 lg:ml-4 inline-flex items-center justify-center h-11 px-6 rounded-xl bg-gradient-to-br from-accent via-accent to-accent/90 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,6,0,0.4)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Teklif Al
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-gradient-to-b from-gray-900/98 to-black/95 backdrop-blur-xl"
          >
            <div className="container-px py-6">
              <div className="grid gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between h-14 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent/30 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-white/90 group-hover:text-white font-medium transition-colors">
                        {item.label}
                      </span>
                      <motion.span
                        className="text-accent"
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2"
                >
                  <Link
                    href="/teklif"
                    className="group relative flex items-center justify-center h-14 px-6 rounded-xl bg-gradient-to-br from-accent via-accent to-accent/90 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,6,0,0.5)]"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Teklif Al
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
