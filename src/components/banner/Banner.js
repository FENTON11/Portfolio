import React from 'react'
import{useTypewriter,Cursor} from "react-simple-typewriter"
import {FaFacebookF, FaTwitter,FaLinkedinIn,FaReact} from "react-icons/fa"
import {SiTailwindcss, SiFigma, SiNextdotjs} from "react-icons/si"
import {image} from "../../assets/index"
const Banner = () => {
 const [text] = useTypewriter({
    words:["Professional Coder.", "Full Stack Developer.","UI/UX Designer."],
     loop:true,
     typeSpeed:20,
     deleteSpeed:10,
     deleySpeed:2000,
    })
  return (
    <section 
    id='home'
    className='w-full pt-10 pb-10 py-20 gap-10 xl:gap-0 flex  flex-col lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black'>
    <div className='w-fulll lgl: w-1/2 flex flex-col gap-20' >
        <div className='flex flex-col gap-5'> 
            <h4 className='text-lg font-normal'>WELCOME TO MY PORTFOLIO</h4>
            <h1 className='text-6xl font-bold text-white'>
                Hi, I'm {""}
                <span className='text-designColor capitalize'> Fenton Mwangi</span>
            </h1>
            <h2 className='text-4xl font-bold text-white'>
                a <span>{text}</span>
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor='#ff014f'
                />
            </h2>
            <p className='text-base font-bodyFont leading-6 tracking-wide'>
            I specialize in building scalable, user-centric applications that solve complex problems.
             I thrive in collaborative environments, continuously learning and applying the latest technologies to deliver efficient, high-quality code. 
             My passion lies in turning innovative ideas into impactful digital solutions.
           </p>
        </div>
       <div className='flex flex-col xl:flex-row justify-between gap-6 lgl:gap-0'>
        <div>
         <h2 className='text-base uppercase font-titleFont mb-4'>
            Find me in
            </h2>
            <div className='flex gap-4'>
             <span className='bannerIcon'>
                <FaFacebookF/>
             </span>
             <span className='bannerIcon'>
              <FaTwitter/>
             </span>
             <span className='bannerIcon'>
             <FaLinkedinIn/>
             </span>
            </div>
            </div>
            <div>
       <h2 className='text-base uppercase font-titleFont mb-4'>
        BEST SKILL ON
        </h2>
            <div className='flex gap-4'>
             <span className='bannerIcon'>
            <FaReact/>
             </span>
             <span className='bannerIcon'>
              <SiNextdotjs/>
             </span>
             <span className='bannerIcon'>
             <SiTailwindcss/>
             </span>
             <span className='bannerIcon'>
             <SiFigma/>
             </span>
            </div>
       </div>
        </div>
      
    </div>
    <div className=" w-full lgl:w-1/2 flex justify-center items-center relative">
     <img 
     className='w-[300px] h-[400px] lgl:w-[500px]  lgl:h-[680px] z-10'
     src={image} alt='me'
     />
    
    <div className='absolute bottom-0 w-[350px] h-[300px]lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-
    [#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>
  </div>
  </div>
   </section>
  )
}

export default Banner