"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminTekliflerPage() {
  const [teklifler, setTeklifler] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("hepsi"); // hepsi, bekliyor, yanıtlandı
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  // Teklifleri getir
  const fetchTeklifler = async () => {
    try {
      const response = await fetch("/api/admin/teklifler");
      const data = await response.json();

      if (data.success) {
        setTeklifler(data.data);
      } else {
        if (response.status === 401) {
          router.push("/admin");
        } else {
          setError(data.error || "Teklifler alınamadı");
        }
      }
    } catch (error) {
      setError("Bağlantı hatası");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeklifler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Çıkış yap
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin");
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  // Durum güncelle
  const updateDurum = async (id, yeniDurum) => {
    try {
      const response = await fetch("/api/admin/teklifler", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, durum: yeniDurum }),
      });

      const data = await response.json();

      if (data.success) {
        // Listeyi güncelle
        setTeklifler((prev) =>
          prev.map((t) => (t._id === id ? { ...t, durum: yeniDurum } : t))
        );
      }
    } catch (error) {
      console.error("Durum güncelleme hatası:", error);
    }
  };

  // Teklif sil
  const deleteTeklif = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const response = await fetch(
        `/api/admin/teklifler?id=${deleteTarget._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        setTeklifler((prev) => prev.filter((t) => t._id !== deleteTarget._id));
        setDeleteTarget(null);
      }
    } catch (error) {
      console.error("Teklif silme hatası:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const closeDeleteModal = () => {
    if (isDeleting) return;
    setDeleteTarget(null);
  };

  // Filtreleme
  const filteredTeklifler = teklifler.filter((teklif) => {
    if (filter === "hepsi") return true;
    return teklif.durum === filter;
  });

  // İstatistikler
  const stats = {
    toplam: teklifler.length,
    bekliyor: teklifler.filter((t) => t.durum === "bekliyor").length,
    yanitlandi: teklifler.filter((t) => t.durum === "yanıtlandı").length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-card flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4" />
          <p className="text-gray-400">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Gelen Teklifler
            </h1>
            <p className="text-gray-400">
              Müşteri taleplerinizi buradan yönetin
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-all duration-300 flex items-center gap-2"
          >
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Çıkış Yap
          </button>
        </motion.div>

        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-card/50 border border-border/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Toplam Teklif</p>
                <p className="text-3xl font-bold text-white">{stats.toplam}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Bekleyen</p>
                <p className="text-3xl font-bold text-yellow-400">
                  {stats.bekliyor}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Yanıtlandı</p>
                <p className="text-3xl font-bold text-green-400">
                  {stats.yanitlandi}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filtreler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 mb-6 overflow-x-auto pb-2"
        >
          {[
            { key: "hepsi", label: "Hepsi", count: stats.toplam },
            { key: "bekliyor", label: "Bekleyen", count: stats.bekliyor },
            {
              key: "yanıtlandı",
              label: "Yanıtlandı",
              count: stats.yanitlandi,
            },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                filter === tab.key
                  ? "bg-accent text-white shadow-lg shadow-accent/30"
                  : "bg-card/50 text-gray-400 hover:bg-card border border-border/50"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </motion.div>

        {/* Teklif Listesi */}
        {error ? (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
            {error}
          </div>
        ) : filteredTeklifler.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-4">
              <svg
                className="w-10 h-10 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <p className="text-gray-400">Henüz teklif bulunmuyor</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {filteredTeklifler.map((teklif, index) => (
              <motion.div
                key={teklif._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card/50 border border-border/50 rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* İçerik */}
                  <div className="flex-1 space-y-3">
                    {/* Başlık ve Durum */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-accent"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            {teklif.email}
                          </p>
                          <p className="text-sm text-gray-400">
                            {teklif.telefon}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          teklif.durum === "bekliyor"
                            ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
                            : "bg-green-500/10 text-green-400 border border-green-500/30"
                        }`}
                      >
                        {teklif.durum === "bekliyor"
                          ? "Bekliyor"
                          : "Yanıtlandı"}
                      </span>
                    </div>

                    {/* Mesaj */}
                    <div className="bg-background/50 rounded-lg p-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {teklif.mesaj}
                      </p>
                    </div>

                    {/* Tarih */}
                    <p className="text-xs text-gray-500">
                      {new Date(teklif.tarih).toLocaleString("tr-TR", {
                        dateStyle: "long",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>

                  {/* Aksiyon Butonları */}
                  <div className="flex lg:flex-col gap-2">
                    <button
                      onClick={() =>
                        updateDurum(
                          teklif._id,
                          teklif.durum === "bekliyor"
                            ? "yanıtlandı"
                            : "bekliyor"
                        )
                      }
                      className="flex-1 lg:flex-initial px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-lg hover:bg-accent/20 transition-all duration-300 text-sm font-medium whitespace-nowrap"
                    >
                      {teklif.durum === "bekliyor"
                        ? "Yanıtlandı Olarak İşaretle"
                        : "Bekliyor Olarak İşaretle"}
                    </button>
                    <button
                      onClick={() => setDeleteTarget(teklif)}
                      className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-all duration-300 text-sm font-medium"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {deleteTarget && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur"
              onClick={closeDeleteModal}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative z-10 w-full max-w-md rounded-2xl bg-card border border-border/60 p-6 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 9v4m0 4h.01M4.318 4.318l15.364 15.364M7.78 7.78l-3.46 3.46a2 2 0 000 2.828l5.657 5.657a2 2 0 002.828 0l3.46-3.46M16.242 16.24L21 11.485a2 2 0 000-2.828L15.343 2.999a2 2 0 00-2.828 0L9.06 6.454"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">
                    Silme Onayı
                  </p>
                  <p className="text-sm text-gray-400">
                    {deleteTarget.email} kullanıcısına ait teklifi silmek
                    üzeresiniz.
                  </p>
                </div>
              </div>
              <div className="bg-background/60 border border-border/40 rounded-xl p-4 mb-6 max-h-32 overflow-y-auto">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {deleteTarget.mesaj}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={deleteTeklif}
                  disabled={isDeleting}
                  className="flex-1 px-4 py-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 font-medium hover:bg-red-500/30 transition disabled:opacity-50"
                >
                  {isDeleting ? "Siliniyor..." : "Evet, Sil"}
                </button>
                <button
                  onClick={closeDeleteModal}
                  className="flex-1 px-4 py-3 rounded-lg bg-card/60 border border-border/60 text-gray-200 font-medium hover:bg-card transition"
                >
                  Vazgeç
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
