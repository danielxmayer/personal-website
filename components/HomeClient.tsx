'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import type { PostMeta } from '@/lib/posts'
import Link from 'next/link'

const SECTIONS = ['home', 'about', 'resume', 'projects', 'contact']

type Props = {
  recentPosts: PostMeta[]
}

export default function HomeClient({ recentPosts }: Props) {
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
        <Hero />
        <About />
        <Resume />
        <Projects />

        {/* Sekce: Píšu o médiích */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <div className="mb-10">
              <span className="section-label text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                Blog
              </span>
              <h2 className="font-barlow text-5xl font-black uppercase leading-none">
                Píšu o médiích
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-7 bg-[#f9f8f6] rounded-xl border border-gray-200 hover:border-gray-400 transition-all"
                >
                  <time className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-3">
                    {new Date(post.date).toLocaleDateString('cs-CZ', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-500 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{post.perex}</p>
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors"
            >
              Všechny posty →
            </Link>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}
