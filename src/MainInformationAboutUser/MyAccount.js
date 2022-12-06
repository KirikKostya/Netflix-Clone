import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './StylesForFavorite/MyAccount.css'
import {MyFavorite} from '../DATA/MY_FAVORITE.js'
import { useSelector } from 'react-redux';

export default function MyAccount({userNameAccount}) {

  const USER = JSON.parse(localStorage.getItem(userNameAccount));
  const MyFavoriteFilms = useSelector(state=>state.MyFavoriteFilms)
  const MyFavoriteSeries = useSelector(state=>state.MyFavoriteSeries)
  return (
    <div className='body'>
      <NavLink className='NavLinkMA' to={'/'}> &#11013;Back</NavLink>
        <div className='containerForProfile'>
          {
            <div className='info'>
              <div className='logo'>
                {
                  (USER.sex == 'Male')
                    ?<h1 className='emoji'>&#128589;&#8205;&#9794;&#65039;</h1>
                      :<h1 className='emoji'>&#128113;&zwj;&#9792;</h1>
                }
              </div>
              <h2  key={USER.name} className='header'>{USER.name}</h2>
              <h7 key={USER.mail} className='mail'>{USER.mail}</h7>
              
              <div className='mini-info'>
                <h5 key={USER.country}>{USER.country}</h5>
                <h5 key={USER.birthday}>{USER.birthday}</h5>
              </div>

            </div>
          }

          <div>
            <p><NavLink className={'Favorite'} to="/MyFavoriteFilms">My favorite films </NavLink>({MyFavoriteFilms.length})</p>
            <p><NavLink className={'Favorite'} to="/MyFavoriteSeries">My favorite series</NavLink>({MyFavoriteSeries.length})</p>
          </div>

        </div>
    </div>
  )
}
