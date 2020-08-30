import Axios from 'axios';

export const getAllMovies = (searchText: string, pageRequested: number) => {
    const url = `${process.env.REACT_APP_BASE_SEARCH_MOVIES_URL}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${pageRequested}`;
    return Axios.get(url)
                .then(result => result)
                .catch((err) => err);
}

export const getMovieById = (id: number) => {
    const url = `${process.env.REACT_APP_BASE_SINGLE_MOVIE_URL}/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
    return Axios.get(url)
                .then(result => result)
                .catch((err) => err);
}
