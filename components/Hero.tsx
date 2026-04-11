'use client'

import Image from 'next/image'

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-white">
      {/* Background photo */}
      <Image
        src="/daniel.jpg"
        alt="Daniel Mayer"
        fill
        priority
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* Gradient overlay – keeps left side readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0.15) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 w-full" style={{ zIndex: 2 }}>
        <div className="border-t border-gray-200 pt-16 pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase mb-8 font-medium">
            Marketing &amp; Media Manager
          </p>

          {/* Name: Daniel left, Mayer right on next line */}
          <h1 className="font-black text-gray-900 leading-none tracking-tight mb-10 text-6xl md:text-8xl lg:text-9xl">
            <span className="block">Daniel</span>
            <span className="block text-right">Mayer</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Více než 10 let řízení mediálních strategií,
              rozpočtů a výkonové optimalizace kampaní
              v&nbsp;TV, digitálním prostoru a OOH.
            </p>
            <button
              onClick={() => scrollTo('contact')}
              className="shrink-0 px-6 py-3 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-full transition-colors"
            >
              Kontaktujte mě →
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 pb-16 flex gap-12 text-sm text-gray-400">
          <span>TV Nova</span>
          <span>Zonky</span>
          <span>MAFRA</span>
          <span>Médea</span>
        </div>
      </div>
    </section>
  )
}
