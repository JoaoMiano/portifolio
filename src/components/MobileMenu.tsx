import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Menu } from "lucide-react"; // Ícone dos traços (hambúrguer)


const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
};

export default function MobileMenu() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="w-6 h-6" />
                </Button>
            </DrawerTrigger>

            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <nav className="flex flex-col space-y-4 px-4 pb-6">
                    {/* Cada botão chama a função scroll */}
                    <DrawerClose asChild>
                        <Button
                            variant="link"
                            className="justify-start"
                            onClick={() => scrollToSection("home")}
                        >
                            Início
                        </Button>
                    </DrawerClose>

                    <DrawerClose asChild>
                        <Button
                            variant="link"
                            className="justify-start"
                            onClick={() => scrollToSection("about")}
                        >
                            Sobre
                        </Button>
                    </DrawerClose>

                    <DrawerClose asChild>
                        <Button
                            variant="link"
                            className="justify-start"
                            onClick={() => scrollToSection("skils")}
                        >
                            Habilidades
                        </Button>
                    </DrawerClose>

                    <DrawerClose asChild>
                        <Button
                            variant="link"
                            className="justify-start"
                            onClick={() => scrollToSection("projects")}
                        >
                            Projetos
                        </Button>
                    </DrawerClose>

                    <DrawerClose asChild>
                        <Button
                            variant="link"
                            className="justify-start"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contato
                        </Button>
                    </DrawerClose>
                </nav>
            </DrawerContent>
        </Drawer>
    );
}
