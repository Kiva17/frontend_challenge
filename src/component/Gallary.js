import React,{useState} from "react";
import Header from "./Header";
import CommingSoon from "./CommingSoon";

export default function Gallary()
{
    //fetching details of the clicked user
    let userDetails = JSON.parse(localStorage.getItem("user"))

    const [user, setUser] = useState(userDetails);
    return (
        <>
         <Header user={user}/>
        <CommingSoon/>
        </>

    )

}