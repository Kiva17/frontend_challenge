import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Dialogbox from './DialogBox';

//Header component 

export default function Header({user,clickedButton}) {
    
    return (

        <Box sx={{ width: '100%' }}>

            <Grid container direction="row"
                justifyContent="space-between"
                alignItems="center">

                {/* When user clicked on the Buttons on left hand side in profile component below value will get updated.*/}

                <Grid item xs={10} >
                        <Grid container
                            sx={{ p: 2 }} >
                            <h5 style={{fontSize:"20px"}}>{clickedButton}</h5>
                        </Grid>

                </Grid>

               {/* DialogBox in header component */}

                <Grid item xs={2} >
                   <Dialogbox user={user} flag={true} />
                </Grid>

            </Grid>
            <hr
            
            />
        </Box>

    )
}