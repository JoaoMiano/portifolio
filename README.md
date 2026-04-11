<h1 align="center">
  João Miano — Portfólio
</h1>

<p align="center">
  Portfólio pessoal desenvolvido com Next.js 15, React 19 e TypeScript — apresentando projetos, habilidades e informações de contato.
</p>

<p align="center">
  <a href="https://github.com/JoaoMiano/portifolio"><img src="https://img.shields.io/badge/GitHub-Repositório-181717?style=flat&logo=github" alt="GitHub"/></a>
  <a href="https://www.linkedin.com/in/joao-miano/"><img src="https://img.shields.io/badge/LinkedIn-João%20Miano-0A66C2?style=flat&logo=linkedin" alt="LinkedIn"/></a>
  <img src="https://img.shields.io/badge/Status-Online-22c55e?style=flat" alt="Status"/>
</p>

---

## Visão Geral

Este projeto é o portfólio profissional de **João Miano**, desenvolvedor Full Stack com 2 anos de experiência prática. O portfólio foi construído do zero com foco em performance, acessibilidade e design moderno, com suporte a dark/light mode, animações fluidas e navegação suave por seções.

---

## Seções

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação com nome, cargo, foto, links para CV, GitHub e LinkedIn |
| **Sobre** | Trajetória profissional, experiência e estatísticas |
| **Habilidades** | Stack técnica organizada em carrosséis interativos (Frontend / Backend / DevOps) |
| **Projetos** | Cards com imagem, descrição, tecnologias, link do repositório e demo |
| **Contato** | Formulário validado com envio por e-mail + links de contato direto |

---

## Stack

### Front-End
![Next.js](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS%20v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### Componentes & UI
![ShadCN](https://img.shields.io/badge/ShadCN%20UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=for-the-badge&logo=radixui&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide%20Icons-F56565?style=for-the-badge&logo=lucide&logoColor=white)

### Animações & Carrossel
![Motion](https://img.shields.io/badge/Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)

### Formulário & Validação
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-22B573?style=for-the-badge&logo=gmail&logoColor=white)

---

## Projetos em Destaque

### Sistema de Fidelidade — Frontend
> Plataforma de fidelização de clientes com painel administrativo completo.

- Cadastro e login de clientes
- Resgate de recompensas
- Painel admin para gerenciamento
- **Stack:** Next.js · TypeScript · TailwindCSS · React
- [Repositório](https://github.com/JoaoMiano/silcon_front) · [Demo ao vivo](https://www.silconfidelidade.com.br/)

---

### Sistema de Fidelidade — Backend
> API REST robusta com autenticação JWT, upload de imagens e envio de e-mails.

- CRUD completo de usuários e recompensas
- Autenticação e autorização via JWT
- Upload de imagens para AWS S3
- Envio de e-mail para redefinição de senha
- **Stack:** Node.js · TypeScript · Prisma · PostgreSQL · AWS S3
- [Repositório](https://github.com/JoaoMiano/silcon_fidelidade_api) · [Demo ao vivo](https://www.silconfidelidade.com.br/)

---

## Funcionalidades do Portfólio

- **Dark / Light Mode** — alternância automática com preferência do sistema
- **Responsivo** — layout adaptado para mobile, tablet e desktop
- **Animações** — efeitos de entrada e scroll com a biblioteca Motion
- **Formulário de contato** — validação com Zod + envio real via Nodemailer
- **Navegação suave** — scroll entre seções com links da Navbar
- **Menu mobile** — Drawer acessível via Radix UI/Vaul

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz com ThemeProvider
│   ├── page.tsx            # Página principal (composição das seções)
│   └── globals.css         # Estilos globais e tokens CSS
├── components/
│   ├── sections/           # Seções da página (Hero, About, Skills, Projects, Contact)
│   ├── ui/                 # Componentes base (shadcn/ui)
│   ├── Navbar.tsx
│   ├── MobileMenu.tsx
│   ├── ProjectCard.tsx
│   ├── TechCard.tsx
│   ├── SkilsCarousel.tsx
│   └── Footer.tsx
├── data/
│   ├── projectsData.ts     # Dados dos projetos
│   └── techSkilsData.ts    # Dados das tecnologias
├── schemas/
│   └── formContatcSchema.ts # Validação Zod do formulário
└── lib/
    └── utils.ts
```

---

## Como Rodar Localmente

```bash
# 1. Clonar o repositório
git clone https://github.com/JoaoMiano/portifolio.git
cd portifolio

# 2. Instalar dependências
npm install

# 3. Iniciar em desenvolvimento
npm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

> Para habilitar o envio de e-mails pelo formulário de contato, configure as variáveis de ambiente para o Nodemailer.

---

## Autor

**João Miano** — Desenvolvedor Full Stack

Estudante de Análise e Desenvolvimento de Sistemas (3º semestre) com 2 anos de experiência prática em desenvolvimento web. Atuei em projetos freelance com clientes reais, do levantamento de requisitos ao deploy.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-joao--miano-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/joao-miano/)
[![GitHub](https://img.shields.io/badge/GitHub-JoaoMiano-181717?style=flat&logo=github)](https://github.com/JoaoMiano)
[![Email](https://img.shields.io/badge/Email-joaomiano.dev%40gmail.com-EA4335?style=flat&logo=gmail)](mailto:joaomiano.dev@gmail.com)
