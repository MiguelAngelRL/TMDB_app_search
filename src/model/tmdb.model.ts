export interface TMDBResults{
  id: number;
  popularity: number|null;
  video: boolean|null;
  vote_count: number|null;
  vote_average: number|null;
  title: string|null;
  release_date: string|null;
  original_language: string|null;
  original_title: string|null;
  genre_ids: number[]|null;
  backdrop_path: string|null;
  adult: boolean|null;
  overview: string|null;
  poster_path: string|null;
}

export interface TMDBMovieDetail {    
  id: number|null;
  adult: boolean|null;
  backdrop_path: string|null;
  belongs_to_collection: {}|null;
  budget: number|null;
  genres: [{id:number; name:string;}]|null;
  homepage: string|null;
  imdb_id: string|null;
  original_language: string|null;
  original_title: string|null;
  overview: string|null;
  popularity: number|null;
  poster_path: string|null;
  production_companies: []|null;
  production_countries: string[]|null;
  release_date: string|null;
  revenue: number|null;
  runtime: number|null;
  spoken_languages: string[]|null;
  status: string|null;
  tagline: string|null;
  title: string|null;
  video: boolean|null;
  vote_average: number|null;
  vote_count: number|null;
}

