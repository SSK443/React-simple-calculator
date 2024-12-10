
import { useState } from 'react'
import './App.css'

function App() {
  const[display,setDisplay]=useState('')
  const handleClick=(value)=>{
    setDisplay(display+value)


  }
  const clearAll=()=>{
    setDisplay('')
  }
  const clear=()=>{
    setDisplay(display.slice(0,-1))
  }
  const execute=()=>{
    
    try { 
      
      setDisplay(eval(display).toString()) } 
    catch{
      setDisplay('Error')
    }
  }

  return (
    <>
      <div className='bg-black w-full h-[100vh] flex justify-center items-center'>
        <div className="cal-body h-fit w-[350px] border-2 border-zinc-300 p-4 rounded-lg">
          <div className='grid
grid-cols-1 justify-items-center text-center'><input type="text" placeholder='Enter Number ' className='px-16 py-3 rounded-md' value={display} readOnly/></div>
          <div className='grid grid-cols-4 gap-2 items-start mt-5'>
            <button onClick={()=>clearAll()} className='text-blue-500'> AC</button>
           
            <button onClick={() => handleClick('/')} className='text-blue-500'>/</button>
            <button onClick={() => clear()} className='text-blue-500'><i class="fa-solid fa-delete-left"></i></button>
            <button onClick={() => handleClick('*')} className='text-blue-500'>*</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('-')} className='text-blue-500'>-</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('+')} className='text-blue-500'>+</button>
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('.')} className='text-blue-500'>.</button>
            <button onClick={() => handleClick('0')}>0</button>
 
      
            <button onClick={() => execute()} className='col-span-3 bg-blue-700'>=</button>


          </div>

        </div>
      </div>
    </>
  )
}

export default App
