import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import { blueGrey, red, blue } from '@mui/material/colors';
import { Box } from '@mui/system';
import Select from './Select';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import DialogTitle from '@mui/material/DialogTitle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Dialogbox({ user, flag }) {
     
    // flag props has boolean values that indicates whether the Dilog box called from Header compoent or footer componet.  

    // user as the name suggest, this prop will contains each user details. 

    // these state store boolean values of the state of dialog box whether it open or close
    
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    // it will run if user clicked in the dialog box to open that

    const handleClickOpen = () => {
        setOpen(true);
    };


    // it will run if user clicked outside the dialog box and update the state to false this will close the dialog box

    const handleClose1 = () => {
        setOpen(false);
    };



    // it Will get called when signout button is clicked



    const handleClose = () => {
        
        // removing the user from local storage whose key is user as the user is Singout out now

        localStorage.removeItem("user")
        
        // I am maintaining here two keys in local storage 1.(user) to store the values of current user who is using the app. 
        // 2.(userlist) to store the values all users who are signed in the app 
    
        // Removing the user from the userlist local storage


        let k2 = JSON.parse(localStorage.getItem("userlist"))

        let k3 = []

        k2.forEach((element) => {

            if (element.id !== user.id) {
                k3.push(element)
            }
        });

        let k4 = JSON.stringify(k3)

        localStorage.setItem("userlist", k4) //storing list of remaining online users in local storage 
          
        // When user clicked on sign out button it will redirect user to the main page. 
        
        navigate("/")

    };


    return (
        <Box sx={{ cursor: "pointer", width: "100%", paddingRight: "1%" }}>

            {/* Dialog box (it will show the list of users) view when it called from Hearder component or  else footer component*/}

            {flag == false ?
                <Grid container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center" sx={{ cursor: "pointer", width: "100%" }}>

                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            m: 0, p: 0, b: 0, color: red[900], bgcolor: blue[800], cursor: "pointer", width: "20%",
                            maxWidth: "740px"
                        }}
                        onClick={handleClickOpen}


                    >
                        <DialogTitle sx={{ color: blueGrey[50] }}>
                            <IconButton
                                edge="start"
                                aria-label="close"
                                sx={{ m: 1, p: 0, color: blueGrey[50] }}

                            >
                                <ChatBubbleOutlineIcon />

                            </IconButton>
                            Chats
                        </DialogTitle>

                        <DialogTitle sx={{ color: blueGrey[50] }}>

                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="close"
                                sx={{ m: 1, p: 0 }}

                            >
                                <KeyboardArrowUpIcon />

                            </IconButton>

                        </DialogTitle>

                    </Grid></Grid> 
                 :

                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item>
                        <IconButton onClick={handleClickOpen} >
                            <Avatar
                                src={user.profilepicture}

                            />

                        </IconButton>
                    </Grid>
                    <Grid item>
                        <h3 onClick={handleClickOpen}> {user.name} </h3>
                    </Grid>
                </Grid>
                

            }



           {/* by changing this we can able to set where this dialog box will open in UI */}


            <Dialog open={open} onClose={handleClose1} sx={{

                ...(flag == true ? {
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "50%",
                            maxWidth: "740px",
                            borderRadius: "8px",
                            position: 'absolute',
                            top: `7%`,
                            left: `40%`,
                            height: "60%",
                            borderRadius: "20px",
                            // transform: `translate(0, -50%)`,
                        }
                    }
                } : {

                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "20%",
                            position: 'absolute',
                            top: `36%`,
                            right: `1%`,
                            height: "60%",

                        }
                    }
                })
            }}>


           {/* when it is called from footer section below part will show in the header section of this dealog box */}
           
                {flag == false && <Grid
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
                            <ChatBubbleOutlineIcon />

                        </IconButton>
                        Chats
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

                        </IconButton>

                    </DialogTitle>

                </Grid>}

                  {/* when it is called from Header component section below part will show in the header section of this dialog box */}

                {flag == true && <> <Avatar
                    src={user.profilepicture}
                    style={{
                        marginTop: "2%",
                        marginLeft: "35%",
                        width: "30%",
                        height: "40%",
                    }}
                />

                    <h2 >{user["name"]}</h2>
                    <p style={{ textAlign: "center" }}>{user["email"]}</p> </>}

                {/* calling the compoemt select this component has logic of how all the list data can be viewd in table format*/}
             
                <Select flag={flag} />


                {/* Singout option logic for the header component dialog box*/}

                {flag == true && <> <DialogActions>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Button variant="contained" sx={{ bgcolor: red[800], borderRadius: "20px" }} onClick={handleClose}>SingOut</Button>
                    </Grid>
                </DialogActions></>}


            </Dialog>

        </Box >
    );
}