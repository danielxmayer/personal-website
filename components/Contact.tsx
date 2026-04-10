'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: integrate with a form service (e.g. Formspree, Resend) here
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Kontakt</h2>
        <div className="w-16 h-1 bg-indigo-600 mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              Máte zájem o spolupráci nebo chcete probrat mediální projekt? Neváhejte mě kontaktovat!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <span className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-lg">
                  ✉
                </span>
                <a href="mailto:daniel.mayer@seznam.cz" className="hover:text-indigo-600 transition-colors">
                  daniel.mayer@seznam.cz
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <span className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-lg">
                  🔗
                </span>
                <a
                  href="https://github.com/danielxmayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors"
                >
                  github.com/danielxmayer
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <span className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-lg">
                  💼
                </span>
                <a
                  href="https://www.linkedin.com/in/dama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors"
                >
                  linkedin.com/in/dama
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center">
              <p className="text-2xl font-bold mb-2">Zpráva odeslána! 🎉</p>
              <p className="text-green-700">Ozvu se vám co nejdříve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Jméno
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Vaše jméno"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-slate-800 bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-slate-800 bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Napište mi o vašem projektu nebo záměru..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition text-slate-800 bg-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors"
              >
                Odeslat zprávu
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
