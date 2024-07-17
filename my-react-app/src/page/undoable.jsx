import React, { useState } from 'react'

export const Ucounter = () => {
  const [cnt,setCnt]=useState(0);
  const [hist,setHist]=useState([]);
  const[redo,setRedo]=useState([]);
  const[undoCnt,setUndoCnt]=useState(0);
  const clickHandler=(btn)=>{
    const val=parseInt(btn);
    const obj={
        btn,
        prev:cnt,
        curr:cnt+val,
    }
    let temp=[...hist]
    temp.unshift(obj)
    setHist(temp);
    setCnt((cnt)=>cnt+val)
  }
  // const handleUndo=()=>{
  //   if(hist.length>0){
  //     let tempList=[...hist];
  //     let firstHist=tempList.shift();
  //     setHist(tempList);
  //     setCnt(firstHist.prev);
      
  //   }
  // }
  const handleUndo = () => {
    if (hist.length > 0) {
      // if(undoCnt>=5){
      //   alert("You can only UNDO 5 times");
      //   return
      // }
      setUndoCnt((undoCnt)=>undoCnt+1);
      console.log(cnt);
      let tempList = [...hist];
      let firstHist = tempList.shift();

      setHist(tempList);
      setCnt(firstHist.prev); // Update cnt to the previous count

      let tempRedo=[...redo];
      tempRedo.push(firstHist);
      setRedo(tempRedo);

  
    }
  };
  const handleRedo=()=>{
    if(redo.length){
    let tempRedo=[...redo];
    let firstRedo=tempRedo.pop();
    let tempHist=[...hist];
    tempHist.unshift(firstRedo);
    setRedo(tempRedo);
    setHist(tempHist);
    setCnt(firstRedo.curr);
    }


  }
  
  console.log(hist);
  return (
    <div className='h-[100vh] '>
        <h1 className="text-center text-3xl font-bold ">Undoable Counter</h1>
       
        <div className='h-[400px] flex flex-col justify-center items-center gap-7'>
        <div className='flex  gap-10'>
          <button className='border border-blue-700 w-24 h-14 bg-yellow-500 rounded-md font-bold' onClick={()=>handleUndo()} >Undo</button>
          <button className='border border-blue-700 w-24 h-14 bg-yellow-500 rounded-md font-bold' onClick={()=>handleRedo()}>Redo</button>
        </div>
        <div className='flex items-center gap-2'>{
          [-100,-10,-1].map((btn)=>{
            return (
              <button className='border border-blue-700 w-24 h-14 bg-yellow-500 rounded-md font-bold ' onClick={()=>clickHandler(btn)}  >{btn}</button>
            )
          })
        }
        <p className='mx-5  text-center'>{cnt}</p>
        {
          [1,10,100].map((btn)=>{
            return (
              <button className='border border-blue-700 w-24 h-14 bg-yellow-500 rounded-md font-bold ' onClick={()=>clickHandler(btn)} >{btn}</button>
            )
          })
        }
        </div>
    
        </div>
        <div className='w-80 h-80 border mt-2 mx-auto rounded-md border-black overflow-y-auto'>
          <p className='text-center font-bold mt-2'>HISTORY</p>

          {
            hist.map((val)=>{
              return (
                <div className='text-center'>{val.btn} : {val.prev} : {val.curr}</div>
              )
            })
          }
        </div>
        
      
    </div>
  )
}
