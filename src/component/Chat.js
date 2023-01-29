import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import { blueGrey, red, blue } from '@mui/material/colors';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DialogContent from '@mui/material/DialogContent';
import SendIcon from '@mui/icons-material/Send';
import DialogContentText from '@mui/material/DialogContentText';
import ClearIcon from '@mui/icons-material/Clear';

export default function Dialogbox({ user }) {
       
    // user as the name suggest, this prop will contains each user details. 

    // these state store boolean values of the state of dialog box whether it open or close
    
    const [open, setOpen] = React.useState(false);

     // it will run if user clicked in the dialog box to open that
    const handleClickOpen = () => {
        setOpen(true);
    };


    // it will run if user clicked outside the dialog box and update the state to false this will close the dialog box
    const handleClose1 = () => {
        setOpen(false);
    };


    return (

        <Box sx={{ cursor: "pointer", width: "100%" }}>

         {/* it will display each user from the total user list in the chatbox */}

            <TableRow hover role="checkbox" tabIndex={-1} key={user.id} onClick={handleClickOpen} sx={{ cursor: "pointer" }}>

                <TableCell padding="checkbox">
                    <IconButton>
                        <Avatar
                            src={user["profilepicture"]}
                            style={{
                                margin: "10px",
                                width: "60px",
                                height: "60px",
                            }}
                        />
                    </IconButton>
                </TableCell>
                <TableCell sx={{width: "100%" }} key={user.id} >
                    {user.name}
                </TableCell>
            </TableRow>

            {/* Chat Box logic */}

            <Dialog open={open} onClose={handleClose1} sx={{
             
            //  by changing this we can able to set where this dialog box will open in UI

                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "28%",
                        maxWidth: "740px",
                        borderRadius: "8px",
                        position: 'absolute',
                        top: `45%`,
                        left: `45%`,
                        height: "50%",
                        borderRadius: "20px",
                        // transform: `translate(0, -50%)`,
                    }
                }

            }}>

              {/* Chat Box Header logic */} 

                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ m: 0, p: 0, b: 0, color: red[900], bgcolor: blue[800] }}

                >
                    <DialogTitle sx={{ color: blueGrey[50] }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            sx={{ m: 1, p: 0 }}

                        >
                            <Avatar
                                src={user["profilepicture"]}
                            />

                        </IconButton >
                       {user.name} 
                    </DialogTitle>

                    <DialogTitle sx={{ color: blueGrey[50] }}>

                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            sx={{ m: 1, p: 0 }}
                            onClick={handleClose1}
                        >
                            <KeyboardArrowDownIcon />
                            <ClearIcon />  
                        </IconButton>

                    </DialogTitle>

                </Grid>

                {/* Content present in chatBox */}

                <DialogContent>
                    <DialogContentText>
                        Chat fucntionality with user is currenly disabled
                    </DialogContentText>

                </DialogContent>

                {/* Action that we are performing in chat box */}

                <DialogActions>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="email"
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            endAdornment: <SendIcon sx={{ cursor: "pointer" }} color="primary" />,
                        }}
                    />
                </DialogActions>

            </Dialog>

        </Box >
    );
}