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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 backdrop-blur-xl bg-gradient-to-b from-white/95 via-gray-50/92 to-gray-100/88 border-b ${
        isScrolled
          ? "border-gray-300/40 shadow-[0_8px_32px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.03)]"
          : "border-gray-200/30 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
      }`}
    >
      {/* Dekoratif üst glow çizgisi - daha minimal */}
      <div
        className={`absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent transition-all duration-700 ${
          isScrolled ? "opacity-100" : "opacity-40"
        }`}
      />

      {/* Alt dekoratif çizgi */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-gray-400/20 to-transparent transition-all duration-700 ${
          isScrolled ? "w-1/3" : "w-1/2"
        }`}
      />

      <div className="container-px relative">
        <nav className="flex h-24 sm:h-28 lg:h-32 items-center justify-between">
          {/* Mobile Menu Button - Lüks minimal tasarım */}
          <button
            className="md:hidden relative inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/60 backdrop-blur-md border border-gray-300/50 hover:border-accent/40 hover:bg-white/80 transition-all duration-500 shadow-sm hover:shadow-md"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Menüyü Aç/Kapat"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span
                initial={false}
                animate={
                  isOpen
                    ? { rotate: 45, y: 7, backgroundColor: "rgb(225, 6, 0)" }
                    : { rotate: 0, y: 0, backgroundColor: "rgb(55, 65, 81)" }
                }
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="block h-[2px] w-full rounded-full origin-center"
              />
              <motion.span
                initial={false}
                animate={
                  isOpen
                    ? { opacity: 0, scale: 0.5 }
                    : {
                        opacity: 1,
                        scale: 1,
                        backgroundColor: "rgb(55, 65, 81)",
                      }
                }
                transition={{ duration: 0.3 }}
                className="block h-[2px] w-full rounded-full"
              />
              <motion.span
                initial={false}
                animate={
                  isOpen
                    ? { rotate: -45, y: -7, backgroundColor: "rgb(225, 6, 0)" }
                    : { rotate: 0, y: 0, backgroundColor: "rgb(55, 65, 81)" }
                }
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="block h-[2px] w-full rounded-full origin-center"
              />
            </div>
          </button>

          {/* Logo - Daha sofistike glow efekti */}
          <Link
            href="/"
            className="group flex-shrink-0 relative z-10 md:order-first"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Caplin 3D"
                width={280}
                height={112}
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain transition-all duration-500 group-hover:scale-[1.03] drop-shadow-sm"
                priority
              />
              {/* Çoklu katmanlı glow efekti */}
              <div className="absolute inset-0 bg-accent/10 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute inset-0 bg-accent/5 rounded-lg blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
          </Link>

          {/* Desktop Navigation - Lüks minimal tasarım */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-5 py-2.5 text-[15px] lg:text-base font-medium text-gray-600 hover:text-gray-900 transition-all duration-500 tracking-wide"
              >
                <span className="relative z-10 transition-all duration-500 group-hover:tracking-wider">
                  {item.label}
                </span>
                {/* Sofistike hover efekti */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-100/40 via-gray-50/60 to-white/40 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 origin-center backdrop-blur-sm" />
                {/* İnce alt çizgi */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-accent/0 via-accent/80 to-accent/0 group-hover:w-3/4 transition-all duration-500" />
                {/* Minimal glow */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(225,6,0,0.03)]" />
              </Link>
            ))}

            {/* CTA Button - Daha lüks ve minimal */}
            <Link
              href="/teklif"
              className="group relative ml-3 lg:ml-6 inline-flex items-center justify-center h-12 px-8 rounded-2xl bg-gradient-to-br from-accent via-accent to-accent/95 text-white font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(225,6,0,0.35),0_0_60px_rgba(225,6,0,0.15)] hover:scale-[1.02] active:scale-[0.98] tracking-wide"
            >
              <span className="relative z-10 flex items-center gap-2.5 text-[15px]">
                <span className="transition-all duration-300 group-hover:tracking-wider">
                  Teklif Al
                </span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </span>
              {/* Animasyonlu şık overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              {/* İç glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-transparent transition-opacity duration-500" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Lüks minimal tasarım */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden border-t border-gray-300/30 bg-gradient-to-b from-white/98 to-gray-50/95 backdrop-blur-xl"
          >
            {/* Üst dekoratif çizgi */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="container-px py-8">
              <div className="grid gap-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="group relative flex items-center justify-between h-16 px-6 rounded-2xl bg-gradient-to-br from-white/80 via-gray-50/60 to-white/40 hover:from-white/90 hover:to-gray-50/70 border border-gray-200/50 hover:border-accent/30 transition-all duration-500 backdrop-blur-sm shadow-sm hover:shadow-md overflow-hidden"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10 text-gray-600 group-hover:text-gray-900 font-semibold transition-all duration-500 tracking-wide group-hover:tracking-wider text-[15px]">
                        {item.label}
                      </span>
                      <motion.div
                        className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100/50 group-hover:bg-accent/10 transition-colors duration-500"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className="text-gray-400 group-hover:text-accent font-light text-lg"
                          initial={{ x: -3 }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="mt-4"
                >
                  <Link
                    href="/teklif"
                    className="group relative flex items-center justify-center h-16 px-8 rounded-2xl bg-gradient-to-br from-accent via-accent to-accent/95 text-white font-bold overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(225,6,0,0.4),0_0_60px_rgba(225,6,0,0.2)] active:scale-[0.98] tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10 flex items-center gap-3 text-base">
                      <span className="transition-all duration-300 group-hover:tracking-wider">
                        Teklif Al
                      </span>
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </motion.svg>
                    </span>
                    {/* Animasyonlu overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    {/* İç glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-transparent transition-opacity duration-500" />
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
