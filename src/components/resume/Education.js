import React from 'react'
import ResumeCard from "../resume/ResumeCard"
import {motion} from "framer-motion"
const Education = () => {
  return (
    <motion.div 
     initial={{opacity:0}}
     animate={{opacity:1,transition:{duration:.5}}}
     className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
      <div>
       <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2020-2024</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education Qualification</h2>
        </div>
       <div className="mt-6 lgl:mt-10 w-full h-[500px] border-l-[6px] border-l-black
        border-opacity-30 flex flex-col gap-10">
       <ResumeCard
         title="BSc in Computer Science"
         subTitle="United States International University-Africa(2020-2024"
       />
       <ResumeCard
        title="Secondary Education"
        subTitle="Kianyaga Boys High School(2015-2018)"
       />
      </div>
      </div>
      <div>
       <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2020-2024</p>
        <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
       <div className="mt-6 lgl:mt-10 w-full h-[500px] border-l-[6px] border-l-black
        border-opacity-30 flex flex-col gap-10">
       <ResumeCard
         title="BSc in Computer Science"
         subTitle="United States International University-Africa(2020-2024"
       />
       <ResumeCard
        title="Secondary Education"
        subTitle="Kianyaga Boys High School(2015-2018)"
       />
      </div>
      </div>
    </motion.div>
  )
}

export default Education