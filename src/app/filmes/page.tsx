import { TemplateFilmesPage } from "@/templates/TemplateFilmesPage";
import { mockMovies } from "@/lib/mockData";
import type { Movie } from "@/lib/types";

// This function could be async if fetching data from an API
function getMovies(): Movie[] {
  return mockMovies;
}

export default function MoviesPage() {
  const movies = getMovies();
  return <TemplateFilmesPage movies={movies} />;
}
