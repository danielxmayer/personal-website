'use client'

type Props = {
  activeSection: string
}

const navLinks = [
  { id: 'about', label: 'About me' },
  { id: 'resume', label: 'Track record' },
  { id: 'projects', label: 'Expertises' },
  { id: 'testimonials', label: 'Testimonials' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Header({ activeSection }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-900/90 text-white hover:bg-gray-700'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-4 py-2 rounded-full text-sm font-medium bg-gray-900/90 text-white hover:bg-gray-700 transition-colors"
        >
          Contact
        </button>
      </div>
    </header>
  )
}
