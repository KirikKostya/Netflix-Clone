import React from 'react'
import { BrowserRouter,
         Routes,
         Route } from 'react-router-dom';
import MainField from './MainField.js'
import MyAccount from '../MainInformationAboutUser/MyAccount.js'
import MyFavoriteFilms from '../MainInformationAboutUser/MyFavoriteFilms.js'
import MyFavoriteSeries from '../MainInformationAboutUser/MyFavoriteSeries.js'
import Home from './RotingForLeftSideBar/Home.js';
import AllFilms from './RotingForLeftSideBar/AllFilms.js';
import Series from './RotingForLeftSideBar/Series.js';
import { Films } from '../DATA/FILMS.js';
import { Users } from '../DATA/USERS.js';

export default function ForRouter({userNameAccount}) {
  return (
    <div>
        <BrowserRouter>
        
            <Routes>
                <Route path='/' element={<MainField />}/>
            </Routes>

            <Routes>
                <Route path='/MyAccount' element={<MyAccount userNameAccount={userNameAccount}/>}/>
            </Routes>

            <Routes>
                <Route path='/MyFavoriteFilms' element={<MyFavoriteFilms/>}/>
            </Routes>

            <Routes>
                <Route path='/MyFavoriteSeries' element={<MyFavoriteSeries/>}/>
            </Routes>

            <Routes>
                <Route path='/Home' element={<Home />}/>
            </Routes>

            <Routes>
                <Route path='/AllFilms' element={<AllFilms films={Films} userNameAccount={userNameAccount}/>}/>
            </Routes>

            <Routes>
                <Route path='/Series' element={<Series />}/>
            </Routes>
        
        </BrowserRouter>
    </div>
  )
}
