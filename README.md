# My Finance — Sistema de Controle Financeiro

> Aplicação web full-stack para gerenciamento financeiro pessoal com dashboard interativo, autenticação de usuários e visualização de dados em tempo real.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

---

## Sobre o Projeto

**My Finance** é um sistema de controle financeiro pessoal desenvolvido com foco em boas práticas de arquitetura Front-End. Permite que usuários registrem receitas e despesas, visualizem gráficos de distribuição e acompanhem seu saldo com uma interface moderna e responsiva.

O projeto contempla integração com API própria, persistência de dados com PostgreSQL via Prisma ORM e autenticação com Context API.

---

## Funcionalidades

- Cadastro e autenticação de usuários
- Registro de receitas e despesas
- Listagem de transações com tabela dinâmica
- Dashboard com gráficos de pizza e barras (Recharts)
- Filtros por tipo, categoria e data
- Interface responsiva e moderna
- Suporte a múltiplos usuários

---

## Stack Técnica

| Camada | Tecnologias |
|--------|-------------|
| Front-End | Next.js (App Router), React, TypeScript |
| Estilização | TailwindCSS, ShadCN UI |
| Gráficos | Recharts |
| Back-End / API | Next.js API Routes |
| Banco de Dados | PostgreSQL + Prisma ORM |
| HTTP Client | Axios |
| Autenticação | Context API |

---

## Rotas da API

```
POST   /auth/login
POST   /auth/register
GET    /transactions
POST   /transactions
DELETE /transactions/:id
```

---

## Estrutura do Projeto

```
src/
 ├── app/
 ├── components/
 ├── context/
 ├── hooks/
 ├── lib/
 ├── pages/
 ├── services/
 └── styles/
```

---

## Como Rodar Localmente

**Pré-requisitos:** Node.js e PostgreSQL instalados.

```bash
# 1. Clonar o repositório
git clone https://github.com/JoaoMiano/my-finance.git
cd my-finance

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
# Crie um arquivo .env na raiz com:
DATABASE_URL=postgresql://usuario:senha@endereco:porta/banco
JWT_SECRET=qualquer_string_segura

# 4. Rodar as migrations
npx prisma migrate dev

# 5. Iniciar o servidor
npm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## Autor

**João Miano** — Desenvolvedor Front-End

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/joaomiano)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/JoaoMiano)
[![Portfólio](https://img.shields.io/badge/Portf%C3%B3lio-FF5722?style=flat&logo=google-chrome&logoColor=white)](https://joaomiano.dev)
