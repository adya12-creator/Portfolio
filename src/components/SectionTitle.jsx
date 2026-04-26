const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-[var(--accent-soft)] uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-[var(--text-soft)]">{description}</p>}
    </div>
  )
}

export default SectionTitle
