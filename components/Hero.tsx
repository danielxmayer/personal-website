export default function Hero() {
  return (
    <section id="home" className="bg-[#f9f8f6] pt-16 pb-12 px-8 md:px-16 overflow-hidden">

      {/* Subtitle */}
      <p className="text-xs text-gray-400 tracking-[0.2em] uppercase mb-6 font-medium">
        Marketing &amp; Media Manager
      </p>

      {/* Staggered name */}
      <h1 className="font-barlow font-black leading-none tracking-tight select-none">
        <span className="block text-[clamp(5rem,16vw,13rem)] text-[#111827]">Daniel</span>
        <span className="block text-[clamp(5rem,16vw,13rem)] text-[#111827] text-right">Mayer</span>
      </h1>

      {/* Description + CTA */}
      <div className="mt-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
          Více než 10 let řízení mediálních strategií, rozpočtů a výkonové optimalizace kampaní v TV, digitálním prostoru a OOH.
        </p>
        <div className="md:ml-auto shrink-0">
          <a
            href="#contact"
            className="inline-block bg-[#111827] text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-gray-700 transition-colors"
          >
            Kontaktujte mě →
          </a>
        </div>
      </div>

      {/* Divider + companies */}
      <div className="mt-10 border-t border-gray-200 pt-6 flex flex-wrap gap-8 text-sm text-gray-400">
        <span>TV Nova</span>
        <span>Zonky</span>
        <span>MAFRA</span>
        <span>Médea</span>
      </div>

    </section>
  )
}
