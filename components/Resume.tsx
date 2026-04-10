const experience = [
  {
    role: 'Frontend Developer',
    company: 'Tech Startup',
    period: '2023 – Present',
    description:
      'Building responsive web applications with React and Next.js. Collaborating closely with designers and backend engineers to deliver high-quality features.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Digital Agency',
    period: '2022 – 2023',
    description:
      'Developed and maintained client websites using modern JavaScript frameworks. Improved page load times by 40% through performance optimizations.',
  },
  {
    role: 'Freelance Developer',
    company: 'Self-employed',
    period: '2021 – 2022',
    description:
      'Delivered custom web solutions for small businesses. Handled everything from design to deployment.',
  },
]

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Czech Technical University',
    period: '2019 – 2023',
    description: 'Focused on software engineering, algorithms, and web technologies.',
  },
]

export default function Resume() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Resume</h2>
        <div className="w-16 h-1 bg-indigo-600 mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Work Experience</h3>
            <div className="space-y-8">
              {experience.map((item) => (
                <div key={item.role} className="relative pl-6 border-l-2 border-indigo-200">
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

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Education</h3>
            <div className="space-y-8">
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

            {/* Download CV */}
            <div className="mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <p className="text-slate-700 font-medium mb-4">Want the full picture?</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
