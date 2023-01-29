import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Header from "./Header";
import { Box} from "@mui/system";
import { Grid } from "@mui/material";
import "./ProfileDetails.css"
import Button from '@mui/material/Button';
import {indigo} from '@mui/material/colors';
import CommingSoon from "./CommingSoon";
import Footer from "./Footer";
export default function ProfileDetails() {

    //fetching details of the clicked user from local storage 
    let userDetails = JSON.parse(localStorage.getItem("user"))
    
    //storing the fetched list of user in the user state 

    const [user, setUser] = useState(userDetails);

    // let y = []
    // for (let i of Object.keys(user)) {
    //     y.push(i)
    // }

    // state to store keys of the user profile

    const [userDataKey, setDataKey] = useState(["Username", "Email", "Phone", "Website"]);

    // state to store keys of the company

    const [userCompanyDetails, setUserCompanyDetails] = useState(["catchPhrase", "bs"]);

    // state to store buttons of profile details page

    const [leftButtons, setLeftButtons] = useState(["Profile", "Post", "Gallary", "Todo"]);

    // state to store keys of the address

    const [userAddress, setUserAddress] = useState(["Street", "Suite", "City", "Zipcode"]);

    // state to store which button is clicked

    const [clickedButton, setclickedButton] = useState("Profile");

    // console.log(y)

    function ChangeButtonState(x) {
        setclickedButton(x)
    }

    // console.log(clickedButton)

    return (
        <>
            <Box >
               
                <Grid container sx={{ padding: "1%"}}>

                      {/* Button position in the profile deatils page logic */}

                    <Grid item xs={12} md={2} className="leftbuttons" sx={{ minHeight: '100vh', padding: "3%", borderRadius: '1.5rem', backgroundColor: indigo[600] }}>

                        <Grid
                            container
                            spacing={1}
                            className="emptyData"

                        >
                            {
                                leftButtons.map((x) => {
                                    return (<><Grid container
                                    >

                                        <Grid className="emptyData1" sx={{ bgcolor: "#f5f5f5", boxShadow: "5px 10px red" }} >
                                            {<Button variant="text" onClick={() => { ChangeButtonState(x) }} >{x}</Button>}
                                        </Grid>

                                    </Grid>
                                    <br />

                                        <div style={{width:"100%"}}>
                                            
                                            <hr style={{
                                                width:"100%",
                                                height: "1px"
                                            }} />
                                        </div>
                                    <br />
                                    </>
                                    )
                                })

                            }

                        </Grid>


                    </Grid>


                    <Grid md={10} sx={{ padding: "10px" }}>

                        <Grid container>
                            {/* header */}
                            <Grid item xs={12}  >
                                <Header user={user} clickedButton={clickedButton} />
                            </Grid>

                            {/* Profile details logic */}

                            {clickedButton === "Profile" ?
                                <>
                                    <Grid item xs={12} lg={12} xl={4}>
                                        {/* <IconButton> */}
                                        <Avatar
                                            src={user.profilepicture}
                                            style={{
                                                marginTop: "2%",
                                                marginLeft: "25%",
                                                width: "50%",
                                                height: "25%",
                                            }}
                                        />

                                        {/* user details */}
                                        <Grid className="eachbox" >

                                            <h2 >{user["name"]}</h2>
                                            <br />
                                            {
                                                userDataKey.map((keys, index) => {

                                                    return (
                                                        <>
                                                            <Grid style={{ display: "flex" }}>

                                                                <Grid dir="rtl" key={index} className="eachkey" style={{ width: "30%" }}>

                                                                    <p> : {keys}</p>

                                                                </Grid>
                                                                <Grid key={index} className="eachvalueitem" style={{ width: "70%" }}>

                                                                    <strong> {user[keys.toLowerCase()]}</strong >

                                                                </Grid>

                                                            </Grid>
                                                            <br />
                                                        </>
                                                    )
                                                }
                                                )
                                            }
                                        </Grid>
                                        <hr />
                                       
                                        <br />


                                      {/* user compnay details*/}

                                        <Grid className="eachbox">

                                            <h2 > Company</h2>
                                            <br />
                                            {
                                                userCompanyDetails.map((details, index) => {

                                                    return (
                                                        <>

                                                            <Grid style={{ display: "flex" }}>
                                                                <Grid dir="rtl" key={index} className="eachkey">

                                                                    <p> : {details}</p>

                                                                </Grid>
                                                                <Grid key={index} className="eachvalueitem" >

                                                                    <strong > {user.company[details]}</strong >

                                                                </Grid>
                                                            </Grid>

                                                            <br />

                                                        </>


                                                    )
                                                })

                                            }
                                        </Grid>

                                    </Grid>
                                  
                                  {/* vertical line logic */}

                                    <Grid lg={12} xl={2} sx={{ padding: "4px" }}>

                                        <br />
                                        <Grid sx={{ paddingLeft: "5%" }}>
                                            <div class="vl"></div>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12} lg={12} xl={4} className="eachbox">

                                        {/* horizontal line logic */}

                                        <hr className="horizontalline" />
                                        <br />

                                        {/* Address logic */}
                                        
                                        <h2>Address</h2>
                                        <br />
                                        <Grid item>
                                            {
                                                userAddress.map((useraddress, index) => {

                                                    return (
                                                        <>
                                                            <Grid style={{ display: "flex" }}>
                                                                <Grid dir="rtl" key={index} className="eachkey" >

                                                                    <p > : {useraddress}</p>

                                                                </Grid>
                                                                <Grid key={index} className="eachkey" >

                                                                    <strong> {user.address[useraddress.toLowerCase()]} </strong >

                                                                </Grid>
                                                            </Grid>
                                                            <br />

                                                        </>)
                                                })

                                            }
                                        </Grid>

                                    </Grid> </> :

                                <>  
                                    {/* comming soon component called */}
                                    <Grid item xs={12} lg={12} xl={12} >
                                        <CommingSoon />
                                    </Grid>

                                </>

                            }

                        </Grid>
                    </Grid>
                </Grid>

                  {/* footer component called */}

                <Footer user={user}/> 
            </Box >
        </>

    )

}