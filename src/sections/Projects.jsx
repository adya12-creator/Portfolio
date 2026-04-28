import { useMemo, useState } from 'react'
import { HiOutlineGlobeAlt } from 'react-icons/hi2'
import { FiGithub } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { projectFilters, projects } from '../data/portfolioData'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="relative mx-auto max-w-6xl overflow-hidden px-6 py-16 sm:px-10">
      <div className="pointer-events-none absolute top-20 right-[-72px] h-52 w-52 rounded-full border border-[var(--line)] bg-[var(--accent-pill-bg)] blur-2xl" />

      <Reveal>
        <SectionTitle eyebrow="Projects" title="Selected Work" description="Project cards include role context, stack details, and deployment status." />
      </Reveal>

      <Reveal className="mb-8 flex flex-wrap gap-3">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? 'border-[var(--accent)] bg-[var(--accent-pill-bg)] text-[var(--accent)]'
                : 'border-[var(--line)] bg-[var(--surface)] text-[var(--text-soft)] hover:border-[var(--accent-soft)]'
            }`}
          >
            {filter}
          </button>
        ))}
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <Reveal key={project.name} className="group glass rounded-2xl p-6 transition hover:translate-y-[-4px]">
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-[var(--text)]">{project.name}</h3>
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                {project.category}
              </span>
            </div>
            <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1 text-xs font-semibold text-[var(--text-soft)]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]">
                  <HiOutlineGlobeAlt /> Live
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--text-soft)]">
                  <HiOutlineGlobeAlt /> Coming Soon
                </span>
              )}

              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]">
                  <FiGithub /> GitHub
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--text-soft)]">
                  <FiGithub /> Coming Soon
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
