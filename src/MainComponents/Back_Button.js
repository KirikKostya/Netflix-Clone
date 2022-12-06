import React from 'react'
import '../MainComponents/RotingForLeftSideBar/Styles/Back_Button.css'
import { NavLink } from 'react-router-dom'

export default function Back_Button() {
  return (
    <div>
        <NavLink className='NavLink' to={'/'}> &#11013;Back</NavLink>
    </div>
  )
}
