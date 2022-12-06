import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SERIES } from '../../DATA/SERIES'
import './Styles/AllFilms.css'
import UpSideBar from '../UpSidebar.js'
import Modal from './Modal.js'
import Back_Button from '../Back_Button'

export default function AllFilms() {

  const [Items, setItems] = useState(SERIES);
  const [open, setOpen] = useState(false);
  const [infoAboutFilm, setInfoAboutFilm] = useState({})
  const [searchResult, setSearchResult] = useState(true)

  const search = (event) => {
    event.preventDefault();
    
    const Input = document.querySelector('.searchInput');
    let newArr = Items.filter(el=>
      el.name.toLowerCase().includes(Input.value.toLowerCase())
    )

    setTimeout(()=>{
      (Input.value == '')
        ?setItems(SERIES) 
          :setItems(newArr)
          

    }, 400)

    
  }

  return (
    <div className='box'>
      <UpSideBar search = {search}/>
      <Back_Button />
      {
        open && <Modal setOpen = {setOpen}
                       infoAboutFilm = {infoAboutFilm} 
                       type='Series'
                       typeOfAction={'ADD_FAVORITE_SERIES'}/>
      }
      
      {
        searchResult
        ?<div className='ContainerForFilms'>
          {
            Items.map(film=>(
            <div className='Item'>
              <img  className='IMG' 
                    key={film.id} 
                    src={film.mainImg}
                    onClick={()=>{
                      setInfoAboutFilm(SERIES[film.id]);
                      setOpen(true)}
                    }/>
              <p key={film.name}>{film.name}</p>  
            </div>
            ))
          }
      </div> 
        :<h1>No results</h1>
      }
      
    </div>
  )
}

