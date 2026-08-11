interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

// Padroniza os títulos das seções e reforça a hierarquia visual e semântica da página.
export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  )
}
