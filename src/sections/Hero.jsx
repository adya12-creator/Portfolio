import { HiOutlineArrowDownTray, HiOutlineEnvelope } from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import { portfolioData } from '../data/portfolioData'

const Hero = () => {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 sm:px-10">
      <Reveal>
        <p className="mb-5 inline-flex rounded-full border border-[var(--line)] bg-[rgba(95,183,255,0.12)] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
          Available for opportunities
        </p>
      </Reveal>

      <Reveal>
        <h1 className="max-w-4xl text-4xl leading-tight font-semibold text-[var(--text)] sm:text-6xl">
          {portfolioData.fullName}
          <span className="mt-2 block text-xl font-medium text-[var(--accent-soft)] sm:text-3xl">
            {portfolioData.title}
          </span>
        </h1>
      </Reveal>

      <Reveal>
        <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--text-soft)] sm:text-lg">{portfolioData.shortBio}</p>
      </Reveal>

      <Reveal className="mt-10 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#03111f] transition hover:translate-y-[-2px] hover:brightness-110"
        >
          <HiOutlineEnvelope className="text-lg" />
          Contact Me
        </a>
        <a
          href={portfolioData.resumeFile}
          download
          className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:translate-y-[-2px] hover:border-[var(--accent)]"
        >
          <HiOutlineArrowDownTray className="text-lg" />
          Download Resume
        </a>
      </Reveal>
    </section>
  )
}

export default Hero
