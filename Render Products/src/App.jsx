import { useState } from 'react';
import useData from './useData';


function App() {
  const {loading, error, products} = useData()
 
  const columns = products.length > 0 ? Object.keys(products[0]).filter((key) => key !== 'image') : [];


   return (
     <div className=" flex items-center p-6 text-xl font-semibold ">
      {products && 
        <table className='min-w-full bg-white  shadow-lg rounded-lg'>
        <thead className='bg-gray-200 px-6 py-3 text-left text-xl font-bold capitalize'>
          {columns.map((column)=><th className='px-4 py-2'>{column}</th>)}
        </thead>
        <tbody>
          {products.map((product)=>(
           <tr key={product.name} className='hover:bg-gray-100 transition-colors'>
            {columns.map((column)=>(<td className='px-4 py-2 border border-gray-200 capitalize '>{product[column]}</td>))}
           </tr>
             ))
            }
        </tbody>
    </table>
    }
     {  loading == true && <p className='text-center  text-2xl font-bold'>Loading....</p> }
     {error && <p>Error Fetching Data</p>}
        
     </div>
   );
 }
 
 

export default App
