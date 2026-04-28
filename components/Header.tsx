'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  activeSection: string
}

const navLinks = [
  { id: 'about', label: 'O mně' },
  { id: 'resume', label: 'Zkušenosti' },
  { id: 'projects', label: 'Projekty' },
  { id: 'testimonials', label: 'Reference' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Header({ activeSection }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (id: string) => {
    setIsOpen(false)
    if (isHome) {
      scrollToSection(id)
    }
  }

  const isBlog = pathname.startsWith('/blog')

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/40">
        <div className="max-w-5xl mx-auto px-8 py-3 flex items-center justify-between">

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => (
              isHome ? (
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
              ) : (
                <Link
                  key={link.id}
                  href={`/#${link.id}`}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                >
                  {link.label}
                </Link>
              )
            ))}

            <Link
              href="/blog"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                isBlog
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Desktop Kontakt button */}
          <div className="hidden md:flex items-center gap-4">
            {isHome ? (
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-1.5 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-all shadow-sm"
              >
                Kontakt
              </button>
            ) : (
              <Link
                href="/#contact"
                className="px-5 py-1.5 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-all shadow-sm"
              >
                Kontakt
              </Link>
            )}
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Otevřít menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex flex-col"
          style={{ animation: 'menuFadeIn 0.2s ease forwards' }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
        >
          <div className="flex justify-end px-8 py-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Zavřít menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col items-start px-10 pt-8 gap-2 flex-1">
            {navLinks.map((link, i) => (
              isHome ? (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="py-4 text-3xl font-medium text-gray-900 hover:text-gray-500 transition-colors w-full text-left"
                  style={{ animation: `menuSlideUp 0.3s ease forwards`, animationDelay: `${i * 60}ms`, opacity: 0 }}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="py-4 text-3xl font-medium text-gray-900 hover:text-gray-500 transition-colors w-full"
                  style={{ animation: `menuSlideUp 0.3s ease forwards`, animationDelay: `${i * 60}ms`, opacity: 0 }}
                >
                  {link.label}
                </Link>
              )
            ))}

            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`py-4 text-3xl font-medium transition-colors w-full ${
                isBlog ? 'text-gray-500' : 'text-gray-900 hover:text-gray-500'
              }`}
              style={{ animation: `menuSlideUp 0.3s ease forwards`, animationDelay: `${navLinks.length * 60}ms`, opacity: 0 }}
            >
              Blog
            </Link>

            {isHome ? (
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-6 py-4 px-8 rounded-full text-xl font-medium bg-gray-900 text-white hover:bg-gray-700 transition-all"
                style={{ animation: `menuSlideUp 0.3s ease forwards`, animationDelay: `${(navLinks.length + 1) * 60}ms`, opacity: 0 }}
              >
                Kontakt
              </button>
            ) : (
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 py-4 px-8 rounded-full text-xl font-medium bg-gray-900 text-white hover:bg-gray-700 transition-all"
                style={{ animation: `menuSlideUp 0.3s ease forwards`, animationDelay: `${(navLinks.length + 1) * 60}ms`, opacity: 0 }}
              >
                Kontakt
              </Link>
            )}
          </nav>
        </div>
      )}
    </>
  )
}
