import { z } from "zod"

const formContactSchema = z.object({
    name: z
        .string({ message: 'Nome obrigatório' })
        .min(3, 'Nome deve conter no minimo 3 letras.')
        .regex(/^[A-Za-zÀ-ÿ\s]+$/, {
            message: 'O nome deve conter apenas letras.'
        }),
    email: z
        .email("E-mail inválido")
        .nonempty("Email obrigatório"),

    subject: z
        .enum([
            "Oportunidade de trabalho",
            "Parceria",
            "Dúvida sobre projeto",
            "Outro assunto",
        ]),
    message: z
        .string()
        .nonempty("Campo obrigatório")
        .min(10, "Minimo de 10 caracteres")
})