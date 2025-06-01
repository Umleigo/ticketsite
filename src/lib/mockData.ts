import type { Movie } from "./types";

export const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Aventura Intergaláctica",
    genre: "Ficção Científica",
    ageRating: "12",
    posterUrl: "https://placehold.co/300x450.png",
    dataAiHint: "space adventure",
    synopsis: "Uma tripulação audaciosa embarca em uma jornada perigosa para explorar os confins do universo e descobrir um segredo que pode mudar o destino da humanidade.",
    duration: "2h 15m",
    releaseDate: "2024-03-10",
    director: "Elara Vance",
    cast: ["Orion Pax", "Lyra Nova", "Sirius Rex"],
    rating: 4.5,
    sessions: [
      { time: "14:00", room: "Sala 1", type: "3D" },
      { time: "17:00", room: "Sala 1", type: "3D" },
      { time: "20:00", room: "Sala VIP", type: "IMAX" },
    ]
  },
  {
    id: "2",
    title: "O Segredo da Floresta Encantada",
    genre: "Fantasia",
    ageRating: "Livre",
    posterUrl: "https://placehold.co/300x450.png",
    dataAiHint: "enchanted forest",
    synopsis: "Dois irmãos descobrem um portal para um mundo mágico escondido em uma floresta ancestral, onde criaturas míticas e desafios inesperados os aguardam.",
    duration: "1h 45m",
    releaseDate: "2024-04-05",
    director: "Arthur Pendragon",
    cast: ["Luna Evergreen", "Jasper Stone", "Fiona Whisperwind"],
    rating: 4.2,
     sessions: [
      { time: "13:00", room: "Sala 2", type: "2D" },
      { time: "15:30", room: "Sala 2", type: "2D" },
    ]
  },
  {
    id: "3",
    title: "Código Vermelho: Missão Impossível",
    genre: "Ação",
    ageRating: "16",
    posterUrl: "https://placehold.co/300x450.png",
    dataAiHint: "action spy",
    synopsis: "Um agente secreto de elite precisa impedir uma organização terrorista global de lançar uma arma devastadora, em uma corrida contra o tempo cheia de reviravoltas.",
    duration: "2h 05m",
    releaseDate: "2024-02-20",
    director: "Victoria Steele",
    cast: ["Ethan Blade", "Seraphina Rogue", "Marcus 'Cipher' Kane"],
    rating: 4.8,
    sessions: [
      { time: "16:00", room: "Sala 3", type: "IMAX" },
      { time: "19:00", room: "Sala 3", type: "IMAX" },
      { time: "21:30", room: "Sala Xtreme", type: "IMAX" },
    ]
  },
  {
    id: "4",
    title: "A Melodia do Coração",
    genre: "Drama Romântico",
    ageRating: "10",
    posterUrl: "https://placehold.co/300x450.png",
    dataAiHint: "romance music",
    synopsis: "Dois músicos de mundos diferentes se encontram e criam uma sinfonia de amor, superando obstáculos sociais e pessoais para ficarem juntos.",
    duration: "1h 55m",
    releaseDate: "2024-01-15",
    director: "Isabella Harmony",
    cast: ["Leo Cadence", "Clara Melody", "Harmony Notes"],
    rating: 4.0,
     sessions: [
      { time: "14:30", room: "Sala 4", type: "2D" },
      { time: "18:00", room: "Sala 4", type: "2D" },
    ]
  },
  {
    id: "5",
    title: "Risadas Sem Fim",
    genre: "Comédia",
    ageRating: "14",
    posterUrl: "https://placehold.co/300x450.png",
    dataAiHint: "comedy fun",
    synopsis: "Um grupo de amigos desajustados se envolve em uma série de situações hilárias e absurdas durante uma viagem de férias que promete tudo, menos tranquilidade.",
    duration: "1h 38m",
    releaseDate: "2024-03-28",
    director: "Barnaby Chuckles",
    cast: ["Pip Giggles", "Sue Snickers", "Wally Whoopee"],
    rating: 3.9,
     sessions: [
      { time: "15:00", room: "Sala 5", type: "2D" },
      { time: "17:30", room: "Sala 5", type: "2D" },
      { time: "20:30", room: "Sala 5", type: "2D" },
    ]
  },
  {
    id: "6",
    title: "Pesadelo nas Profundezas",
    genre: "Terror",
    ageRating: "18",
    posterUrl: "https://placehold.co/300x450.png",
    dataAiHint: "horror monster",
    synopsis: "Exploradores marinhos despertam uma criatura ancestral adormecida nas fossas abissais, e agora precisam lutar pela sobrevivência em um submarino claustrofóbico.",
    duration: "1h 42m",
    releaseDate: "2024-05-01",
    director: "Damien Dark",
    cast: ["Captain Ahab Jr.", "Dr. Marina Abyss", "Echo 'Sonar' Waves"],
    rating: 4.3,
    sessions: [
      { time: "21:00", room: "Sala 6", type: "2D" },
      { time: "23:00", room: "Sala 6", type: "2D" },
    ]
  }
];

export const getMovieById = (id: string): Movie | undefined => {
  return mockMovies.find(movie => movie.id === id);
}
