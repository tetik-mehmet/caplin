"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Sayfa içerikleri
const pageContents = {
  1: {
    image: "/proje1.png",
    title: "Radar Projesi",
    description: "Savunma sanayi firmasına yaptığımız radar",
  },
  // Diğer sayfalar buraya eklenecek
};

export default function HizmetlerPage() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next");
  const totalPages = 10; // Toplam sayfa sayısı (çift sayfa olarak gösterilecek)

  const nextPage = () => {
    if (currentPage < totalPages - 2 && !isFlipping) {
      setFlipDirection("next");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 2);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection("prev");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 2);
        setIsFlipping(false);
      }, 600);
    }
  };

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

      {/* BOOK SECTION */}
      <section className="container-px py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            {/* Book Trigger Button */}
            {!isBookOpen && (
              <motion.button
                onClick={() => setIsBookOpen(true)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-12 group relative"
              >
                {/* Book Cover */}
                <div className="relative w-80 sm:w-96 h-96 sm:h-[450px] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:shadow-[0_30px_80px_rgba(225,6,0,0.4)] group-hover:scale-105">
                  {/* Cover design */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/90 via-accent to-accent-dark rounded-xl border-4 border-accent-dark overflow-hidden">
                    {/* Leather texture effect */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Cover title */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <motion.div
                        animate={{ rotate: [0, 3, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="text-center"
                      >
                        <div className="text-white/90 text-sm font-medium uppercase tracking-[0.3em] mb-4">
                          Caplin 3D
                        </div>
                        <div className="text-white font-bold text-3xl sm:text-4xl mb-2">
                          Hizmetler
                        </div>
                        <div className="text-white font-bold text-3xl sm:text-4xl mb-6">
                          Kataloğu
                        </div>
                        <div className="w-32 h-px bg-white/40 mx-auto mb-4" />
                        <div className="text-white/80 text-xs uppercase tracking-widest">
                          {new Date().getFullYear()}
                        </div>
                      </motion.div>
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30" />
                  </div>

                  {/* Page edge effect (right side) */}
                  <div className="absolute right-0 top-6 bottom-6 w-2">
                    <div className="h-full flex flex-col gap-0.5">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-white/20"
                          style={{
                            width: `${95 - i * 2}%`,
                            marginLeft: "auto",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Click indicator */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mt-6 text-white/70 text-sm flex items-center gap-2"
                >
                  <span>Kataloğu açmak için tıklayın</span>
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </motion.div>
              </motion.button>
            )}

            {/* Opened Book */}
            {isBookOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-6xl relative"
                style={{ perspective: "2000px" }}
              >
                {/* Book Container */}
                <div
                  className="relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Cover Opening Animation */}
                  <motion.div
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: -165 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute left-0 top-0 w-1/2 origin-right z-20"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="h-[500px] sm:h-[600px] bg-gradient-to-br from-accent/90 via-accent to-accent-dark rounded-l-2xl border-r-2 border-accent-dark shadow-2xl">
                      <div className="h-full flex items-center justify-center p-8 bg-white/5">
                        <div
                          className="text-white/40 text-4xl sm:text-6xl font-bold"
                          style={{ transform: "rotateY(180deg)" }}
                        >
                          CAPLIN
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Book Pages - Left & Right */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="relative flex shadow-[0_20px_80px_rgba(0,0,0,0.3)]"
                  >
                    {/* Left Page */}
                    <div className="w-1/2 h-[500px] sm:h-[600px] bg-white border-r border-gray-200 relative overflow-hidden rounded-l-2xl">
                      {/* Paper texture */}
                      <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                        }}
                      />

                      {/* Left Page Content */}
                      <div className="h-full p-8 sm:p-12 flex flex-col">
                        <div className="text-gray-400 text-xs sm:text-sm mb-4">
                          Sayfa {currentPage + 1}
                        </div>
                        {/* İçerik */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                          {pageContents[currentPage + 1] ? (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.6 }}
                              className="w-full h-full flex flex-col"
                            >
                              {/* Resim */}
                              <div className="flex-1 relative rounded-lg overflow-hidden mb-4 bg-gray-50">
                                <Image
                                  src={pageContents[currentPage + 1].image}
                                  alt={pageContents[currentPage + 1].title}
                                  fill
                                  className="object-contain p-4"
                                />
                              </div>

                              {/* Başlık ve Açıklama */}
                              <div className="text-center space-y-2">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                  {pageContents[currentPage + 1].title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {pageContents[currentPage + 1].description}
                                </p>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="text-gray-300 text-sm">
                              {/* Boş sayfa */}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Binding shadow */}
                      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-300/30 to-transparent pointer-events-none" />
                    </div>

                    {/* Right Page */}
                    <div className="w-1/2 h-[500px] sm:h-[600px] bg-white border-l border-gray-200 relative overflow-hidden rounded-r-2xl">
                      {/* Paper texture */}
                      <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                        }}
                      />

                      {/* Right Page Content */}
                      <div className="h-full p-8 sm:p-12 flex flex-col">
                        <div className="text-gray-400 text-xs sm:text-sm mb-4 text-right">
                          Sayfa {currentPage + 2}
                        </div>
                        {/* İçerik */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                          {pageContents[currentPage + 2] ? (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.6 }}
                              className="w-full h-full flex flex-col"
                            >
                              {/* Resim */}
                              <div className="flex-1 relative rounded-lg overflow-hidden mb-4 bg-gray-50">
                                <Image
                                  src={pageContents[currentPage + 2].image}
                                  alt={pageContents[currentPage + 2].title}
                                  fill
                                  className="object-contain p-4"
                                />
                              </div>

                              {/* Başlık ve Açıklama */}
                              <div className="text-center space-y-2">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                  {pageContents[currentPage + 2].title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {pageContents[currentPage + 2].description}
                                </p>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="text-gray-300 text-sm">
                              {/* Boş sayfa */}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Binding shadow */}
                      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-300/30 to-transparent pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Page Turn Animation Overlay */}
                  <AnimatePresence mode="wait">
                    {isFlipping && (
                      <motion.div
                        key={`flip-${currentPage}-${flipDirection}`}
                        className={`absolute top-0 w-1/2 h-[500px] sm:h-[600px] z-10 ${
                          flipDirection === "next"
                            ? "right-0 origin-left"
                            : "left-0 origin-right"
                        }`}
                        style={{ transformStyle: "preserve-3d" }}
                        initial={{ rotateY: 0 }}
                        animate={{
                          rotateY: flipDirection === "next" ? -180 : 180,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        {/* Çevrilen sayfa ön yüzü */}
                        <div
                          className={`absolute inset-0 bg-white shadow-2xl ${
                            flipDirection === "next"
                              ? "rounded-r-2xl"
                              : "rounded-l-2xl"
                          }`}
                          style={{
                            backfaceVisibility: "hidden",
                          }}
                        >
                          {/* Paper texture */}
                          <div
                            className={`absolute inset-0 opacity-[0.03] pointer-events-none ${
                              flipDirection === "next"
                                ? "rounded-r-2xl"
                                : "rounded-l-2xl"
                            }`}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                            }}
                          />
                          <div className="h-full p-8 sm:p-12 flex flex-col">
                            <div
                              className={`text-gray-400 text-xs sm:text-sm mb-4 ${
                                flipDirection === "next"
                                  ? "text-right"
                                  : "text-left"
                              }`}
                            >
                              Sayfa{" "}
                              {flipDirection === "next"
                                ? currentPage + 2
                                : currentPage + 1}
                            </div>
                          </div>
                          {/* Binding shadow */}
                          <div
                            className={`absolute top-0 bottom-0 w-8 pointer-events-none ${
                              flipDirection === "next"
                                ? "left-0 bg-gradient-to-r from-gray-400/40 to-transparent"
                                : "right-0 bg-gradient-to-l from-gray-400/40 to-transparent"
                            }`}
                          />
                        </div>

                        {/* Çevrilen sayfa arka yüzü */}
                        <div
                          className={`absolute inset-0 bg-white shadow-2xl ${
                            flipDirection === "next"
                              ? "rounded-l-2xl"
                              : "rounded-r-2xl"
                          }`}
                          style={{
                            backfaceVisibility: "hidden",
                            transform:
                              flipDirection === "next"
                                ? "rotateY(180deg)"
                                : "rotateY(-180deg)",
                          }}
                        >
                          {/* Paper texture */}
                          <div
                            className={`absolute inset-0 opacity-[0.03] pointer-events-none ${
                              flipDirection === "next"
                                ? "rounded-l-2xl"
                                : "rounded-r-2xl"
                            }`}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                            }}
                          />
                          <div className="h-full p-8 sm:p-12 flex flex-col">
                            <div
                              className={`text-gray-400 text-xs sm:text-sm mb-4 ${
                                flipDirection === "next"
                                  ? "text-left"
                                  : "text-right"
                              }`}
                            >
                              Sayfa{" "}
                              {flipDirection === "next"
                                ? currentPage + 3
                                : currentPage}
                            </div>
                          </div>
                          {/* Binding shadow */}
                          <div
                            className={`absolute top-0 bottom-0 w-8 pointer-events-none ${
                              flipDirection === "next"
                                ? "right-0 bg-gradient-to-l from-gray-400/40 to-transparent"
                                : "left-0 bg-gradient-to-r from-gray-400/40 to-transparent"
                            }`}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex items-center justify-between mt-8 px-4"
                >
                  {/* Previous Button */}
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-300 hover:border-accent hover:text-accent transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:text-gray-900 group"
                  >
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span className="text-sm font-medium hidden sm:inline">
                      Önceki Sayfa
                    </span>
                  </button>

                  {/* Page Indicator */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">
                      {currentPage + 1}-{currentPage + 2} / {totalPages}
                    </span>
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={nextPage}
                    disabled={currentPage >= totalPages - 2}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white hover:bg-accent-dark transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-accent group"
                  >
                    <span className="text-sm font-medium hidden sm:inline">
                      Sonraki Sayfa
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
                  </button>
                </motion.div>

                {/* Close Button */}
                <button
                  onClick={() => setIsBookOpen(false)}
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent/90 hover:bg-accent text-white transition-all duration-300 flex items-center justify-center shadow-lg group z-30"
                >
                  <svg
                    className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            )}
          </div>
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
