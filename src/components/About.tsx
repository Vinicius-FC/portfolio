import { SectionHeading } from './SectionHeading'

// Resume a trajetória profissional usando somente as informações fornecidas pelo proprietário.
export function About() {
  return (
    <section className="section section--alternate" id="sobre">
      <div className="container about-grid">
        <SectionHeading eyebrow="01 / Sobre mim" title="Qualidade como mentalidade." />
        <div className="about-copy">
          <p>Sou graduado em <strong>Análise e Desenvolvimento de Sistemas</strong> e em <strong>Segurança da Informação / Cibersegurança</strong>, com experiência profissional em Quality Assurance.</p>
          <p>Atuo com testes manuais e automatizados em aplicações web e produtos financeiros, unindo visão de negócio, conhecimentos em desenvolvimento e atenção aos detalhes.</p>
          <p>Minha experiência prática também abrange infraestrutura, suporte e segurança. Busco evoluir continuamente em <strong>QA Automation e SDET</strong>, contribuindo para produtos mais confiáveis desde o início do desenvolvimento.</p>
          <div className="about-principles">
            <span>Precisão</span><span>Confiabilidade</span><span>Evolução contínua</span>
          </div>
        </div>
      </div>
    </section>
  )
}
