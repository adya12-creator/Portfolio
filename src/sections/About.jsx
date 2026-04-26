import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { aboutHighlights, portfolioData } from '../data/portfolioData'

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
      <Reveal>
        <SectionTitle eyebrow="About" title="Developer Mindset" description="I enjoy turning ideas into reliable products with attention to user experience and long-term maintainability." />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="glass rounded-2xl p-6 sm:p-8">
          <p className="text-base leading-8 text-[var(--text-soft)]">{portfolioData.shortBio}</p>
        </Reveal>
        <Reveal className="glass rounded-2xl p-6 sm:p-8">
          <ul className="space-y-4 text-[var(--text-soft)]">
            {aboutHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-base leading-7">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default About
