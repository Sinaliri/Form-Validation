import React , {useContext}from 'react';
import { DataContex } from '../SignUp/SignUp';
const InputMaker = (props) => {
    const providers=useContext(DataContex)
       const changehandler=(event)=>{
        providers[1].setDate(event.target.value)
       }

  return (
    <div>
        <label>{props.name}</label>
        <input type={props.type} name={props.inputName} value={props.value} onChange={changehandler} />
    </div>
  )
}

export default InputMaker