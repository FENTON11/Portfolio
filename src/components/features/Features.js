import React from 'react'
import Card from './Card'
import Title from '../layouts/Title'
import{AiFillAppstore} from "react-icons/ai"
import {SiAntdesign} from "react-icons/si"
import {FaCode} from "react-icons/fa"
const Features = () => {
  return (
    <section 
    id='features'
    className='w-full  py-20  border-b-[1px] border-b-black'
    >
     <Title title="Features"des="What I do"/>
    <div className='grid grid-cols-3 gap-20'>
      <Card
       title="Web Development"
       des=" I create responsive, high-performance websites using modern web technologies.
        My focus is on building scalable front-end and back-end solutions, ensuring an optimized user experience.
         I specialize in HTML, CSS, JavaScript, and frameworks like React and Node.js."
         icon={<FaCode/>}
      />
      <Card
      title="App Development"
      des=" I design and develop mobile and desktop applications tailored to client needs.
       With expertise in both native and cross-platform solutions, I ensure seamless functionality, high performance, and intuitive interfaces across all devices."
       icon={<AiFillAppstore/>}
      />
      <Card
      title="UI/UX Design"
      des="I craft user-centered designs that focus on functionality and aesthetics. 
      My process involves user research, wireframing, prototyping, and creating interfaces that are both visually appealing and easy to navigate for an enhanced user experience."
      icon={<SiAntdesign/>}
      />
    </div>
   </section>
  )
}

export default Features