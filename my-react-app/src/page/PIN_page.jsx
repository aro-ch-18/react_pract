import React, { useState } from 'react'
import { PinInput } from '../components/pinInput';

const Pin = () => {
  const[pin,setPin]=useState("") 
  const[showOtp,setshowOtp]=useState(true)
  const[veri,setVeri]=useState(false);
  function submitHandler(e){
    e.preventDefault();
    if(pin)
      console.log(pin)
    setshowOtp(false);

  }
  const pinSubmit=(pinChild)=>{
    console.log(pinChild);
    setVeri(true);
  }

  return (
    <div className='h-60 w-60 border rounded-md bg-gray-100 flex flex-col justify-center items-center gap-2'>{
      !veri?( <div>
        {
          showOtp
          ?(
  
        <form onSubmit={submitHandler}  className='flex flex-col items-start gap-2 ' >
          <input
          className=' border border-black border-solid rounded-sm'
          type='email'
          value={pin}
          onChange={(e)=>{setPin(e.target.value)}}
          placeholder='Enter Email'
          ></input>
          <button className='border border-black rou nded-sm px-2 hover:bg-slate-500 '>Submit</button>
  
        </form>
          ):(
            <div>
              <p>Enter the OTP sent on your mail</p>
              <PinInput length={4} pinSubmit={pinSubmit}></PinInput>
  
            </div>
            
          )
  }
  
        
        
  
      </div>):(
        <div>You have been Verified</div>
      )
    }
    </div>
    
   
  )
}

export default Pin;