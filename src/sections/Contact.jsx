import { useState } from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { portfolioData } from '../data/portfolioData'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pt-16 pb-22 sm:px-10">
      <Reveal>
        <SectionTitle eyebrow="Contact" title="Let's Build Something Great" description="Reach out for collaboration, internships, and development opportunities." />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="glass rounded-2xl p-6 sm:p-7">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[var(--text)]">Name</label>
              <input id="name" required className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[var(--text)]">Email</label>
              <input id="email" type="email" required className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[var(--text)]">Message</label>
              <textarea id="message" rows="4" required className="w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#03111f] transition hover:brightness-110">Send Message</button>
            {submitted && <p className="text-sm text-[var(--accent-soft)]">Message saved locally. Connect via email for direct reply.</p>}
          </form>
        </Reveal>

        <Reveal className="glass rounded-2xl p-6 sm:p-7">
          <div className="space-y-4 text-[var(--text-soft)]">
            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 transition hover:border-[var(--accent)]">
              <HiOutlineEnvelope className="text-lg text-[var(--accent)]" />
              {portfolioData.email}
            </a>
            <a href={`tel:${portfolioData.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 transition hover:border-[var(--accent)]">
              <HiOutlinePhone className="text-lg text-[var(--accent)]" />
              {portfolioData.phone}
            </a>
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 transition hover:border-[var(--accent)]">
              <FiGithub className="text-lg text-[var(--accent)]" />
              GitHub
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 transition hover:border-[var(--accent)]">
              <FiLinkedin className="text-lg text-[var(--accent)]" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
