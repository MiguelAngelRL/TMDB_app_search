import React from 'react';
import Container from '@material-ui/core/Container';
import { SearchComponent } from './search.component';
import { MoviesListComponent } from './movies-list.component';
import { MovieCardEntity } from '../model';
import { PaginationComponent } from './pagination.component';

interface Props {
  handleMoreInfo: (movieId: number)=>void;
  moviesFetched: MovieCardEntity[];
  handleInitialSearchMovies: (searchText: string)=>void;
  totalPages: number;
  currentPage: number;
  handleNewPageRequested: (newPage: number)=>void;
}

export const BodyComponent = (props: Props) => {
    const {handleMoreInfo, moviesFetched, handleInitialSearchMovies, totalPages, currentPage, handleNewPageRequested} = props;
    return(
      <Container maxWidth="lg">
        <SearchComponent handleInitialSearchMovies={handleInitialSearchMovies}/>
        {moviesFetched && moviesFetched.length>0 && <MoviesListComponent handleMoreInfo={handleMoreInfo} moviesFetched={moviesFetched}/>}
        {totalPages>1 && <PaginationComponent totalPages={totalPages} currentPage={currentPage} handleNewPageRequested={handleNewPageRequested} />}
      </Container>
    );
}

