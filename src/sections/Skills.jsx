import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/portfolioData'

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
      <Reveal>
        <SectionTitle eyebrow="Skills" title="Tools and Technologies" description="A practical stack for building performant interfaces and robust backend services." />
      </Reveal>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <Reveal key={skill.name} className="glass rounded-2xl p-4 transition hover:translate-y-[-4px] hover:border-[var(--accent)] sm:p-5">
              <div className="flex items-center gap-3">
                {Icon ? (
                  <Icon className="text-2xl text-[var(--accent)]" />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(132,218,200,0.12)] text-xs font-bold text-[var(--accent-soft)]">
                    {skill.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <p className="text-sm font-semibold text-[var(--text)] sm:text-base">{skill.name}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
