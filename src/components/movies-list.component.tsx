import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MovieCardComponent } from './movie-card.component';
import { MovieCardEntity } from '../model';

interface Props {
  handleMoreInfo: (movieId: number)=>void;
  moviesFetched: MovieCardEntity[]|null;
}

export const MoviesListComponent = (props: Props) => {
    const {handleMoreInfo, moviesFetched} = props;
    return (
      <Grid container justify='space-evenly' data-testid="gridList">
        {
          moviesFetched && (moviesFetched.map((movie:MovieCardEntity) => {
            return(
              <MovieCardComponent key={movie.id} movie={movie} handleMoreInfo={handleMoreInfo}/>
            )
          }))
        }
      </Grid>
    )
}

