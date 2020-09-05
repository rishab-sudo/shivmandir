import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Donate from "./Donate";
import Event from "./Event";
import Login from "./Login";
import About from "./About";
import Navbar from "./Navbar";
import {Button,Form,FormGroup,Label,Input} from "reactstrap";
import {FacebookLoginButton} from "react-social-login-buttons";

import{Switch,Route,Redirect} from "react-router-dom";

const App = ()=>{
    return(
        <>
       <Navbar/>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/About" component={About}/>
       <Route exact path="/Event" component={Event}/>
       <Route exact path="/Donate" component={Donate}/>
       <Route exact path="/Login" component={Login}/>
       <Redirect to="/"/>
       </Switch>
        </>
    );
    };
    export default App;