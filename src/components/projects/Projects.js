import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import {projectOne,projectTwo,projectThree} from "../../assets/index"
const Projects = () => {
  return (
    <section id="projects"
    className='w-full py-20 border-b-[1px] border-b-black'
    >
    <div className='flex justify-center items-center text-center'>
    <Title
       title="VISIT MY PORTFOLIO"
        des="My Projects"
     />
    </div>
    <div className='grid grid-cols-3 gap-14'>
        <ProjectsCard
         title="REAL ESTATE WEBSITE"
         des="Lorem, upsum dolor sit amet consectetur adipisicing elit."
         src={projectThree}
        />
        <ProjectsCard
         title="HOME SERVICE APP"
         des="Lorem, upsum dolor sit amet consectetur adipisicing elit."
         src={projectTwo}
        />
        <ProjectsCard
         title="MOVIE APP"
         des="Lorem, upsum dolor sit amet consectetur adipisicing elit."
         src={projectOne}
        />
        <ProjectsCard
         title="ECOMMERCE WEBSITE"
         des="Lorem, upsum dolor sit amet consectetur adipisicing elit."
         src={projectThree}
        />
        <ProjectsCard
         title="SOCIAL MEDIA APP"
         des="Lorem, upsum dolor sit amet consectetur adipisicing elit."
         src={projectOne}
        />
        <ProjectsCard
         title="ARTICLE SUMMARIZER APP"
         des="Lorem, upsum dolor sit amet consectetur adipisicing elit."
         src={projectTwo}
        />

    </div>
    </section>
  )
}

export default Projects