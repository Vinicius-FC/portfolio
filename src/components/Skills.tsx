import { skillGroups } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

// Transforma os grupos de habilidades em cards reutilizáveis sem duplicar a marcação HTML.
export function Skills() {
  return (
    <section className="section" id="habilidades">
      <div className="container">
        <SectionHeading eyebrow="02 / Habilidades" title="Ferramentas que uso para garantir qualidade." description="Conhecimentos que conectam testes, desenvolvimento, dados, infraestrutura e segurança." />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card__header"><span>{group.icon}</span><h3>{group.title}</h3></div>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
