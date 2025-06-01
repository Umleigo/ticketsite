import { ContactForm } from "@/components/contact/ContactForm";

export function TemplateContatoPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-4 text-center font-headline text-primary">Entre em Contato</h1>
      <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
        Tem alguma dúvida, sugestão ou precisa de ajuda? Preencha o formulário abaixo e nossa equipe responderá o mais breve possível.
      </p>
      <ContactForm />
    </div>
  );
}
