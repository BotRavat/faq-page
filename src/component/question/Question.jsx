import './question.css';
import { useState } from "react";


export default function Question({questions}){
    const [ans,setAns]=useState(false);
    return (
        <>
           <div className="question"  onClick={()=>setAns(!ans)}>
            <h3>{questions.question}</h3>
            <p className='plusSign' >{ans ?"➖":"➕"}</p>
            </div> 
           {
            ans && <p className='answer'>{questions.answer}</p>
           }
          
           
            
            
        </>
    )
}