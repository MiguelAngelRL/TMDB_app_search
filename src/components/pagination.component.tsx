import React, { ChangeEvent } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';

interface Props{
    totalPages: number;
    currentPage: number;
    handleNewPageRequested: (newPage: number)=>void;
}

export const PaginationComponent = (props: Props) => {
    const {totalPages, currentPage, handleNewPageRequested} = props;
    const handleOnChange= (event: ChangeEvent<unknown>, value:number) => handleNewPageRequested(value);
    return (
        <Box display="flex" justifyContent="center" m={1}>
            <Pagination data-testid="pagination" count={totalPages} page={currentPage} 
                        variant="outlined" color="secondary" onChange={handleOnChange} />
        </Box>
    );
}
