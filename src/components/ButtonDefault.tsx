import React from 'react'

type Variable ={
    text:string
}

function ButtonDefault(props:Variable) {
    const {text} = props
  return (
    <button className='w-[6rem] h-[2rem] rounded-2xl outline-2 outline-black
    hover:bg-black hover:text-white hover:drop-shadow-2xl hover:translate-y-[-1px] active:translate-y-0 lg:text-2xl'
    >{text}
    </button>     
  )
}

export default ButtonDefault