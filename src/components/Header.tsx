import { navigationItems } from '../data/portfolio'

interface HeaderProps {
  menuAberto: boolean
  aoAlternarMenu: () => void
  aoNavegar: () => void
}

// Exibe a navegação principal e oferece uma versão compacta e acessível para telas menores.
export function Header({ menuAberto, aoAlternarMenu, aoNavegar }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header__content">
        <a className="brand" href="#inicio" onClick={aoNavegar} aria-label="Ir para o início">
          VF<span>.</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="main-navigation"
          onClick={aoAlternarMenu}
        >
          <span />
          <span />
        </button>
        <nav id="main-navigation" className={`navigation ${menuAberto ? 'navigation--open' : ''}`} aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={aoNavegar}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
