export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-8 w-full">
        <div className="border-t border-gray-200 pt-16 pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase mb-8 font-medium">
            Marketing &amp; Media Manager
          </p>

          {/* === FONT PREVIEW – pick one and replace the <h1> below === */}
          <div className="space-y-6 mb-10">
            {/* 1 – Bebas Neue: condensed, editorial, high-impact */}
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-widest mr-3">1 – Bebas Neue</span>
              <p className="font-bebas text-gray-900 leading-none text-6xl md:text-8xl lg:text-9xl">
                <span className="block">Daniel</span>
                <span className="block text-right text-outline">Mayer</span>
              </p>
            </div>
            {/* 2 – Playfair Display: elegant serif, premium, editorial */}
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-widest mr-3">2 – Playfair Display</span>
              <p className="font-playfair font-black text-gray-900 leading-none text-6xl md:text-8xl lg:text-9xl">
                <span className="block">Daniel</span>
                <span className="block text-right text-outline">Mayer</span>
              </p>
            </div>
            {/* 3 – Space Grotesk: modern geometric, tech-forward */}
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-widest mr-3">3 – Space Grotesk</span>
              <p className="font-space font-bold text-gray-900 leading-none tracking-tighter text-6xl md:text-8xl lg:text-9xl">
                <span className="block">Daniel</span>
                <span className="block text-right text-outline">Mayer</span>
              </p>
            </div>
            {/* 4 – Cormorant Garamond: ultra-thin luxury serif */}
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-widest mr-3">4 – Cormorant Garamond</span>
              <p className="font-cormorant font-bold text-gray-900 leading-none tracking-tight text-6xl md:text-8xl lg:text-9xl">
                <span className="block">Daniel</span>
                <span className="block text-right text-outline">Mayer</span>
              </p>
            </div>
            {/* 5 – DM Serif Display: sophisticated, warm serif */}
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-widest mr-3">5 – DM Serif Display</span>
              <p className="font-dm-serif text-gray-900 leading-none tracking-tight text-6xl md:text-8xl lg:text-9xl">
                <span className="block">Daniel</span>
                <span className="block text-right text-outline">Mayer</span>
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Více než 10 let řízení mediálních strategií,
            rozpočtů a výkonové optimalizace kampaní
            v&nbsp;TV, digitálním prostoru a OOH.
          </p>
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
