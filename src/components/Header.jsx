import React, { useState } from 'react'
import logo from '../assets/Images/logo (3).png'
import {
    HiHome,HiMagnifyingGlass,
    HiStar,HiPlayCircle,HiTv
}from 'react-icons/hi2'
import {HiPlus,HiDotsVertical} from "react-icons/hi"
import HeaderItem from './HeaderItem'



const Header = () => {
    const[toggle,setToggle]=useState(false);
    const menu=[
        {
            name:"HOME",
            icon:HiHome
        },
        {
            name:"SEARCH",
            icon:HiMagnifyingGlass
        },
        {
            name:"WATCH LIST",
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }


    ]
  return (
    <div className='flex items-center  justify-between p-5'>
        <div className='flex items-center gap-8 '>
      <img src={logo}
      className='w-[80px] md:w-[115px] object-cover'
      />
      <div className='hidden md:flex gap-8 items-center'>
      {menu.map((item,index)=>(
        <HeaderItem key={index} name={item.name} Icon={item.icon}/>
      ))}
      </div>
      <div className='md:hidden flex gap-5 items-center'>
      {menu.map((item,index)=>index<3&&(
        <HeaderItem key={index} name={''} Icon={item.icon}/>
      ))}
      <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
<HeaderItem name={''} Icon={HiDotsVertical}/>
{toggle?
<div className='absolute mt-3 bg-[#121212] px-5 py-4 border-[1px] border-gray-700'>
{menu.map((item,index)=>index>=3&&(
        <HeaderItem key={index} name={item.name} Icon={item.icon}/>
      ))}
</div>:null}

      </div>

      </div>
</div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='rounded-full w-[40px]'
        />






    </div>
  )
}

export default Header
