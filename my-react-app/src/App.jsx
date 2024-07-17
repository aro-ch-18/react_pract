import { useState } from 'react'
import NavBar from './components/header'
import './App.css'
import FAQ from  "./page/faq"
import { CountDown } from './page/CountDown'
import { PinInput } from './components/pinInput'
import Pin from './page/PIN_page'
import EMI from './page/EMI'
import Modal from "./page/modal"
import { Ucounter } from './page/undoable'
// import Pin from './page/PIN_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-[100vh]  '>
      {/* <NavBar /> */}
      {/* <CountDown/> */}
      {/* <Pin></Pin> */}
      {/* <div className='flex items-center justify-center'> */}
      {/* <FAQ></FAQ>  */}
      {/* <EMI/> */}
        
      {/* </div> */}
      {/* <Modal/> */}
      {/* <h1></h1> */}
      <Ucounter></Ucounter>
     
      
    </div>
  )
}

export default App;
