"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function HakkimizdaPage() {
  const { scrollYProgress } = useScroll();

  // Smooth spring animation for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], [0, -50]);
  const opacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

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

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-gray-50 to-slate-100 overflow-hidden">
      {/* HERO SECTION */}
      <section className="container-px relative isolate flex flex-col items-center justify-center text-center py-20 sm:py-28">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="relative w-full h-full bg-gradient-to-b from-red-50/30 via-transparent to-transparent"
            style={{ y }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-10"
            animate={{
              background: [
                "radial-gradient(80% 60% at 50% 30%, rgba(220,38,38,0.15), transparent 60%)",
                "radial-gradient(80% 60% at 60% 40%, rgba(220,38,38,0.2), transparent 60%)",
                "radial-gradient(80% 60% at 40% 30%, rgba(220,38,38,0.15), transparent 60%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-400/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 300,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-gray-900"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hayalden Gerçeğe
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mt-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Caplin3D
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            3D yazıcı teknolojilerinin sınırlarını zorlayan bir yenilik merkezi
          </motion.p>

          {/* Animated line decoration */}
          <motion.div
            className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </section>

      {/* ABOUT CONTENT CARDS */}
      <section className="container-px py-16 sm:py-20 bg-gray-100">
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
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-300 bg-gray-50 p-8 transition-all duration-300 motion-safe:transform-gpu shadow-md hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] hover:border-red-400"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  animate={{
                    background: [
                      "radial-gradient(40% 30% at 20% 0%, rgba(220,38,38,0.08), transparent 60%)",
                      "radial-gradient(40% 30% at 80% 100%, rgba(220,38,38,0.08), transparent 60%)",
                      "radial-gradient(40% 30% at 20% 0%, rgba(220,38,38,0.08), transparent 60%)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative">
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 mb-6 transition-all duration-300 group-hover:bg-red-100"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <motion.svg
                      className="w-7 h-7 text-red-600"
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

                  <motion.h3
                    className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300 group-hover:text-red-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {card.desc}
                  </motion.p>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={false}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="container-px py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-red-100/20 rounded-full blur-3xl"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900"
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
              className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"
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
                className="relative group rounded-xl border-2 border-gray-300 bg-gray-50 p-8 text-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-red-300"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(220,38,38,0.05) 0%, transparent 100%)",
                      "linear-gradient(225deg, rgba(220,38,38,0.05) 0%, transparent 100%)",
                      "linear-gradient(135deg, rgba(220,38,38,0.05) 0%, transparent 100%)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Pulsing circle background */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="w-32 h-32 rounded-full border-2 border-red-200/30"
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
                    className="text-4xl sm:text-5xl font-bold text-red-600 mb-3"
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
                    className="text-sm text-gray-600 uppercase tracking-wider font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div
                    className="mx-auto mt-4 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  />
                </div>

                {/* Corner accents */}
                <motion.div
                  className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="container-px py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(220,38,38,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900"
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
                className="group relative overflow-hidden rounded-xl border-2 border-gray-300 bg-gray-50 p-6 flex gap-4 transition-all duration-300 hover:shadow-lg hover:border-red-300"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(220,38,38,0.05) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(220,38,38,0.05) 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 0%, rgba(220,38,38,0.05) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Icon container with animation */}
                <motion.div
                  className="shrink-0 h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center transition-all duration-300 group-hover:bg-red-100 relative"
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
                    className="absolute inset-0 rounded-lg border-2 border-red-400"
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
                    className="w-6 h-6 text-red-600 relative z-10"
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
                    className="text-lg font-bold mb-2 text-gray-900 transition-colors duration-300 group-hover:text-red-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    {value.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {value.desc}
                  </motion.p>

                  {/* Progress bar animation */}
                  <motion.div
                    className="mt-3 h-0.5 bg-gradient-to-r from-red-400 to-red-600 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  />
                </div>

                {/* Hover arrow indicator */}
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600 opacity-0 group-hover:opacity-100"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container-px py-16 sm:py-20 bg-gradient-to-b from-gray-100 to-gray-50 relative overflow-hidden">
        {/* Animated particles in background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.6,
          }}
          className="max-w-4xl mx-auto relative"
        >
          <motion.div
            className="rounded-3xl border-2 border-red-300 bg-gradient-to-br from-red-50 via-gray-50 to-red-50/50 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-30 pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(220,38,38,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(220,38,38,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(220,38,38,0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-4 right-4 w-20 h-20 border-2 border-red-300/30 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-16 h-16 border-2 border-red-300/30 rounded-lg"
              animate={{
                rotate: -360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            <div className="text-center relative">
              <motion.h3
                className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Projeniz için{" "}
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  hazır mısınız?
                </motion.span>
              </motion.h3>

              <motion.p
                className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Hayalinizdeki projeyi birlikte gerçeğe dönüştürelim. Uzman
                ekibimiz size en iyi çözümü sunmak için burada.
              </motion.p>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/teklif"
                    className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 group relative overflow-hidden"
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                    />

                    <span className="relative z-10">Hemen Teklif Al</span>

                    <motion.svg
                      className="w-5 h-5 ml-2 relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Pulsing rings around button */}
              <motion.div
                className="absolute left-1/2 bottom-8 -translate-x-1/2 w-40 h-12 pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 border-2 border-red-400/30 rounded-xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 1,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
