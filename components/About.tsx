const skills = [
  { name: 'JavaScript', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/25' },
  { name: 'TypeScript', color: 'text-blue-400 bg-blue-400/10 border-blue-400/25' },
  { name: 'React', color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/25' },
  { name: 'Next.js', color: 'text-zinc-200 bg-zinc-200/10 border-zinc-200/25' },
  { name: 'Node.js', color: 'text-green-400 bg-green-400/10 border-green-400/25' },
  { name: 'Python', color: 'text-blue-300 bg-blue-300/10 border-blue-300/25' },
  { name: 'Git', color: 'text-orange-400 bg-orange-400/10 border-orange-400/25' },
  { name: 'Tailwind CSS', color: 'text-cyan-300 bg-cyan-300/10 border-cyan-300/25' },
]

const stats = [
  { value: '10+', label: 'Projektů' },
  { value: '3+', label: 'Let zkušeností' },
  { value: '100%', label: 'Nasazení' },
]

export default function About() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="mb-14">
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">Kdo jsem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">O mně</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Jsem vášnivý vývojář s láskou k čistému kódu a dobře navržených aplikacích.
              Baví mě řešit složité problémy a proměňovat nápady v reálné produkty.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Ve volném čase se vzdělávám v nových technologiích, pracuji na vlastních projektech
              a hledám způsoby, jak dělat věci lépe a efektivněji.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Pokud hledáš někoho spolehlivého, kdo přistupuje k práci zodpovědně a rád se
              učí nové věci — jsem to já.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-center hover:border-violet-500/40 transition-colors duration-200 group"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 group-hover:text-zinc-400 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-6">Technologie &amp; dovednosti</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 border rounded-lg font-medium text-sm transition-all duration-200 hover:scale-105 ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
