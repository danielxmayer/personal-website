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

const SECTIONS = ['home', 'about', 'resume', 'projects', 'testimonials', 'contact']

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
      <Header activeSection={activeSection} />
      <main>
        {/* Photo background covers only Hero + About */}
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/daniel.jpg"
              alt="Daniel Mayer"
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-white/75" />
          </div>
          <Hero />
          <About />
        </div>
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}