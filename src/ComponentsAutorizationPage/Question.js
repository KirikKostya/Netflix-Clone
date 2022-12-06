import React from 'react'
import '../StylesForNetflix/Question.css'

export default function Question({id, tittle, answer}) {
    const expand = () =>{
        const answer = document.querySelector(`.answer-${id}`);
        const BTN = document.querySelector(`.BTN-${id}`);
        answer.classList.toggle('close');
        BTN.classList.toggle('active')
    }
  return(
    <div>
        <button className={`BTN BTN-${id}`} onClick={expand}>{tittle}<p>&#10133;</p></button>
        <div className={`answer answer-${id} close`}>{answer}</div>
    </div>
  )
}
