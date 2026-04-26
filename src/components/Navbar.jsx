import { HiOutlineBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2'
import { useState } from 'react'
import { navLinks, portfolioData } from '../data/portfolioData'

const Navbar = ({ activeSection }) => {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--line)] bg-[rgba(9,13,20,0.85)] backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#home" className="text-sm font-bold tracking-[0.14em] text-[var(--text)] uppercase">
          {portfolioData.fullName}
        </a>

        <button
          type="button"
          className="rounded-md p-2 text-[var(--text)] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <HiOutlineXMark className="text-2xl" /> : <HiOutlineBars3BottomRight className="text-2xl" />}
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeSection === link.id
                    ? 'bg-[rgba(95,183,255,0.15)] text-[var(--accent)]'
                    : 'text-[var(--text-soft)] hover:text-[var(--text)]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="border-t border-[var(--line)] bg-[rgba(9,13,20,0.95)] px-6 py-4 md:hidden">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleLinkClick}
                  className={`block rounded-lg px-3 py-2 text-sm font-semibold ${
                    activeSection === link.id ? 'bg-[rgba(95,183,255,0.15)] text-[var(--accent)]' : 'text-[var(--text-soft)]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
