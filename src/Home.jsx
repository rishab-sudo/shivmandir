import React from "react";
import img12 from "./Images/img12";
import { NavLink } from "react-router-dom";



const Home = ()=>{

    const backImage={backgroundImage:`url(${img12})`,width:null,height: 680,backgroundPosition: 'center',backgroundSize: 'cover',display:'flex'}
    const text={fontSize:"bold",align:"center"}
    return(
        <>
        <div className="" style={backImage}>
        <h1>Test</h1>
        </div>
        
        
        </>
        );
    };
    export default  Home
;
