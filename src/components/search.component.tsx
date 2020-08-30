import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Grid from '@material-ui/core/Grid';

interface Props {
    handleInitialSearchMovies: (searchText: string)=>void;
}

export const SearchComponent = (props: Props) => {
    const { handleInitialSearchMovies } = props;
    const handleOnClick = () => {
        const textField: HTMLInputElement | null = document.getElementById("searchtext") as HTMLInputElement;
        const inputValue = textField ? textField["value"].trim().toLowerCase() : "";
        handleInitialSearchMovies(inputValue);
    }

    return (
        <Grid container style={{marginTop: 20, marginBottom: 20}}> 
            <TextField id="searchtext" label="Movie name" placeholder="Enter the movie name"
                        style={{paddingRight:'1%', width: '79%'}}
                        InputLabelProps={{shrink: true}} variant="outlined"/>
            <Button onClick={handleOnClick} startIcon={<CloudDownloadIcon />} size="large" 
                    variant="outlined" style={{width: '20%'}}
                    color="secondary"  disabled={false}>
                  SEARCH
            </Button>
        </Grid>
    )
}