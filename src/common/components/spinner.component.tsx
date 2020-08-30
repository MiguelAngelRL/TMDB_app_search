import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props{
    isLoading: boolean;
}

export const SpinnerComponent = (props: Props) => {
    const {isLoading} = props;
    return(
        <Dialog open={isLoading} PaperProps={{style: {backgroundColor: 'transparent', boxShadow: 'none'}}}>
            <DialogContent>
                <CircularProgress />
            </DialogContent>
        </Dialog>
    );
};