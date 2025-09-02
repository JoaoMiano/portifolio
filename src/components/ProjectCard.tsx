'use client'

import { Project } from "@/data/projectsData"
import { Github, PlayIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Card className="w-full max-w-lg p-0 group overflow-hidden border-2 border-borderb bg-secondary hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge
                    className={`absolute top-2 right-2 text-sm sm:text-md text-white ${project.category === 'frontend' ? 'bg-chart-1' : 'bg-chart-2'}`}
                >
                    {project.category === 'frontend' ? 'Frontend' : 'Backend'}
                </Badge>
            </div>

            <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-semibold">
                    {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-md">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-2">
                {project.skils.map((e, i) => (
                    <Badge
                        key={i}
                        className="bg-primary/10 text-primary text-xs sm:text-sm"
                    >
                        {e}
                    </Badge>
                ))}
            </CardContent>

            <CardFooter className="w-full flex flex-row  gap-3 sm:gap-4 justify-between items-stretch sm:items-center pb-4">
                <a href={project.githubLink} className="flex-1">
                    <Button
                        className="cursor-pointer w-full"
                        variant={"outline"}
                    >
                        <Github className="w-4 h-4" />
                        Código
                    </Button>
                </a>

                <a href={project.demoLink} className="flex-1">
                    <Button
                        className="cursor-pointer w-full"
                        variant={"ghost"}
                    >
                        <PlayIcon className="w-4 h-4" />
                        Demo
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}
