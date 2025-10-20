"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const hizmetler = [
  {
    id: 1,
    baslik: "3D Baskı FDM",
    aciklama:
      "Yüksek kaliteli FDM teknolojisi ile hızlı ve ekonomik üretim. Dayanıklı ve fonksiyonel parçalar için ideal çözüm.",
    ozellikler: [
      "Geniş malzeme seçeneği",
      "Uygun maliyet",
      "Hızlı üretim",
      "Dayanıklı yapı",
    ],
  },
  {
    id: 2,
    baslik: "Reçine Baskı",
    aciklama:
      "Yüksek detaylı ve pürüzsüz yüzey kalitesi sunan reçine baskı teknolojisi. Hassas ve estetik projeler için.",
    ozellikler: [
      "Yüksek detay",
      "Pürüzsüz yüzey",
      "Hassas ölçüler",
      "Profesyonel kalite",
    ],
  },
  {
    id: 3,
    baslik: "Maket Üretimi",
    aciklama:
      "Mimari projeler, tasarım sunumları ve prototip geliştirme için özel maket üretim hizmetleri.",
    ozellikler: [
      "Mimari projeler",
      "Detaylı işçilik",
      "Ölçekli üretim",
      "Görsel sunum",
    ],
  },
  {
    id: 4,
    baslik: "Tasarım Desteği",
    aciklama:
      "Fikirlerinizi gerçeğe dönüştürüyoruz. CAD modelleme ve teknik çizim desteği ile projelerinizi hayata geçirin.",
    ozellikler: [
      "CAD modelleme",
      "Teknik çizim",
      "Tasarım optimizasyonu",
      "Üretim danışmanlığı",
    ],
  },
  {
    id: 5,
    baslik: "3D Yazıcı Eğitimi",
    aciklama:
      "Temel seviyeden ileri seviyeye 3D baskı teknolojileri eğitimi. Uygulamalı ve profesyonel eğitim programları.",
    ozellikler: [
      "Temel ve ileri seviye",
      "Uygulamalı eğitim",
      "Sertifikalı program",
      "Uzman eğitmenler",
    ],
  },
  {
    id: 6,
    baslik: "3D Yazıcı Atölye",
    aciklama:
      "Kendi projelerinizi üretebileceğiniz tam donanımlı 3D yazıcı atölyesi. Teknik destek ve ekipman kullanımı.",
    ozellikler: [
      "Tam donanımlı atölye",
      "Teknik destek",
      "Ekipman erişimi",
      "Proje geliştirme",
    ],
  },
  {
    id: 7,
    baslik: "Kurulum Danışmanlığı",
    aciklama:
      "3D yazıcı alımından kuruluma, kalibrasyondan bakıma kadar tüm süreçlerde profesyonel danışmanlık hizmeti.",
    ozellikler: [
      "Ekipman seçimi",
      "Kurulum ve kalibrasyon",
      "Bakım ve onarım",
      "Süreç optimizasyonu",
    ],
  },
];

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

      {/* HİZMETLER KARTLARI */}
      <section className="container-px py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {hizmetler.map((hizmet, index) => (
              <motion.div
                key={hizmet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-accent/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />

                {/* Numara Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">
                    {String(hizmet.id).padStart(2, "0")}
                  </span>
                </div>

                {/* İçerik */}
                <div className="relative p-6 sm:p-8">
                  {/* Üst Accent Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full mb-6 group-hover:w-20 transition-all duration-500" />

                  {/* Başlık */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {hizmet.baslik}
                  </h3>

                  {/* Açıklama */}
                  <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                    {hizmet.aciklama}
                  </p>

                  {/* Özellikler */}
                  <div className="space-y-3 mb-6">
                    {hizmet.ozellikler.map((ozellik, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded bg-accent/10 border border-accent/30 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-accent"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>{ozellik}</span>
                      </div>
                    ))}
                  </div>

                  {/* Detay Butonu */}
                  <div className="pt-6 border-t border-gray-700/50">
                    <Link
                      href="/teklif"
                      className="group/btn inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 text-sm"
                    >
                      <span>Teklif Al</span>
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Bottom Accent Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM ÇAĞRISı */}
      <section className="container-px py-16 sm:py-20">
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
              Uzman ekibimiz sizin için en uygun çözümü üretmek için bekliyor
            </p>
            <Link
              href="/teklif"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>Ücretsiz Teklif Alın</span>
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

      {/* FOOTER */}
      <footer className="container-px py-10 text-center mt-auto">
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
