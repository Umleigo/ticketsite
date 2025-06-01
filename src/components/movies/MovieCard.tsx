"use client";

import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ticket } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out animate-fade-in">
      <CardHeader className="p-0 relative">
        <Link href={`/filmes/${movie.id}`} aria-label={`Ver mais sobre ${movie.title}`}>
          <Image
            src={movie.posterUrl}
            alt={`Pôster do filme ${movie.title}`}
            width={300}
            height={450}
            className="w-full h-auto object-cover aspect-[2/3] transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={movie.dataAiHint || "movie poster"}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/filmes/${movie.id}`} className="hover:text-primary transition-colors">
          <CardTitle className="text-lg font-headline mb-2 truncate" title={movie.title}>{movie.title}</CardTitle>
        </Link>
        <div className="space-x-2 mb-2">
            <Badge variant="secondary">{movie.genre}</Badge>
            <Badge variant="outline">+{movie.ageRating}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {movie.synopsis}
        </p>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/filmes/${movie.id}`}>
            <Ticket className="mr-2 h-4 w-4" />
            Ver Mais
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
