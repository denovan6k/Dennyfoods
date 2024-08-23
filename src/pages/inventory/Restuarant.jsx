import React from 'react'
import InventoryRow from './InventoryRow'
import InventoryCard from './InventoryCard'
import InventoryCard1 from './InventoryCard1'
import InventoryCard2 from './InventoryCard2'
function Restuarant() {
  return (
    <div>
        <div>
        <InventoryRow/>
      </div>
      {/* <div className='flex justify-between'>
        <p>Soup menu</p>
        <p>see all</p>
      </div> */}
      <div className='flex mt-11 justify-between'>
        <p className='text-[#1A1A1A]'> Soup Menu</p>
          <p className='mr-5 text-sm text-[#CF9832]'> See all </p>
        </div>
      <div>
       <InventoryCard/>
      </div>
      <div className='flex mt-11 justify-between'>
        <p className='text-[#1A1A1A]'> Salad Menu</p>
          <p className='mr-5 text-sm text-[#CF9832]'> See all </p>
        </div>
        <div>
          <InventoryCard1/>
          </div>
          <div className='flex mt-11 justify-between'>
        <p className='text-[#1A1A1A]'> Rice Menu</p>
          <p className='mr-5 text-sm text-[#CF9832]'> See all </p>
        </div>
        <div>
          <InventoryCard2/>
          </div>
    </div>
    
  )
}

export default Restuarant



