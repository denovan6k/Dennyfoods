import React from 'react'
import InventoryRow from './InventoryRow'
import SupCard from './SupCard'
import SupCard1 from './SupCard1'
import SupCard2 from './SupCard2'
function Supermarket() {
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
        <p className='text-[#1A1A1A]'> Fruit Menu</p>
          <p className='mr-5 text-sm text-[#CF9832]'> See all </p>
        </div>
      <div>
       <SupCard/>
      </div>
      <div className='flex mt-11 justify-between'>
        <p className='text-[#1A1A1A]'> Cereals Menu</p>
          <p className='mr-5 text-sm text-[#CF9832]'> See all </p>
        </div>
        <div>
          <SupCard1/>
          </div>
          <div className='flex mt-11 justify-between'>
        <p className='text-[#1A1A1A]'> Rice Menu</p>
          <p className='mr-5 text-sm text-[#CF9832]'> See all </p>
        </div>
        <div>
          <SupCard2/>
          </div>
    </div>
  )
}

export default Supermarket
