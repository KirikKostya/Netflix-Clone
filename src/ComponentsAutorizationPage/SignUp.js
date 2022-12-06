import React,{useState} from 'react'
import '../StylesForNetflix/SignUp.css'

export default function SignUp() {

    const [country, setCountry] = useState('');
    const [birthday, setBirthday] = useState('');
    // const [btnValue, setBtnValue] = useState('Sign Up');
    const [step, setStep] = useState(0);

    const EyeBtn = (e)=>{
        e.preventDefault();
        const passwordInput = document.querySelector('#inputPassword3')
        
        if(passwordInput.type == 'password'){
            passwordInput.type = 'text'
        } else {
            passwordInput.type = 'password'
        }
    }

    const NextStep = (event)=>{
        
        event.preventDefault();

        const Country = document.querySelector('#Country');
        const Birthday = document.querySelector('#Birthday');

        setCountry(Country.value);
        setBirthday(Birthday.value);

        Country.value = ''
        Birthday.value = ''
        
        setStep(1)
    }
    

    const SignUp = (event) => {
        event.preventDefault();

        const Email = document.querySelector('#inputEmail3');
        const Password = document.querySelector('#inputPassword3');
        const Male = document.querySelector('#male');
        const Famale = document.querySelector('#famale'); 

        if(Email.value != '' && Password.value != ''){
           
            const usersEmail = Object.keys(localStorage);

                    let User = {
                        name: Email.value,
                        password: Password.value,
                        country: country,
                        birthday: birthday,
                        sex: (Male.checked)?'Male':'Famale',
                        myFavoriteFilms:[],
                        myFavoriteSeries:[]
                    }

                localStorage.setItem(`${User.name}`, JSON.stringify(User))
                
            Email.value = ''
            Password.value = ''
        } else {
            alert('Enter Email and Password');
        }
    }

  return (
<div className='main'>

    <div className='Container'>
        
       { 
       
            step==0
            ?<div>
                <form className=' d-flex rounded-4 p-5 flex-column '>
                    <div className='d-flex flex-column'>
                    <div className="row mb-3 ">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label me-2">Country</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="Country" />
                        </div>
                    </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label me-2">Birthday</label>
                                <div className="col-sm-10 d-flex">
                                    <input type="date" className="form-control" id="Birthday"/>
                                </div>
                        </div>
                        
                    <button onClick={NextStep} type="submit" className="btn btn-primary">Next Step</button>

                    </div>
                </form>
            </div>

             :<div>

                <form className=' d-flex rounded-4 p-5 flex-column '>

                    <div className='d-flex flex-column'>
            
            <div className="row mb-3 ">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label me-2">Email</label>
                <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label me-2">Password</label>
                <div className="col-sm-10 d-flex">
                <input type="password" className="form-control" id="inputPassword3"/>
                <button onClick={EyeBtn} className='eyeBtn'>&#128065;&#65039;</button>
                </div>
            </div>
            
            <fieldset className="row mb-2">
                <legend className="col-form-label col-sm-2 pt-0">Sex:</legend>
                <div className="col-sm-10">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="male" value="male" checked />
                    <label className="form-check-label" htmlFor="gridRadios1">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="famale" value="famale" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                        Female
                    </label>
                </div>
                </div>
            </fieldset>

            <div className="form-check mt-4">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                    <p className='fw-light'>Remember me?</p>
            </div>

                    </div>
            <button onClick={SignUp} type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        }
    </div>
</div>

  )
}
