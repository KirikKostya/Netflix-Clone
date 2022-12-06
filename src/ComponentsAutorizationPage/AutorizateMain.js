import React, {useState} from 'react'
import { BrowserRouter,
        Routes,
            Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationOfAutorization from './NavigationOfAutorization';
import SignIn from './SignIn';
import SignUp from './SignUp';
import InformationItem from './InformationItem';
import FAQ from './FAQ';
import Footer from './Footer';

 
  
  export default function AutorizateMain({setIsAutorizate, setUserNameAccount}) {

    return (
      <div>
        <div>
    <div className='FirstAutorisate'>
      <BrowserRouter className="">
          <NavigationOfAutorization />

            <header className="App-header">

              <Routes>
                <Route path='/' element={<SignIn setIsAutorizate = {setIsAutorizate}/>}/>
              </Routes>

              <Routes>
                <Route path='/SignUp' element={<SignUp setUserNameAccount={setUserNameAccount}/>}/>
              </Routes>
            </header>
                      
        </BrowserRouter>
    </div>

    <div className='InformationAboutApp'>
      
      <InformationItem videoSrc={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'}
                       head = {
                        'Enjoy on your TV.'
                      }
                       paragraph = {
                        'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
                       }
                       Class = {'item'}
                       bg_Photo = {'bg-Photo-TV'}
                       img={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'}
                        />
      
      <InformationItem videoSrc={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'}
                       head = {
                        'Watch everywhere.'
                      }
                       paragraph = {
                        'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
                       }
                       Class = {'itemReverse'}
                       bg_Photo={'bg-Photo-DifferentDevice'}
                       img={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'}
                       />
      
      <InformationItem head={'Create profiles for kids.'}
                       paragraph={'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'}
                       Class={'item'}
                       bg_Photo={'forKids'}
                       img={'https://occ-0-53-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f'}
                       />  
    
      <FAQ />
      <Footer />
    </div>
  </div>
      </div>
    )
  }
  