import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ticket } from "lucide-react";

export function TemplateInicioPage() {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <div className="relative w-full max-w-4xl h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl mb-8">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjieUquejP5IC70dRHyoilUin8vtTCa0GPUDh14fWxA0OnHU6Gz53R08J1lx-KoKHiD4&usqp=CAU"
          alt="Fachada de um cinema moderno e iluminado à noite"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105"
          data-ai-hint="cinema facade night"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-headline shadow-text">
            Bem-vindo ao TicketOnline!
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 shadow-text max-w-2xl">
            Sua jornada para o mundo mágico do cinema começa aqui. Explore os últimos lançamentos e garanta seu ingresso!
          </p>
        </div>
      </div>
      
      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
        <Link href="/filmes">
          <Ticket className="mr-2 h-5 w-5" />
          Ver Filmes em Cartaz
        </Link>
      </Button>
    </div>
  );
}
