import React from 'react'
import Navbar from './Navbar'
export default function Login() {
  return (
    <>
       <Navbar/>
       <form>
        <div data-testid="login" class="mb-3">
    <label for="exampleEmail" class="form-label">Enter Email</label>
    <input type="Email" class="form-control" id="exampleEmail" />
    </div>
  
  <div class="mb-3">
    <label for="examplePassword" class="form-label">Enter Password</label>
    <input type="Password" class="form-control" id="examplePassword"/>
 </div>
 <button type="submit" class="btn btn-primary"> Log In </button>
  </form>

    </>
  )
}
