import { useEffect, useState } from 'react'
import './App.css'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { About } from './components/About'

// Componente raiz responsável por organizar as seções e os comportamentos globais da página.
function App() {
  // Controla o menu mobile em um único ponto para que ele possa ser fechado ao navegar ou redimensionar.
  const [menuAberto, setMenuAberto] = useState(false)

  // Fecha o menu quando a tela volta ao tamanho desktop, evitando manter um estado visual inconsistente.
  useEffect(() => {
    const fecharMenuNoDesktop = () => {
      if (window.innerWidth >= 900) setMenuAberto(false)
    }

    window.addEventListener('resize', fecharMenuNoDesktop)
    return () => window.removeEventListener('resize', fecharMenuNoDesktop)
  }, [])

  // Alterna a navegação compacta em dispositivos móveis.
  const alternarMenu = () => setMenuAberto((estadoAtual) => !estadoAtual)

  // Fecha o menu após a escolha de uma seção para liberar novamente o conteúdo da tela.
  const fecharMenu = () => setMenuAberto(false)

  return (
    <div className="site-shell">
      <Header
        menuAberto={menuAberto}
        aoAlternarMenu={alternarMenu}
        aoNavegar={fecharMenu}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
