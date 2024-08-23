import {React,useState} from 'react'
import InventoryData from './InventoryData'
function InventoryRow() {
  const [activeItem, setActiveItem] = useState(null);
  const handleClick = (index) => {
    setActiveItem(index);
    // if (val.title === 'Dashboard') {
    //   setAct(true);
    // } else {
    //   setAct(false);
    // }
  };
  return (
    <ul className='flex space-x-4 mt-6'>
      {InventoryData.map((inv, index) => (
          <li key={index}  onClick={() => handleClick(index)} 
          className= {activeItem === index ? 'border bg-[#CF9832] text-black rounded-full px-4 py-3 ': 'border border-[#D1D1D1] hover:text-black hover:bg-[#F5EAD6] text-[#8C8C8C] rounded-full px-4 py-3 '}
          >
            
              <div className=''>
                
                <div className=' flex justify-center'>{inv.title}</div>
              </div>
       
          </li>
        ))}
      </ul>
  )
}

export default InventoryRow
