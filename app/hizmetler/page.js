"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HizmetlerPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-accent/5">
      {/* HERO SECTION */}
      <section className="container-px relative isolate flex flex-col items-center justify-center text-center py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 30%, rgba(225,6,0,0.3), transparent 70%)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium uppercase tracking-wider">
              Hizmetlerimiz
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            3D Baskı Hizmetleri
            <span className="block text-accent mt-2">Profesyonel Çözümler</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            İhtiyacınıza özel 3D baskı ve prototipleme hizmetlerimizi keşfedin
          </p>
        </motion.div>
      </section>

      {/* PROJE RESMİ */}
      <section className="container-px py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Radar Projesi
              </h2>
              <p className="text-gray-600">
                Savunma sanayi firmasına yaptığımız radar
              </p>
            </div>

            <div className="relative w-full flex justify-center">
              <Image
                src="/proje1.png"
                alt="Radar Projesi"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
                style={{ width: "auto", height: "auto", maxWidth: "100%" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container-px py-10 text-center mt-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-border pt-6"
          >
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Caplin3D. Tüm hakları saklıdır.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
