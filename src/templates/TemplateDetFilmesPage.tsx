"use client"; // For router.back()

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Movie } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Clock, Star, Users, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TemplateDetFilmesPageProps {
  movie: Movie | null;
}

export function TemplateDetFilmesPage({ movie }: TemplateDetFilmesPageProps) {
  const router = useRouter();

  if (!movie) {
    return (
      <div className="text-center py-10 animate-fade-in">
        <h1 className="text-2xl font-bold mb-4">Filme não encontrado</h1>
        <p className="text-muted-foreground mb-6">O filme que você está procurando não existe ou foi removido.</p>
        <Button onClick={() => router.push("/filmes")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Filmes
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <Button onClick={() => router.back()} variant="outline" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>

      <Card className="overflow-hidden shadow-xl">
        <div className="md:flex">
          <div className="md:w-1/3 relative">
            <Image
              src={movie.posterUrl}
              alt={`Pôster do filme ${movie.title}`}
              width={400}
              height={600}
              className="w-full h-auto object-cover md:rounded-l-lg"
              data-ai-hint={movie.dataAiHint || "movie poster detail"}
            />
          </div>
          <div className="md:w-2/3">
            <CardHeader className="p-6">
              <CardTitle className="text-3xl font-bold font-headline text-primary">{movie.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">{movie.genre}</Badge>
                <Badge variant="outline">Classificação: +{movie.ageRating}</Badge>
                {movie.rating && (
                  <Badge variant="default" className="bg-yellow-500 text-white">
                    <Star className="mr-1 h-4 w-4" /> {movie.rating.toFixed(1)}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-3 text-muted-foreground mb-4">
                {movie.duration && (
                  <p className="flex items-center"><Clock className="mr-2 h-4 w-4 text-primary" /> Duração: {movie.duration}</p>
                )}
                {movie.releaseDate && (
                  <p className="flex items-center"><CalendarDays className="mr-2 h-4 w-4 text-primary" /> Lançamento: {new Date(movie.releaseDate).toLocaleDateString('pt-BR')}</p>
                )}
                {movie.director && (
                  <p className="flex items-center"><Video className="mr-2 h-4 w-4 text-primary" /> Diretor: {movie.director}</p>
                )}
                {movie.cast && movie.cast.length > 0 && (
                  <p className="flex items-center"><Users className="mr-2 h-4 w-4 text-primary" /> Elenco: {movie.cast.join(", ")}</p>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 font-headline">Sinopse</h3>
              <p className="text-foreground leading-relaxed">{movie.synopsis}</p>

              {movie.sessions && movie.sessions.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold mt-6 mb-2 font-headline">Sessões Disponíveis</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {movie.sessions.map((session, index) => (
                       <Button key={index} variant="outline" className="w-full">
                         {session.time} - {session.type} ({session.room})
                       </Button>
                    ))}
                  </div>
                   <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">Comprar Ingressos</Button>
                </>
              )}
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
