export type SkilsTech = {
    name: string;
    logo: string;
    category: 'frontend' | 'backend' | 'devops'
}

export const technologies: SkilsTech[] = [
    //Frontend
    { name: 'HTML', logo: '/html.svg', category: "frontend" },
    { name: 'CSS', logo: '/css.svg', category: "frontend" },
    { name: 'Javascript', logo: '/javascript.svg', category: "frontend" },
    { name: 'Typescript', logo: '/typescript.svg', category: "frontend" },
    { name: 'React', logo: '/react.svg', category: "frontend" },
    { name: 'NextJs', logo: '/nextjs.svg', category: "frontend" },
    { name: 'TailwindCSS', logo: '/tailwind.svg', category: "frontend" },
    { name: 'Figma', logo: '/figma.svg', category: "frontend" },

    //Backend
    { name: 'NodeJs', logo: '/nodejs.svg', category: "backend" },
    { name: 'ExpressJs', logo: '/expressjs.svg', category: "backend" },
    { name: 'Prisma', logo: '/prisma.svg', category: "backend" },
    { name: 'PostgreeSQL', logo: '/postgresql.svg', category: "backend" },

    //Devops
    { name: 'Git', logo: '/git.svg', category: "devops" },
    { name: 'GitHub', logo: '/github.svg', category: "devops" },
    { name: 'AWS', logo: '/aws.svg', category: "devops" },
    { name: 'Vercel', logo: '/vercel.svg', category: "devops" },

]

export const categoryLabels = {
    frontend: "Front-end",
    backend: "Back-end",
    devops: "DevOps",
}

export const BackendSkils:SkilsTech[] = [
    { name: 'NodeJs', logo: '/nodejs.svg', category: "backend" },
    { name: 'ExpressJs', logo: '/expressjs.svg', category: "backend" },
    { name: 'Prisma', logo: '/prisma.svg', category: "backend" },
    { name: 'PostgreeSQL', logo: '/postgresql.svg', category: "backend" },
    
]