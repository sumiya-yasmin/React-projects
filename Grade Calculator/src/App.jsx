import { useState } from 'react';
import './App.css'
import clsx from 'clsx';
import { useGrade } from './components/useGrade';

function App() {


const {resetGrade, calculateGrade, errorText, grade, marks, setMarks} = useGrade();

const inputMarks = (event) =>{
  setMarks(event.target.value);
}
  

  return (
  
    <div className={clsx('w-[70%] h-[85vh] m-[auto] flex flex-col bg-gray-200 items-center py-6 rounded-md shadow-lg inset-shadow-sm')}>
            <h1 className='font-bold text-4xl text-center mb-16 '>Grade Calculator</h1>
      
            <input
            className={clsx("border p-1 rounded text-center text-[3vw]", errorText && "border-red-500")}
            type="number"
            value={marks}
            placeholder='Input your marks'
            onChange={inputMarks}
            />
            <p className='text-red-400 font-bold mt-2'>{errorText}</p>
            <button
            className="mt-4 text-[2vw] bg-slate-800 text-white py-2 px-4 rounded-lg hover:bg-slate-900 transition"
             onClick={()=>calculateGrade()}
            >Calculate Grade</button>
            
              {grade && <h2 className={clsx('text-4xl font-semibold text-center mt-6', grade==="F"&&"text-red-600")}>{grade}</h2>}
            <button
            className="mt-4 text-[2vw] bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
            onClick={resetGrade}
            >Reset</button>
        </div>

  )
}

export default App