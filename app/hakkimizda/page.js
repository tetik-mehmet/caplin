"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HakkimizdaPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-accent/5 overflow-hidden">
      {/* HERO SECTION */}
      <section className="container-px relative isolate flex flex-col items-center justify-center text-center py-20 sm:py-28">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
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
              Hakkımızda
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            Hayalden Gerçeğe
            <span className="block text-accent mt-2">Caplin3D</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            3D yazıcı teknolojilerinin sınırlarını zorlayan bir yenilik merkezi
          </p>
        </motion.div>
      </section>

      {/* ABOUT CONTENT CARDS */}
      <section className="container-px py-16 sm:py-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Yenilik Merkezi",
                desc: "Caplin3D, hayal gücünü gerçeğe dönüştürmek için 3D yazıcı teknolojilerinin sınırlarını zorlayan bir yenilik merkezi olarak doğdu. Sektördeki derin bilgi birikimimiz ve tutkumuz, bizi sadece bir üretici değil, aynı zamanda ilham veren bir çözüm ortağı yapıyor.",
                delay: 0,
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Uzman Ekip",
                desc: "Her biri alanında uzman ekibimizle, bireysel kullanıcıların ve kurumsal firmaların ihtiyaçlarına özel çözümler sunuyoruz. Prototip üretiminden seri üretime, eğitimden danışmanlığa kadar geniş bir hizmet yelpazesiyle, her projede fark yaratmayı hedefliyoruz.",
                delay: 0.1,
              },
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "Vizyonumuz",
                desc: "Caplin3D olarak, müşteri memnuniyetini işimizin merkezine koyuyor ve teknoloji ile yaratıcılığı birleştirerek daha sürdürülebilir ve yenilikçi bir dünya için çalışıyoruz. Geleceği bugün tasarlamak isteyen herkes için, burada çözüm ortağı olmaya hazırız.",
                delay: 0.2,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group relative bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-accent/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />

                {/* İçerik */}
                <div className="relative p-6 sm:p-8">
                  {/* Üst Accent Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full mb-6 group-hover:w-20 transition-all duration-500" />

                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/30 mb-6 transition-all duration-300 group-hover:bg-accent/20"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <motion.svg
                      className="w-7 h-7 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      whileHover={{ scale: 1.1 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={card.icon}
                      />
                    </motion.svg>
                  </motion.div>

                  {/* Başlık */}
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold mb-4 text-white transition-colors duration-300 group-hover:text-accent leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    {card.title}
                  </motion.h3>

                  {/* Açıklama */}
                  <motion.p
                    className="text-sm sm:text-base text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {card.desc}
                  </motion.p>
                </div>

                {/* Bottom Accent Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="container-px py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white"
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Neden{" "}
            </motion.span>
            <motion.span
              className="text-accent"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Caplin3D
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              ?
            </motion.span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {[
              { number: "7/24", label: "Destek" },
              { number: "100+", label: "Tamamlanan Proje" },
              { number: "99%", label: "Müşteri Memnuniyeti" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                className="relative group bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl border border-gray-700/50 hover:border-accent/50 p-8 text-center overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />

                {/* Pulsing circle background */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="w-32 h-32 rounded-full border-2 border-accent/30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                </motion.div>

                <div className="relative">
                  <motion.div
                    className="text-4xl sm:text-5xl font-bold text-accent mb-3"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.3 + i * 0.1,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {stat.number}
                  </motion.div>

                  <motion.div
                    className="text-sm text-gray-300 uppercase tracking-wider font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div
                    className="mx-auto mt-4 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  />
                </div>

                {/* Bottom Accent Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="container-px py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              Değerlerimiz
            </motion.span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {[
              {
                title: "Kalite",
                desc: "Her projede en yüksek standartları uygular, detaylara önem veririz.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Yenilikçilik",
                desc: "Sürekli gelişen teknolojileri takip eder, en son çözümleri sunarız.",
                icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
              },
              {
                title: "Güvenilirlik",
                desc: "Verdiğimiz sözleri tutar, zamanında ve eksiksiz teslimat yaparız.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
              {
                title: "Sürdürülebilirlik",
                desc: "Çevre dostu malzemeler ve üretim yöntemleriyle geleceği düşünürüz.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group relative bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl border border-gray-700/50 hover:border-accent/50 p-6 flex gap-4 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent/10 overflow-hidden"
              >
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />

                {/* Icon container with animation */}
                <motion.div
                  className="shrink-0 h-12 w-12 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/30 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/20 relative"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.15,
                    transition: { duration: 0.5 },
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: i * 0.1,
                  }}
                >
                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-accent/50"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />

                  <motion.svg
                    className="w-6 h-6 text-accent relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ scale: 1.1 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={value.icon}
                    />
                  </motion.svg>
                </motion.div>

                <div className="relative flex-1">
                  <motion.h3
                    className="text-lg font-bold mb-2 text-white transition-colors duration-300 group-hover:text-accent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    {value.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {value.desc}
                  </motion.p>

                  {/* Progress bar animation */}
                  <motion.div
                    className="mt-3 h-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  />
                </div>

                {/* Hover arrow indicator */}
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-5 h-5"
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
                </motion.div>

                {/* Bottom Accent Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container-px py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-accent/90 to-accent rounded-2xl shadow-2xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Projeniz İçin Hazır mısınız?
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Hayalinizdeki projeyi birlikte gerçeğe dönüştürelim. Uzman
              ekibimiz size en iyi çözümü sunmak için burada.
            </p>
            <Link
              href="/teklif"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>Hemen Teklif Al</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
