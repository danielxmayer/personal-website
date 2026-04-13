'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Sem přidej logiku pro odeslání (např. EmailJS, Resend, apod.)
    setSent(true)
  }

  const inputClass = "w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all duration-200 text-sm"

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="mb-14">
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">Napiš mi</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">Kontakt</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Máš projekt, nápad nebo jen chceš pozdravit?
              Napiš mi — rád odpovím.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:daniel@example.com"
                className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-violet-500/40 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Email</p>
                  <p className="text-zinc-200 font-medium text-sm group-hover:text-violet-300 transition-colors">daniel@example.com</p>
                </div>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-violet-500/40 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-4 h-4 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">GitHub</p>
                  <p className="text-zinc-200 font-medium text-sm group-hover:text-violet-300 transition-colors">github.com/daniel</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/dama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-violet-500/40 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">LinkedIn</p>
                  <p className="text-zinc-200 font-medium text-sm group-hover:text-violet-300 transition-colors">linkedin.com/in/dama</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">Zpráva odeslána!</h3>
                  <p className="text-zinc-500">Ozvu se co nejdříve.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Jméno</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Tvoje jméno"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="tvuj@email.cz"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Zpráva</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="Napiš mi..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-violet-500/20 text-sm"
                >
                  Odeslat zprávu
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
