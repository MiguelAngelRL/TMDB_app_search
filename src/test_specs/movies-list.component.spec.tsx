import * as React from 'react';
import { render } from "@testing-library/react";
import { MoviesListComponent } from '../components';
import { MovieCardEntity, movieCardEntityMapper } from '../model';
import { mockedSingleResult, mockedManyResultsSinglePage, mockedNoResults } from '../test_mocked_data/spiderman';

describe("Movies List Component specs", ()=>{
    it("Should display a Grid with one child when receives a collection with only one element", ()=>{
        //Arrange
        const searchResult: MovieCardEntity[] = movieCardEntityMapper(mockedSingleResult.results);
        const handleMoreInfo = (number: number) => {};
        //Act
        const {getByTestId} = render(<MoviesListComponent moviesFetched={searchResult} handleMoreInfo={handleMoreInfo}/>);
        const grid = getByTestId("gridList");
        const element = grid.firstElementChild;
        //Assert
        expect(grid.childElementCount).toBe(1);
        expect(element).not.toBeNull();
    });

    it("Should display a Grid with n children when receives a collection with n elements", ()=>{
      //Arrange
      const searchResult: MovieCardEntity[] = movieCardEntityMapper(mockedManyResultsSinglePage.results);
      const handleMoreInfo = (number: number) => {};
      const expectedChildren = 8;
      //Act
      const {getByTestId} = render(<MoviesListComponent moviesFetched={searchResult} handleMoreInfo={handleMoreInfo}/>);
      const grid = getByTestId("gridList");
      const element = grid.firstElementChild;
      //Assert
      expect(grid.childElementCount).toBe(expectedChildren);
      expect(element).not.toBeNull();
    });

    it("Should display a Grid with no children when receives an empty collection", ()=>{
      //Arrange
      const searchResult: MovieCardEntity[] = movieCardEntityMapper(mockedNoResults.results);
      const handleMoreInfo = (number: number) => {};
      const expectedChildren = 0;
      //Act
      const {getByTestId} = render(<MoviesListComponent moviesFetched={searchResult} handleMoreInfo={handleMoreInfo}/>);
      const grid = getByTestId("gridList");
      const element = grid.firstElementChild;
      //Assert
      expect(grid.childElementCount).toBe(expectedChildren);
      expect(element).toBeNull();
    });

    it("Should display a Grid with no children when receives a null object", ()=>{
      //Arrange
      const searchResult = null;
      const handleMoreInfo = (number: number) => {};
      const expectedChildren = 0;
      //Act
      const {getByTestId} = render(<MoviesListComponent moviesFetched={searchResult} handleMoreInfo={handleMoreInfo}/>);
      const grid = getByTestId("gridList");
      const element = grid.firstElementChild;
      //Assert
      expect(grid.childElementCount).toBe(expectedChildren);
      expect(element).toBeNull();
    });
});