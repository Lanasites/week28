import { useState, useRef } from "react";
import './Form.scss'

export default function Form(){

const [text,setText] =useState('');
const [vewText,setVewText] =useState('');
const ref=useRef();

const onChange = (e)=>{
    setText(e.target.value)
}
const printText = (e)=>{
    e.preventDefault();
    setVewText(text);
    setText('');
    focus();
}
const focus=()=>{
    ref.current.focus();
}

return(
    <div className="page">
        <form className="page__form">
            <input  className='page__form__text' 
                    type="text" 
                    required 
                    value={text} 
                    onChange={onChange}
                    ref={ref}/>
            <button className='page__form__button' type = 'submit' onClick={printText}>Вывести текст</button>
        </form>
        <p className="print" hidden={vewText===''?true:false}>Вы ввели: <span>{vewText}</span></p>
        
        
    </div>
    );
}