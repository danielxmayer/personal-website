export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {year} Daniel Mayer</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/dama"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:daniel.mayer@seznam.cz"
            className="hover:text-gray-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
