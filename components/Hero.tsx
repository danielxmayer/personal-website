'use client'

import Image from 'next/image'

type Section = 'home' | 'about' | 'resume' | 'projects' | 'contact'

interface HeroProps {
  setActiveSection: (section: Section) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-16 w-[500px] h-[500px] bg-violet-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-16 w-[400px] h-[400px] bg-cyan-700/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16 w-full">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            Dostupný pro projekty
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 mb-4 leading-tight tracking-tight">
            Ahoj, jsem
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Daniel.
          </h1>
          <p className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed">
            Vývojář, tvůrce a nadšenec pro technologie.
            Rád stavím věci, které mají smysl.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => setActiveSection('projects')}
              className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-violet-500/30"
            >
              Moje projekty
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="px-8 py-3.5 border border-zinc-700 text-zinc-300 rounded-xl font-semibold hover:border-violet-500/50 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all duration-200"
            >
              Kontaktuj mě
            </button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 blur-3xl opacity-25 scale-110" />
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden ring-2 ring-violet-500/40 shadow-2xl shadow-violet-900/50">
              <Image
                src="/daniel2.JPG"
                alt="Daniel"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-full text-xs font-medium text-zinc-300 shadow-xl">
              💻 open to work
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
