"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [lottieData, setLottieData] = useState(null);

  // Lottie animasyonunu yükle
  useEffect(() => {
    fetch("/3d_print.json")
      .then((res) => res.json())
      .then((data) => setLottieData(data))
      .catch((err) => console.error("Lottie yükleme hatası:", err));
  }, []);

  // ESC tuşu ile modal'ı kapat
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedService) {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const services = [
    {
      title: "3D Baskı (FDM)",
      desc: "Mühendislik filamentleri ile fonksiyonel parçalar",
      icon: "/gifler/3d-printer.gif",
      href: "/hizmetler",
      isHero: true,
      modalContent: {
        title: "3D Baskı (FDM) Hizmeti",
        subtitle: "Endüstriyel Kalitede Fonksiyonel Parça Üretimi",
        description:
          "Fused Deposition Modeling (FDM) teknolojisi ile mühendislik filamentleri kullanarak dayanıklı ve fonksiyonel parçalar üretiyoruz. Prototip geliştirmeden küçük seri üretime kadar geniş bir yelpazede hizmet sunuyoruz.",
        features: [
          "Yüksek dayanıklılık ve mekanik özellikler",
          "Geniş malzeme seçeneği (PLA, ABS, PETG, TPU, vb.)",
          "Hassas toleranslar ve yüksek yüzey kalitesi",
          "Hızlı prototipleme ve üretim",
          "Özel renk ve malzeme seçenekleri",
        ],
        useCases: [
          "Prototip geliştirme",
          "Fonksiyonel test parçaları",
          "Küçük seri üretim",
          "Özel tasarım parçalar",
          "Yedek parça üretimi",
        ],
      },
    },
    {
      title: "Reçine Baskı",
      desc: "Yüksek detaylı prototipler ve minyatürler.",
      icon: "/gifler/spray.gif",
      href: "/hizmetler",
      isHero: false,
      modalContent: {
        title: "Reçine Baskı Hizmeti",
        subtitle: "Mikro Detaylarda Mükemmellik",
        description:
          "SLA ve DLP teknolojileri ile ultra yüksek çözünürlükte, pürüzsüz yüzeyli ve ince detaylı parçalar üretiyoruz. Mücevher tasarımından tıbbi modellere, mimari maketlerden oyuncak prototiplerine kadar geniş bir kullanım alanı.",
        features: [
          "0.025mm katman kalınlığı ile ultra detay",
          "Pürüzsüz yüzey kalitesi (post-processing gerekmez)",
          "Yüksek çözünürlük ve hassasiyet",
          "Şeffaf ve renkli reçine seçenekleri",
          "Küçük parçalar için ideal",
        ],
        useCases: [
          "Mücevher ve aksesuar prototipleri",
          "Tıbbi ve diş modelleri",
          "Mimari detay modelleri",
          "Figür ve minyatür üretimi",
          "Yüksek detay gerektiren parçalar",
        ],
      },
    },
    {
      title: "Maket Üretimi",
      desc: "Mimari ve endüstriyel maket imalatı.",
      icon: "/gifler/maket.gif",
      href: "/hizmetler",
      isHero: false,
      modalContent: {
        title: "Maket Üretimi Hizmeti",
        subtitle: "Gerçekçi ve Detaylı Temsiller",
        description:
          "Mimari projeler, endüstriyel tesisler ve ürün sunumları için ölçekli, detaylı ve profesyonel maketler üretiyoruz. Her projeye özel tasarım ve üretim süreci ile müşterilerinizin vizyonunu somutlaştırıyoruz.",
        features: [
          "1:50, 1:100, 1:200 ve özel ölçekler",
          "Gerçekçi malzeme ve renk uygulamaları",
          "LED aydınlatma entegrasyonu",
          "Çıkarılabilir katlar ve detaylar",
          "Taşıma ve sergileme için dayanıklı yapı",
        ],
        useCases: [
          "Mimari proje sunumları",
          "Şehir planlama modelleri",
          "Endüstriyel tesis maketleri",
          "Ürün tanıtım modelleri",
          "Eğitim ve sergi amaçlı maketler",
        ],
      },
    },
    {
      title: "3D Yazıcı Eğitimi",
      desc: "Profesyonel 3D baskı teknolojileri eğitimi",
      icon: "/gifler/teacher.gif",
      href: "/hizmetler",
      isHero: false,
      modalContent: {
        title: "3D Yazıcı Eğitimi",
        subtitle: "Profesyonel Seviyede Teknoloji Eğitimi",
        description:
          "3D baskı teknolojilerini sıfırdan öğrenmek isteyenlerden, profesyonel seviyede gelişim arayanlara kadar her seviyeye uygun eğitim programları sunuyoruz. Teorik bilgi ve pratik uygulamaları birleştiren kapsamlı eğitimler.",
        features: [
          "Temel ve ileri seviye eğitim programları",
          "Pratik uygulamalı workshop'lar",
          "Sertifika programları",
          "Kurumsal eğitim çözümleri",
          "Online ve yüz yüze eğitim seçenekleri",
        ],
        useCases: [
          "Bireysel öğrenme",
          "Kurumsal eğitim programları",
          "Okul ve üniversite işbirlikleri",
          "Mesleki gelişim",
          "Girişimcilik eğitimleri",
        ],
      },
    },
    {
      title: "Tasarım Desteği",
      desc: "Baskıya uygun revizyon ve danışmanlık.",
      icon: "/gifler/tasarim.gif",
      href: "/hizmetler",
      isHero: false,
      modalContent: {
        title: "Tasarım Desteği",
        subtitle: "Baskıya Hazır Tasarım Çözümleri",
        description:
          "3D baskı için optimize edilmiş tasarım hizmetleri sunuyoruz. Mevcut tasarımlarınızı revize ediyor, yeni tasarımlar geliştiriyor ve baskı sürecine hazır hale getiriyoruz. Tasarımdan üretime kadar tüm süreçte yanınızdayız.",
        features: [
          "CAD modelleme ve optimizasyon",
          "Baskıya uygun tasarım revizyonları",
          "Yapısal analiz ve öneriler",
          "Malzeme seçimi danışmanlığı",
          "Prototip test ve iyileştirme",
        ],
        useCases: [
          "Tasarım optimizasyonu",
          "Yeni ürün geliştirme",
          "Mevcut tasarım revizyonları",
          "Teknik çizim ve modelleme",
          "Üretim öncesi danışmanlık",
        ],
      },
    },
    {
      title: "Küçük Seri Üretim",
      desc: "Ön seri ve pazarlama numuneleri.",
      icon: "/gifler/assembly-line.gif",
      href: "/hizmetler",
      isHero: false,
      modalContent: {
        title: "Küçük Seri Üretim",
        subtitle: "Esnek ve Hızlı Üretim Çözümleri",
        description:
          "Küçük ve orta ölçekli seri üretim ihtiyaçlarınız için esnek ve hızlı çözümler sunuyoruz. Pazarlama numunelerinden ön seri üretime, özel siparişlerden sınırlı sayılı koleksiyonlara kadar geniş bir yelpazede hizmet veriyoruz.",
        features: [
          "10-1000 adet arası seri üretim",
          "Hızlı teslimat süreleri",
          "Tutarlı kalite kontrolü",
          "Özel paketleme ve etiketleme",
          "Esnek üretim planlaması",
        ],
        useCases: [
          "Pazarlama numuneleri",
          "Kickstarter ve crowdfunding projeleri",
          "Sınırlı sayılı koleksiyonlar",
          "Özel sipariş üretimleri",
          "Test ve validasyon serileri",
        ],
      },
    },
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-gray-50 to-slate-100">
      {/* HERO */}
      <section className="relative isolate flex flex-col items-center justify-center text-center min-h-[85vh] sm:min-h-[90vh] overflow-hidden">
        {/* Arka plan resmi container */}
        <div className="absolute inset-0 -z-10">
          {/* Arka plan resmi */}
          <Image
            src="/yeni_arka.png"
            alt="Arka plan"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />

          {/* Gradient overlay - Okunabilirlik için */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>

        {/* İçerik */}
        <div className="relative z-10 container-px px-4 py-16 sm:py-20 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white drop-shadow-2xl">
            3D BASKI VE MAKET
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-400 bg-clip-text text-transparent mt-2 drop-shadow-lg">
              ÜRETİMİNDE GÜVENİLİR ÇÖZÜMLER
            </span>
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 px-4">
            <a
              href="/teklif"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold transition-all duration-300 shadow-lg shadow-red-600/50 hover:shadow-xl hover:shadow-red-600/60 hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Teklif Al
            </a>
            <a
              href="/hizmetler"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl border-2 border-white text-white font-semibold bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Hizmet Kapsamı
            </a>
          </div>
        </div>
      </section>

      {/* REFERANS PROJE */}
      <section className="container-px py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Savunma Sanayisinde{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Öncü Çözümler
              </span>
            </h2>
          </div>

          {/* Proje Kartı */}
          <div className="relative group">
            {/* Ana Kart */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-50 border-2 border-gray-300 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_80px_rgba(220,38,38,0.15)] hover:border-red-300">
              {/* Arka Plan Efekti */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
              </div>

              {/* Grid Deseni */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:p-12">
                {/* Sol Taraf - Müşteri Logo ve Bilgi */}
                <div className="flex flex-col justify-center space-y-6">
                  {/* Müşteri Logo */}
                  <div className="flex items-center gap-4 mb-2">
                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-white p-3 shadow-md border-2 border-gray-200 flex items-center justify-center">
                      <Image
                        src="/referanslar/bogazici.avif"
                        alt="Boğaziçi Üniversitesi"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">
                        Müşteri
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        Boğaziçi Üniversitesi
                      </p>
                    </div>
                  </div>

                  {/* Proje Detayları */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Radar Sistemi Prototipi
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Savunma sanayi sektörünün önde gelen firmalarından biri
                      için ürettiğimiz yüksek hassasiyetli radar sistemi
                      prototipi. Proje, ileri teknoloji 3D baskı yöntemleri ve
                      hassas mühendislik çalışması ile hayata geçirildi.
                    </p>

                    {/* Özellikler */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1.5 rounded-full bg-red-50 border-2 border-red-300 text-red-700 text-xs font-bold">
                        Yüksek Hassasiyet
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-red-50 border-2 border-red-300 text-red-700 text-xs font-bold">
                        Savunma Sanayi
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-red-50 border-2 border-red-300 text-red-700 text-xs font-bold">
                        Prototip Üretim
                      </span>
                    </div>
                  </div>

                  {/* CTA Butonu */}
                  <div className="pt-4">
                    <a
                      href="/teklif"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5 text-sm sm:text-base"
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Teklif Al
                    </a>
                  </div>
                </div>

                {/* Sağ Taraf - Proje Görselleri */}
                <div className="flex flex-col gap-6 items-center justify-center">
                  {/* İlk Görsel */}
                  <div className="group/image relative w-full aspect-square max-w-md rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl ring-2 ring-gray-300 transition-all duration-700 hover:ring-red-400 hover:scale-[1.02] animate-fadeInScale">
                    {/* Vignette Efekti */}
                    <div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />

                    {/* Düşük Opacity Overlay - Produktivite efekti için */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-900/15 z-10 pointer-events-none opacity-60 group-hover/image:opacity-80 transition-opacity duration-700" />

                    {/* Parallax Container */}
                    <div className="relative w-full h-full transform transition-transform duration-700 group-hover/image:scale-110 group-hover/image:-translate-y-2">
                      <Image
                        src="/proje1.png"
                        alt="Radar Sistemi"
                        fill
                        className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                      />
                    </div>

                    {/* Kırmızı Corner-Brackets - Kıvılcım Efekti */}
                    {/* Sol Üst */}
                    <div className="absolute top-3 left-3 w-8 h-8 z-20 opacity-0 group-hover/image:opacity-100 transition-all duration-500 group-hover/image:translate-x-1 group-hover/image:-translate-y-1">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                      <div className="absolute top-1 left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(239,68,68,1)]" />
                    </div>

                    {/* Sağ Üst */}
                    <div className="absolute top-3 right-3 w-8 h-8 z-20 opacity-0 group-hover/image:opacity-100 transition-all duration-500 group-hover/image:-translate-x-1 group-hover/image:-translate-y-1">
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                      <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(239,68,68,1)]" />
                    </div>

                    {/* Sol Alt */}
                    <div className="absolute bottom-3 left-3 w-8 h-8 z-20 opacity-0 group-hover/image:opacity-100 transition-all duration-500 group-hover/image:translate-x-1 group-hover/image:translate-y-1">
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                      <div className="absolute bottom-1 left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(239,68,68,1)]" />
                    </div>

                    {/* Sağ Alt */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 z-20 opacity-0 group-hover/image:opacity-100 transition-all duration-500 group-hover/image:-translate-x-1 group-hover/image:translate-y-1">
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                      <div className="absolute bottom-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(239,68,68,1)]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrikler ve Sosyal Kanıt */}
              <div className="relative border-t-2 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-8">
                {/* Proje Sonuçları - Kontrastlı Kutular */}
                <div className="grid grid-cols-2 gap-4 mb-6 max-w-md mx-auto md:mx-0">
                  {/* Hassasiyet Metriği */}
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-600 to-red-700 p-4 shadow-lg border-2 border-red-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8" />
                    <div className="relative z-10">
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        %100
                      </div>
                      <div className="text-xs text-red-100 uppercase tracking-wider font-semibold">
                        Doğruluk
                      </div>
                    </div>
                  </div>

                  {/* Kalite Metriği */}
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-4 shadow-lg border-2 border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8" />
                    <div className="relative z-10">
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        A+
                      </div>
                      <div className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
                        Kalite
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teknoloji Bilgisi */}
                <div className="pt-4 border-t border-gray-300">
                  <div className="text-sm text-gray-700 font-medium">
                    <span className="text-red-600 font-bold">FDM</span> ve{" "}
                    <span className="text-red-600 font-bold">Reçine</span>{" "}
                    Teknolojisi
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Efekti */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-100/0 via-red-100/20 to-red-100/0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section
        id="ozellikler"
        className="container-px py-16 sm:py-20 bg-gray-100"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Öne Çıkan{" "}
          <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            Hizmetler
          </span>
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((f, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-2xl border-2 h-[140px] p-6 flex flex-col gap-3 transition-all duration-300 motion-safe:transform-gpu ${
                f.isHero
                  ? "border-red-400/60 bg-gradient-to-br from-red-50/80 via-gray-50 to-gray-50 shadow-lg hover:shadow-[0_12px_40px_rgba(220,38,38,0.3)] hover:-translate-y-1.5 hover:border-red-500"
                  : "border-gray-300 bg-gray-50 shadow-md hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] hover:-translate-y-1 hover:border-red-400"
              }`}
              aria-label={`${f.title} hizmeti: ${f.desc}`}
            >
              {/* Hero hizmet için üst gradient bant */}
              {f.isHero && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
              )}

              {/* Hero için arka plan glow efekti */}
              {f.isHero && (
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 via-transparent to-transparent opacity-50" />
              )}

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:content-[''] before:absolute before:-inset-20 before:bg-[radial-gradient(40%_30%_at_20%_0%,rgba(220,38,38,0.08),transparent_60%)]" />

              <div className="flex gap-4 flex-1 min-h-0 relative z-10">
                <div
                  className={`shrink-0 h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                    f.isHero
                      ? "bg-gradient-to-br from-red-100 to-red-200 shadow-md shadow-red-200/50 group-hover:from-red-200 group-hover:to-red-300 group-hover:shadow-lg group-hover:shadow-red-300/60"
                      : "bg-red-50 group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-red-200"
                  }`}
                >
                  <Image
                    src={f.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    aria-hidden="true"
                  />
                </div>
                <div className="relative flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-1">
                    <h3
                      className={`text-base font-bold transition-colors duration-300 relative inline-block ${
                        f.isHero
                          ? "text-gray-900"
                          : "text-gray-900 group-hover:text-red-600"
                      }`}
                    >
                      {f.title}
                      {!f.isHero && (
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(220,38,38,0.6)]"></span>
                      )}
                    </h3>
                    {f.isHero && (
                      <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
                        Popüler
                      </span>
                    )}
                  </div>
                  {f.isHero && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-[0_0_6px_rgba(220,38,38,0.4)]"></div>
                  )}
                  <p
                    className={`mt-1 text-sm transition-colors duration-300 line-clamp-1 ${
                      f.isHero
                        ? "text-gray-700 font-medium"
                        : "text-gray-600 group-hover:text-gray-900"
                    }`}
                    title={f.desc}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto relative z-10">
                <span
                  className={`text-[10px] uppercase tracking-widest transition-colors duration-300 font-semibold ${
                    f.isHero
                      ? "text-red-600/70"
                      : "text-gray-400 group-hover:text-red-500"
                  }`}
                >
                  Hizmet
                </span>
                <button
                  type="button"
                  className={`text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 rounded px-2 py-1 ${
                    f.isHero
                      ? "text-red-700 hover:text-red-800 focus:ring-red-500 bg-red-50/50 hover:bg-red-50"
                      : "text-red-600 hover:text-red-700 focus:ring-red-500"
                  }`}
                  aria-label={`${f.title} hizmeti detayları`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(f);
                  }}
                >
                  Detay →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="container-px py-16 sm:py-20 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hızlı Teslimat */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-red-300 bg-gradient-to-br from-red-50 to-white p-8 text-center transition-all duration-300 hover:shadow-[0_10px_40px_rgba(220,38,38,0.2)] hover:-translate-y-2 hover:border-red-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-red-600">
                  Hızlı Teslimat
                </h3>
                <p className="text-sm text-gray-600">
                  Aynı gün fiyatlandırma ve hızlı üretim süreci
                </p>
              </div>
            </div>

            {/* Yüksek Kalite */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-red-300 bg-gradient-to-br from-red-50 to-white p-8 text-center transition-all duration-300 hover:shadow-[0_10px_40px_rgba(220,38,38,0.2)] hover:-translate-y-2 hover:border-red-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-red-600">
                  Yüksek Kalite
                </h3>
                <p className="text-sm text-gray-600">
                  En kaliteli malzemeler ve hassas üretim teknikleri
                </p>
              </div>
            </div>

            {/* Profesyonel Üretim */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-red-300 bg-gradient-to-br from-red-50 to-white p-8 text-center transition-all duration-300 hover:shadow-[0_10px_40px_rgba(220,38,38,0.2)] hover:-translate-y-2 hover:border-red-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-red-600">
                  Profesyonel Üretim
                </h3>
                <p className="text-sm text-gray-600">
                  Uzman ekip ve modern ekipmanlarla kusursuz sonuçlar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="teklif" className="container-px py-16 sm:py-20 bg-gray-50">
        <div className="rounded-3xl border-2 border-red-300 bg-gradient-to-br from-red-50 via-gray-50 to-red-50/50 p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-8">
            {/* Sol taraf - Metin, Avantajlar ve Buton */}
            <div className="flex-1 w-full lg:w-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                İhtiyacın olan çıktıyı hemen üretelim
              </h3>
              <p className="mt-3 text-base text-gray-600 max-w-xl font-medium">
                Dosyanı gönder, aynı gün fiyatlandırma ve hızlı teslimat.
              </p>

              {/* Avantajlar Listesi */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Hızlı Teslimat
                    </p>
                    <p className="text-xs text-gray-600">
                      Aynı gün fiyatlandırma
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-red-600"
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
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Yüksek Kalite
                    </p>
                    <p className="text-xs text-gray-600">Profesyonel üretim</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Uygun Fiyat
                    </p>
                    <p className="text-xs text-gray-600">
                      Rekabetçi fiyatlandırma
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      7/24 Destek
                    </p>
                    <p className="text-xs text-gray-600">Kesintisiz hizmet</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href="/teklif"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
                >
                  Teklif Al
                </a>
              </div>
            </div>
            {/* Sağ taraf - Lottie Animasyon (Küçük) */}
            {lottieData && (
              <div className="flex-shrink-0 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[300px]">
                <Lottie
                  animationData={lottieData}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-16 w-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Image
                    src={selectedService.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2
                    id="modal-title"
                    className="text-2xl sm:text-3xl font-bold text-white mb-2"
                  >
                    {selectedService.modalContent.title}
                  </h2>
                  <p className="text-red-100 text-sm sm:text-base">
                    {selectedService.modalContent.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="shrink-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Modal'ı kapat"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {selectedService.modalContent.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Özellikler */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></span>
                    Özellikler
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.modalContent.features.map(
                      (feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Kullanım Alanları */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></span>
                    Kullanım Alanları
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.modalContent.useCases.map(
                      (useCase, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <span>{useCase}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 bg-gray-50 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                Daha fazla bilgi için{" "}
                <a
                  href="/hizmetler"
                  className="text-red-600 hover:text-red-700 font-semibold underline"
                >
                  hizmetler sayfamızı
                </a>{" "}
                ziyaret edin
              </p>
              <div className="flex gap-3">
                <a
                  href="/teklif"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5 text-sm"
                >
                  Teklif Al
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold transition-all duration-300 text-sm"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
