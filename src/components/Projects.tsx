import { projects } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

// Renderiza cada projeto a partir dos dados centralizados, facilitando ampliar o portfólio futuramente.
export function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <SectionHeading eyebrow="04 / Projetos" title="Aprendizado transformado em prática." description="Projetos criados para consolidar conhecimentos e resolver desafios reais de qualidade." />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__number">0{index + 1}</div>
              <div className="project-card__content">
                <span className="project-status"><i /> {project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                <a className="arrow-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">Ver no GitHub <span>↗</span></a>
              </div>
            </article>
          ))}
          <div className="project-placeholder"><span>+</span><p>Próximo projeto<br />em breve</p></div>
        </div>
      </div>
    </section>
  )
}
