import React from "react"
import img4 from './Images/img4'
import './Login.css'



function Login(){
 
  const backImage={width: '100%',height: '666px',backgroundImage: `url(${img4})`,backgroundSize: 'cover'}
  return (
    <>
  <div className="cComponent" style={backImage} >
  
  <h1 className='text'  >Some header example</h1>

  
  <div className="form">
  <form className="form">

  <div className="form-group">
    <div className="row">
     <label for="exampleInputEmail1">Email address</label></div>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
    </div>
    <div className="form-group">
    
    
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="form-group form-check">
  
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    
  
    
  </form>
   </div>
  </div>

</>
  )
}
export default Login;