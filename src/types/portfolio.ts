// Define o formato comum dos links para manter rótulos e destinos consistentes no site.
export interface LinkItem {
  label: string
  href: string
}

// Representa cada grupo de conhecimentos exibido na seção de habilidades.
export interface SkillGroup {
  title: string
  skills: string[]
  icon: string
}

// Define os dados editáveis de um projeto sem acoplar o conteúdo à apresentação do card.
export interface Project {
  title: string
  status: string
  description: string
  technologies: string[]
  repositoryUrl: string
}

// Mantém os campos ainda não informados explícitos e fáceis de localizar para edição futura.
export interface EducationItem {
  course: string
  status: string
  institution: string
  period: string
}
