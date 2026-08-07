<div align="center">

# Felipe Ferreira — Portfólio Profissional

Portfólio pessoal de um desenvolvedor front-end, construído como uma experiência bilíngue e animada em página única.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![Motion](https://img.shields.io/badge/Motion-12-FFF116?style=for-the-badge&logo=framer&logoColor=black)](https://motion.dev/) [![next-intl](https://img.shields.io/badge/next--intl-4-EC4899?style=for-the-badge&logo=googletranslate&logoColor=white)](https://next-intl.dev/)

[English](./README.md) · **Português**

</div>

---

## Sobre o projeto

Este repositório guarda meu portfólio pessoal: um site de página única que apresenta quem eu
sou, as experiências pelas quais passei, as habilidades com que trabalho e os projetos que
construí.

Ele roda sobre o App Router do Next.js com um segmento `[locale]`, então o site inteiro existe
em dois idiomas — português brasileiro (padrão) e inglês — servidos por rotas prefixadas
(`/pt-br`, `/en`). Todo o conteúdo fica centralizado em constantes tipadas e arquivos de
tradução, de modo que uma seção é sempre dado mais componente, nunca texto fixo no código.

A interface foi desenhada primeiro no Figma e depois implementada aqui, com a animação tratada
como parte do design e não como enfeite: uma sequência de introdução com anéis que se expandem,
rolagem suave, navegação ciente da seção ativa e carrosséis para experiências e projetos.

## Motivações

- **Um único lugar profissional.** Habilidades, experiências e projetos espalhados entre um
  currículo, um perfil do GitHub e uma página do LinkedIn são difíceis de ler como um todo.
  Este site reúne tudo em uma narrativa única e autossuficiente.
- **Alcançar dois públicos.** Escrevo e trabalho em português brasileiro, mas o trabalho de
  front-end não é limitado por idioma. O site é bilíngue desde a camada de rotas, então lê-se
  de forma natural tanto para visitantes brasileiros quanto internacionais.
- **Mostrar o ofício, não apenas descrevê-lo.** Um portfólio de front-end deve demonstrar
  trabalho de front-end. A movimentação, a temática, os layouts responsivos e os detalhes de
  interação são o argumento.
- **Tratar um projeto pessoal com disciplina de produção.** TypeScript em modo estrito, dados
  centralizados e tipados, metadados de SEO por idioma, dados estruturados, cabeçalhos de
  segurança, respeito ao `prefers-reduced-motion` — além de convenções escritas para que o
  código permaneça consistente conforme cresce. Essas convenções estão documentadas em
  [`docs/`](#documentação) e fazem parte do projeto, não são um acessório.

## Funcionalidades

### Seções de conteúdo

- **Hero** — introdução animada com anéis que se expandem, cargo atual e status.
- **Sobre mim** — apresentação, hobbies e objetivos.
- **Experiências** — trajetória acadêmica e profissional em um carrossel Embla com linha do
  tempo sincronizada, tags, descrições e habilidades por experiência.
- **Habilidades** — categorias de front-end, back-end e ferramentas, com níveis de
  proficiência, destaque para as mais usadas e linhas conectando os itens.
- **Projetos** — cartões de projeto em carrossel, cada um abrindo uma visão de detalhes com
  galeria de capturas de tela, tecnologias, lista de funcionalidades e link do repositório.
- **Rodapé** — links sociais, link do design no Figma e uma ação de e-mail que copia o endereço
  no desktop e abre o cliente de e-mail no mobile.

### Internacionalização

- Dois idiomas — `pt-br` (padrão) e `en` — gerenciados pelo `next-intl`.
- Rotas sempre prefixadas, com detecção automática de idioma pelo middleware do Next.js.
- Todo o texto vive em `messages/pt-br.json` e `messages/en.json`; as chaves são espelhadas
  entre os dois arquivos.
- Metadados, alternativas `hreflang` e locales de Open Graph cientes do idioma.

### Interface e interação

- Temas claro e escuro resolvidos antes da primeira renderização (sem piscar o tema errado),
  incluindo a cor da barra do navegador.
- Rolagem suave com Lenis, navegação que destaca a seção ativa via `IntersectionObserver` e
  botão de voltar ao topo.
- Cabeçalho para desktop e barra de navegação dedicada para mobile.
- Cursor personalizado, tooltips e botões animados.
- Suporte global a `prefers-reduced-motion` — as animações recuam quando o visitante pede.
- Layouts responsivos do mobile ao desktop grande.

### SEO e entrega

- Metadados por idioma (templates de título, descrição, palavras-chave, URLs canônicas e
  alternativas de idioma).
- Imagens de Open Graph e de card do Twitter geradas sob demanda pelo app router.
- Dados estruturados JSON-LD do tipo `Person`, com o emprego atual derivado dos dados de
  experiências em vez de fixado no código.
- `sitemap.ts` e `robots.ts` gerados a partir da configuração de rotas.
- Cabeçalhos de segurança aplicados a todas as rotas (`Strict-Transport-Security`,
  `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- Geração estática por idioma, React Compiler habilitado e SVGs importados como componentes
  React.
- Páginas personalizadas de `not-found` e `error`, ambas traduzidas.
- Currículo disponível para download a partir de `public/`.

## Tecnologias

| Área                | Tecnologias                                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework           | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/)                                                                                   |
| Linguagem           | [TypeScript 5](https://www.typescriptlang.org/) (modo estrito)                                                                                                   |
| Estilização         | [Tailwind CSS 4](https://tailwindcss.com/), PostCSS, `tw-animate-css`, `clsx` + `tailwind-merge`                                                                 |
| Internacionalização | [next-intl 4](https://next-intl.dev/)                                                                                                                            |
| Animação e rolagem  | [Motion 12](https://motion.dev/), [Lenis](https://lenis.darkroom.engineering/), [Embla Carousel](https://www.embla-carousel.com/) (+ plugins de autoplay e fade) |
| Temas               | `@teispace/next-themes`                                                                                                                                          |
| Ícones e assets     | [Phosphor Icons](https://phosphoricons.com/), [Simple Icons](https://simpleicons.org/), SVGR                                                                     |
| Tipografia          | Space Grotesk via `next/font/google`                                                                                                                             |
| Analytics           | Vercel Analytics, Vercel Speed Insights                                                                                                                          |
| Ferramentas         | ESLint 9 (`eslint-config-next`), plugin Babel do React Compiler                                                                                                  |

## Como começar

### Requisitos

- [Node.js](https://nodejs.org/) `24.12.0` (ou mais recente)
- npm `11.6.2` (ou mais recente)

### Instalação

```bash
git clone https://github.com/felipeFerreiraffl/my-portfolio.git
cd my-portfolio
npm install
```

### Execução

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) — o middleware redireciona para o idioma
detectado (`/pt-br` ou `/en`).

### Scripts

| Script          | O que faz                            |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria o build de produção             |
| `npm start` | Serve o build de produção            |
| `npm run lint`  | Executa o ESLint sobre o código      |

### Variáveis de ambiente

Nenhuma é obrigatória para rodar o projeto localmente.

| Variável               | Obrigatória | Finalidade                                                                                                                                                                             |
| ---------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Opcional    | URL base absoluta usada em links canônicos, alternativas `hreflang`, imagens de Open Graph e no sitemap. Recorre à URL de produção da Vercel e, em seguida, a `http://localhost:3000`. |

## Estrutura do projeto

```
my-portfolio/
├── docs/                  # Referências de convenções de nomenclatura e estrutura de pastas
├── messages/              # Arquivos de tradução (pt-br.json, en.json)
├── public/                # Favicon e currículo para download
└── src/
    ├── app/[locale]/      # Rotas do App Router, layout, metadados, imagens de OG
    ├── assets/            # Ícones SVG e imagens dos projetos
    ├── components/        # layout/ (Header, Footer, Sections), screens/, ui/
    ├── constants/         # Conteúdo e configuração tipados (data, icons, seo)
    ├── contexts/          # Contextos React compartilhados
    ├── hooks/             # Hooks personalizados
    ├── libs/              # Configuração de i18n, rolagem suave, junção de classes
    ├── styles/            # Folha de estilo global e variáveis de tema
    ├── types/             # Definições de tipos
    └── utils/             # Funções auxiliares puras
```

O detalhamento pasta a pasta — incluindo o que pertence a cada uma e onde novo código deve
ficar — está em [`docs/folder-structure.md`](./docs/folder-structure.md).

## Documentação

O repositório mantém dois documentos de referência. Eles formam um par: um responde _como as
coisas são nomeadas_, o outro responde _onde as coisas ficam_.

| Documento                                                | Cobre                                                                                                                                                                                                |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`docs/convention.md`](./docs/convention.md)             | Convenções de nomenclatura — regras de caixa para variáveis, constantes, funções, componentes, hooks, utils, assets e nomes de arquivo, com exemplos retirados do código e as exceções documentadas. |
| [`docs/folder-structure.md`](./docs/folder-structure.md) | Organização de pastas — o modelo por tipo/por funcionalidade, o que cada pasta de `src/`, `messages/` e `public/` guarda, e um guia de "Where to Add New Code".                                      |

> Os dois documentos são escritos em inglês, seguindo o padrão do projeto para documentação
> técnica.

## Contato

- **GitHub** — [@felipeFerreiraffl](https://github.com/felipeFerreiraffl)
- **LinkedIn** — [Felipe Ferreira](https://www.linkedin.com/in/felipe-ferreira-959bb8271/)
- **E-mail** — [felipe.ferr.lima04@gmail.com](mailto:felipe.ferr.lima04@gmail.com)
