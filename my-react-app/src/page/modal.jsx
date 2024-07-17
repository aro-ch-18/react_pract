import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Modal = () => {
  const [off, setOff] = useState(false);
  const[accept,setAccept]=useState(false);
  const offerHandler = () => {
    setOff(true);
  };
  const outsideHandler=(event)=>{
    let c=event.target.className.split(" ")
    console.log(c)
    if(c.includes("outside")){
        setOff(false);
    }
  }
  return (
    <div className="h-full">
        {
            !accept?
            (
                <div className="h-full overflow-hidden">
      <div className="h-full w-full flex items-center justify-center ">
        <div>
          <button
            onClick={offerHandler}
            className="border border-violet-500 h-12 w-30 text-center rounded-md px-4 py-3 bg-violet-600 flex items-center"
          >
            Show Offer
          </button>
        </div>
      </div>

      {off && (
        <div className="flex justify-center items-center fixed z-10 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 outside" onClick={(e)=>outsideHandler(e)}>
          <div className="h-60 w-60 border rounded-md bg-violet-200 px-2 py-2 flex flex-col justify-between">
            <div className="p-0">
              <button onClick={()=>setOff(false)} className="p-0 m-0"><IoClose style={{color:"red",padding:"0px"}} size={25}/></button>
            </div>
            <div className="m-0 p-0">
              <p className="text-sm ">This is a very nice demo offer made by Lord Arohan for his React.js practise. Please accept it and be blessed.</p>
            </div>
            <div className="flex justify-center">
              <button  className="bg-slate-400 h-10 w-full rounded-md" onClick={()=>setAccept(true)}>Accept Offer</button>
            </div>
          </div>
        </div>
      )}
    </div>

            )
            : 
            (
                <div className="font-bold text-3xl text-white h-full flex justify-center items-center">Offer Accepted!</div>

            )
        }
        
    </div>

  );
};

export default Modal;
