import React from 'react'
import { NavLink } from 'react-router-dom'
import '../StylesForMainField/AccountNavigation.css'

export default function AccountNavigation({className, setClassName}) {
  return (

      <div className={`AccoutList ${className}`} >
        
        <h2><span onClick={()=>setClassName('close')}>&times;</span></h2>
        
          <ul>
          
            <li><NavLink className={'NavLink'} aria-current="page" to="/MyAccount">My Account</NavLink></li>
            <li><NavLink className={'NavLink'} to="/MyFavoriteFilms">My favorite films</NavLink></li>
            <li><NavLink className={'NavLink'} to="/MyFavoriteSeries">My favorite series</NavLink></li>
          
          </ul>
        
    </div>
    
  )
}
