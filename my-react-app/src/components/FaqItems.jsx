import React from 'react'
import { useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Items = ({data}) => {
    console.log(data)
    const[ans,setAns]=useState(false)
    const btnHandler=()=>{
        setAns((ans)=>!ans)
    }
  return (
    <div>
        <div className='flex flex-col h-auto'>
            <div className='flex gap-1'>
            <button className='cursor-pointer  '  onClick={btnHandler}><IoIosArrowDroprightCircle className={`${ans?"rotate-90 transition-transform duration-500":"duration-500"}`} size={40}/></button>
            <div className='bg-teal-200 border rounded-md h-auto w-full flex flex-col justify-center p-2'>
            <p className='p-0'>
            {data.question}</p>


            </div>
            </div>
            
            
            {ans&&
            
                <p className='pl-14'>{data.answer}</p>
               
}
            

           
        </div>

    </div>
  )
}

export default Items;