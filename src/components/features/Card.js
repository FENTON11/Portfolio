import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className='w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex items-center
    bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
    hover:from-black hover:to-[#1e2024] transition-colors duration-100'>
      
      <div className='w-full'>
        <div className='flex flex-col gap-8'>
          
          {/* Icon */}
          <div>
            <span className='text-5xl text-designColor'>{icon}</span>
          </div>

          {/* Title and Description */}
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-titleFont font-bold text-gray-300'>{title}</h2>
            <p className='base text-gray-400'>{des}</p> {/* Ensured full visibility for description */}
          </div>

          {/* Arrow Icon (Visible on Hover) */}
          <span className='text-designColor opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <HiArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
