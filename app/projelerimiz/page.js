"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// Proje kategorileri ve resimler
const projectCategories = {
  maketler: [
    "/projeler/j350_maket.png",
    "/projeler/maket_5.png",
    "/projeler/maket_7.png",
    "/projeler/maket_hibrid.png",
  ],
  prototipler: [
    "/projeler/prototip.png",
    "/projeler/kursun_proje.png",
    "/projeler/cankaya_promosyon.png",
    "/projeler/promosyon_4.png",
    "/projeler/promosyon_5.png",
  ],
  eğitimler: [
    "/projeler/egitim.png",
    "/projeler/egitim_2.png",
    "/projeler/egitim_3.png",
  ],
  tasarımlar: [
    "/projeler/tasarim.png",
    "/projeler/tasarim2.png",
    "/projeler/tasarim3.png",
    "/projeler/tasarim4.png",
    "/projeler/tasarim5.png",
    "/projeler/tasarim_6.png",
    "/projeler/tasarim_7.png",
    "/projeler/tasarim_8.png",
    "/projeler/tasarım1.png",
  ],
};

// SEO için structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Caplin3D Projelerimiz - 3D Baskı ve Tasarım Çalışmaları",
  description:
    "Endüstriyel prototiplerden özel tasarımlara, inovatif ürün geliştirmeden hassas imalata kadar gerçekleştirdiğimiz başarılı 3D baskı ve tasarım projeleri.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.caplin3d.com/projelerimiz",
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Caplin 3D",
  description:
    "3D baskı, prototip üretimi, maket imalatı ve eğitim hizmetleri sunan teknoloji şirketi",
  url: "https://www.caplin3d.com",
  logo: "https://www.caplin3d.com/logo.png",
};

export default function ProjelerimizPage() {
  const [selectedCategory, setSelectedCategory] = useState("maketler");
  const [hoveredImage, setHoveredImage] = useState(null);

  const categories = [
    { id: "maketler", name: "Maketler", count: projectCategories.maketler.length },
    { id: "prototipler", name: "Prototipler", count: projectCategories.prototipler.length },
    { id: "eğitimler", name: "Eğitimler", count: projectCategories.eğitimler.length },
    { id: "tasarımlar", name: "Tasarımlar", count: projectCategories.tasarımlar.length },
  ];

  return (
    <>
      {/* SEO: Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

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
                Başarılı Çalışmalarımız
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
              Projelerimiz
              <span className="block text-accent mt-2">Tasarımdan Üretime</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto">
              Yenilikçi tasarımlarımız ve kusursuz üretim kalitemizle hayata
              geçirdiğimiz projeler
            </p>
          </motion.div>
        </section>

        {/* STATISTICS SECTION */}
        <section className="container-px pb-12">
          <div className="max-w-6xl mx-auto flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-5xl">
              {[
                { number: "500+", label: "Tamamlanan Proje" },
                { number: "150+", label: "Mutlu Müşteri" },
                { number: "10.000+", label: "Baskı Saati" },
                { number: "50+", label: "Farklı Malzeme" },
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

        {/* PROJECTS GALLERY SECTION */}
        <section className="container-px py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`relative px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-accent text-white shadow-lg shadow-accent/30 scale-105"
                        : "bg-card/50 border border-border text-muted hover:border-accent/40 hover:text-accent"
                    }`}
                  >
                    {category.name}
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                        selectedCategory === category.id
                          ? "bg-white/20 text-white"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {category.count}
                    </span>
                    {selectedCategory === category.id && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 rounded-full bg-accent -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            >
              {projectCategories[selectedCategory].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:shadow-[0_20px_60px_rgba(225,6,0,0.25)] hover:-translate-y-2 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`${categories.find((c) => c.id === selectedCategory)?.name} - Proje ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover Effect */}
                    {hoveredImage === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"
                      />
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-medium text-white uppercase tracking-wider">
                        {categories.find((c) => c.id === selectedCategory)?.name}
                      </span>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="container-px py-16 sm:py-20 bg-gradient-to-b from-accent/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Yeteneklerimiz
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Modern teknoloji ve uzman ekibimizle her türlü projeye hazırız
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Yüksek Hassasiyet",
                  description: "Mikron seviyesinde hassas üretim teknolojisi",
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "Hızlı Üretim",
                  description: "Express servis ile 24 saat içinde teslimat",
                },
                {
                  icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L7 4z",
                  title: "Çeşitli Malzemeler",
                  description: "PLA, ABS, PETG, Reçine ve daha fazlası",
                },
                {
                  icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
                  title: "Profesyonel Tasarım",
                  description: "Uzman ekibimiz ile CAD modelleme desteği",
                },
                {
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                  title: "Kalite Kontrolü",
                  description: "Her üründe detaylı kalite kontrol süreci",
                },
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "7/24 Destek",
                  description: "Proje süresince kesintisiz teknik destek",
                },
              ].map((capability, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(225,6,0,0.15)] hover:border-accent/40 hover:-translate-y-1"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={capability.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-accent">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="container-px py-16 sm:py-20">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Projenizi Hayata Geçirelim
                </h3>
                <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
                  Fikrinizi gerçeğe dönüştürmeye hazır mısınız? Uzman ekibimiz
                  projenizi en iyi şekilde hayata geçirmek için burada. Ücretsiz
                  danışmanlık için hemen iletişime geçin.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/teklif"
                    className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-accent hover:bg-accent-dark text-white transition-all duration-300 hover:shadow-[0_8px_20px_rgba(225,6,0,0.3)] hover:scale-105"
                  >
                    Ücretsiz Teklif Alın
                  </Link>
                  <Link
                    href="/hizmetler"
                    className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
                  >
                    Hizmetlerimiz
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
    </>
  );
}
