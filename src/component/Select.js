import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableVirtuoso } from 'react-virtuoso';
import { config } from '../App';
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import Chat from "./Chat"

export default function Select({ flag }) {

    // we have two dialog box box one is the the header compoent one is in the footer compoent

    // the value of the prop flag true indicates it is comming from header component and false indicates it is coming from footer. 

    //flag true means request is comming from header component else comming from footer component 

    // data state is used to store user list fetch from the given api. 
    const [data, setData] = useState([]);

    // I have used this hook to navagite user to the profiledeatils page url. 

    const navigate = useNavigate();


   //fetchData function is used to fetch data from given api 

    async function fetchData() {

        try {

            const response = await axios.get(`${config.endpoint}`);
            setData(response.data.users)

        } catch (e) {
            if (e.response && e.response.status === 500) {
                return null;
            } else {
                return null;
            }
        }
    }

    useEffect(() => {

        // I am maintaining here two keys in local storage 
        
        //1.(user) to store the values of current user who is using the app. 
        
        // 2.(userlist) to store the values all users who are signed in the app 
       
       // here i am checking if flag value is true that means this req is called from header component and the header component will only show users who have logged in to app.
       // as i store this data in local storage so extracting it from there.   

        if (flag) {

            let k1 = JSON.parse(localStorage.getItem("userlist"))
            let k2 = JSON.parse(localStorage.getItem("user"))

            let k3 = k1.filter((x) => x.id !== k2.id)

            setData(k3)

        }
        // else we have to fetch it from api. 
        else {
            fetchData()
        }

    }, [])



    function GoTOprofile(user) {

        //flag true means request is comming from header else comming from footer component


        // if (flag == false) {
        //     return

        // }
       
       //here i am updating the local file storage 

        let k1 = JSON.stringify(user)
        console.log(k1)
        localStorage.setItem("user", k1) //storing each json value

        console.log("kk", localStorage.getItem("userlist"))
        if (localStorage.getItem("userlist")) {

            //extracting user list 
            let k2 = JSON.parse(localStorage.getItem("userlist"))
            console.log("if", k2)
            if (!k2.find((x) => x.id === user.id)) {

                k2.push(user)
            }
            //converting the array of json to string

            let k3 = JSON.stringify(k2)

            localStorage.setItem("userlist", k3) //storing list of online users in local storage 
        }

        else {

            let k4 = []
            k4.push(user)
            let k5 = JSON.stringify(k4)
            console.log("else", k5)
            localStorage.setItem("userlist", k5) //storing list of online users in local storage 
        }

        // console.log("kkh", localStorage.getItem("userlist"))

        //it will help to navigate to below url. 

        navigate(`/profiledetails/${user.id}`)
          
        if (flag) {
            window.location.reload()
        }


    }
    return (
        <>  
            {/* header of the component  */}

            {flag == true || flag == false ? <></> : <Grid container direction="row" justifyContent="center" sx={{ width: "100%", bgcolor: grey[200], borderRadius: "20px", height: "100px" }} >

                <h1 style={{ padding: "25px", bgcolor: "yellow" }}> Select an account</h1>

            </Grid>}

            {/* table part of the component  */}

            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center" sx={{ width: '100%', bgcolor: grey[100],cursor: "pointer"  }}>


                <TableContainer sx={{ maxHeight: "100vh", maxWidth: "50vw" }} >
                    <Table stickyHeader aria-label="sticky table">

                        <TableBody>

                            {  flag == false? 
                            
                            
                            data.map((user) => {
                                return (

                                   <Chat user={user}/>

                                );
                            })
                            
                            : data.map((user) => {
                                return (

                                    <TableRow hover role="checkbox" tabIndex={-1} key={user.id} onClick={() => { GoTOprofile(user) }}>

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
                                        <TableCell key={user.id} >
                                            {user.name}
                                        </TableCell>
                                    </TableRow>



                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* </Paper> */}
            </Grid>
        </>
    )

}