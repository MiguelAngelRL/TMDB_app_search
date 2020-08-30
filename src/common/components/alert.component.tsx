import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

interface Props{
    alertType: string;
    alertText: string;
    handleOpenAlert: (openAlert: string, alertText: string)=>void;
}

export const AlertComponent = (props: Props) => {
    const {alertType, alertText, handleOpenAlert} = props;
    return(
        <Dialog open={true} fullWidth PaperProps={{style: {backgroundColor: 'transparent', boxShadow: 'none'}}}>
            <DialogContent>
                <Alert variant="filled" severity="error" onClose={()=>handleOpenAlert("","")}>
                    <AlertTitle>{alertType}</AlertTitle>
                    {alertText}
                </Alert>
            </DialogContent>
        </Dialog>
    );
};