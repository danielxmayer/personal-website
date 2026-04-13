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
    <section id="contact" className="py-24 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="section-label text-xs text-gray-400 tracking-widest uppercase mb-4 font-medium">Kontakt</p>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 leading-tight mb-8">
              Pojďme<br />spolupracovat.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Máte zájem o spolupráci nebo chcete probrat mediální projekt? Neváhejte mě kontaktovat.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+420000000000"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full text-xs">✆</span>
                +420 000 000 000
              </a>
              <a
                href="mailto:daniel.mayer@seznam.cz"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full text-xs">✉</span>
                daniel.mayer@seznam.cz
              </a>
              <a
                href="https://www.linkedin.com/in/dama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full text-xs">💼</span>
                linkedin.com/in/dama
              </a>
            </div>
          </div>

          <div className="md:col-span-8">
            {submitted ? (
              <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center">
                <p className="text-xl font-bold text-gray-900 mb-2">Zpráva odeslána!</p>
                <p className="text-gray-500">Ozvu se vám co nejdříve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-widest">
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-gray-900 bg-stone-50/50 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-widest">
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-gray-900 bg-stone-50/50 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-widest">
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition text-gray-900 bg-stone-50/50 resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-full transition-all shadow-sm"
                >
                  Odeslat zprávu →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
