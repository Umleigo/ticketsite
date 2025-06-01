import { TemplateDetFilmesPage } from "@/templates/TemplateDetFilmesPage";
import { getMovieById } from "@/lib/mockData";
import type { Movie } from "@/lib/types";

interface MovieDetailsPageProps {
  params: { id: string };
}

// This function could be async if fetching data from an API
function findMovie(id: string): Movie | null {
  const movie = getMovieById(id);
  return movie || null;
}

export async function generateMetadata({ params }: MovieDetailsPageProps) {
  const movie = findMovie(params.id);
  if (!movie) {
    return {
      title: "Filme não encontrado",
    };
  }
  return {
    title: `${movie.title} - TicketOnline`,
    description: movie.synopsis.substring(0, 160),
  };
}


export default function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  const movie = findMovie(params.id);
  return <TemplateDetFilmesPage movie={movie} />;
}
