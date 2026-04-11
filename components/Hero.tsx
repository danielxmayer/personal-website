'use client'

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="border-t border-gray-200 pt-16 pb-8">
          <p className="text-sm text-gray-400 tracking-widest uppercase mb-8 font-medium">
            Marketing &amp; Media Manager
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none tracking-tight mb-10">
            Daniel<br />Mayer
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
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
        <div className="border-t border-gray-100 pt-8 pb-16 flex gap-12 text-sm text-gray-400">
          <span>TV Nova</span>
          <span>Zonky</span>
          <span>MAFRA</span>
          <span>Médea</span>
        </div>
      </div>
    </section>
  )
}
