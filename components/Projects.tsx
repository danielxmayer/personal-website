const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce application with product catalog, cart, and checkout. Built with Next.js, TypeScript, and PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/danielxmayer',
    demo: '#',
  },
  {
    title: 'Task Manager App',
    description:
      'A productivity app for managing tasks and projects. Features drag-and-drop boards, team collaboration, and real-time updates.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/danielxmayer',
    demo: '#',
  },
  {
    title: 'Personal Finance Tracker',
    description:
      'A web app for tracking income, expenses, and budgets. Includes charts, categories, and CSV export.',
    tags: ['Next.js', 'Chart.js', 'Prisma', 'SQLite'],
    github: 'https://github.com/danielxmayer',
    demo: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Real-time weather dashboard with 7-day forecast, geolocation, and saved locations using OpenWeather API.',
    tags: ['React', 'TypeScript', 'REST API', 'CSS Modules'],
    github: 'https://github.com/danielxmayer',
    demo: '#',
  },
  {
    title: 'Blog CMS',
    description:
      'A headless CMS for writing and publishing blog posts. Markdown editor, tag system, and RSS feed support.',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/danielxmayer',
    demo: '#',
  },
  {
    title: 'This Website',
    description:
      'My personal portfolio website showcasing my work and skills. Built with Next.js 14 and Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/danielxmayer/personal-website',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Projects</h2>
        <div className="w-16 h-1 bg-indigo-600 mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col hover:shadow-md hover:border-indigo-200 transition-all"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 text-sm font-medium rounded-lg transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
