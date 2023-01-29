import React from "react";
import Dialogbox from "./DialogBox";
import { Grid } from "@mui/material";

// footer component 

export default function Footer({ user }) {
    return (
        <>


            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                sx={{ paddingRight:"25px" }}
                
            >

                <Dialogbox user={user} flag={false} />
            </Grid >
        </>

    )
} 