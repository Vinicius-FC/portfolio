import { externalLinks } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

// Reúne os canais de contato e encerra a página com uma chamada direta para oportunidades.
export function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container contact__content">
        <SectionHeading eyebrow="06 / Contato" title="Vamos construir produtos melhores?" />
        <p>Estou aberto a oportunidades em QA, automação de testes e projetos freelancer.</p>
        <div className="contact__links">
          <a href={externalLinks.linkedin}><small>Conecte-se</small>LinkedIn <span>↗</span></a>
          <a href={externalLinks.github}><small>Veja meu código</small>GitHub <span>↗</span></a>
          <a href={externalLinks.email}><small>Envie uma mensagem</small>Email <span>↗</span></a>
        </div>
      </div>
    </section>
  )
}
