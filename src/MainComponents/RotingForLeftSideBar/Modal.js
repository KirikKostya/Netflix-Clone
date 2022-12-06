import React, { useDebugValue } from 'react'
import './Styles/Modal.css'
import { useDispatch } from 'react-redux'

export default function Modal({setOpen, infoAboutFilm, type, typeOfAction}) {
    
    const dispatch = useDispatch()

    const addFilm = () =>{
      dispatch({type: typeOfAction, payload: infoAboutFilm})
    }
 
  return (
    <div className='modalContainer'>
        
            <button className='close' onClick={()=>setOpen(false)}>&times;</button>
            <button className='addFavorite' onClick={addFilm}>add</button> 
        
        {
          (type==='Films')?
        <>
          <h2 className='header'>{infoAboutFilm.name}</h2>

          <div className='info'>
              <p>{infoAboutFilm.limitAge}</p>
              <p>{infoAboutFilm.year}</p>
              <p>{infoAboutFilm.duration}</p>
          </div>
          <div className='description'>
          {infoAboutFilm.description}
          </div>
        </> 
          :<>
              <h2 className='header'>{infoAboutFilm.name}</h2>
        
              <div className='info'>
                  <p>{infoAboutFilm.limitAge}</p>
                  <p>{infoAboutFilm.year}</p>
                  <p>{infoAboutFilm.duration}</p>
              </div>
              <div className='info'>
                  <p>Seasons: {infoAboutFilm.seasons}</p>
                  <p>Numbers of series: {infoAboutFilm.numbersOfSeries}</p>
              </div>
              <div className='description'>
              {infoAboutFilm.description}
              </div>
          </>
        }
        

    </div>
  )
}
