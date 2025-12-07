"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      // Sadece scroll durumunu kontrol et (gölge ve stil için)
      setIsScrolled(currentScrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/hizmetler", label: "Hizmetler", isPrimary: true },
    { href: "/hakkimizda", label: "Hakkımızda", isPrimary: false },
    { href: "/projelerimiz", label: "Projelerimiz", isPrimary: true },
    { href: "/referans", label: "Referanslar", isPrimary: false },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className="fixed top-0 inset-x-0 z-50 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] transition-all duration-300"
    >
      {/* Dekoratif üst glow çizgisi - daha minimal */}
      <div
        className={`absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent transition-all duration-700 ${
          isScrolled ? "opacity-100" : "opacity-40"
        }`}
      />

      {/* Modern gölgeli alt çizgi - tam genişlik */}
      <div
        className={`absolute bottom-0 inset-x-0 h-[1px] transition-all duration-700 ${
          isScrolled
            ? "bg-gradient-to-r from-transparent via-gray-300/60 to-transparent shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]"
            : "bg-gradient-to-r from-transparent via-gray-300/40 to-transparent shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
        }`}
      />
      {/* İkinci katman - daha yumuşak gölge efekti */}
      <div
        className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gray-200/30 to-transparent transition-opacity duration-700 ${
          isScrolled ? "opacity-100" : "opacity-60"
        }`}
      />

      <div className="container-px relative">
        <nav className="flex h-20 sm:h-[76px] lg:h-[80px] items-center justify-between">
          {/* Mobile Menu Button - Lüks minimal tasarım */}
          <button
            className="md:hidden relative inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/60 backdrop-blur-md border border-gray-300/50 hover:border-accent/40 hover:bg-white/80 hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md"
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
            className="group flex-shrink-0 relative z-10 md:order-first md:mr-12 lg:mr-14 flex items-center gap-2 sm:gap-3 lg:gap-4"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Caplin 3D"
                width={280}
                height={112}
                className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain transition-all duration-500 group-hover:scale-[1.03] drop-shadow-sm"
                priority
              />
              {/* Çoklu katmanlı glow efekti */}
              <div className="absolute inset-0 bg-accent/10 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute inset-0 bg-accent/5 rounded-lg blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
            {/* Slogan - Modern ve dikkat çekici */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#E73879] via-[#FF3A3A] to-[#D60000] bg-clip-text text-transparent tracking-tight group-hover:tracking-normal transition-all duration-300 whitespace-nowrap">
                  Hayal Et, Üretelim.
                </span>
                {/* Alt çizgi animasyonu */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#E73879] via-[#FF3A3A] to-[#D60000] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
                {/* Glow efekti */}
                <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-[#E73879]/50 via-[#FF3A3A]/50 to-[#D60000]/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Lüks minimal tasarım */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item, index) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");
              const isPrimary = item.isPrimary;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-3 text-base lg:text-[17px] transition-all duration-200 tracking-wide active:scale-[0.98] ${
                    isPrimary ? "px-7" : "px-6"
                  } ${
                    isActive
                      ? "font-medium text-[#E73879]"
                      : isPrimary
                      ? "font-medium text-gray-700 hover:text-gray-900 hover:opacity-90"
                      : "font-normal text-gray-600 hover:text-gray-800 hover:opacity-90"
                  }`}
                >
                  <span
                    className={`relative z-10 transition-all duration-200 ${
                      isActive
                        ? ""
                        : !isPrimary
                        ? "group-hover:font-medium"
                        : ""
                    }`}
                  >
                    {item.label}
                  </span>
                  {/* Aktif sayfa alt çizgisi - sürekli görünür */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-[#E73879]" />
                  )}
                  {/* Premium underline slide animasyonu - sadece hover'da (aktif değilse) */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gradient-to-r from-accent via-accent/90 to-accent/80 group-hover:w-full transition-all duration-200 ease-out" />
                  )}
                </Link>
              );
            })}

            {/* CTA Button - Modern ve premium */}
            <Link
              href="/teklif"
              className="group relative ml-20 lg:ml-28 inline-flex items-center justify-center py-3.5 px-7 rounded-xl bg-gradient-to-r from-[#FF3A3A] to-[#D60000] text-white font-semibold overflow-hidden transition-all duration-200 hover:translate-x-[2px] hover:opacity-90 active:translate-x-0 active:scale-[0.98] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_12px_rgba(214,0,0,0.3)] tracking-wide"
            >
              <span className="relative z-10 flex items-center gap-2.5 text-base">
                <span className="transition-all duration-200">Teklif Al</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </span>
              {/* Hafif inner shadow efekti */}
              <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] rounded-xl pointer-events-none" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Optimize edilmiş smooth animasyon */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.25, ease: "easeOut" },
              height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            }}
            style={{
              willChange: "height, opacity",
              transform: "translateZ(0)",
            }}
            className="md:hidden overflow-hidden border-t border-gray-300/30 bg-gradient-to-b from-white/98 to-gray-50/95"
          >
            {/* Üst dekoratif çizgi */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="container-px py-8">
              <div className="grid gap-3">
                {navItems.map((item, index) => {
                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/");
                  const isPrimary = item.isPrimary;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <Link
                        href={item.href}
                        className={`group relative flex items-center justify-between h-[72px] rounded-2xl bg-gradient-to-br from-white/80 via-gray-50/60 to-white/40 hover:from-white/90 hover:to-gray-50/70 hover:opacity-90 border transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden active:scale-[0.98] ${
                          isPrimary ? "px-8" : "px-7"
                        } ${
                          isActive
                            ? "border-[#E73879]/40 bg-gradient-to-br from-[#E73879]/5 via-white/80 to-white/40"
                            : "border-gray-200/50 hover:border-accent/30"
                        }`}
                        onClick={(e) => {
                          setIsOpen(false);
                          // Ripple efekti
                          const button = e.currentTarget;
                          const ripple = document.createElement("span");
                          const rect = button.getBoundingClientRect();
                          const size = Math.max(rect.width, rect.height);
                          const x = e.clientX - rect.left - size / 2;
                          const y = e.clientY - rect.top - size / 2;

                          ripple.style.cssText = `
                            position: absolute;
                            width: ${size}px;
                            height: ${size}px;
                            border-radius: 50%;
                            background: rgba(225, 6, 0, 0.3);
                            left: ${x}px;
                            top: ${y}px;
                            transform: scale(0);
                            animation: ripple 0.6s ease-out;
                            pointer-events: none;
                          `;

                          button.appendChild(ripple);
                          setTimeout(() => ripple.remove(), 600);
                        }}
                      >
                        <span
                          className={`relative z-10 transition-colors duration-300 tracking-wide group-hover:tracking-wider text-base ${
                            isActive
                              ? "text-[#E73879] font-medium"
                              : isPrimary
                              ? "text-gray-700 group-hover:text-gray-900 font-semibold"
                              : "text-gray-600 group-hover:text-gray-900 font-semibold"
                          }`}
                        >
                          {item.label}
                        </span>
                        <motion.div
                          className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100/50 group-hover:bg-accent/10 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.span
                            className="text-gray-400 group-hover:text-accent font-light text-lg"
                            initial={{ x: -3 }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: navItems.length * 0.05 + 0.1,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ willChange: "transform, opacity" }}
                  className="mt-4"
                >
                  <Link
                    href="/teklif"
                    className="group relative flex items-center justify-center py-4.5 px-7 rounded-xl bg-gradient-to-r from-[#FF3A3A] to-[#D60000] text-white font-semibold overflow-hidden transition-all duration-200 hover:opacity-90 active:translate-x-0 active:scale-[0.98] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.15)] tracking-wide"
                    onClick={(e) => {
                      setIsOpen(false);
                      // Ripple efekti
                      const button = e.currentTarget;
                      const ripple = document.createElement("span");
                      const rect = button.getBoundingClientRect();
                      const size = Math.max(rect.width, rect.height);
                      const x = e.clientX - rect.left - size / 2;
                      const y = e.clientY - rect.top - size / 2;

                      ripple.style.cssText = `
                        position: absolute;
                        width: ${size}px;
                        height: ${size}px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.4);
                        left: ${x}px;
                        top: ${y}px;
                        transform: scale(0);
                        animation: ripple 0.6s ease-out;
                        pointer-events: none;
                      `;

                      button.appendChild(ripple);
                      setTimeout(() => ripple.remove(), 600);
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-3 text-base">
                      <span className="transition-all duration-200">
                        Teklif Al
                      </span>
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: 0 }}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </motion.svg>
                    </span>
                    {/* Hafif inner shadow efekti */}
                    <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] rounded-xl pointer-events-none" />
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
