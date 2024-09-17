import React, { useState } from 'react'
import Title from "../layouts/Title"
import Education from "../resume/Education"
import Skills from "../resume/Skills"
import Experience from "../resume/Experience"
import Achievements from "../resume/Achievements"
const Resume = () => {
  const [educationdata ,setEducationdata]= useState(true)
  const [skilldata ,setSkilldata]= useState(false)
  const [experiencedata ,setExperiencedata]= useState(false)
  const [achievementdata ,setAchievementdata]= useState(false)
  return (
    <section
    id="resume"
    className='w-full py-20 border-b-[1px] border-b-black'>
    <div className="flex justify-center items-center text-center">
        <Title title="4+ YEARS OF EXPERIENCE" des="My Resume"/>
    </div>    
    <div>
        <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
            <li 
             onClick={()=>
             setEducationdata (true)& 
             setSkilldata(false)&
             setExperiencedata(false)&
             setAchievementdata(false)
          }
             className={`${
              educationdata
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumei`}>
              Education
            </li>
            <li 
            onClick={()=> 
            setEducationdata(false)& 
            setSkilldata(true)&
            setExperiencedata(false)&
            setAchievementdata(false)
            } 
            className={`${
              skilldata
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumei`}>
            Professional Skills
            </li>
            <li 
            onClick={()=> 
              setEducationdata(false)& 
              setSkilldata(false)&
              setExperiencedata(true)&
              setAchievementdata(false)
              } 
            className={`${
              experiencedata
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumei`}>
            Experience
            </li>
            <li 
             onClick={()=> 
              setEducationdata(false)& 
              setSkilldata(false)&
              setExperiencedata(false)&
              setAchievementdata(true)
              } 
            className={`${
              achievementdata
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumei`}>
            Achievements
            </li>
        </ul>
    </div>
    {educationdata && <Education/> }
    {skilldata && <Skills/> }
    {experiencedata && <Experience/> }
    {achievementdata && <Achievements/> }

      {/* <Education/> */}
      {/* <Skills/> */}
      {/* <Achievements/> */}
      {/* <Experience/> */}
    </section>
  )
}

export default Resume