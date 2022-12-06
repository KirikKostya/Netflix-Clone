import {React, useState} from 'react'
import '../StylesForMainField/AboutFilms.css'
import {Films} from'../DATA/FILMS.js'
import Scroll from './Scroll.js'
import LeftSideBar from './LeftSideBar'


export default function AboutFilms() {
  const [film, setfilm] = useState(0);

  const changeDescription = () => {
    const description = document.querySelector('#description');
    const informationPar = document.querySelector('.informationPar');
      description.classList.add('close');
      informationPar.classList.remove('close');
  }
  const changeInformation = () => {
    const description = document.querySelector('#description');
    const informationPar = document.querySelector('.informationPar');
      description.classList.remove('close');
      informationPar.classList.add('close')
  }
  return (
    <div className='ContainerForMainField'>
      <LeftSideBar />
      {/* <Router/> */}
      <div>
        <div className='information'>
          <div className='TextForFilms'>

            <div id='description' className={`paragraph-${Films[film].theme || 'white'} `} >
              <h3 className='headerFilm'>{Films[film].name}</h3>
              {Films[film].description}
            </div>

            <div className={'informationPar close'}>
              <h3>{Films[film].limitAge} </h3>
              <h3>{Films[film].duration} </h3>
              <h3>{Films[film].year} </h3>
            </div>

            <div className='BtnsBlock'>
                <button className='Btn-change' onClick={changeInformation} >description</button>
                <button className='Btn-change' onClick={changeDescription}>information</button>
            </div>
          
          </div>
          
          <img className='bg-image' src={Films[film].mainImg}></img>
        </div>

      <Scroll setfilm={setfilm} />
      </div>
    </div>
  )
}
