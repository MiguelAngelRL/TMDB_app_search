import React from 'react';
import { HeaderComponent, BodyComponent, FooterComponent, MovieDetailsComponent } from './components';
import { MovieCardEntity, movieCardEntityMapper, TMDBMovieDetail } from './model';
import { getMovieById, getAllMovies } from './api/movies.api';
import { SpinnerComponent, AlertComponent } from './common/components';

export const App = () => {
  const [moviesFetched, setMoviesFetched] = React.useState<MovieCardEntity[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [defaultInitialPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [lastSearch, setLastSearch] = React.useState("");
  const [openAlert, setOpenAlert] = React.useState("");
  const [alertText, setAlertText] = React.useState("");
  const [openMovieDetails, setOpenMovieDetails] = React.useState(false);
  const [movieDetails, setMovieDetails] = React.useState<TMDBMovieDetail>({} as TMDBMovieDetail);

  const searchMovies = (searchText: string, pageRequested: number) => {
    setIsLoading(true);
    resetLastSearch(pageRequested);
    getAllMovies(searchText, pageRequested).then(response => {
      if(!response || response.isAxiosError) {
        const errMsg = response && response.isAxiosError ? response.message : response || "Error en la petición";
        handleAlertError(errMsg);
      } else {
        setLastSearch(searchText);
        if(response.data.total_results && response.data.results && response.data.results.length>0){
          setMoviesFetched(movieCardEntityMapper(response.data.results));
          setTotalPages(response.data.total_pages);
          setCurrentPage(response.data.page);
        } else {
          const errMsg = "No results";
          handleAlertError(errMsg)
        }
      }
      setIsLoading(false);  
    });
  }

  const resetLastSearch = (pageRequested: number) => {
    setMoviesFetched([] as MovieCardEntity[]);
    setCurrentPage(pageRequested);
    setTotalPages(0);
  }

  const handleNewPageRequested = (page: number) => {
    if(currentPage===page) return;
    searchMovies(lastSearch, page);
  }

  const handleOpenAlert = (openAlert: string, alertText: string) => {
    setOpenAlert(openAlert);
    setAlertText(alertText);
  };

  const handleAlertError = (alertText: string) => {
    handleOpenAlert("Error", alertText);
  };

  const handleInitialSearchMovies =  (searchText: string) => {
    if(!searchText || lastSearch===searchText) {
      handleAlertError("The search string can not be empty nor can be the same as the last one requested.")
      return;
    }
    searchMovies(searchText, defaultInitialPage);
  };

  const handleMoreInfo =  (id: number) => {
    setIsLoading(true);
    getMovieById(id).then(response => {
      if(!response || response.isAxiosError) {
        const errMsg = response && response.isAxiosError ? response.message : response || "Error en la petición";
        handleAlertError(errMsg)
      } else {
        setMovieDetails(response.data);
        handleOpenMovieDetails(true);
      }
      setIsLoading(false);  
    });
  };

  const handleOpenMovieDetails = (open: boolean) => {
    setOpenMovieDetails(open);
    if(!open) setMovieDetails({} as TMDBMovieDetail);
  }

  return (
    <>
      <HeaderComponent />
      <BodyComponent handleMoreInfo={handleMoreInfo} moviesFetched={moviesFetched} handleInitialSearchMovies={handleInitialSearchMovies}
                      totalPages={totalPages} currentPage={currentPage} handleNewPageRequested={handleNewPageRequested} />
      <FooterComponent />
      {openMovieDetails && <MovieDetailsComponent open={openMovieDetails} movieDetails={movieDetails}
                             handleOpenMovieDetails={handleOpenMovieDetails}/>}
      <SpinnerComponent isLoading={isLoading}/>
      {openAlert && <AlertComponent alertType={openAlert} alertText={alertText} handleOpenAlert={handleOpenAlert}/>}
    </>
  );
}