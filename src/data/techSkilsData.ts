export type SkilsTech = {
    name: string;
    logo: string;
    category: 'frontend' | 'backend' | 'devops'
}

export const technologies: SkilsTech[] = [
    //Frontend
    { name: 'HTML', logo: '/stacks/html.svg', category: "frontend" },
    { name: 'CSS', logo: '/stacks/css.svg', category: "frontend" },
    { name: 'Javascript', logo: '/stacks/javascript.svg', category: "frontend" },
    { name: 'Typescript', logo: '/stacks/typescript.svg', category: "frontend" },
    { name: 'React', logo: '/stacks/react.svg', category: "frontend" },
    { name: 'NextJs', logo: '/stacks/nextjs.svg', category: "frontend" },
    { name: 'TailwindCSS', logo: '/stacks/tailwind.svg', category: "frontend" },
    { name: 'Figma', logo: '/stacks/figma.svg', category: "frontend" },

    //Backend
    { name: 'NodeJs', logo: '/stacks/nodejs.svg', category: "backend" },
    { name: 'ExpressJs', logo: '/stacks/expressjs.svg', category: "backend" },
    { name: 'Prisma', logo: '/stacks/prisma.svg', category: "backend" },
    { name: 'PostgreeSQL', logo: '/stacks/postgresql.svg', category: "backend" },

    //Devops
    { name: 'Git', logo: '/stacks/git.svg', category: "devops" },
    { name: 'GitHub', logo: '/stacks/github.svg', category: "devops" },
    { name: 'AWS', logo: '/stacks/aws.svg', category: "devops" },
    { name: 'Vercel', logo: '/stacks/vercel.svg', category: "devops" },

]

export const categoryLabels = {
    frontend: "Front-end",
    backend: "Back-end",
    devops: "DevOps",
}

export const BackendSkils:SkilsTech[] = [
    { name: 'NodeJs', logo: '/stacks/nodejs.svg', category: "backend" },
    { name: 'ExpressJs', logo: '/stacks/expressjs.svg', category: "backend" },
    { name: 'Prisma', logo: '/stacks/prisma.svg', category: "backend" },
    { name: 'PostgreeSQL', logo: '/stacks/postgresql.svg', category: "backend" },
    
]