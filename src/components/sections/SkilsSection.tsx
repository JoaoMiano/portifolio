'use client'
import { motion } from 'motion/react'
import { technologies } from "@/data/techSkilsData"
import { TitleSection } from '../TitleSection'
import { SkilsCarousel } from '../SkilsCarousel'


export const SkilsSection = () => {
    // duplica os itens caso o tamanho for menos que 6 para nao quebrar o careousel
    const ensureMinSlides = (techs: typeof technologies) => {
        return techs.length < 6 ? [...techs, ...techs] : techs
    }

    const frontendTechs = ensureMinSlides(
        technologies.filter((tech) => tech.category === "frontend")
    )
    const backendTechs = ensureMinSlides(
        technologies.filter((tech) => tech.category === "backend")
    )
    const devopsTechs = ensureMinSlides(
        technologies.filter((tech) => tech.category === "devops")
    )

    return (
        <section className="bg-secondary" id="skils">
            <div className="container mx-auto px-8">
                <TitleSection title="Habilidades" />
                <motion.p
                    className="text-foreground/80 text-center pb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true, amount: 0.6 }}
                >
                    Stack tecnológico que utilizo para desenvolver soluções web completas
                </motion.p>

                <div className="flex flex-col md:flex-row justify-between">
                    <SkilsCarousel category="frontend" techs={frontendTechs} />
                    <SkilsCarousel category="backend" techs={backendTechs} />
                    <SkilsCarousel category="devops" techs={devopsTechs} />
                </div>
            </div>
        </section>
    )
}
