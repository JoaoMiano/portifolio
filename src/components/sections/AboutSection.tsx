'use client'

import { motion } from 'motion/react'
import { TitleSection } from "../TitleSection"
import { AboutCard } from '../AboutCard'
import { AppWindow, RocketIcon, UsersRound, ShieldCheck } from 'lucide-react'

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="container mx-auto px-8 mb-8"
        >
            <TitleSection title="Sobre Mim" />

            <div
                className="flex flex-col md:flex-row justify-center gap-4"
            >
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className='space-y-4 flex-1'
                >
                    <h4
                        className="text-start text-2xl text-black font-semibold dark:text-white"
                    >
                        Desenvolvedor Full Stack Junior
                    </h4>

                    <p className='text-foreground text-md md:text-lg'>Sou um desenvolvedor Full Stack com 2 anos de experiência prática no desenvolvimento de soluções web. Atualmente cursando o 3º semestre de Análise e Desenvolvimento de Sistemas na Faculdade São Francisco, combino conhecimento acadêmico com experiência real de mercado.</p>
                    <p className='text-foreground text-md md:text-lg'>Durante minha trajetória, desenvolvi projetos freelancer que me proporcionaram experiência valiosa em React, NextJS, Node.js, TypeScript e bancos de dados. Cada projeto me ensinou a importância do profissionalismo, prazos e comunicação eficiente com clientes.</p>
                    <p className='text-foreground text-md md:text-lg'>Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente. Meu foco está em escrever código limpo, seguir boas práticas e contribuir para projetos que façam a diferença na experiência dos usuários.</p>

                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto'
                >
                    <AboutCard icon={AppWindow} label='2' description='Projetos Entregues' />
                    <AboutCard icon={UsersRound} label='2' description='Clientes' />
                    <AboutCard icon={RocketIcon} label='2' description='Anos de Experiência' />
                    <AboutCard icon={ShieldCheck} label='10' description='Tecnologias Utilizadas' />
                </motion.div>
            </div>
        </section>

    )
}