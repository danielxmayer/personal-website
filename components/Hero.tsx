import Image from 'next/image'

const stats = [
  { value: '10+', label: 'let praxe' },
  { value: '950K', label: 'předplatitelů Voyo' },
  { value: '3', label: 'mediální domy' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* Background photo */}
      <Image
        src="/daniel.JPG"
        alt="Daniel Mayer"
        fill
        priority
        className="object-cover object-[50%_20%] md:object-[25%_15%]"
        sizes="100vw"
      />

      {/* Layer 1: left-side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      {/* Layer 2: bottom gradient — silnější na mobilu pro čitelnost jména */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:from-black/80 md:via-black/25" />

      {/* Layer 3: subtle overall darkening */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 md:px-16 pt-8">
        <span className="text-xs text-white/40 tracking-[0.25em] uppercase font-light">
          danielmayer.cz
        </span>
        <span className="flex items-center gap-2 text-xs text-white/40 tracking-[0.15em] uppercase font-light">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 animate-pulse" />
          Dostupný pro spolupráci
        </span>
      </div>

      {/* Daniel — top-left */}
      <div className="absolute z-10 top-[10%] left-8 md:left-16">
        <span className="font-barlow font-black leading-[0.88] text-[clamp(4rem,12vw,10rem)] tracking-tight text-outline-white">
          Daniel
        </span>
      </div>

      {/* Main content — bottom, full width */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-12 px-8 md:px-16">

        {/* Mayer — right, 15% above bottom */}
        <div className="mb-[25vh] flex justify-end">
          <h1 className="font-barlow font-black leading-[0.88] text-[clamp(4rem,12vw,10rem)] tracking-tight">
            <span className="text-outline-white">Mayer</span>
          </h1>
        </div>

        {/* Bottom bar: stats + title + CV button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-white/20 pt-6">

          {/* Stats */}
          <div className="flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-white text-xl font-semibold leading-none mb-1">{s.value}</p>
                <p className="text-white/40 text-[0.6rem] tracking-[0.2em] uppercase font-light">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Title + CV */}
          <div className="flex flex-col items-start sm:items-end gap-3">
            <p className="text-white/45 text-xs tracking-[0.25em] uppercase font-light">
              Mediální strategie · Řízení investic · Brand building
            </p>
            <p className="text-[0.65rem] text-white/60 tracking-[0.3em] uppercase font-light">
              Marketing &amp; Media Manager
            </p>
            <a
              href="/Daniel_Mayer_CV_2026.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full border border-white/30 text-white/80 text-xs tracking-[0.15em] uppercase font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Stáhnout CV
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white/60"
            style={{ height: '40%', animation: 'scrollLine 1.8s ease-in-out infinite' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(350%);  opacity: 0; }
        }
      `}</style>

    </section>
  )
}
