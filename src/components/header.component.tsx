import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
      textAlign: 'center',
    }
    })
);

export const HeaderComponent = () => {
    const classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h4" display="inline" noWrap className={classes.title}>
                    Movies Search Tool
                </Typography>
            </Toolbar>
        </AppBar>
    );
};