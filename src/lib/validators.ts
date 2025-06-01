import { z } from "zod";

export const contactFormSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um endereço de email válido." }).min(1, { message: "O campo email é obrigatório." }),
  subject: z.string().min(3, { message: "O assunto deve ter pelo menos 3 caracteres." }).max(100, { message: "O assunto não pode exceder 100 caracteres." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }).max(1000, { message: "A mensagem não pode exceder 1000 caracteres." }),
  urgency: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
