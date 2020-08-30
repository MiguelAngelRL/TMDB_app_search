import { getAllMovies } from "../api/movies.api";
import { TMDBResults } from '../model'
import { mockedManyResultsManyPages, mockedNoResults } from '../test_mocked_data/spiderman';
import Axios from "axios";


describe("Movies Api specs", () =>{
    it("Should return an array of TMDBResults elements if resolved successfully", async()=>{
        //Arrange
        const resultsFromApi: TMDBResults[] = mockedManyResultsManyPages.results;
        const searchText="spiderman";
        const pageRequested=1;
        const url = `${process.env.REACT_APP_BASE_SEARCH_MOVIES_URL}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${pageRequested}`;
        const getStub = jest.spyOn(Axios, "get").mockResolvedValue(
          //mocked data object
          { 
            "page": 1,
            "total_results": 64,
            "total_pages": 4,
            results: resultsFromApi
          }
        );
        // //Act
        const data = await getAllMovies(searchText, pageRequested);
        //Assert
        expect(getStub).toHaveBeenCalledWith(url);
        expect(data.results).toEqual(resultsFromApi);
    });

    it("Should return an empty array if no movies founded", async()=>{
      //Arrange
      const resultsFromApi = mockedNoResults.results;
      const searchText="whatever returning no results";
      const pageRequested=1;
      const url = `${process.env.REACT_APP_BASE_SEARCH_MOVIES_URL}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${pageRequested}`;
      const getStub = jest.spyOn(Axios, "get").mockResolvedValue(
        //mocked data object
        { 
          "page": 1,
          "total_results": 64,
          "total_pages": 4,
          results: resultsFromApi
        }
      );
      // //Act
      const data = await getAllMovies(searchText, pageRequested);
      //Assert
      expect(getStub).toHaveBeenCalledWith(url);
      expect(data.results).toEqual(resultsFromApi);
  });
    
});