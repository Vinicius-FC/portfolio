import { externalLinks } from '../data/portfolio'

// Apresenta a especialidade profissional e direciona o visitante para as ações principais.
export function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__copy">
          <span className="availability"><i /> Disponível para oportunidades</span>
          <p className="hero__intro">Olá, eu sou</p>
          <h1>Vinicius Ferreira<br /><span>Cucinota.</span></h1>
          <p className="hero__role">QA Engineer <b>/</b> Test Automation <b>/</b> Cybersecurity</p>
          <p className="hero__description">Profissional focado em qualidade de software, automação de testes e tecnologia. Transformo requisitos em experiências confiáveis, seguras e bem testadas.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projetos">Ver projetos <span aria-hidden="true">↓</span></a>
            <a className="button button--secondary" href={externalLinks.github}>GitHub ↗</a>
            <a className="button button--secondary" href={externalLinks.linkedin}>LinkedIn ↗</a>
            <a className="text-link" href={externalLinks.resume}>Currículo ↗</a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="terminal">
            <div className="terminal__bar"><span /><span /><span /></div>
            <code>
              <span><em>describe</em>('quality', () =&gt; {'{'}</span>
              <span>&nbsp;&nbsp;<em>test</em>('works flawlessly', async () =&gt; {'{'}</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;<strong>await</strong> expect(product).toBeReliable()</span>
              <span>&nbsp;&nbsp;{'}'})</span>
              <span>{'}'})</span>
              <span className="terminal__success">✓ 1 test passed</span>
            </code>
          </div>
          <span className="orbit orbit--one">QA</span>
          <span className="orbit orbit--two">&lt;/&gt;</span>
          <span className="orbit orbit--three">✓</span>
        </div>
      </div>
      <a className="scroll-cue" href="#sobre" aria-label="Conhecer mais sobre Vinicius">SCROLL <span>↓</span></a>
    </section>
  )
}
