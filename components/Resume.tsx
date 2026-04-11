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
    <section id="resume" className="py-24 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-4">
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4 font-medium">Kariéra</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Pracovní<br />zkušenosti</h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            {experience.map((item) => (
              <div key={item.role + item.company} className="flex gap-6">
                <div className="pt-1 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gray-300 mt-1.5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">{item.period}</p>
                  <h4 className="text-base font-semibold text-gray-900">{item.role}</h4>
                  <p className="text-sm text-blue-600 mb-2">{item.company}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-16 mb-20 border-t border-gray-200 pt-20">
          <div className="md:col-span-4">
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4 font-medium">Vzdělání</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Studium</h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            {education.map((item) => (
              <div key={item.degree} className="flex gap-6">
                <div className="pt-1 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gray-300 mt-1.5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">{item.period}</p>
                  <h4 className="text-base font-semibold text-gray-900">{item.degree}</h4>
                  <p className="text-sm text-blue-600 mb-2">{item.school}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-16 border-t border-gray-200 pt-20">
          <div className="md:col-span-4">
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4 font-medium">Výsledky</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Klíčové<br />úspěchy</h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {achievements.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="text-sm font-semibold text-gray-900 mb-2">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 hover:border-gray-900 hover:text-gray-900 text-gray-500 text-sm font-medium rounded-full transition-colors"
            >
              Stáhnout CV (PDF) ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
