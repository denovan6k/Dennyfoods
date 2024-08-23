import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import img1 from './supimg/Mask group.png'
import img2 from './supimg/Mask group (1).png'
import img3 from './supimg/Mask group (2).png'
import img4 from './supimg/Mask group (3).png'
import img5 from './supimg/Mask group (4).png'
import img6 from './supimg/Mask group (5).png'
import img7 from './supimg/unsplash_kcA-c3f_3FE (1).png'
import img8 from './supimg/unsplash_tkfRSPt-jdk (2).png'
import img9 from './supimg/unsplash_tkfRSPt-jdk (3).png'
const SupermarketData = [
    {
      img: <img src={img1} alt='' width={140} height={140}/>,
      img1: <img src={img2} alt='' width={140} height={140}/>,
      img2: <img src={img4} alt='' width={140} height={140}/>,
      title:'Wax Apple',
      title1:'Corn Flakes',
      title2:'Coconut rice',
      price: '₦1,500',
      weight: '128g',
      icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
      icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
      icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
    },
    {   
        img: <img src={img3} alt='' width={140} height={140}/>,
        img1: <img src={img4} alt='' width={140} height={140}/>,
        img2: <img src={img5} alt='' width={140} height={140}/>,
        title:'Banana',
        title1:'Golden Morn',
        title2:'Fried rice',
        price: '₦1,500',
        weight: '128g',
        icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
        icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
        icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,

    },
    {
        img: <img src={img7} alt='' width={150} height={150}/>,
        img1: <img src={img8} alt='' width={150} height={150}/>,
        img2: <img src={img5} alt='' width={150} height={150}/>,
        title:'Avocado',
        title1:'oats',
        title2:'Jollof rice',
        price: '₦1,500',
        weight: '128g',
        icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
        icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
        icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,

    },
]
  

export default SupermarketData
