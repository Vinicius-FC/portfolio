import type { EducationItem, LinkItem, Project, SkillGroup } from '../types/portfolio'

// Centraliza os itens do menu para que a navegação desktop e mobile use a mesma fonte de dados.
export const navigationItems: LinkItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Contato', href: '#contato' },
]

// Reúne os conhecimentos por área para permitir novos grupos sem modificar o componente visual.
export const skillGroups: SkillGroup[] = [
  {
    title: 'QA & Automation',
    icon: 'QA',
    skills: ['Playwright', 'Cypress', 'Testes Manuais', 'Testes Funcionais', 'Testes de Regressão', 'BDD', 'Gherkin', 'Casos de Teste', 'Bug Reporting'],
  },
  {
    title: 'Desenvolvimento',
    icon: '</>',
    skills: ['TypeScript', 'JavaScript', 'Node.js', 'C#', 'HTML', 'CSS'],
  },
  {
    title: 'API & Database',
    icon: 'API',
    skills: ['REST APIs', 'JSON', 'OAuth2', 'Postman', 'SQL', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: 'CLI',
    skills: ['Git', 'GitHub', 'Jira', 'VS Code'],
  },
  {
    title: 'Infraestrutura & Segurança',
    icon: 'SEC',
    skills: ['Windows', 'Redes', 'VPN', 'Firewall', 'MFA', 'SIEM', 'Segurança de Redes', 'Segurança de Banco de Dados', 'Troubleshooting'],
  },
]

// Descreve responsabilidades reais sem associá-las a empresas, cargos ou períodos não fornecidos.
export const experienceHighlights = [
  'Execução de testes manuais, funcionais e de regressão',
  'Criação de casos e cenários de teste com BDD e Gherkin',
  'Reporte, documentação e acompanhamento de bugs',
  'Automação de testes com Cypress e Playwright',
  'Testes de aplicações web, APIs e integrações',
  'Validação de fluxos OAuth2 e regras de negócio',
  'Experiência com produtos financeiros e Open Finance',
  'Colaboração com times ágeis utilizando Scrum e Jira',
]

// Armazena os projetos como dados para que novos cards possam ser adicionados apenas neste arquivo.
export const projects: Project[] = [
  {
    title: 'QA Playwright Framework',
    status: 'Em desenvolvimento',
    description: 'Framework de automação de testes desenvolvido com Playwright e TypeScript, com foco em boas práticas, organização, reutilização e evolução dos conhecimentos em QA Automation.',
    technologies: ['Playwright', 'TypeScript', 'Node.js', 'Git', 'GitHub'],
    repositoryUrl: 'https://github.com/Vinicius-FC/qa-playwright-framework',
  },
  {
    title: 'QA Manual & Bug Reporting',
    status: 'Concluído',
    description: 'Projeto fictício desenvolvido para demonstrar práticas de Quality Assurance Manual, incluindo planejamento de testes, criação de cenários e casos de teste, testes exploratórios, reporte de bugs e relatório de execução.',
    technologies: ['Manual Testing', 'Functional Testing', 'Test Cases', 'Test Scenarios', 'Bug Reporting', 'Exploratory Testing', 'Regression Testing', 'Test Planning', 'Markdown', 'Git', 'GitHub'],
    repositoryUrl: 'https://github.com/Vinicius-FC/qa-bug-report-project',
  },
]

// Mantém instituição e período como placeholders porque essas informações ainda não foram fornecidas.
export const education: EducationItem[] = [
  { course: 'Análise e Desenvolvimento de Sistemas', status: 'Graduado', institution: 'USCS - Universidade Municipal de São Caetano do Sul', period: 'Janeiro 2021 - Junho 2024' },
  { course: 'Segurança da Informação / Cibersegurança', status: 'Graduado', institution: 'USCS - Universidade Municipal de São Caetano do Sul', period: 'Fevereiro 2025 - Junho 2026' },
]

// Concentra links pessoais pendentes para que possam ser substituídos sem procurar pelos componentes.
export const externalLinks = {
  github: 'https://github.com/Vinicius-FC',
  linkedin: 'https://www.linkedin.com/in/vinicius-cucinota-7b0590206/',
  resume: 'https://drive.google.com/file/d/19su8LqFBhTaW48FLU6533tUGfeaytbQd/view?usp=drive_link',
  email: 'https://mail.google.com/mail/?view=cm&fs=1&to=vinicius.f.cucinota@gmail.com&su=Contato%20pelo%20portf%C3%B3lio',
}
