import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const FooterComponent = () => {
    return (
        <Box display="flex" justifyContent="center" m={1}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'© Copyright '} MARL {new Date().getFullYear()}
            </Typography>
        </Box>
    );
};