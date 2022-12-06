import React from 'react'
import {Films} from'../DATA/FILMS.js'
import '../StylesForMainField/Scroll.css'

export default function Scroll({setfilm}) {

  return (
    <div className='container'>
        
            <ul className='scrollField'>
                {
                    Films.map(film=>(
                            <img key={film.id} 
                                      onClick={()=>{
                                        setfilm(film.id);
                                        // changeInformation(); 
                                      }} className='scrollItem' src={film.mainImg}></img>
                        ))
                }
            </ul>
        
    </div>
  )
}
