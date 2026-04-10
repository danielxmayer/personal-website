const skills = [
  'Mediální strategie',
  'Plánování a nákup médií',
  'Vyjednávání',
  'Výzkum trhu',
  'Online marketing',
  'TV / Digital / OOH',
  'Výkonová optimalizace',
  'Řízení rozpočtu',
  'Procurement',
  'Analytika & reporting',
  'Brand management',
  'Angličtina · Němčina',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2">O mně</h2>
        <div className="w-16 h-1 bg-indigo-600 mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Jsem Daniel Mayer, marketingový a mediální manažer s&nbsp;více než deseti lety praxe
              v&nbsp;řízení marketingových investic, rozpočtů a&nbsp;mediálních strategií napříč
              TV, digitálními a&nbsp;OOH kanály.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Zaměřuji se na výkonovou optimalizaci kampaní a&nbsp;dlouhodobé budování značek.
              Mám zkušenosti z&nbsp;pozic ve velkých mediálních domech a&nbsp;brandech jako
              TV&nbsp;Nova, Zonky nebo MAFRA.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Mimo práci sportuju, cestuji a&nbsp;rád poznávám nové kultury a&nbsp;lidi z&nbsp;různých
              prostředí — to mi pomáhá udržovat flexibilitu a&nbsp;vytrvalost.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Dovednosti</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-2xl font-bold text-indigo-600 mb-1">Strategie</p>
                <p className="text-slate-600 text-sm">Mediální plánování, brand building, performance marketing</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-2xl font-bold text-indigo-600 mb-1">Řízení</p>
                <p className="text-slate-600 text-sm">Rozpočty, procurement, týmové vedení, reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
