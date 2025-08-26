'use client'

import { motion } from 'motion/react';

type Props = {
    label: string,
    idSection: string
}

export const NavItem = ({ label, idSection }: Props) => {
    return (
        <motion.li

            className="text-md hover:text-primary transition-colors duration-200 relative group"
        >
            <a href={idSection}>
                {label}
                <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full">
                </motion.span>
            </a>

        </motion.li>
    )
}