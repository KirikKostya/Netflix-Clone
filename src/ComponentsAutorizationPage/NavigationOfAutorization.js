import React from 'react'
import { a, NavLink } from 'react-router-dom'
import '../StylesForNetflix/NavigationOfAutorization.css'

export default function NavigationOfAutorization() {
  return (

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid d-flex flex-column">
    <h1>NETFLIX-CLONE</h1>

    <div className="collapse navbar-collapse d-flex" >
      <ul className="navbar-nav d-flex ">
        <li className="nav-item">
          <NavLink className='Links nav-link text-light' aria-current="page" to="/">SignIn</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='Links nav-link text-light' to="/SignUp">SignUp</NavLink>
        </li>
      </ul>
       
    </div>
  </div>
</nav>
  )
}
