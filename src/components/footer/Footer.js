import React from 'react'
import {  FaTwitter,FaLinkedinIn,FaFacebookF} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 
        md:grid-cols-2 lgl:grid-cols-3 gap-8'>
        <div className='w-full h-full flex flex-col gap-4'>
        <p>FENTON</p>
        <div className='flex gap-4'>
        <span className="bannerIcon">
           <FaFacebookF/>
        </span>
        <span className="bannerIcon">
           <FaTwitter/>
        </span>
        <span className="bannerIcon">
           <FaLinkedinIn/>
        </span>
    </div>
        </div>
        <div className='w-full h-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wider '>
             Quick Link
             </h3>
            <ul className='flex flex-col gap-4 font-titleFont font-medium  py-6 overflow-hidden'>
               <li>
                  <a href="#home" className='w-full text-lg hover:text-designColor duration-300 cursor-pointer 
                    relative group'>
                    <span>Home</span>
                     <span className='absolute h-[1px] w-full inline-block bg-designColor -bottom-1 left-0 -translate-x-[100%] group hover:translate-x-0
                     transition-transform duration-300'></span>
                  </a>
                </li>
                <li>
                  <a href="#features" className='w-full text-lg hover:text-designColor duration-300 cursor-pointer 
                    relative group'>
                    <span>Features</span>
                     <span className='absolute h-[1px] w-full inline-block bg-designColor -bottom-1 left-0 -translate-x-[100%] group hover:translate-x-0 transition-transform duration-300'></span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className='w-full text-lg hover:text-designColor duration-300 cursor-pointer 
                    relative group'>
                    <span>Projects</span>
                     <span className='absolute h-[1px] w-full inline-block bg-designColor -bottom-1 left-0 -translate-x-[100%] group hover:translate-x-0
                     transition-transform duration-300'></span>
                  </a>
                </li>
            </ul>
        </div>
        <div className='w-full h-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wider '>
             Resources
             </h3>
            <ul className='flex flex-col gap-4 font-titleFont font-medium  py-6 overflow-hidden'>
               <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer 
                    relative group'>Pricing</span>
                     <span className='absolute h-[1px] w-full inline-block bg-designColor -bottom-1 left-0 -translate-x-[100%] group hover:translate-x-0
                     transition-transform duration-300'></span>
                </li>
                <li>
                <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer 
                    relative group' >Terms </span>
                     <span className='absolute h-[1px] w-full inline-block bg-designColor -bottom-1 left-0 -translate-x-[100%] group hover:translate-x-0
                     transition-transform duration-300'></span>
                </li>
                
            </ul>
        </div>
        
    </div>
  )
}

export default Footer