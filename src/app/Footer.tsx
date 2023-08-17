import React from 'react'
import { BiLogoLinkedin, BiLogoInstagram, BiLogoFacebook, BiLogoTwitter, BiRightArrowAlt } from "react-icons/bi";


function Footer() {
  return (
    <footer className='lg:bg-[#222222] md:bg-white '>
        <div className='bg-[#222222] grid grid-cols-3 text-white mx-auto lg:w-[60rem] xl:w-[75rem] border-b-[1px] border-[#5d6167]'>
            <div className='bg-[#222222] lg:pr-12 xl:pr-28'>
            <h1 className='font-semibold pt-16 pb-8 text-3xl'>🖤 ERIKO</h1>
            <p className='pb-6 text-[#979EA9]'>Nor again is there anyone who loves or pursues or desires to obtain the pain of itself.</p>
            <button className='bg-[#838a95] rounded-full p-1 text-2xl mr-5'><BiLogoInstagram/></button>
            <button className='bg-[#838a95] rounded-full p-1 text-2xl mr-5'><BiLogoLinkedin/></button>
            <button className='bg-[#838a95] rounded-full p-1 text-2xl mr-5'><BiLogoFacebook/></button>
            <button className='bg-[#838a95] rounded-full p-1 text-2xl'><BiLogoTwitter/></button>
            </div>
            <div className='bg-[#222222] grid grid-cols-2'>
                <div className='pl-4'>
                <h1 className='font-semibold pt-16 pb-8 text-lg'>About</h1>
                <p className='pb-4 text-[#979EA9]'>Home</p>
                <p className='pb-4 text-[#979EA9]'>Features</p>
                <p className='pb-4 text-[#979EA9]'>FAQs</p>
                <p className='pb-4 text-[#979EA9]'>Reviews</p>
                <p className='text-[#979EA9] mb-10'>Stories</p>
                </div>
                <div className='pl-4'>
                <h1 className='font-semibold pt-16 pb-8 text-lg '>Privacy</h1>
                <p className='pb-4 text-[#979EA9]'>Security</p>
                <p className='pb-4 text-[#979EA9]'>Policy</p>
                <p className='pb-4 text-[#979EA9]'>Payment</p>
                <p className='text-[#979EA9]'>Terms</p>
                </div>
            </div>
            <div className='bg-[#222222] lg:pl-12 xl:pl-28'>
              <h1 className='font-semibold pt-16 pb-7 text-lg'>Newsletter</h1>
              <p className='text-[#979EA9]'>Subscribe to our newsletter to receive latest news on our services.</p>
              <div className='mt-5 flex justify-between border-b-[2px] border-[#979EA9] pb-3'>
                <input className='bg-[#222222] focus:outline-none w-full' placeholder='Enter your email'/>
                <button className='ml-5'><BiRightArrowAlt/></button>
              </div>
              <button className='flex  justify-between items-center  mt-5 p-2  bg-[#ec5a33]  rounded-md cursor-pointer relative group  w-full '>
                <span className=' pl-3 mr-2'>Subscribe</span>
                <span className=' opacity-0 group-hover:opacity-100 -translate-x-5 duration-200 group-hover:translate-x-0 transition-all '><BiRightArrowAlt/></span>
              </button>
            </div>
        </div>
        <div className='mt-8 pb-6 text-white mx-auto flex justify-between lg:w-[60rem] xl:w-[75rem]'>
          <p>Copyright 2022 &#169; Eriko.com</p>
          <div className='flex'>
            <p>Contact Us</p>
            <p className='ml-8'>Terms</p>
            <p className='ml-8'>All rights reserved</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer