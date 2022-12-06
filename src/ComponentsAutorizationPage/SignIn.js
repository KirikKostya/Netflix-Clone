import React, { useEffect, useState } from 'react'
import '../StylesForNetflix/SignIn.css'

export default function SignIn({setIsAutorizate, setUserNAmeAccount}) {

    useEffect(()=>{
        // console.log(0)
    }, [])

    const EyeBtn=(e)=>{
        e.preventDefault();
        const passwordInput = document.querySelector('#inputPassword3')
        
        if(passwordInput.type == 'password'){
            passwordInput.type = 'text'
        } else {
            passwordInput.type = 'password'
        }
    }

    const SignIn = (e) =>{
        e.preventDefault()
        const mailInput = document.querySelector('#inputEmai13');
        const passwordInput = document.querySelector('#inputPassword3');
        
        const UsersOfLocalStorage = Object.values(localStorage);

            for(let user of UsersOfLocalStorage){
                const parseUser = JSON.parse(user);
                if(parseUser.name == mailInput.value 
                    &&
                parseUser.password == passwordInput.value) {
                    setIsAutorizate(true);
                    // setUserNAmeAccount(parseUser);
                } else {
                    console.log('Try again!')
                }
            }
        }

  return (
    <div>
        <div className='OpeningText'>
            <h2>What's up, bro!</h2>
            <h3>Welcome to <span>NETFLIX</span> site-clone!</h3>
            <h4>
                This site was created by Kirik Kostya<br></br> 
                solely htmlFor scientific and interesting putposes!
            </h4>
            <h5>
                If you have not yet registered on this site,<br></br>
                be sure to do so by clicking on the button <span>"SignUp"</span><br></br>
                If you are already registered on our site,<br></br>
                you can log in without any problems!<br></br>

            </h5>
        </div>
        <div className='SignIn'>
            <h2 className='text-danger'>Sign In</h2>
            <form className=' d-flex rounded-4  flex-column '>
                <div className="row mb-1 ">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-15">
                        <input type="email" className="form-control" id="inputEmai13" />
                        </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-15 d-flex">
                        <input type="password" className="form-control" id="inputPassword3" />
                        <button onClick={EyeBtn} className='eyeBtn'>&#128065;&#65039;</button>
                        </div>
                </div>
                <button onClick={SignIn} type="button" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    </div>
  )
}
