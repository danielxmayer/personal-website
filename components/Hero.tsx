'use client'

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 pt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Daniel Mayer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Marketingový a mediální manažer s&nbsp;více než deseti lety praxe v&nbsp;řízení
          mediálních strategií, rozpočtů a&nbsp;výkonové optimalizace kampaní.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 border border-slate-500 hover:border-indigo-400 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
          >
            Kontaktujte mě
          </button>
        </div>
      </div>
    </section>
  )
}
