import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className="h-[600px] bg-charcoal bg-[url('/image-header.jpg')] bg-img " >
        <div className="flex flex-col  w-[338px] mx-auto  text-center items-center ">
          <div className='opacity-35 font-light mt-[198px]'>
            <h6 className='overline-txt text-[#FFFFFF] pb-[18px]'>NEW PRODUCT</h6>
          </div>
          <div>
            <h1 className='text-[#FFFFFF] text-[36px] font-bold leading-[40px]'>XX99 Mark II Headphones</h1>
          </div>
          <div className='mt-[24px] '>
            <p className='text-[#FFFFFF] text-[15px] opacity-70  font-medium'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          </div>
          <div className='bg-sienna w-[160px] h-[48px] py-[15px] text-white mt-[28px] font-bold text-[13px] leading-[15px]'>
            <Button type='submit' title='SEE PRODUCT' className=''></Button>
          </div>

        </div>
    </div>
  )
}

export default Hero