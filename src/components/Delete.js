import React from 'react'
import Navbar from './Navbar'
export default function Delete() {
  return (
   <>
   <Navbar/>
    <ul data-testid="delete" class="list-group">
  <li class="list-group-item active" aria-current="true">Ehsan Rasul</li>
  <li class="list-group-item">Ali Hamza</li>
  <li class="list-group-item">Abdullah Malik</li>
  </ul>

  
  <input class="btn btn-primary" type="submit" value="Delete" ></input>

   </>
  )
}
