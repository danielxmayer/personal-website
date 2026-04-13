'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'resume' && <Resume />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}