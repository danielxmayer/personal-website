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
    <section id="about" className="py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4 font-medium">O mně</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Propojuji data,<br />média a&nbsp;značky.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Jsem Daniel Mayer, marketingový a mediální manažer s více než deseti lety praxe
              v řízení marketingových investic, rozpočtů a mediálních strategií napříč
              TV, digitálními a OOH kanály.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Zaměřuji se na výkonovou optimalizaci kampaní a dlouhodobé budování značek.
              Mám zkušenosti z pozic ve velkých mediálních domech a brandech jako
              TV&nbsp;Nova, Zonky nebo MAFRA.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Mimo práci sportuju, cestuji a rád poznávám nové kultury a lidi z různých
              prostředí — to mi pomáhá udržovat flexibilitu a vytrvalost.
            </p>

            <div className="border-t border-gray-100 pt-8">
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-5 font-medium">Dovednosti</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full text-sm border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
