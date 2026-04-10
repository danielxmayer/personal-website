const skills = [
  'TypeScript', 'JavaScript', 'React', 'Next.js',
  'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL',
  'Git', 'Docker', 'REST APIs', 'GraphQL',
]

export default function About() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2">About Me</h2>
        <div className="w-16 h-1 bg-indigo-600 mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              I&apos;m Daniel Mayer, a passionate software developer based in Czech Republic. I love
              turning ideas into real products — whether that&apos;s a sleek web app, a robust API,
              or a smooth user interface.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              I focus on writing clean, maintainable code and always aim to deliver the best
              possible experience to end users. Outside of work, I enjoy exploring new technologies,
              contributing to open-source, and staying up-to-date with the latest trends in the
              industry.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              When I&apos;m not coding, you can find me hiking, reading, or experimenting with new
              side projects.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Skills &amp; Technologies</h3>
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
                <p className="text-2xl font-bold text-indigo-600 mb-1">Frontend</p>
                <p className="text-slate-600 text-sm">React, Next.js, Tailwind CSS, TypeScript</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-2xl font-bold text-indigo-600 mb-1">Backend</p>
                <p className="text-slate-600 text-sm">Node.js, Python, REST APIs, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
