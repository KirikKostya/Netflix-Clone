import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Films } from '../../DATA/FILMS'
import './Styles/AllFilms.css'
import UpSideBar from '../UpSidebar.js'
import Modal from './Modal.js'
import Back_Button from '../Back_Button'

export default function AllFilms({userNameAccount}) {

  const [Items, setItems] = useState(Films);
  const [open, setOpen] = useState(false);
  const [infoAboutFilm, setInfoAboutFilm] = useState({});

  const search = (event) => {
    event.preventDefault();
    const Input = document.querySelector('.searchInput');
    let newArr = Items.filter(el=>
      el.name.toLowerCase().includes(Input.value.toLowerCase())
    )
    setTimeout(()=>{
      (Input.value == '')
        ?setItems(Films) 
          :setItems(newArr)
    }, 400)
  }

  return (
    <div className='box'>
      <UpSideBar search = {search} infoAboutFilm = {infoAboutFilm}/>
        <Back_Button />
      {
        open 
          && <Modal setOpen = {setOpen}
                    infoAboutFilm = {infoAboutFilm} 
                    type = 'Films' 
                    typeOfAction={'ADD_FAVORITE_FILM'}
                     />
      }
      <div className='ContainerForFilms'>
          {
            Items.map(film=>(
            <div className='Item' key={film.id}>
             <img  className='IMG' 
                    key={film.id} 
                    src={film.mainImg}
                    onClick={()=>{
                      setInfoAboutFilm(Films[film.id]);
                      setOpen(true)}
                    }/>
              <p key={film.name}>{film.name}</p>  
              
            </div>
            ))
          }
      </div>
    </div>
  )
}
