"use client";
import Image from "next/image";

export default function Home() {
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
              href="#hizmet"
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
            <span className="inline-block px-5 py-2.5 rounded-full bg-red-50 border-2 border-red-200 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
              Referans Projelerimiz
            </span>
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
                  {/* Müşteri Logosu */}
                  <div className="relative w-48 h-48 mx-auto lg:mx-0 bg-white rounded-2xl p-6 shadow-xl ring-2 ring-red-200 transition-all duration-300 hover:ring-red-400 hover:scale-105 hover:shadow-2xl">
                    <Image
                      src="/referanslar/bogazici.avif"
                      alt="Boğaziçi Savunma"
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Proje Detayları */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Radar Sistemi Prototipi
                      </h3>
                      <p className="text-red-600 font-bold text-lg">
                        Boğaziçi Savunma Sanayi
                      </p>
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
                </div>

                {/* Sağ Taraf - Proje Görselleri */}
                <div className="flex flex-col gap-6 items-center justify-center">
                  {/* İlk Görsel */}
                  <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl ring-2 ring-gray-300 transition-all duration-500 hover:ring-red-400 hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image
                        src="/proje1.png"
                        alt="Radar Sistemi"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Dekoratif Köşe Elemanları */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-red-600" />
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-red-600" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-red-600" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-red-600" />
                  </div>

                  {/* İkinci Görsel */}
                  <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl ring-2 ring-gray-300 transition-all duration-500 hover:ring-red-400 hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image
                        src="/prestij.png"
                        alt="Radar Sistemi Detay"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Dekoratif Köşe Elemanları */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-red-600" />
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-red-600" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-red-600" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-red-600" />
                  </div>
                </div>
              </div>

              {/* Alt Bilgi Bandı */}
              <div className="relative border-t-2 border-gray-300 bg-gradient-to-r from-gray-100 to-red-50/40 px-8 py-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">24</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
                        Saat Teslim
                      </div>
                    </div>
                    <div className="h-8 w-px bg-red-300" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">
                        %100
                      </div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
                        Hassasiyet
                      </div>
                    </div>
                    <div className="h-8 w-px bg-red-300" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">A+</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
                        Kalite
                      </div>
                    </div>
                  </div>

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
          {[
            {
              title: "3D Baskı (FDM)",
              desc: "Mühendislik filamentleri ile fonksiyonel parçalar",
              icon: "/gifler/3d-printer.gif",
            },
            {
              title: "Reçine Baskı",
              desc: "Yüksek detaylı prototipler ve minyatürler.",
              icon: "/gifler/spray.gif",
            },
            {
              title: "Maket Üretimi",
              desc: "Mimari ve endüstriyel maket imalatı.",
              icon: "/gifler/maket.gif",
            },
            {
              title: "Hızlı Teslim",
              desc: "Hızlı teslimat garantisi",
              icon: "/gifler/fast.gif",
            },
            {
              title: "Tasarım Desteği",
              desc: "Baskıya uygun revizyon ve danışmanlık.",
              icon: "/gifler/tasarim.gif",
            },
            {
              title: "Küçük Seri Üretim",
              desc: "Ön seri ve pazarlama numuneleri.",
              icon: "/gifler/assembly-line.gif",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-300 bg-gray-50 p-6 flex gap-4 transition-all duration-300 motion-safe:transform-gpu shadow-md hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] hover:-translate-y-1 hover:border-red-400"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:content-[''] before:absolute before:-inset-20 before:bg-[radial-gradient(40%_30%_at_20%_0%,rgba(220,38,38,0.08),transparent_60%)]" />
              <div className="shrink-0 h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red-100">
                <Image
                  src={f.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative">
                <h3 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
                  {f.desc}
                </p>
              </div>
              <span className="absolute right-4 top-4 text-[10px] uppercase tracking-widest text-gray-400 transition-colors duration-300 group-hover:text-red-500 font-semibold">
                Hizmet
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HİZMET KAPSAMI */}
      <section
        id="hizmet"
        className="container-px py-16 sm:py-20 bg-gradient-to-b from-gray-100 to-gray-50"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
          Hizmet{" "}
          <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            Kapsamı
          </span>
        </h2>

        {/* 3D Yazıcı Eğitimi Kartı */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-gray-300 bg-gray-50 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_80px_rgba(220,38,38,0.15)] hover:border-red-400">
            {/* Arka Plan Efekti */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_70%)]" />
            </div>

            <div className="relative p-8 sm:p-12">
              {/* Başlık ve İkon */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <div className="shrink-0 h-20 w-20 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  <Image
                    src="/gifler/3d-printer.gif"
                    alt="3D Yazıcı Eğitimi"
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-red-600">
                    3D Yazıcı Eğitimi
                  </h3>
                  <p className="text-lg text-gray-600">
                    Profesyonel 3D baskı teknolojilerini öğrenin
                  </p>
                </div>
              </div>

              {/* Eğitim İçeriği */}
              <div className="space-y-6">
                <p className="text-base text-gray-700 leading-relaxed">
                  3D yazıcı teknolojilerini A&apos;dan Z&apos;ye öğrenmek
                  isteyenler için kapsamlı eğitim programı. Hem teorik bilgi hem
                  de pratik uygulama içeren eğitimimizle, kendi projelerinizi
                  hayata geçirebilecek seviyeye ulaşın.
                </p>

                {/* Eğitim Detayları */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-2 h-2 rounded-full bg-red-600 mt-2" />
                    <div>
                      <div className="font-bold text-gray-900">
                        FDM Teknolojisi
                      </div>
                      <div className="text-sm text-gray-600">
                        Temel ve ileri seviye baskı teknikleri
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-2 h-2 rounded-full bg-red-600 mt-2" />
                    <div>
                      <div className="font-bold text-gray-900">
                        Reçine Baskı
                      </div>
                      <div className="text-sm text-gray-600">
                        Yüksek detay ve hassas üretim
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-2 h-2 rounded-full bg-red-600 mt-2" />
                    <div>
                      <div className="font-bold text-gray-900">
                        Model Hazırlama
                      </div>
                      <div className="text-sm text-gray-600">
                        Slicing ve baskı ayarları optimizasyonu
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-2 h-2 rounded-full bg-red-600 mt-2" />
                    <div>
                      <div className="font-bold text-gray-900">
                        Pratik Uygulamalar
                      </div>
                      <div className="text-sm text-gray-600">
                        Gerçek projeler üzerinde çalışma
                      </div>
                    </div>
                  </div>
                </div>

                {/* Özellikler Badge'leri */}
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-4 py-2 rounded-full bg-red-50 border-2 border-red-300 text-red-700 text-sm font-bold">
                    👨‍🏫 Uzman Eğitmenler
                  </span>
                  <span className="px-4 py-2 rounded-full bg-red-50 border-2 border-red-300 text-red-700 text-sm font-bold">
                    📜 Sertifika
                  </span>
                  <span className="px-4 py-2 rounded-full bg-red-50 border-2 border-red-300 text-red-700 text-sm font-bold">
                    🛠️ Uygulamalı Eğitim
                  </span>
                </div>
              </div>

              {/* Alt Bilgi ve CTA */}
              <div className="mt-8 pt-8 border-t-2 border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-sm text-gray-600 mb-1">
                    Eğitim Süresi
                  </div>
                  <div className="text-2xl font-bold text-red-600">16 Saat</div>
                </div>
                <a
                  href="/teklif"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
                >
                  Detaylı Bilgi Al
                </a>
              </div>
            </div>

            {/* Glow Efekti */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-100/0 via-red-100/20 to-red-100/0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="teklif" className="container-px py-16 sm:py-20 bg-gray-50">
        <div className="rounded-3xl border-2 border-red-300 bg-gradient-to-br from-red-50 via-gray-50 to-red-50/50 p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                İhtiyacın olan çıktıyı hemen üretelim
              </h3>
              <p className="mt-3 text-base text-gray-600 max-w-xl font-medium">
                Dosyanı gönder, aynı gün fiyatlandırma ve hızlı teslimat.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="/teklif"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
              >
                Teklif Al
              </a>
              <a
                href="#hizmet"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl border-2 border-gray-900 text-gray-900 font-semibold bg-white hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Hizmet Kapsamı
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
