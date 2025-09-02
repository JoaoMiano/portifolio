'use client'

import { SkilsTech } from "@/data/techSkilsData"
import { Card, CardContent } from "./ui/card"

export const TechCard = ({tech}: {tech: SkilsTech}) => {
    return (
        <Card className="h-44 w-full bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl shadow-lg">
            <CardContent className="flex flex-col items-center justify-center h-full  gap-3">
                <div className="relative rounded-lg">
                    <img src={tech.logo || "/placeholder.svg"} alt={`${tech.name} logo`} className="w-24 h-24 object-contain" />
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-lg md:text-2xl text-black/90 dark:text-white/70 mb-2">{tech.name}</h3>
                </div>
            </CardContent>
        </Card>
    )
}