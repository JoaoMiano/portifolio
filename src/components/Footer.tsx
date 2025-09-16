import { Geist_Mono } from "next/font/google"
import { Linkedin, Github, Mail, Phone, MapPin, } from "lucide-react"
import { NavItem } from "./navitem";

const geistMono = Geist_Mono({
    subsets: ['latin'],
    weight: ['800'], // ou ['400', '700'] se quiser usar variações
});

export const Footer = () => {

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'joaomiano.dev@gmail.com' },
        { icon: Phone, label: 'Telefone', value: '+55 (11) 97161-1315' },
        { icon: MapPin, label: 'Localização', value: 'Itatiba, SP' },
    ];
    return (
        <footer className="container mx-auto px-8 py-4">
            <div className="flex justify-between gap-8">
                {/* Parte 1 - Sobre */}
                <div className="flex flex-col  gap-4 flex-1">
                    <a href="#home" className={`text-xl md:text-2xl ${geistMono.className} text-primary`}>&lt;Dev/&gt;</a>
                    <p className="text-sm sm:text-md text-foreground">Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.</p>
                    <div className="flex justify-between items-center w-1/2">
                        <a href="https://www.linkedin.com/in/joao-miano/" target="_blank" className="p-2 rounded-full bg-secondary text-primary hover:scale-110 hover:bg-primary hover:text-white transition">
                            <Linkedin className="w-6 h-6 " />
                        </a>
                        <a href="https://github.com/JoaoMiano" target="_blank" className="p-2 rounded-full bg-secondary text-primary hover:scale-110 hover:bg-primary hover:text-white transition">
                            <Github className="w-6 h-6 " />
                        </a>
                        <a href="mailto:joaomiano.dev@gmail.com" className="p-2 rounded-full bg-secondary text-primary hover:scale-110 hover:bg-primary hover:text-white transition">
                            <Mail className="w-6 h-6 " />
                        </a>
                    </div>

                </div>
                {/* Parte 2 - Links*/}

                <div className="flex flex-col gap-4 flex-1">
                    <h5 className="text-lg md:text-xl font-semibold">Links Rápidos</h5>
                    <ul className="space-y-2">
                        <NavItem idSection="home" label="Inicío" />
                        <NavItem idSection="about" label="Sobre" />
                        <NavItem idSection="skils" label="Habilidades" />
                        <NavItem idSection="projects" label="Projetos" />
                        <NavItem idSection="contact" label="Contato" />
                    </ul>

                </div>
                {/* Parte 3 - Contato */}
                <div className="flex flex-col gap-4 flex-1">
                    <h5 className="text-lg md:text-xl font-semibold">Links Rápidos</h5>
                    <ul className="space-y-4">
                        {contactInfo.map((contact) => (
                            <li key={contact.label} className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                                    <contact.icon className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                                    <p className="text-foreground">{contact.value}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </footer>
    )
}