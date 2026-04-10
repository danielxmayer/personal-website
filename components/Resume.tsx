const experience = [
  {
    role: 'Head of Marketing Investments',
    company: 'TV Nova',
    period: '03/2021 – 03/2026 · Praha',
    description:
      'Řízení ročního marketingového rozpočtu – plánování, alokace a optimalizace. Spoluvytváření a implementace mediální strategie napříč TV, digital a OOH. Nastavení finančního reportingu a analytiky marketingových investic. Procurement – výběr a vyjednávání s dodavateli, smlouvy a kontrola plnění. Vedení týmu pro mediální partnerství a barterové spolupráce napříč klíčovými akcemi.',
  },
  {
    role: 'Media Manager',
    company: 'Zonky',
    period: '2017 – 2021 · Praha',
    description:
      'Vytváření a řízení mediálních plánů napříč TV, tiskem, rozhlasem a online kanály. Analýza mediálního a nákupního chování cílových skupin. Implementace a optimalizace kampaní podle výkonu. Odpovědnost za přidělenou část ATL marketingového rozpočtu a správa smluv a faktur.',
  },
  {
    role: 'Media Manager',
    company: 'Mafra',
    period: '2014 – 2017 · Praha',
    description:
      'Kompletní příprava mediaplánů pro značky skupiny MAFRA. Příprava podkladů pro vyhodnocení a prezentaci výsledků kampaní. Kontrola dodržování nákupních podmínek a garancí a čerpání mediálního rozpočtu.',
  },
  {
    role: 'Marketing Specialist',
    company: 'Ekospol',
    period: '2013 · Praha',
    description:
      'Plánování, realizace a vyhodnocování marketingových kampaní; monitoring konkurence. Příprava a kontrola prodejních materiálů projektů. Vyjednávání s externími dodavateli a spolupráce na budování korporátní identity.',
  },
  {
    role: 'Media Planner',
    company: 'Médea',
    period: '2011 – 2013 · Praha',
    description:
      'Rozložení marketingového rozpočtu a optimalizace mediálních kampaní ve spolupráci s klienty. Tvorba mediaplánů pro TV, tisk a rádio. Analýza cílových skupin a vyjednávání cenových podmínek s dodavateli médií (Mamut, Data Analyzer, MedPlan).',
  },
]

const education = [
  {
    degree: 'Ing. – Marketingové řízení',
    school: 'Česká zemědělská univerzita, Praha',
    period: '09/2003 – 06/2008',
    description: 'Marketing, Management, Finance.',
  },
  {
    degree: 'Erasmus – Marketing & Business',
    school: 'Humboldt-Universität zu Berlin',
    period: '01/2007 – 12/2007',
    description: 'Zahraniční studijní pobyt v Berlíně.',
  },
]

const achievements = [
  {
    title: 'Růst Voyo platformy',
    description: '100 tis. → 950 tis. předplatitelů',
  },
  {
    title: 'Oneplay launch',
    description: 'Strategické mediální plánování, rychlý nárůst spontánní znalosti značky na úroveň původního Voyo.',
  },
  {
    title: 'Rebranding Nova',
    description: 'Výběr kreativní agentury pro novou vizuální identitu stanice Nova; brandová transformace → posílení rozpoznatelnosti.',
  },
]

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Životopis</h2>
        <div className="w-16 h-1 bg-indigo-600 mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Pracovní zkušenosti</h3>
            <div className="space-y-8">
              {experience.map((item) => (
                <div key={item.role + item.company} className="relative pl-6 border-l-2 border-indigo-200">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white" />
                  <p className="text-xs text-indigo-600 font-semibold tracking-wide uppercase mb-1">
                    {item.period}
                  </p>
                  <h4 className="text-lg font-bold text-slate-900">{item.role}</h4>
                  <p className="text-slate-500 text-sm mb-2">{item.company}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Achievements + Download */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Vzdělání</h3>
            <div className="space-y-8 mb-12">
              {education.map((item) => (
                <div key={item.degree} className="relative pl-6 border-l-2 border-indigo-200">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white" />
                  <p className="text-xs text-indigo-600 font-semibold tracking-wide uppercase mb-1">
                    {item.period}
                  </p>
                  <h4 className="text-lg font-bold text-slate-900">{item.degree}</h4>
                  <p className="text-slate-500 text-sm mb-2">{item.school}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Key Achievements */}
            <h3 className="text-xl font-bold text-slate-900 mb-6">Klíčové výsledky</h3>
            <div className="space-y-4 mb-12">
              {achievements.map((item) => (
                <div key={item.title} className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-base font-bold text-indigo-600 mb-1">{item.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <p className="text-slate-700 font-medium mb-4">Chcete celý přehled?</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Stáhnout CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
