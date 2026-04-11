'use client'

type Props = {
  activeSection: string
}

const navLinks = [
  { id: 'about', label: 'O mně' },
  { id: 'resume', label: 'Zkušenosti' },
  { id: 'projects', label: 'Expertízy' },
  { id: 'testimonials', label: 'Reference' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Header({ activeSection }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/40">
      <div className="max-w-5xl mx-auto px-8 py-3 flex items-center justify-between">
        <nav className="flex items-center gap-1.5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-5 py-1.5 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-all shadow-sm"
        >
          Kontakt
        </button>
      </div>
    </header>
  )
}
