import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* Background photo */}
      <Image
        src="/daniel3.JPG"
        alt="Daniel Mayer"
        fill
        priority
        className="object-cover object-[50%_15%]"
        sizes="100vw"
      />

      {/* Layer 1: left-side vignette for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />

      {/* Layer 2: bottom-to-top gradient for text block */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Layer 3: subtle overall darkening */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Top bar: year + availability */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 md:px-16 pt-8">
        <span className="text-xs text-white/40 tracking-[0.25em] uppercase font-light">
          danielmayer.cz
        </span>
        <span className="flex items-center gap-2 text-xs text-white/40 tracking-[0.15em] uppercase font-light">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 animate-pulse" />
          Dostupný pro spolupráci
        </span>
      </div>

      {/* Main text — bottom, full width */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-16 px-8 md:px-16">

        {/* Name: Daniel left, Mayer right */}
        <h1 className="font-barlow font-black leading-[0.88] text-[clamp(4rem,12vw,10rem)] tracking-tight flex justify-between items-end mb-5">
          <span className="text-outline-white">Daniel</span>
          <span className="text-outline-white">Mayer</span>
        </h1>

        {/* Divider + meta row */}
        <div className="flex items-center justify-between border-t border-white/20 pt-5">
          <p className="text-[0.65rem] text-white/60 tracking-[0.3em] uppercase font-light">
            Marketing &amp; Media Manager
          </p>
          <div className="flex gap-x-4 text-[0.65rem] text-white/35 tracking-[0.15em] uppercase font-light">
            <span>TV Nova</span>
            <span className="text-white/15">·</span>
            <span>Zonky</span>
            <span className="text-white/15">·</span>
            <span>MAFRA</span>
            <span className="text-white/15">·</span>
            <span>Médea</span>
          </div>
        </div>

      </div>

      {/* Scroll indicator — bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[0.6rem] text-white/30 tracking-[0.3em] uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white/60"
            style={{
              height: '40%',
              animation: 'scrollLine 1.8s ease-in-out infinite',
            }}
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
