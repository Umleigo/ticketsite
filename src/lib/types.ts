export interface Movie {
  id: string;
  title: string;
  genre: string;
  ageRating: string;
  posterUrl: string;
  dataAiHint?: string; // For placeholder image generation hint
  synopsis: string;
  duration?: string; 
  releaseDate?: string;
  director?: string;
  cast?: string[];
  // Add other fields as needed for Movie Details
  rating?: number; // e.g. 4.5
  sessions?: { time: string; room: string; type: '2D' | '3D' | 'IMAX' }[];
}

export interface ContactFormData {
  email: string;
  subject: string;
  message: string;
  urgency?: boolean;
}
