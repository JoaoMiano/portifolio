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
    { id: 1, title: 'Sistema de Fidelidade', category: "frontend", githubLink: 'https://github.com/JoaoMiano/silcon_front', imageSrc: '/project-images/fidelidade/fidelidadeFront.png', description: "Plataforma em Next.js que permite aos clientes realizar cadastro, login e visualizar prêmios disponíveis para resgate, além de um painel administrativo para a empresa gerenciar o catálogo de prêmios.", demoLink: 'https://www.silconfidelidade.com.br/', skils: ['React', 'NextJs', 'TailwindCSS', 'Typescript'] },
    { id: 2, title: 'Sistema de Fidelidade', category: "backend", githubLink: 'https://github.com/JoaoMiano/silcon_fidelidade_api', imageSrc: '/project-images/fidelidade/fidelidadeBack.jpg', description: "API REST desenvolvida com Node.js, Prisma e PostgreSQL, oferecendo CRUD completo, autenticação via JWT, autorização por nível de usuário, envio de e-mails para redefinição de senha e upload de imagens integrado ao Amazon S3.", demoLink: 'https://www.silconfidelidade.com.br/', skils: ['NodeJs', 'AWS S3', 'Prisma', 'Typescript'] },
    {
        id: 3,
        title: 'Liberi & Meneghetti — Corretora de Seguros',
        category: "frontend",
        githubLink: 'https://github.com/JoaoMiano/hannah-e-liberi',
        imageSrc: '/project-images/liberi-meneghetti/cover.png',
        description: "Site institucional para corretora de seguros desenvolvido com Next.js 16 App Router, com páginas dinâmicas via generateStaticParams, formulário de contato com validação Zod client e server-side, envio de e-mail via Nodemailer, animações de scroll reveal com IntersectionObserver e efeito Sticky Stacking Cards.",
        demoLink: 'https://corretoralm.com.br/',
        skils: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Nodemailer', 'Zod']
    }


]  