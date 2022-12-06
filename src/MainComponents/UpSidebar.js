import React, { useState } from 'react'
import '../StylesForMainField/UpSidebar.css'
import logo from '../PhotosForNetflix/Netflix-Logo.png'
import AccountNavigation from './AccountNavigation'

export default function UpSidebar({search, infoAboutFilm}) {
  
  const [className, setClassName] = useState('close')

  const OpenList = () => {
    (className == 'close')
      ?setClassName('')
        :setClassName('className')
  }

  return (
    <div className='containerForSidebar'>
        <img className='imgSidebar' src={logo} />
        
        <form className="d-flex" role="search">
            <input onChange={search} className="searchInput" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success BtnSearch" 
                    type="submit"
                    onClick={search}>Search</button>
        </form> 

    <div className='forAccout'>
        <div className='bell'>&#128276;</div>
        
        <div className='ForMyAccount'>
        
        <span className='myAccount' onClick={OpenList}>&#128589;&#8205;&#9794;&#65039;</span>  
        
        <AccountNavigation className = {className} 
                           setClassName={setClassName}
                           infoAboutFilm = {infoAboutFilm}/>

        </div>
    </div>
    </div>
  )
}
