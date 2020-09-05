import React from "react";
import {NavLink} from "react-router-dom";

 const Navbar=()=>{
     return(
         <>
         <div ClassName="container-fluid nav_bg">
         <div ClassName="row">
         <div ClassName="col-10 mx-auto">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container fluide">

         
        
  <NavLink className="navbar-brand" to="/">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
     
    
    <li className="nav-item active">
         <NavLink
          active className="menu_active"
          
          className="nav-link active"
          aria-current="page"
           to="/"
           >
           Home
           </NavLink>
      </li>
      <li
      className="nav-item">
       <NavLink  activeClassName="menu-active"
       className="nav-link"
        to="/About">About
        </NavLink>
     </li>
     <li
     className="nav-item">
      <NavLink  activeClassName="menu-active"
      className="nav-link"
       to="/Event">Event
       </NavLink>
    </li>
     
      <li
       className="nav-item">
        <NavLink  activeClassName="menu-active"
        className="nav-link"
         to="/Donate">Donate
         </NavLink>
      </li>
    
      <li className="nav-item">
        <NavLink activeClassName="menu-active"
         className="nav-link"
          to="/Login">Login</NavLink>
      </li>
     </ul>
       </div>
      </div>
     </nav>
  </div>
</div>
</div>

</>
     );
 };
export default Navbar;



