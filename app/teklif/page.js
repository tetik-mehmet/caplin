"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TeklifPage() {
  const [formData, setFormData] = useState({
    telefon: "",
    email: "",
    mesaj: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/teklif", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: data.message || "Teklifiniz başarıyla gönderildi!",
        });
        setFormData({ telefon: "", email: "", mesaj: "" });
      } else {
        setMessage({
          type: "error",
          text: data.error || "Bir hata oluştu",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Bağlantı hatası. Lütfen tekrar deneyin.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card py-16 sm:py-24">
      <div className="container-px max-w-4xl mx-auto">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium uppercase tracking-wider mb-4">
            Ücretsiz Teklif
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Hemen <span className="text-accent">Teklif Alın</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Projeniz için detaylı bilgi verin, size en uygun çözümü ve fiyatı
            kısa sürede gönderelim.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Dekoratif arka plan */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl blur-2xl opacity-50" />

          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-accent/20 shadow-2xl p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Telefon */}
              <div>
                <label
                  htmlFor="telefon"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Telefon Numarası
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  placeholder="0555 123 45 67"
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  E-posta Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                />
              </div>

              {/* Mesaj */}
              <div>
                <label
                  htmlFor="mesaj"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Proje Detayları
                </label>
                <textarea
                  id="mesaj"
                  name="mesaj"
                  value={formData.mesaj}
                  onChange={handleChange}
                  placeholder="Lütfen projeniz hakkında detaylı bilgi verin: Boyut, malzeme, adet, teslim tarihi gibi..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                />
              </div>

              {/* Mesaj Gösterimi */}
              {message.text && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-lg ${
                    message.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {message.text}
                </motion.div>
              )}

              {/* Submit Butonu */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/30"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  "Teklif İste"
                )}
              </button>
            </form>

            {/* İletişim Bilgileri */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-center text-sm text-gray-400">
                Alternatif olarak{" "}
                <a
                  href="mailto:info@caplin3d.com"
                  className="text-accent hover:underline"
                >
                  info@caplin3d.com
                </a>{" "}
                adresinden bize ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Özellikler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { title: "24 Saat", desc: "Hızlı Yanıt" },
            { title: "Ücretsiz", desc: "Teklif Hizmeti" },
            { title: "Profesyonel", desc: "Danışmanlık" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-card/50 border border-border/50"
            >
              <div className="text-2xl font-bold text-accent mb-1">
                {item.title}
              </div>
              <div className="text-sm text-gray-400">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
