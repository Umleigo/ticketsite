import { TemplateContatoPage } from "@/templates/TemplateContatoPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - TicketOnline',
  description: 'Entre em contato com a TicketOnline para dúvidas, sugestões ou suporte.',
};

export default function ContactPage() {
  return <TemplateContatoPage />;
}
