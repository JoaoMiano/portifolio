'use client'

import { Download, Github, Linkedin } from "lucide-react"
import { Button } from "./ui/button"
import { Geist_Mono } from "next/font/google";
import { motion } from 'motion/react'

const geistMono = Geist_Mono({
    subsets: ['latin'],
    weight: ['800'], // ou ['400', '700'] se quiser usar variações
});

export const HeroSection = () => {


    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-24 "
        >
            <div className="container mx-auto px-8">
                <div
                    className="flex flex-col md:flex-row justify-between gap-8 md:gap-80 items-center"
                >
                    {/* Apresentaçao */}
                    <motion.div
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <div className="flex flex-col gap-3 md:gap-6">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-sm md:text-md"
                            >
                                Olá, eu sou,
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: +10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className={`text-4xl md:text-7xl ${geistMono.className} text-primary`}
                            >
                                João Miano
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: +10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="text-2xl md:text-4xl text-muted-foreground font-semibold"
                            >
                                Desenvolvedor Fullstack
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: +10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="text-lg md:text-xl"
                            >
                                Dominío de <span className="font-semibold text-primary" >React</span>, <span className="font-semibold text-primary" >Node.js</span> e tecnologias modernas, como <span className="font-semibold text-primary" >Tailwind</span> e <span className="font-semibold text-primary" >Typescript</span>.
                                Transformo problemas em soluções digitais.
                            </motion.p>
                        </div>


                        <motion.div
                            className="flex flex-col gap-4 justify-center lg:justify-start my-4"
                            initial={{ opacity: 0, y: +10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <a href="/Curriculo.pdf" download={'Currículo_Joao_Miano.pdf'}>
                                <Button
                                    variant={"outline"}
                                    className="mx-auto cursor-pointer md:mx-0 max-w-min bg-primary hover:bg-primary/90 text-primary-foreground hover:text-primary-foreground/90 px-6 py-3 dark:text-foreground dark:bg-primary hover:dark:bg-primary/90"
                                >
                                    <Download className="mr-3" />
                                    Download CV
                                </Button>
                            </a>

                            <div>
                                <a href="https://github.com/JoaoMiano" target="_blank">
                                    <Button variant="ghost" size="icon" className="hover:text-primary cursor-pointer">
                                        <Github className="w-5 h-5" />
                                    </Button>
                                </a>

                                <a href="https://www.linkedin.com/in/joao-miano/" target="_blank">
                                    <Button variant="ghost" size="icon" className="hover:text-primary cursor-pointer">
                                        <Linkedin className="w-5 h-5" />
                                    </Button>
                                </a>
                            </div>

                        </motion.div>

                    </motion.div>

                    {/* Foto de perfil */}
                    <div
                        className="order-1 lg:order-2 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="w-60 h-60 md:w-full md:h-full rounded-full bg-violet-100 dark:bg-violet-300"
                            style={{ boxShadow: '0 0 20px #8B53F1' }}
                        >
                            <img src="/perfil.png" alt="" className="rounded-full p-2" />
                        </motion.div>
                    </div>
                </div>

            </div>


        </section>
    )
}