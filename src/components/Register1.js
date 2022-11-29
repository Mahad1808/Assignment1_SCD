import React, { useState } from 'react'
import '../App.css'
import {SignUp} from './signInH'

import { Route, Routes } from "react-router-dom";
import { Link ,  useNavigate} from 'react-router-dom';

export default function Register1() {

// const [firstName,setFirstName]=useState()

const [getFirstName, setFirstName]= useState();
const [getLastName, setLastName]= useState();
const [getEmail, setEmail]= useState();
const [getPassword, setPassword]=useState();
const [getConfirmPassword, setConfirmPassword]=useState();
const [getCompany, setCompany]=useState();
const [getExperiences, setExperiences]=useState();

//furthure , 

// function updateGeneric(e){

//   setFirstName(e.target.value);
//   setLastName(e.target.value);

// }





  const callApi=()=>{

    //axios.post("http://localhost:4040/register",object).then respones=>console(respone)




    // console.log("calling api")
           const data= {fname: getFirstName, lname:getLastName, email: getEmail, pass:getPassword, conpass: getConfirmPassword,
           comp: getCompany, exp:getExperiences};



          fetch('/register', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              // catch data from post method
            })
            .catch((error) => {
              console.error('Error:', error);
            });
  }

  return (
    <> 
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Workaholic</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Explore</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Mode
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Seller</a></li>
          
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Buyer</a></li>
            {/* <li><a className="dropdown-item" href="/">Both</a></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active"aria-current="page" href="/">Sign In</a>
        </li>
      </ul>
       
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<h1>
          Your Workaholic Account
</h1>
        {/* <div className="Container"></div> */}
        <p>Please enter your personal information for account creation.</p>

        <form>
        <div class="mb-3">
    <label for="exampleInputName" class="form-label">First Name</label>
    <input type="Name" class="form-control" id="exampleInputName" value={getFirstName} onChange={(e)=>{

            setFirstName(e.target.value)
    }}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Last Name</label>
    <input type="Name" class="form-control" id="exampleInputName"   value={getLastName}  onChange={(e)=>{

          setLastName(e.target.value);

    }} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={getEmail}  onChange={(e)=>{

setEmail(e.target.value);

}}/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={getPassword} onChange={(e)=>{
      setPassword(e.target.value);
    }}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword2" value={getConfirmPassword} onChange={(e)=>{
      setConfirmPassword(e.target.value);
    }}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputCompany" class="form-label">Company (if any) </label>
    <input type="Company" class="form-control" id="exampleInputCompany" value={getCompany} onChange={(e)=>{
      setCompany(e.target.value);
    }}/>
  </div>
  
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Share your experience and skills</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" ></textarea> value={getExperiences} onChange={(e)=>{
      setExperiences(e.target.value);
    }}
</div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">I agree to the terms and conditions</label>
  </div>
  <div className='inoneline'>

  <button class="btnn" onClick={callApi}>SignUp</button>
  Or already have an account??  <Link to="/Login" className='addButton'>Login</Link>
 
  
  </div>
  

  <hr className="dropdown-divider"/>
</form>


        {/* <a className="nav-link active"aria-current="page" href="/">Sign In</a> */}
        {/* <li className="nav-item"> */}
          {/* <a className="nav-link active"aria-current="page" href="/">Sign In</a> */}
        {/* </li> */}
        <Routes>
                      <Route path="/SignIn" element={<SignUp/>}/>
                     
                </Routes>
    </>
   
  )
}
