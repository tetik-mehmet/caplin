import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* HERO */}
      <section className="container-px relative isolate flex flex-col items-center justify-center text-center py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full">
            <Image
              src="/deneme.avif"
              alt="HERO arkaplanı"
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 30%, rgba(225,6,0,0.25), transparent 60%)",
            }}
          />
          {/* Logo sol üst köşe */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-10">
            <Image
              src="/logo.png"
              alt="Caplin Logo"
              width={180}
              height={180}
              className="w-20 sm:w-28 md:w-36 lg:w-40 h-auto rounded-md ring-1 ring-accent/30 shadow-[0_0_18px_rgba(225,6,0,0.35)] hover:shadow-[0_0_26px_rgba(225,6,0,0.5)] transition-shadow"
              priority
            />
          </div>
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
          3D Baskı, Prototip ve Maket Üretimi
          <span className="block text-accent">
            Hızlı ve Profesyonel Çıktılar
          </span>
        </h1>
        <p className="mt-5 max-w-3xl">
          <span className="inline-block px-3 py-2 rounded-md text-sm sm:text-base text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] bg-black/35 backdrop-blur-[1px]">
            Tek parça numuneden küçük seri üretime kadar; FDM ve reçine
            teknolojileriyle yüksek kalite ve hızlı teslimat.
          </span>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#teklif"
            className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-accent hover:bg-accent-dark text-white transition-colors text-sm sm:text-base"
          >
            Teklif Al
          </a>
          <a
            href="#hizmet"
            className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-white/50 text-white/95 bg-black/35 backdrop-blur-[2px] hover:bg-black/50 hover:border-white transition-colors shadow-sm text-sm sm:text-base"
          >
            Hizmet Kapsamı
          </a>
        </div>
        {/* Demo görsel alanı kaldırıldı */}
      </section>

      {/* HİZMETLER */}
      <section id="ozellikler" className="container-px py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Öne Çıkan <span className="text-accent">Hizmetler</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "3D Baskı (FDM)",
              desc: "PLA, PETG, ABS ile fonksiyonel parçalar.",
              icon: "/gifler/3d-printer.gif",
            },
            {
              title: "Reçine Baskı",
              desc: "Yüksek detaylı prototipler ve minyatürler.",
              icon: "/globe.svg",
            },
            {
              title: "Maket Üretimi",
              desc: "Mimari ve endüstriyel maket imalatı.",
              icon: "/gifler/maket.gif",
            },
            {
              title: "Hızlı Teslim",
              desc: "24–72 saat içinde üretim ve gönderim.",
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
              icon: "/window.svg",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 flex gap-4 transition-all duration-300 motion-safe:transform-gpu shadow-sm hover:shadow-[0_8px_30px_rgba(225,6,0,0.15)] hover:-translate-y-1 ring-1 ring-transparent hover:ring-accent/40"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:content-[''] before:absolute before:-inset-20 before:bg-[radial-gradient(40%_30%_at_20%_0%,rgba(225,6,0,0.15),transparent_60%)]" />
              <div className="shrink-0 h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src={f.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
              <div className="relative">
                <h3 className="text-base font-medium transition-colors duration-300 group-hover:text-accent">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-muted transition-colors duration-300 group-hover:text-white/80">
                  {f.desc}
                </p>
              </div>
              <span className="absolute right-4 top-4 text-[10px] uppercase tracking-widest text-muted/60 transition-colors duration-300 group-hover:text-accent/80">
                Hizmet
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HİZMET KAPSAMI */}
      <section id="hizmet" className="container-px py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Hizmet <span className="text-accent">Kapsamı</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Maks Boyut", "220 × 220 × 250 mm (tek parça)"],
            ["Çözünürlük", "0.05–0.3 mm (FDM), 0.025 mm (reçine)"],
            ["Malzemeler", "PLA, PETG, ABS, Resin"],
            ["Renkler", "Siyah, beyaz, kırmızı ve talebe göre"],
            ["Teslim Süresi", "24–72 saat"],
            ["Son İşlem", "Zımpara, astar, boya (opsiyonel)"],
          ].map(([k, v], i) => (
            <div
              key={i}
              className="rounded-xl border border-border p-5 bg-card"
            >
              <div className="text-xs uppercase tracking-widest text-muted">
                {k}
              </div>
              <div className="mt-1 text-lg">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="teklif" className="container-px py-16 sm:py-20">
        <div className="rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/15 via-card to-transparent p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">
                İhtiyacın olan çıktıyı hemen üretelim
              </h3>
              <p className="mt-2 text-sm text-muted max-w-xl">
                Dosyanı gönder, aynı gün fiyatlandırma ve hızlı teslimat.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-accent hover:bg-accent-dark text-white transition-colors"
              >
                Teklif Al
              </a>
              <a
                href="#hizmet"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
              >
                Hizmet Kapsamı
              </a>
            </div>
          </div>
        </div>
        <footer className="mt-10 py-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} Caplin. Tüm hakları saklıdır.
        </footer>
      </section>
    </div>
  );
}
