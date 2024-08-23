import React from 'react'
import im1 from '../images/Frame 41.png'
import im2 from '../images/Frame 41 (1).png'
function Table() {
  return (
    <div>
      
<div className="  mt-10  relative overflow-x-auto ">
    <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" style={{ width: 728 }}>
        <thead className="text-xs text-gray-500  bg-white ">
            <tr>
                <th scope="col" className=" flex space-x-2 px-6 py-3">
                 Item
                   
                </th>
                <th scope="col" className="px-6 py-3">
                 Order number
                </th>
                <th scope="col" className="px-6 py-3">
                   Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                        <p> Fresh salad bowl(2) </p>
                       </div>
                    
                </th>
                <td className="px-6 py-4">
                 <p>#1022322032</p>
                </td>
                <td className="px-6 py-4">
                  <p>18 Main street, Lagos NG</p>
                </td>
                <td className="px-6 py-4">
                <img
                      src={im1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-24 h-4'
                       />
                </td>
                
            </tr>
            <tr className=" ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                        <p> Fresh salad bowl(2) </p>
                       </div>
                    
                </th>
                <td className="px-6 py-4">
                 <p>#1022322032</p>
                </td>
                <td className="px-6 py-4">
                  <p>18 Main street, Lagos NG</p>
                </td>
                <td className="px-6 py-4">
                <img
                      src={im2} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-24 h-4'
                       />
                </td>
                
            </tr>
            <tr className=" ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <div className='flex space-x-2'>
                        <p> Fresh salad bowl(2) </p>
                       </div>
                    
                </th>
                <td className="px-6 py-4">
                 <p>#1022322032</p>
                </td>
                <td className="px-6 py-4">
                  <p>18 Main street, Lagos NG</p>
                </td>
                <td className="px-6 py-4">
                <img
                      src={im1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-24 h-4'
                       />
                </td>
                
            </tr>
            {/* <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className='flex'>
                    <img
                      src={che} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-5 h-5 rounded-full object-cover'
                       />
                       <img
                      src={avg2} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-10 h-10 rounded-full object-cover'
                       />
                       <div>
                        <ul>
                            <li>
                            Circooles
                                </li>
                                <li>
                                getcirooles.com
                                </li>
                        </ul>
                       </div>
                    </div>
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro2} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro3} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro4} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro4} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                <img
                      src={pro3} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-20 h-2 rounded-full object-cover'
                       />
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Table







  