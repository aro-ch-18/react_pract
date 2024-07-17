import React, { useEffect, useRef } from "react";
import { useState } from "react";

export const CountDown = () => {
  const [start, setStart] = useState(true);
  const [ip, setIp] = useState({ hour: "", minute: "", second: "" });
  const [timerId, setTimerId] = useState(0);
  const [pause, setPause] = useState(false);
  const inputRefs=useRef([]);

  const startHandler = () => {
    if(ip.second==""&&ip.hour==""&&ip.minute==""){
        alert("No Input")
        return
    }
    setStart(false);
  };

  const inputHandler = (event) => {
    if(event.target.value<0||(event.target.name!=="hour")&&event.target.value>59){
        alert("Invalid input")
        return;
    }
    setIp((prev) => ({
      ...prev,
      [event.target.name]: parseInt(event.target.value),
    }));
  };

  const changeSecond = () => {
    if (ip.second > 0) {
      setIp((prev) => ({
        ...prev,
        ["second"]: ip.second - 1,
      }));
    } else if (ip.second === 0 && ip.minute > 0) {
      setIp((prev) => ({
        ...prev,
        ["minute"]: ip.minute - 1,
        ["second"]: 59,
      }));
    } else  {
      setIp((prev) => ({
        ...prev,
        ["hour"]: ip.hour - 1,
        ["minute"]: 59,
        ["second"]: 59,
      }));
    }
    if(ip.second===0&&ip.hour===0&&ip.minute===0){
        resetHandler();
    }
  };

  const pauseHandler = () => {
    setPause(true);
    clearInterval(timerId);
  };
  const resetHandler=()=>{
    setIp((prev) => ({
        ...prev,
        ["hour"]: "",
        ["minute"]: "",
        ["second"]: "",
      }));
      clearInterval(timerId);
      setStart(true);

  }
  console.log("Render")
  let tid;

  

  useEffect(()=>{
    if(inputRefs.current[0])
    inputRefs.current[0].focus();
  },[start])
  useEffect(() => {
    if (!start) {
      tid = setInterval(() => {

        changeSecond();
      }, 1000);
      setTimerId(tid);
    } else {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(tid);
    };
  }, [start, ip]);
  const resumeHandler=()=>{
    setPause(false);
    changeSecond();
  }
  const keydownHandler=(event,index)=>{
    if(event.key==="Enter"){
        if(index<3){
            inputRefs.current[index+1].focus();
        }

    }
    if( event.key==="Backspace"){
        if(index>0&&event.target.value==""){
            inputRefs.current[index-1].focus();

        }
    }

  }
  return (
    <div className="text-center bg-slate-500">
      <h1>CountDown Timer</h1>
      <div>
        {start ? (
          <div>
            <div className="flex gap-2 justify-center input-container">
              <input
               
                onKeyDown={(e)=>keydownHandler(e,0)}
                ref={(input)=>(inputRefs.current[0]=input)}
                type="number"
                className=""
                onChange={(e) => inputHandler(e)}
                name="hour"
                value={ip.hour}
              ></input>
              <input 
                onKeyDown={(e)=>keydownHandler(e,1)}
                ref={(input)=>(inputRefs.current[1]=input)}
                type="number"
                className=""
                onChange={(e) => inputHandler(e)}
                name="minute"
                value={ip.minute}
              ></input>
              <input 
                onKeyDown={(e)=>keydownHandler(e,2)}
                ref={(input)=>(inputRefs.current[2]=input)}
                type="number"
                className=""
                onChange={(e) => inputHandler(e)}
                name="second"
                value={ip.second}
              ></input>
            </div>
            <button
              className="border border-black m-2 px-2 bg-neutral-400 cursor-pointer"
              onClick={startHandler}
            >
              Start
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-center gap-4 items-center">
              <p className="text-center w-[50px] h-[50px] text-5xl flex items-center justify-center p-0">
                {ip.hour<10?("0"+ip.hour):(ip.hour)}
              </p>
              <span className="text-5xl">:</span>
              <p className=" text-center w-[50px] h-[50px] text-5xl flex items-center justify-center">
              {ip.minute<10?("0"+ip.minute):(ip.minute)}
              </p>
              <span className="text-5xl">:</span>
              <p className=" text-center w-[50px] h-[50px] text-5xl flex items-center justify-center">
              {ip.second<10?("0"+ip.second):(ip.second)}
              </p>
            </div>
            <div className="flex gap-4 justify-center">


                {
                    !pause?
                    ( <button
                        className="px-3 bg-slate-100 mt-3 mb-3 border border-blue-100 rounded-sm"
                        onClick={pauseHandler}
                      >
                        Pause
                      </button>)
                    :
                    (<button
                        className="px-3 bg-slate-100 mt-3 mb-3 border border-blue-100 rounded-sm"
                        onClick={resumeHandler}
                      >
                        Resume
                      </button>)
                }
             
              
              <button
                className="px-3 bg-slate-100 mt-3 mb-3 border border-blue-100 rounded-sm"
                onClick={resetHandler}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
