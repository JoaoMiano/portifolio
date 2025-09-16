'use client'

import { AboutCard } from "../AboutCard"
import { ContactForm } from "../ContactForm";
import { TitleSection } from "../TitleSection"
import { Linkedin, Github, Mail, } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="bg-secondary mt-8"
        >
            <div className="container mx-auto px-8">
                <TitleSection title="Entre em Contato!" />
                <p
                    className="text-foreground text-xl md:text-3xg text-center mb-8"
                >
                    Estou disponível para novas oportunidades e parcerias. <br />
                    Entre em contato através dos canais abaixo ou me envie um e-mail diretamente.
                </p>
                <div
                    className="flex flex-col md:flex-row gap-2 md:gap-4"
                >
                    {/* Links */}
                    <div
                        className=" p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 flex-1"
                    >
                        <AboutCard label="Likedin" description="Perfil Profissional" icon={Linkedin} link="https://www.linkedin.com/in/joao-miano/" />
                        <AboutCard label="Github" description="Meus Projetos" icon={Github} link="https://github.com/JoaoMiano" />
                        <AboutCard label="Email" description="joaomiano.dev@gmail.com" icon={Mail} link="mailto:joaomiano.dev@gmail.com" />
                        <AboutCard label="WhatsApp" description="+55(11)971611315" icon={FaWhatsapp} link="https://wa.me/5511971611315" />
                    </div>

                    {/* Divider */}

                    <div
                        className="flex md:flex-col items-center gap-1 py-2 md:py-4"
                    >
                        <div className="flex-1 h-1 m-0 md:w-1 md:h-0 bg-muted-foreground"></div>
                        <span className="text-muted-foreground text-lg md:text-xl">OU</span>
                        <div className="flex-1 h-1 m-0  md:w-1 md:h-0 bg-muted-foreground"></div>
                    </div>

                    {/* Formulariuo */}

                    <div className="flex-1 p-2 md:p-4 ">
                        <ContactForm />
                    </div>
                </div>

            </div>
        </section>
    )
}