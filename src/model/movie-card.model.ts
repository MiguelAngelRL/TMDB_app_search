import { TMDBResults } from "./tmdb.model"

export interface MovieCardEntity {
    id: number;
    vote_average: number|null;
    title: string|null;
    release_date: string|null;
    poster_path: string|null;
}

export const movieCardEntityMapper = (originalMoviesList: TMDBResults[]): MovieCardEntity[] => {
    return ( 
        originalMoviesList.map ((originalMovie: TMDBResults): MovieCardEntity => ({
            id:originalMovie.id,
            vote_average:originalMovie.vote_average,
            title:originalMovie.title,
            release_date:originalMovie.release_date,
            poster_path:originalMovie.poster_path
        }))
    )  
}