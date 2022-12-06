import React from 'react'
import './StylesForFavorite/MyFavorite.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Back_Button from '../MainComponents/Back_Button'

export default function MyFavoriteFilms() {
  
  const MyFavoriteSeries = useSelector(state=>state.MyFavoriteSeries)
  
  const dispatch = useDispatch()

  return (
    <div className='box'> 
    <h1>My Favorite Films</h1>
    <Back_Button />
      <div className='ContainerForFavoriteFilms'>
          {
            MyFavoriteSeries.map(film=>(
            <div className='Item' key={film.id}>
             <img className='IMG' 
                    key={film.id} 
                    src={film.mainImg}/>
              <p key={film.name}>{film.name}</p>  
              <button className='DeleteBtn' 
                      onClick={()=>{
                        dispatch({
                          type: 'REMOVE_FAVORITE_SERIES', payload: film.id})
                                  }}><span>&times;</span></button>
            </div>
            ))
          }
      </div>
    </div>
  )
}
