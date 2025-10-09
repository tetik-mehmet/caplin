"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,box-shadow] ${
        isScrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-[rgba(225,6,0,0.32)] shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_8px_20px_-12px_rgba(0,0,0,0.35)]"
          : "bg-[rgba(225,6,0,0.16)]"
      }`}
    >
      <div className="container-px">
        <nav className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex-shrink-0 relative h-12 sm:h-16 w-auto"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={64}
              className="h-full w-auto object-contain transition-opacity group-hover:opacity-80 rounded-lg"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { href: "/hakkimizda", label: "Hakkımızda" },
              { href: "/referans", label: "Referanslar" },
              { href: "/hizmetler", label: "Hizmetler" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/teklif"
              className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-4 text-white hover:bg-accent-dark transition-colors"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border hover:border-accent/60 transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Menüyü Aç/Kapat"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span
                initial={false}
                animate={
                  isOpen
                    ? { rotate: 45, y: 7, backgroundColor: "rgb(225, 6, 0)" }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-0.5 w-full bg-white rounded-full origin-center"
              />
              <motion.span
                initial={false}
                animate={
                  isOpen ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-white rounded-full"
              />
              <motion.span
                initial={false}
                animate={
                  isOpen
                    ? { rotate: -45, y: -7, backgroundColor: "rgb(225, 6, 0)" }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-0.5 w-full bg-white rounded-full origin-center"
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          >
            <div className="container-px py-4">
              <div className="grid gap-2">
                {[
                  { href: "/hakkimizda", label: "Hakkımızda" },
                  { href: "/referans", label: "Referanslar" },
                  { href: "/hizmetler", label: "Hizmetler" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="h-12 inline-flex items-center justify-between rounded-md px-3 hover:bg-muted/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    <motion.span
                      initial={{ x: -6, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-muted"
                    >
                      →
                    </motion.span>
                  </Link>
                ))}
                <Link
                  href="/teklif"
                  className="h-12 inline-flex items-center justify-center rounded-md bg-accent px-4 text-white hover:bg-accent-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Teklif Al
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
