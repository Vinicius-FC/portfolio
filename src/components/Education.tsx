import { education } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

// Exibe a formação acadêmica e mantém visíveis os campos que ainda precisam ser preenchidos.
export function Education() {
  return (
    <section className="section section--alternate" id="formacao">
      <div className="container">
        <SectionHeading eyebrow="05 / Formação" title="Base técnica e visão de segurança." />
        <div className="education-list">
          {education.map((item, index) => (
            <article className="education-item" key={item.course}>
              <span className="education-item__number">0{index + 1}</span>
              <div><span className="education-item__status">{item.status}</span><h3>{item.course}</h3><p>{item.institution} · {item.period}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
