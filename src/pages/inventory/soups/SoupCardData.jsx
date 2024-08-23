import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import img1 from '../images/unsplash_3OJugRPfazM.png'
import img2 from '../images/unsplash_kfDsMDyX1K0.png'
import img3 from '../images/unsplash_ND3edEmzcdQ.png'
import img4 from '../images/unsplash_Gkc_xM3VY34.png'
import img5 from '../images/unsplash_gwBcamFtPr4.png'
import img6 from '../images/unsplash_kcA-c3f_3FE.png'
import img7 from '../images/unsplash_tkfRSPt-jdk (1).png'
import img8 from '../images/unsplash_tkfRSPt-jdk.png'
import img9 from '../images/unsplash_TqOEGdRNowY.png'
const SoupCardData = [
    {
      img: <img src={img1} alt='' width={158.02} height={150}/>,
      img1: <img src={img7} alt='' width={150} height={150}/>,
      img2: <img src={img4} alt='' width={163.13} height={150}/>,
      title:'Soup1',
      title1:'Salad1',
      title2:'Rice1',
      price: '₦1,500',
      weight: '128g',
      icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
      icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
      icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
    },
    {   
        img: <img src={img3} alt='' width={133.52} height={150}/>,
        img1: <img src={img6} alt='' width={153.02} height={150}/>,
        img2: <img src={img9} alt='' width={145.68} height={150}/>,
        title:'Soup2',
        title1:'Salad2',
        title2:'Rice2',
        price: '₦1,500',
        weight: '128g',
        icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
        icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
        icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,

    },
    {
        img: <img src={img3} alt='' width={133.52} height={150}/>,
        img1: <img src={img8} alt='' width={150} height={150}/>,
        img2: <img src={img5} alt='' width={134.22} height={150}/>,
        title:'Soup3',
        title1:'Salad3',
        title2:'Rice3',
        price: '₦1,500',
        weight: '128g',
        icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
        icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
        icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,

    },
    {
        img: <img src={img1} alt='' width={158.02} height={150}/>,
        img1: <img src={img7} alt='' width={150} height={150}/>,
        img2: <img src={img4} alt='' width={163.13} height={150}/>,
        title:'Soup1',
        title1:'Salad1',
        title2:'Rice1',
        price: '₦1,500',
        weight: '128g',
        icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
        icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
        icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
      },
      {   
          img: <img src={img3} alt='' width={133.52} height={150}/>,
          img1: <img src={img6} alt='' width={153.02} height={150}/>,
          img2: <img src={img9} alt='' width={145.68} height={150}/>,
          title:'Soup2',
          title1:'Salad2',
          title2:'Rice2',
          price: '₦1,500',
          weight: '128g',
          icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
          icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
          icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
  
      },
      {
          img: <img src={img3} alt='' width={133.52} height={150}/>,
          img1: <img src={img8} alt='' width={150} height={150}/>,
          img2: <img src={img5} alt='' width={134.22} height={150}/>,
          title:'Soup3',
          title1:'Salad3',
          title2:'Rice3',
          price: '₦1,500',
          weight: '128g',
          icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
          icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
          icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
  
      },
      {
        img: <img src={img1} alt='' width={158.02} height={150}/>,
        img1: <img src={img7} alt='' width={150} height={150}/>,
        img2: <img src={img4} alt='' width={163.13} height={150}/>,
        title:'Soup1',
        title1:'Salad1',
        title2:'Rice1',
        price: '₦1,500',
        weight: '128g',
        icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
        icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
        icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
      },
      {   
          img: <img src={img3} alt='' width={133.52} height={150}/>,
          img1: <img src={img6} alt='' width={153.02} height={150}/>,
          img2: <img src={img9} alt='' width={145.68} height={150}/>,
          title:'Soup2',
          title1:'Salad2',
          title2:'Rice2',
          price: '₦1,500',
          weight: '128g',
          icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
          icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
          icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
  
      },
      {
          img: <img src={img3} alt='' width={133.52} height={150}/>,
          img1: <img src={img8} alt='' width={150} height={150}/>,
          img2: <img src={img5} alt='' width={134.22} height={150}/>,
          title:'Soup3',
          title1:'Salad3',
          title2:'Rice3',
          price: '₦1,500',
          weight: '128g',
          icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
          icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
          icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
  
      },
      {
        img: <img src={img1} alt='' width={158.02} height={150}/>,
        img1: <img src={img7} alt='' width={150} height={150}/>,
        img2: <img src={img4} alt='' width={163.13} height={150}/>,
        title:'Soup1',
        title1:'Salad1',
        title2:'Rice1',
        price: '₦1,500',
        weight: '128g',
        icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
        icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
        icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
      },
      {   
          img: <img src={img3} alt='' width={133.52} height={150}/>,
          img1: <img src={img6} alt='' width={153.02} height={150}/>,
          img2: <img src={img9} alt='' width={145.68} height={150}/>,
          title:'Soup2',
          title1:'Salad2',
          title2:'Rice2',
          price: '₦1,500',
          weight: '128g',
          icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
          icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
          icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
  
      },
      {
          img: <img src={img3} alt='' width={133.52} height={150}/>,
          img1: <img src={img8} alt='' width={150} height={150}/>,
          img2: <img src={img5} alt='' width={134.22} height={150}/>,
          title:'Soup3',
          title1:'Salad3',
          title2:'Rice3',
          price: '₦1,500',
          weight: '128g',
          icon1: <Icon icon='material-symbols:remove' height={24} className='text-[#D9CBB5]'/>,
          icon2: <Icon icon='material-symbols:add' height={24} className='text-[#CF9832]'/> ,
          icon3: <Icon icon='material-symbols:info-outline' height={32} className='text-[#666666]'/> ,
  
      },
    
]
  

export default SoupCardData
