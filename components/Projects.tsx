const projects = [
  {
    title: 'Voyo – Předplatitelský růst',
    company: 'TV Nova',
    period: '2021 – 2026',
    description:
      'Řízení mediální a marketingové strategie streamovací platformy Voyo. Nárůst z 100 tisíc na 950 tisíc předplatitelů díky integrovaným kampaním napříč TV, digitálním prostorem a OOH.',
    tags: ['Streaming', 'Performance', 'Brand Building'],
  },
  {
    title: 'Oneplay – Uvedení na trh',
    company: 'TV Nova',
    period: '2022',
    description:
      'Strategické mediální plánování pro launch nové herní platformy. Rychlý nárůst spontánní znalosti značky na úroveň původního Voyo díky přesně cíleným kampaním.',
    tags: ['Launch', 'Media Planning', 'Awareness'],
  },
  {
    title: 'Rebranding Nova',
    company: 'TV Nova',
    period: '2023',
    description:
      'Výběr kreativní agentury a řízení brandové transformace. Nová vizuální identita stanice Nova – posílení rozpoznatelnosti a modernizace vnímání značky.',
    tags: ['Branding', 'Agency Management', 'TV'],
  },
  {
    title: 'ATL mediální kampaně',
    company: 'Zonky',
    period: '2017 – 2021',
    description:
      'Tvorba a řízení mediálních plánů pro fintech brand napříč TV, tiskem, rozhlasem a online. Výkonová optimalizace kampaní a odpovědnost za ATL marketingový rozpočet.',
    tags: ['ATL', 'Fintech', 'Multi-channel'],
  },
  {
    title: 'Media Planning & Evaluation',
    company: 'MAFRA',
    period: '2014 – 2017',
    description:
      'Kompletní příprava mediaplánů pro značky skupiny MAFRA. Vyhodnocování výsledků kampaní, kontrola garancí a plnění mediálního rozpočtu.',
    tags: ['Media Planning', 'Publishing', 'Reporting'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-16">
          <div className="md:col-span-4">
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4 font-medium">Reference</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Vybrané<br />projekty</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-500 text-lg leading-relaxed">
              Výběr klíčových kampaní a projektů z mé kariéry v oblasti marketingu a médií.
            </p>
          </div>
        </div>

        <div className="space-y-px border border-gray-100 rounded-2xl overflow-hidden">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-12 gap-6 p-7 ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="md:col-span-4">
                <p className="text-xs text-gray-400 font-medium mb-1">{project.period}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-sm text-blue-600">{project.company}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium"
                    >
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
