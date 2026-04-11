'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const SECTIONS = ['home', 'about', 'resume', 'projects', 'contact']

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="min-h-screen text-gray-900">
      {/* Fixed full-page background photo */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/daniel.jpg"
          alt="Daniel Mayer"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle white overlay for readability */}
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}