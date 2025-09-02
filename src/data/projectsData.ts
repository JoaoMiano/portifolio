export type Project = {
    id: number;
    title: string;
    imageSrc: string;
    description: string;
    githubLink: string;
    demoLink: string;
    skils: string[];
    category: 'frontend' | 'backend'

}

export const ProjectsData: Project[] = [
    { id: 1, title: 'Sistema de Fidelidade', category: "frontend", githubLink: 'https://github.com/JoaoMiano/silcon_front', imageSrc: '/fidelidadeFront.png', description: "Plataforma em Next.js que permite aos clientes realizar cadastro, login e visualizar prêmios disponíveis para resgate, além de um painel administrativo para a empresa gerenciar o catálogo de prêmios.", demoLink: 'https://www.silconfidelidade.com.br/', skils: ['React', 'NextJs', 'TailwindCSS', 'Typescript'] },
    { id: 2, title: 'Sistema de Fidelidade', category: "backend", githubLink: 'https://github.com/JoaoMiano/silcon_fidelidade_api', imageSrc: '/fidelidadeBack.jpg', description: "API REST desenvolvida com Node.js, Prisma e PostgreSQL, oferecendo CRUD completo, autenticação via JWT, autorização por nível de usuário, envio de e-mails para redefinição de senha e upload de imagens integrado ao Amazon S3.", demoLink: 'https://www.silconfidelidade.com.br/', skils: ['NodeJs', 'AWS S3', 'Prisma', 'Typescript'] }
]  