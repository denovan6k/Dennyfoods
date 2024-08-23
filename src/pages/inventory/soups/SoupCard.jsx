import React, { useState, useRef } from 'react';
import SoupCardData from './SoupCardData';

function SoupCard() {
  const [counts, setCounts] = useState(Array(SoupCardData.length).fill(0));

  const increment = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const decrement = (index) => {
    if (counts[index] >= 1) {
      const newCounts = [...counts];
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  return (
    <div className='rounded-lg bg-white mt-6 border shadow-sm' style={{ height: '950px', width: '1120px' }}>
      <ul className='grid grid-cols-3 gap-x-4 gap-y-6 px-1'>
        {SoupCardData.map((inv, index) => (
          <li key={index} className=''>
            <div className='flex mt-5 mb-5 ml-4 p-4 bg-white'>
              {inv.img}
              <div className='ml-2'>
                <span className='text-[#404040]'> {inv.title} </span>
                <div className='flex mt-3'>
                  <span className='text-[#404040]'>{inv.price} </span>
                  <span className='ml-4 text-[#8C8C8C]'> {inv.weight}</span>
                </div>
                <div className='flex mt-6 space-x-4' key={index}>
                  <button onClick={() => decrement(index)} disabled={counts[index] < 1}>{inv.icon1}</button>
                  <p className='text-[#7B7B7B]'>{counts[index]}</p>
                  <button onClick={() => increment(index)}>{inv.icon2}</button>
                  <span className='-mt-1'> {inv.icon3} </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SoupCard;
