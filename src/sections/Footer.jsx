import { portfolioData } from '../data/portfolioData'

const Footer = () => {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-[var(--text-soft)] sm:flex-row sm:px-10">
        <p>{`© ${new Date().getFullYear()} ${portfolioData.fullName}. All rights reserved.`}</p>
        <a href="#home" className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--accent)]">
          Back to top
        </a>
      </div>
    </footer>
  )
}

export default Footer
