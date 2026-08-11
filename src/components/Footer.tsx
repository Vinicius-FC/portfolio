// Mantém o rodapé atualizado automaticamente sem exigir alteração manual a cada ano.
export function Footer() {
  // Obtém o ano no navegador para que a informação permaneça sempre atual.
  const currentYear = new Date().getFullYear()

  return <footer><div className="container"><span>Vinicius Ferreira Cucinota</span><span>© {currentYear} · Desenvolvido com React + TypeScript</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
}
