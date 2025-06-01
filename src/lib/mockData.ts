import type { Movie } from "./types";

export const mockMovies: Movie[] = [
  {
    id: "1",
    title: "O Destino de Júpiter",
    genre: "Ficção Científica",
    ageRating: "12",
    posterUrl: "https://leituraescrita.com.br/wp-content/uploads/2015/02/jupiter_ascending_movie_poster_2.jpg",
    dataAiHint: "space adventure",
    synopsis: "Jupiter Jones é a descendente de uma linhagem que a coloca como a próxima ocupante do posto de rainha do universo. Sem saber disto, ela segue sua vida limpando casas. Um dia, ela recebe a visita de Caine, um ex-militar alterado geneticamente que tem como missão protegê-la a todo custo e levá-la para assumir seu lugar de direito. Juntos, Jupiter e Caine precisam lutar para proteger os moradores da Terra de uma ameaça antiga e perigosa.",
    duration: "2h 7m",
    releaseDate: "2024-03-10",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Channing Tatum", "Mila Kunis", "Eddie Redmayne", "Sean Bean", "Douglas Booth"],
    rating: 4.5,
    sessions: [
      { time: "14:00", room: "Sala 1", type: "3D" },
      { time: "17:00", room: "Sala 1", type: "3D" },
      { time: "20:00", room: "Sala VIP", type: "IMAX" },
    ]
  },
  {
    id: "2",
    title: "Guerra Mundial Z",
    genre: "Aventura",
    ageRating: "14",
    posterUrl: "https://br.web.img3.acsta.net/medias/nmedia/18/91/21/46/20532444.jpg",
    dataAiHint: "enchanted forest",
    synopsis: "Guerra Mundial Z é o épico de pular o coração, sobre os possíveis últimos dias da raça humana. Ex-funcionário das Nações Unidas, Gerry Lane (Brad Pitt) é chamado para tentar deter a caótica pandemia que se espalhou no mundo inteiro.",
    duration: "1h 56m",
    releaseDate: "2013-06-28",
    director: "Marc Forster",
    cast: ["Brad Pitt", " Mireille Enos", "James Badge Dale", "Fana Mokoena" ],
    rating: 4.2,
     sessions: [
      { time: "13:00", room: "Sala 2", type: "2D" },
      { time: "15:30", room: "Sala 2", type: "2D" },
    ]
  },
  {
    id: "3",
    title: "John Wick - De Volta Ao Jogo",
    genre: "Ação",
    ageRating: "16",
    posterUrl: "https://uauposters.com.br/media/catalog/product/2/0/201906131219-uau-posters-filmes-john-wick-de-volta-ao-jogo-keanu-reeves.jpg",
    dataAiHint: "action spy",
    synopsis: "Um antigo assassino de aluguel sai da aposentadoria para rastrear os gangsters que mataram seu cachorro e roubaram tudo dele.",
    duration: "2h 35m",
    releaseDate: "2014-11-27",
    director: "Chad Stahelski, David Leitch",
    cast: ["Alfie Allen", "Dean Winters", "John Leguizamo", "Michael Nyqvist", "Willem Dafoe"],
    rating: 4.8,
    sessions: [
      { time: "16:00", room: "Sala 3", type: "IMAX" },
      { time: "19:00", room: "Sala 3", type: "IMAX" },
      { time: "21:30", room: "Sala Xtreme", type: "IMAX" },
    ]
  },
  {
    id: "4",
    title: "Como Eu Era Antes De Você",
    genre: "Drama Romântico",
    ageRating: "12",
    posterUrl: "https://www.papodecinema.com.br/wp-content/uploads/2016/06/20160616-como-eu-era-antes-de-voce-papo-de-cinema-04.webp",
    dataAiHint: "romance music",
    synopsis: "Louisa Clark começa a trabalhar como cuidadora de Will, um homem que ficou tetraplégico. Apesar da hostilidade inicial, os dois se aproximam e o amor surge entre eles.",
    duration: "1h 45m",
    releaseDate: "2016-06-16",
    director: "Thea Sharrock",
    cast: ["Sam Claflin", "Emilia Clarke", "Jenna Coleman"],
    rating: 4.0,
     sessions: [
      { time: "14:30", room: "Sala 4", type: "2D" },
      { time: "18:00", room: "Sala 4", type: "2D" },
    ]
  },
  {
    id: "5",
    title: "Baywatch: S.O.S. Malibu",
    genre: "Comédia",
    ageRating: "14",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjBkMjNmNGYtYjQyMy00YWQ3LTlkZDgtYjVlZTA5MzAzZmVmXkEyXkFqcGc@._V1_.jpg",
    dataAiHint: "comedy fun",
    synopsis: "O ex-nadador Matt Brody treina para ser um salva-vidas com o tenente Buchannon. Apesar da relação difícil, os dois se unem quando um esquema criminoso ameaça a baía.",
    duration: "1h 51m",
    releaseDate: "2017-06-15",
    director: "Seth Gordon",
    cast: ["Dwayne Johnson", "Alexandra Daddario", "Zac Efron", "Priyanka Chopra"],
    rating: 3.9,
     sessions: [
      { time: "15:00", room: "Sala 5", type: "2D" },
      { time: "17:30", room: "Sala 5", type: "2D" },
      { time: "20:30", room: "Sala 5", type: "2D" },
    ]
  },
  {
    id: "6",
    title: "Pânico VI",
    genre: "Terror",
    ageRating: "18",
    posterUrl: "https://br.web.img2.acsta.net/pictures/23/01/19/16/50/3168009.jpg",
    dataAiHint: "horror monster",
    synopsis: "Os quatro sobreviventes dos assassinatos mais recentes do Ghostface em Woodsboro se mudaram para a cidade de Nova York para recomeçar. Quando eles começam a viver normalmente, eles recebem o chamado infame. Ghostface está mais brutal e implacável do que nunca e não vai parar até encontrá-los.",
    duration: "1h 57m",
    releaseDate: "2023-03-09",
    director: "Matt Bettinelli-Olpin, Tyler Gillett",
    cast: ["Melissa Barrera", " Jenna Ortega", "Courteney Cox", "Skeet Ulrich", "Dermot Mulroney", " Hayden Panettiere"],
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
