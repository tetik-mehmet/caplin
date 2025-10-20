"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HakkimizdaPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-gray-50 to-slate-100">
      {/* HERO SECTION */}
      <section className="container-px relative isolate flex flex-col items-center justify-center text-center py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full bg-gradient-to-b from-red-50/30 via-transparent to-transparent" />
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 30%, rgba(220,38,38,0.15), transparent 60%)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-gray-900">
            Hayalden Gerçeğe
            <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mt-2">
              Caplin3D
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            3D yazıcı teknolojilerinin sınırlarını zorlayan bir yenilik merkezi
          </p>
        </motion.div>
      </section>

      {/* ABOUT CONTENT CARDS */}
      <section className="container-px py-16 sm:py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 - Misyon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border-2 border-gray-300 bg-gray-50 p-8 transition-all duration-300 motion-safe:transform-gpu shadow-md hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] hover:-translate-y-1 hover:border-red-400"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:content-[''] before:absolute before:-inset-20 before:bg-[radial-gradient(40%_30%_at_20%_0%,rgba(220,38,38,0.08),transparent_60%)]" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red-100">
                <svg
                  className="w-7 h-7 text-red-600"
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
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                Yenilik Merkezi
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                Caplin3D, hayal gücünü gerçeğe dönüştürmek için 3D yazıcı
                teknolojilerinin sınırlarını zorlayan bir yenilik merkezi olarak
                doğdu. Sektördeki derin bilgi birikimimiz ve tutkumuz, bizi
                sadece bir üretici değil, aynı zamanda ilham veren bir çözüm
                ortağı yapıyor.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Ekip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border-2 border-gray-300 bg-gray-50 p-8 transition-all duration-300 motion-safe:transform-gpu shadow-md hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] hover:-translate-y-1 hover:border-red-400"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:content-[''] before:absolute before:-inset-20 before:bg-[radial-gradient(40%_30%_at_20%_0%,rgba(220,38,38,0.08),transparent_60%)]" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red-100">
                <svg
                  className="w-7 h-7 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                Uzman Ekip
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                Her biri alanında uzman ekibimizle, bireysel kullanıcıların ve
                kurumsal firmaların ihtiyaçlarına özel çözümler sunuyoruz.
                Prototip üretiminden seri üretime, eğitimden danışmanlığa kadar
                geniş bir hizmet yelpazesiyle, her projede fark yaratmayı
                hedefliyoruz.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Vizyon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border-2 border-gray-300 bg-gray-50 p-8 transition-all duration-300 motion-safe:transform-gpu shadow-md hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] hover:-translate-y-1 hover:border-red-400"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:content-[''] before:absolute before:-inset-20 before:bg-[radial-gradient(40%_30%_at_20%_0%,rgba(220,38,38,0.08),transparent_60%)]" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red-100">
                <svg
                  className="w-7 h-7 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                Vizyonumuz
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                Caplin3D olarak, müşteri memnuniyetini işimizin merkezine
                koyuyor ve teknoloji ile yaratıcılığı birleştirerek daha
                sürdürülebilir ve yenilikçi bir dünya için çalışıyoruz. Geleceği
                bugün tasarlamak isteyen herkes için, burada çözüm ortağı olmaya
                hazırız.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="container-px py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Neden{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Caplin3D
            </span>
            ?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { number: "7/24", label: "Destek" },
              { number: "100+", label: "Tamamlanan Proje" },
              { number: "99%", label: "Müşteri Memnuniyeti" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative group rounded-xl border-2 border-gray-300 bg-gray-50 p-6 text-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-red-300 hover:-translate-y-0.5"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-red-50/50 via-transparent to-transparent" />

                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="container-px py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Değerlerimiz
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border-2 border-gray-300 bg-gray-50 p-6 flex gap-4 transition-all duration-300 hover:shadow-lg hover:border-red-300 hover:-translate-y-0.5"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:content-[''] before:absolute before:-inset-20 before:bg-[radial-gradient(40%_30%_at_20%_0%,rgba(220,38,38,0.08),transparent_60%)]" />

                <div className="shrink-0 h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red-100">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={value.icon}
                    />
                  </svg>
                </div>

                <div className="relative">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container-px py-16 sm:py-20 bg-gradient-to-b from-gray-100 to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl border-2 border-red-300 bg-gradient-to-br from-red-50 via-gray-50 to-red-50/50 p-8 sm:p-12 shadow-2xl"
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              Projeniz için hazır mısınız?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 font-medium">
              Hayalinizdeki projeyi birlikte gerçeğe dönüştürelim. Uzman
              ekibimiz size en iyi çözümü sunmak için burada.
            </p>
            <div className="flex justify-center">
              <Link
                href="/teklif"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
              >
                Hemen Teklif Al
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
