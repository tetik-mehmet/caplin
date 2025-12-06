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
                </div>
              </div>

              {/* Alt Bilgi Bandı */}
              <div className="relative border-t-2 border-gray-300 bg-gradient-to-r from-gray-100 to-red-50/40 px-8 py-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
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
              title: "3D Yazıcı Eğitimi",
              desc: "Profesyonel 3D baskı teknolojileri eğitimi",
              icon: "/gifler/teacher.gif",
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
