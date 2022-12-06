import React from 'react'
import { NavLink } from 'react-router-dom'
import '../StylesForMainField/LeftSideBar.css'


export default function LeftSideBar() {
    const OpenSideBar = () =>{
        const list = document.querySelector('.list');
        list.classList.toggle('close')
    }
  return (
    <div className='SideBarContainer'>
        
        <div className='iconLeftSideBar'>
            <h5 onClick={OpenSideBar}>&#128269;</h5>
        </div>

            <div className='list'>
                <ul>
                    <NavLink className={'NavLink'} aria-current="page" to='/Home'>Home</NavLink>
                    <NavLink className={'NavLink'} to='/AllFilms'>Films</NavLink>
                    <NavLink className={'NavLink'} to='/Series'>Series</NavLink>
                </ul>
            </div>

    
    </div>
  )
}
