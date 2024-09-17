import React from 'react'
import ResumeCard from "./ResumeCard"
import {motion} from "framer-motion"
const Achievements = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
     animate={{opacity:1,transition:{duration:.5}}}
    className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
    <div>
     <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
      <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
      </div>
     <div className="mt-6 lgl:mt-10  w-full h-[500px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10">
     <ResumeCard
       title="Lorem ipsum dolor sit amet."
       subTitle="Lorem ipsum dolor sit amet alternative."
     />
     <ResumeCard
      title="Lorem ipsum dolor sit amet."
      subTitle="Lorem ipsum dolor sit amet alternative."
     />
    </div>
    </div>
    <div>
     <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
      <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
      </div>
     <div className="mt-6 lgl:mt-10 w-full h-[500px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10">
     <ResumeCard
       title="Lorem ipsum dolor sit amet."
       subTitle="Lorem ipsum dolor sit amet alternative."
     />
     <ResumeCard
      title="Lorem ipsum dolor sit amet."
      subTitle="Lorem ipsum dolor sit amet alternative."
     />
    </div>
    </div>
  </motion.div>
  )
}

export default Achievements