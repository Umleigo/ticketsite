export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} TicketOnline. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
