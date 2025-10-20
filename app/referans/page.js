"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const references = [
  {
    name: "Boğaziçi Üniversitesi",
    image: "/referanslar/bogazici.avif",
    category: "Eğitim",
    description: "Akademik araştırma ve prototip geliştirme projeleri",
  },
  {
    name: "Clarte",
    image: "/referanslar/clarte.avif",
    category: "Teknoloji",
    description: "Kurumsal ürün prototipleri ve özel tasarım çözümleri",
  },
  {
    name: "Dokuz Eylül Üniversitesi",
    image: "/referanslar/dokuz.avif",
    category: "Eğitim",
    description: "Mühendislik fakültesi araştırma projeleri",
  },
];

export default function ReferansPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <section className="container-px relative isolate flex flex-col items-center justify-center text-center py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 30%, rgba(225,6,0,0.3), transparent 70%)",
            }}
          />
          {/* Animated dots pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
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
              Güvenilir İş Ortakları
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            Referanslarımız
            <span className="block text-accent mt-2">İş Birliklerimiz</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Prestijli kurumlar ve şirketlerle gerçekleştirdiğimiz başarılı
            projelerle gururla ilerliyoruz
          </p>
        </motion.div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="container-px pb-12">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
            {[
              { number: "50+", label: "Kurumsal İşbirliği" },
              { number: "200+", label: "Tamamlanan Proje" },
              { number: "10+", label: "Üniversite" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 text-center overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(225,6,0,0.15)] hover:border-accent/40"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2 transition-transform duration-300 group-hover:scale-110">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES GRID */}
      <section className="container-px py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              İş Ortaklarımız
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Eğitimden teknolojiye, inovasyondan araştırmaya birçok alanda öncü
              kurumlarla çalışıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {references.map((ref, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 motion-safe:transform-gpu shadow-sm hover:shadow-[0_12px_40px_rgba(225,6,0,0.2)] hover:-translate-y-2 ring-1 ring-transparent hover:ring-accent/40"
              >
                {/* Hover gradient effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:content-[''] before:absolute before:-inset-20 before:bg-[radial-gradient(50%_40%_at_50%_0%,rgba(225,6,0,0.2),transparent_70%)]" />

                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-accent/5 to-transparent">
                  <Image
                    src={ref.image}
                    alt={ref.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-medium text-white uppercase tracking-wider">
                      {ref.category}
                    </span>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 transition-colors duration-300 group-hover:text-accent">
                    {ref.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed transition-colors duration-300 group-hover:text-white/80">
                    {ref.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                    className="mt-4 h-px bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
                  />
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 to-transparent blur-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="container-px py-16 sm:py-20 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/15 via-card to-transparent p-8 sm:p-12 relative overflow-hidden"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, rgba(225,6,0,0.3) 25%, transparent 25%), linear-gradient(-45deg, rgba(225,6,0,0.3) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(225,6,0,0.3) 75%), linear-gradient(-45deg, transparent 75%, rgba(225,6,0,0.3) 75%)",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                }}
              />
            </div>

            <div className="relative text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6"
              >
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                Güvenilir İş Ortağınız
              </h3>
              <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
                Üniversitelerden teknoparkları, kurumsal şirketlerden
                startuplara kadar geniş bir yelpazede müşterilerimize kaliteli
                hizmet sunuyoruz. Sizin projeniz de bir sonraki başarı hikayemiz
                olabilir.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#teklif"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-accent hover:bg-accent-dark text-white transition-all duration-300 hover:shadow-[0_8px_20px_rgba(225,6,0,0.3)] hover:scale-105"
                >
                  Projeniz İçin Teklif Alın
                </Link>
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  Hakkımızda
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container-px py-10 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-border pt-6"
          ></motion.div>
        </div>
      </footer>
    </div>
  );
}
