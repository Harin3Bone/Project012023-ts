import React from 'react'
import '../style/App.css'

type Variable ={
  type:string,
  labelText:string
}

function InputDefault(props:Variable) {
  const {type,labelText} = props
  return (
    <div className='mx-auto'>
        <input type={type} placeholder={type} className='inputA w-[9.6rem] mb-[3rem] border-b-2 border-[#5e5959] outline-0 
        bg-transparent placeholder:text-transparent placeholder:select-none focus:border-[#111727]'/>
        <label className='form__label'>{labelText}</label>
    </div>
  )
}

export default InputDefault