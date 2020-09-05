import React from "react";
import img11 from "./Images/img11";
import { NavLink } from "react-router-dom";
import Common from "./Common";
 
const About = ()=>{
    const styles={height:"666px",width:"100%"}
    return(
        <>
        <h1 >this is about page</h1>
        <img style={styles} src={img11}/>
        </>
        );
    };
    export default  About;