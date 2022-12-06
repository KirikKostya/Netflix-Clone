import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AutorizateMain from './ComponentsAutorizationPage/AutorizateMain';
import ForRouter from './MainComponents/ForRouter.js'
import {Users} from "../src/DATA/USERS.js"
import {Films} from './DATA/FILMS.js'

function App() {
  
  const [isAutorizate, setIsAutorizate] = useState(false)
  const [userNameAccount, setUserNameAccount] = useState('Kirik.kostya@list.ru')

  return (

 <div className='App'> 

{ 
  !isAutorizate 
  ? (
      <AutorizateMain setIsAutorizate={setIsAutorizate} setUserNameAccount={setUserNameAccount}/>
    )
    :(<ForRouter Films = {Films} userNameAccount={userNameAccount}/>)
  }
 </div>
  );
}

export default App;

