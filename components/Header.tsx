'use client'

type Props = {
  activeSection: string
  setActiveSection: (section: string) => void
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Header({ activeSection, setActiveSection }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setActiveSection('home')}
          className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors"
        >
          Daniel Mayer
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveSection(link.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-indigo-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
        {/* Mobile menu – simple dropdown could be added later */}
        <div className="md:hidden flex items-center gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveSection(link.id)}
              className={`text-xs font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-indigo-600'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
