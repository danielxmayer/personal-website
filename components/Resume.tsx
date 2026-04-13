const experience = [
  {
    role: 'Frontend Developer',
    company: 'Vaše společnost',
    period: '2023 – současnost',
    description: 'Vývoj moderních webových aplikací v React a Next.js. Spolupráce na designu a implementaci UI komponent.',
  },
  {
    role: 'Junior Developer',
    company: 'Předchozí firma',
    period: '2021 – 2023',
    description: 'Práce na webových projektech, údržba a rozšiřování stávajících aplikací.',
  },
]

const education = [
  {
    degree: 'Bakalářský titul – Informatika',
    school: 'Vaše univerzita',
    period: '2018 – 2021',
  },
]

function TimelineItem({ period, title, subtitle, description }: {
  period: string
  title: string
  subtitle: string
  description?: string
}) {
  return (
    <div className="relative pl-8 pb-8 group">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 group-last:bg-gradient-to-b group-last:from-zinc-800 group-last:to-transparent" />
      <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-500 ring-4 ring-zinc-950 group-hover:bg-violet-400 transition-colors" />
      <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">{period}</p>
      <h4 className="text-zinc-100 font-semibold text-base mb-0.5">{title}</h4>
      <p className="text-zinc-500 text-sm mb-2">{subtitle}</p>
      {description && <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>}
    </div>
  )
}

export default function Resume() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="mb-14">
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">Moje cesta</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">Resume</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="flex-1 h-px bg-zinc-800" />
              Zkušenosti
            </h3>
            {experience.map((item, i) => (
              <TimelineItem
                key={i}
                period={item.period}
                title={item.role}
                subtitle={item.company}
                description={item.description}
              />
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="flex-1 h-px bg-zinc-800" />
              Vzdělání
            </h3>
            {education.map((item, i) => (
              <TimelineItem
                key={i}
                period={item.period}
                title={item.degree}
                subtitle={item.school}
              />
            ))}

            <div className="mt-8">
              <a
                href="/cv-daniel-mayer.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded-xl font-semibold hover:border-violet-500/50 hover:text-violet-300 transition-all duration-200 group"
              >
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Stáhnout CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
