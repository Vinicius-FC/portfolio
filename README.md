# Portfólio — Vinicius Ferreira Cucinota

Portfólio profissional com foco em Quality Assurance, automação de testes, cibersegurança e tecnologia. A aplicação apresenta experiência, habilidades, projetos, formação e canais de contato em uma interface moderna e responsiva.

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS responsivo
- Oxlint

O projeto não utiliza bibliotecas visuais adicionais. Os componentes e estilos foram desenvolvidos diretamente para reduzir dependências e facilitar os estudos.

## Como executar

É necessário ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

O Vite informará no terminal o endereço local da aplicação, normalmente `http://localhost:5173`.

No PowerShell com execução de scripts desabilitada, substitua `npm` por `npm.cmd` nos comandos.

## Verificações e build

```bash
# Analisa a qualidade do código
npm run lint

# Verifica o TypeScript e gera a versão de produção
npm run build

# Visualiza localmente a versão de produção
npm run preview
```

## Estrutura do projeto

```text
src/
├── components/   # Componentes das seções e elementos reutilizáveis
├── data/         # Conteúdo editável do portfólio e placeholders
├── types/        # Interfaces TypeScript compartilhadas
├── App.tsx       # Composição da página e comportamentos globais
├── App.css       # Estilos dos componentes e responsividade
├── index.css     # Tokens visuais e estilos globais
└── main.tsx      # Ponto de entrada da aplicação
```

## Personalização

Links, projetos, habilidades e informações de formação ficam centralizados em `src/data/portfolio.ts`. Substitua os valores entre colchetes e os links iniciados por `#link-` pelas informações definitivas.

## Scripts disponíveis

| Comando | Responsabilidade |
| --- | --- |
| `npm run dev` | Inicia o ambiente local com atualização automática |
| `npm run lint` | Analisa possíveis problemas no código |
| `npm run build` | Valida o TypeScript e cria os arquivos de produção |
| `npm run preview` | Serve localmente o build de produção |
