export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <p className="section-label text-xs text-gray-400 tracking-widest uppercase mb-4 font-medium">Kontakt</p>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 leading-tight mb-8">
              Pojďme<br />spolupracovat.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Máte zájem o spolupráci nebo chcete probrat mediální projekt? Neváhejte mě kontaktovat.
            </p>
          </div>

          <div className="md:col-span-7 space-y-3">
            <a
              href="tel:+420605349888"
              aria-label="Zavolat na +420 605 349 888"
              className="group flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-gray-300 transition-colors"
            >
              <span aria-hidden="true" className="w-10 h-10 flex items-center justify-center bg-stone-50 border border-gray-200 rounded-full text-sm">✆</span>
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">+420 605 349 888</span>
            </a>
            <a
              href="mailto:daniel.mayer@seznam.cz"
              aria-label="Napsat e-mail na daniel.mayer@seznam.cz"
              className="group flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-gray-300 transition-colors"
            >
              <span aria-hidden="true" className="w-10 h-10 flex items-center justify-center bg-stone-50 border border-gray-200 rounded-full text-sm">✉</span>
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">daniel.mayer@seznam.cz</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dama"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profil Daniela Mayera (otevře se v novém okně)"
              className="group flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-gray-300 transition-colors"
            >
              <span aria-hidden="true" className="w-10 h-10 flex items-center justify-center bg-stone-50 border border-gray-200 rounded-full text-sm">💼</span>
              <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">linkedin.com/in/dama</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
