import { zodResolver } from "@hookform/resolvers/zod"
import { FormContact, formContactSchema } from "@/schemas/formContatcSchema"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export const ContactForm = () => {

    const form = useForm<FormContact>({
        resolver: zodResolver(formContactSchema),
        defaultValues: {
            email: "",
            message: "",
            name: "",
            subject: "Oportunidade de trabalho",
        }
    })

    const onSubmit = (data: FormContact) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-4 "
            >
                {/* Primeira linha: Nome e Email */}
                <div className="flex flex-col md:flex-row md:gap-4">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite seu nome." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="flex-1 mt-4 md:mt-0">
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite seu e-mail." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Assunto */}
                <FormField
                    name="subject"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Assunto</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Assunto" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Oportunidade de trabalho">
                                            Oportunidade de trabalho
                                        </SelectItem>
                                        <SelectItem value="Parceria">Parceria</SelectItem>
                                        <SelectItem value="Dúvida sobre projeto">
                                            Dúvida sobre projeto
                                        </SelectItem>
                                        <SelectItem value="Outro assunto">Outro assunto</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Mensagem */}
                <FormField
                    name="message"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="flex flex-col flex-1">
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Escreva sua mensagem aqui..." {...field}  className="min-h-44"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Botão de enviar */}
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-primary rounded hover:bg-primary/80 cursor-pointer transition"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </Form>


    )
}