import { experienceHighlights } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

// Apresenta a experiência por responsabilidades enquanto os dados de empresa e período não são informados.
export function Experience() {
  return (
    <section className="section section--alternate" id="experiencia">
      <div className="container">
        <SectionHeading eyebrow="03 / Experiência" title="Qualidade de ponta a ponta." description="Atuação prática em garantia de qualidade, do entendimento das regras de negócio à automação." />
        <article className="experience-card">
          <div className="experience-card__aside">
            <span className="status-dot">Experiência profissional</span>
            <h3>Quality Assurance</h3>
            <p>[Empresa, cargo e período a informar]</p>
          </div>
          <ul className="experience-list">
            {experienceHighlights.map((highlight) => <li key={highlight}><span>✓</span>{highlight}</li>)}
          </ul>
        </article>
      </div>
    </section>
  )
}
