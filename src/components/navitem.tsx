'use client'

import { motion } from 'motion/react';

type Props = {
    label: string,
    idSection: string
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    // pega a altura do navbar (pode ser dinamicamente, se tiver id/class nele)
    const navbarHeight =
      window.innerWidth >= 768 ? 88 : 56; // md:h-14 = 56px, h-10 = 40px

    const y =
      el.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};


export const NavItem = ({ label, idSection }: Props) => {
    return (
        <motion.li
            onClick={() => scrollToSection(idSection)}
            className="text-md hover:text-primary transition-colors duration-200 relative group cursor-pointer"
        >
            <p>
                {label}
                <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full">
                </motion.span>
            </p>

        </motion.li>
    )
}