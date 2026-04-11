export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-8 w-full">
        <div className="border-t border-gray-200 pt-16 pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase mb-8 font-medium">
            Marketing &amp; Media Manager
          </p>

          {/* Name: Daniel left, Mayer right on next line */}
          <h1 className="font-black text-gray-900 leading-none tracking-tight mb-10 text-6xl md:text-8xl lg:text-9xl">
            <span className="block">Daniel</span>
            <span className="block text-right">Mayer</span>
          </h1>

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
