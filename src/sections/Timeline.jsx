import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { education, experience } from '../data/portfolioData'

const Timeline = () => {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
      <Reveal>
        <SectionTitle eyebrow="Journey" title="Education and Experience" description="A concise timeline of academics and internship experience." />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <h3 className="mb-5 text-2xl font-semibold text-[var(--text)]">Education</h3>
          </Reveal>
          <div className="space-y-4 border-l border-[var(--line)] pl-5">
            {education.map((entry) => (
              <Reveal key={entry.title + entry.period} className="glass relative rounded-xl p-5 before:absolute before:-left-[26px] before:top-7 before:h-3 before:w-3 before:rounded-full before:bg-[var(--accent)]">
                <p className="text-sm font-semibold tracking-wide text-[var(--accent-soft)]">{entry.period}</p>
                <h4 className="mt-2 text-lg font-semibold text-[var(--text)]">{entry.title}</h4>
                <p className="mt-2 text-sm text-[var(--text-soft)]">{entry.org}</p>
                <p className="text-sm text-[var(--text-soft)]">{entry.boardOrUniversity}</p>
                <p className="text-sm text-[var(--text-soft)]">{entry.location}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">{entry.scoreOrCgpa}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="mb-5 text-2xl font-semibold text-[var(--text)]">Internships</h3>
          </Reveal>
          <div className="space-y-4 border-l border-[var(--line)] pl-5">
            {experience.map((entry) => (
              <Reveal key={entry.role + entry.company} className="glass relative rounded-xl p-5 before:absolute before:-left-[26px] before:top-7 before:h-3 before:w-3 before:rounded-full before:bg-[var(--accent-soft)]">
                <p className="text-sm font-semibold tracking-wide text-[var(--accent-soft)]">{entry.duration}</p>
                <h4 className="mt-2 text-lg font-semibold text-[var(--text)]">{entry.role}</h4>
                <p className="mt-2 text-sm text-[var(--text-soft)]">{entry.company}</p>
                <p className="mt-3 text-sm text-[var(--text-soft)]">Work Summary: {entry.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
