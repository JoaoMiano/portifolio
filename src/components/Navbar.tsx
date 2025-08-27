'use client'

import { ThemeToogle } from "./theme-toogle"
import { Geist_Mono } from 'next/font/google'
import { motion } from 'motion/react';
import { NavItem } from "./ui/navitem";
import MobileMenu from "./MobileMenu";

const geistMono = Geist_Mono({
    subsets: ['latin'],
    weight: ['800'], // ou ['400', '700'] se quiser usar variações
});


export const Navbar = () => {
    return (
        
        <nav className="backdrop-blur-sm fixed top-0 w-full border-b-1 py-4 md:py-8 ">
            <motion.div
                className="container mx-auto px-8 flex justify-between items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className={`text-2xl md:text-4xl ${geistMono.className} text-primary`}>
                    <a href="#home">&lt;Dev/&gt;</a>
                </div>
                {/* Desktop nav */}
                <div className="hidden md:block text-xl">
                    <ul className="flex gap-8">
                        <NavItem idSection="home" label="Inicío" />
                        <NavItem idSection="About" label="Sobre" />
                        <NavItem idSection="skils" label="Habilidades" />
                        <NavItem idSection="projects" label="Projetos" />
                        <NavItem idSection="contact" label="Contato" />
                    </ul>
                </div>
                <div className="space-x-2">
                    <ThemeToogle />
                    <MobileMenu />
                </div>

            </motion.div>


        </nav>
    )
}