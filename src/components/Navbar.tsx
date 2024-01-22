import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from 'next/image';


const Navbar = () => {
  return (
   <nav className='bg-charcoal border-b border-[#FFFFFF] border-opacity-10 pb-[32px] '>
    <div className='hidden lg:flex'>
      <ul className='text-white'>
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>
Navbar
    </div>
    <div className='lg:hidden h-[58px]'>
      <div className='flex text-white justify-between mx-[24px] py-[32px]'>
      <div className=''>
      <IoMdMenu size={30} />
      </div>
      <div>
      <Image src="/logo.svg" alt="audiophile logo" width={143} height={25} />
      </div>
      <div className=''>
      <AiOutlineShoppingCart size={30} />
      </div>
      </div>
     
    

    </div>
   </nav>
  )
}

export default Navbar