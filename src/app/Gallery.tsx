import React from 'react'
import Image from 'next/image'
function Gallery() {
  return (
    <div className='md:bg-black lg:bg-white mb-24'>
    <h1 className='font-abril pt-16 text-4xl text-center'>Recent gallery</h1>
    <p className='text-[#979EA9] xl:text-[1.12rem] text-center pt-3'>We&apos;re not just a store, we&apos;re your story!</p>
    <div className=' mx-auto lg:w-[60rem] xl:w-[75rem] mt-5 grid grid-cols-2 gap-7 h-fit'>
        <div 
        className=' w-full rounded-[50px]  h-full overflow-clip '>
            <Image width={384} height={288} src="/assets/mp2okkyhztbiaqwqo0rmsrnb40m_300x.png" alt="" className='scale-[1.02] transition-transform hover:scale-105 duration-[350ms] ease-in-out w-full  object-cover  ' />
        </div>
        <div className=' grid grid-cols-2 gap-5'>
            <div className='grid grid-rows-5 gap-7'>
            <div className='overflow-hidden rounded-br-[50px] row-span-2  bg-pink-500'>
                <Image width={384} height={288} src="/assets/peakpx.jpg" alt="" className=' scale-[1.02] h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out' />
            </div>
                <div className='overflow-hidden rounded-tl-[50px] row-span-3'>

                <Image width={384} height={288} src="/assets/pxfuel5.jpg" alt="" className=' scale-[1.02] h-full object-cover hover:scale-105 transition-transform  duration-300 ease-in-out'  />
                </div>
            </div>
            <div className='grid grid-rows-5 gap-7'>
            <div className='overflow-hidden rounded-tr-[50px] row-span-3'>

                <Image width={384} height={288} src="/assets/pxfuel3.jpg" alt="" className=' scale-[1.02] h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out'  />
            </div> 
                
                <div className='overflow-hidden rounded-bl-[50px] row-span-2'>

                <Image width={384} height={288} src="/assets/pxfuel6.jpg" alt="" className=' scale-[1.02] h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out ' />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Gallery