import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* Full-width background photo */}
      <Image
        src="/daniel3.JPG"
        alt="Daniel Mayer"
        fill
        priority
        className="object-cover object-[50%_18%]"
        sizes="100vw"
      />

      {/* Overlay: subtle bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Text content — bottom right, over the photo */}
      <div className="relative z-10 flex flex-col justify-end items-end min-h-screen pb-16 px-8 md:px-16">
        <div className="border-t border-white/30 pt-10 text-right">
          <h1 className="font-sans font-black leading-none text-[clamp(3.5rem,9vw,7rem)] mb-6 tracking-tight">
            <span className="block text-outline-white">Daniel</span>
            <span className="block text-outline-white">Mayer</span>
          </h1>

          <p className="text-xs text-white/70 tracking-[0.2em] uppercase mb-10">
            Marketing &amp; Media Manager
          </p>

          <div className="flex flex-wrap justify-end gap-6 text-sm text-white/60">
            <span>TV Nova</span>
            <span>Zonky</span>
            <span>MAFRA</span>
            <span>Médea</span>
          </div>
        </div>
      </div>

    </section>
  )
}
