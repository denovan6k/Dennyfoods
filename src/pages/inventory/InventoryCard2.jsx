import React from 'react'
import InventoryCardData from './InventoryCardData'
function InventoryCard2() {
  return (
    <div>
       <div className='rounded-lg bg-white mt-6 mb-6 border shadow-sm' height={207} width={1120}>
      
      <ul className='flex  px-1'>
      {InventoryCardData.map((inv, index) => (
       <li key={index} 
       className=''
       >
         <div className='flex mt-5 mb-5 ml-4 p-4 bg-white'>
         {inv.img2}
         <div className='ml-2'>
          <span className='text-[#404040]'> {inv.title2} </span>
          <div className='flex mt-3'> 
           <span className='text-[#404040]'>{inv.price} </span>
          <span className='ml-4 text-[#8C8C8C]'> {inv.weight}</span>
          </div>
         <div className='flex mt-6 space-x-4'>
           {inv.icon1}
           <p className='text-[#7B7B7B]'>0</p>
             {inv.icon2}
             {inv.icon3}
             </div>
         </div>
        </div>

       </li>
     ))}
     
       </ul>
     
 </div>
    </div>
  )
}

export default InventoryCard2
