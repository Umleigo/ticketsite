"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Film, Home, Mail } from "lucide-react"; // Added icons
import { usePathname } from "next/navigation"; // To highlight active link
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Início", icon: <Home className="h-4 w-4" /> },
  { href: "/filmes", label: "Filmes", icon: <Film className="h-4 w-4" /> },
  { href: "/contato", label: "Contato", icon: <Mail className="h-4 w-4" /> },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className={cn("flex items-center gap-4", mobile ? "flex-col space-y-2 mt-6" : "space-x-1")}>
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          asChild
          className={cn(mobile ? "w-full justify-start" : "", "text-sm font-medium transition-colors hover:text-primary")}
        >
          <Link href={item.href} className="flex items-center gap-2">
            {item.icon}
            {item.label}
          </Link>
        </Button>
      ))}
    </nav>
  );
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary font-headline">
          TicketOnline
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <div className="mt-6">
                 <NavLinks mobile />
                </div>
                 <div className="absolute bottom-4 right-4">
                    <ThemeToggle />
                 </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
