const projects = [
  {
    title: 'Osobní web',
    description: 'Tato osobní stránka vytvořená v Next.js a Tailwind CSS s moderním dark designem.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    link: '#',
    featured: true,
  },
  {
    title: 'Projekt 2',
    description: 'Popis druhého projektu. Co řeší, jaké technologie používá a co z toho vzniklo.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    featured: false,
  },
  {
    title: 'Projekt 3',
    description: 'Popis třetího projektu. Sem napiš co tě na projektu baví nebo čím je zajímavý.',
    tags: ['Python', 'FastAPI', 'Docker'],
    link: '#',
    featured: false,
  },
  {
    title: 'Projekt 4',
    description: 'Další projekt, který ukazuje tvoje dovednosti a přístup k řešení problémů.',
    tags: ['TypeScript', 'REST API'],
    link: '#',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="mb-14">
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">Co jsem postavil</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">Projekty</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative p-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl hover:border-violet-500/40 hover:bg-zinc-900 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/0 to-cyan-600/0 group-hover:from-violet-600/5 group-hover:to-cyan-600/5 transition-all duration-300" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="text-zinc-600 group-hover:text-violet-400 transition-colors font-mono text-sm font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {project.featured && (
                      <span className="px-2 py-0.5 bg-violet-500/15 border border-violet-500/25 text-violet-400 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <a
                    href={project.link}
                    className="text-zinc-600 hover:text-violet-400 transition-colors"
                    aria-label="Otevřít projekt"
                  >
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-zinc-800 text-zinc-400 rounded-md text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
