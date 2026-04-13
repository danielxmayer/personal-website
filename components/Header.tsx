'use client'

type Section = 'home' | 'about' | 'resume' | 'projects' | 'contact'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: Section) => void
}

const navLinks: { label: string; id: Section }[] = [
  { label: 'Domů', id: 'home' },
  { label: 'O mně', id: 'about' },
  { label: 'Resume', id: 'resume' },
  { label: 'Projekty', id: 'projects' },
  { label: 'Kontakt', id: 'contact' },
]

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/75 backdrop-blur-xl border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setActiveSection('home')}
          className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Daniel
        </button>
        <nav className="flex gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveSection(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-violet-300 bg-violet-500/15 border border-violet-500/25'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
