import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Link, Outlet } from 'react-router-dom';

function Inventory() {
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState('inventory/Restaurant');
  const [activeButton, setActiveButton] = useState('Restaurant');

  useEffect(() => {
    const storedPath = localStorage.getItem('currentPath');
    if (storedPath) {
      setCurrentPath(storedPath);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPath', currentPath);
  }, [currentPath]);

  const handleButtonClick = (path, buttonName) => {
    setCurrentPath(path);
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div>
        <ul className='flex space-x-4'>
          <li className='flex space-x-2'>
            <button
              onClick={() => handleButtonClick('inventory/Restaurant', 'Restaurant')}
              className={activeButton === 'Restaurant' ? 'text-[#CF9832]  rounded-3xl ' : 'text-[#666666]'}
            >
              <Link to='Restaurant'>
                <div className='flex space-x-2'>
                  <Icon icon='material-symbols:storefront-outline' height={24}  />
                  <p>Restaurant</p>
                </div>
              </Link>
            </button>
          </li>

          <li className='flex space-x-2'>
            <button
              onClick={() => handleButtonClick('inventory/Supermarket', 'Supermarket')}
              className={activeButton === 'Supermarket' ? 'text-[#CF9832]  rounded-3xl ' : 'text-[#666666]'}
            >
              <Link to='Supermarket'>
                <div className='flex space-x-2'>
                  <Icon icon='material-symbols:local-mall-outline' height={24}  />
                  <p>Supermarket</p>
                </div>
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Inventory;
