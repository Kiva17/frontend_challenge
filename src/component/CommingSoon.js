import React from "react"
import { Grid } from "@mui/material"
import { blueGrey} from '@mui/material/colors';
import "./CommingSoon.css"

// Comming Soon Page component 

export default function CommingSoon() {
    return (
        <>
            <Grid container className="emptyData">
                <Grid className="emptyData3" sx={{ color: blueGrey[100],  bgcolor: "#f5f5f5", boxShadow: "5px 10px red" }} >
                    <h1 className="emptyData3" style={{ minHeight: '50vh' }} >Coming Soon</h1>
                </Grid>
            </Grid>
        </>

    )
}