'use client'

import { motion } from 'motion/react'
import { TitleSection } from "../TitleSection"
import { ProjectCard } from "@/components/ProjectCard"
import { ProjectsData } from "@/data/projectsData"

export const ProjectsSection = () => {
    return (
        <motion.section
            viewport={{ once: true, amount: 0.2 }}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            id="projects"
        >
            <div className="container mx-auto px-8">
                <TitleSection title="Projetos" />
                <p className="text-lg md:text-xl text-foreground text-center pb-8">
                    Uma seleção dos meus projetos mais recentes, demonstrando diferentes tecnologias e soluções
                </p>
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {ProjectsData.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </motion.section>

    )
}