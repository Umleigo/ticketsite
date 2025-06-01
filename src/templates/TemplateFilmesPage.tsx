import type { Movie } from "@/lib/types";
import { MovieCard } from "@/components/movies/MovieCard";

interface TemplateFilmesPageProps {
  movies: Movie[];
}

export function TemplateFilmesPage({ movies }: TemplateFilmesPageProps) {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-8 text-center font-headline text-primary">Filmes em Cartaz</h1>
      {movies.length === 0 ? (
        <p className="text-center text-muted-foreground">Nenhum filme em cartaz no momento.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
