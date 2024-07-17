import React, { useEffect, useState } from 'react'
import  "./EMI.css"

const EMI = () => {
    const [data,setData]=useState({principle:"",interest:"",time:""})
    const[emi,setEmi]=useState("")
    const changeHandler = (event)=>{
        if(event.target.value<0){
            alert("Cannot be negative");
            return;
        }
        setData((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })

    }
    console.log(data);
    useEffect(()=>{
        if(data.principle!=""&&data.time!=""&&data.interest!=""){
            let p=data.principle;
            let i = data.interest/12/100;
            let t=data.time;
            const calc=Math.pow(1+i,12*t)
            const e=p*(i*calc)/(calc-1);
            setEmi(Math.round(e))


        }

    },[data])

  return (
    <div className='w-[500px] h-auto bg-slate-100 flex flex-col items-center justify-center border rounded-md'>
        <form className='flex flex-col m-4'>
            <label htmlFor='principle'>Principle:</label>
            <input type='number'  name='principle' value={data.principle} id='principle' onChange={(e)=>changeHandler(e)} className='w-72 mt-3 h-10  border border-black rounded-md p-2'></input>
            <label htmlFor='interest'>Interest:</label>
            <input type='number' name='interest' value={data.interest} id="interest" onChange={(e)=>changeHandler(e)} className='w-72 mt-3 h-10 border border-black rounded-md p-2'></input>
            <label htmlFor='time'>Time:</label>
            <input type='number' name='time' value={data.time} id='time' onChange={(e)=>changeHandler(e)} className='w-72 mt-3 h-10 border border-black rounded-md  p-2'></input>
        </form>
        <p className='mb-3 text-lg'>The EMI is <span className=' font-bold'>{emi}</span> 
        </p>
    </div>
  )
}

export default EMI