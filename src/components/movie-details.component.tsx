import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { TMDBMovieDetail } from '../model';

interface Props {
    open:boolean;
    handleOpenMovieDetails: (open: boolean, movieId: number)=>void;
    movieDetails: TMDBMovieDetail;
}

const styles = {
    // Can use functions to dynamically build our CSS
    dialogContent: (backgroundUrl:string|null) => ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${backgroundUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: 'lightblue',
      height: '100%',
      minWidth: '70vh',
      minHeight: '40vh',
      color: 'LemonChiffon',
      padding: 10
    })
  }

export const MovieDetailsComponent = (props: Props) => {
    const {open, movieDetails, handleOpenMovieDetails} = props;
    const genres = movieDetails.genres ? movieDetails.genres.map(genre => genre.name).join(', ') : '';
    const backgroundUrl = `${process.env.REACT_APP_IMAGES_BASE_URL}${process.env.REACT_APP_DETAIL_IMAGE_SIZE}${movieDetails.backdrop_path}`;
    return (
        <Dialog open={open} onClose={()=>handleOpenMovieDetails(!open, 0)} scroll={"body"}>
            <div style={styles.dialogContent(backgroundUrl)}>
                <h1>{movieDetails.title}</h1>
                <h5>{genres}</h5>
                <p>{movieDetails.overview}</p>
                <p>Popularity: {movieDetails.popularity}</p>
                <p>Budget: ${movieDetails.budget}</p>
                {(!movieDetails.backdrop_path) && <p>No backdrop image available</p>}
            </div>
        </Dialog>
    );
}
