'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { JobPosting } from '@/types/jobPost';

interface CardProps {
  job: JobPosting;
}

const Card: React.FC<CardProps> = ({job}) => {
  const {company, logo, isFeatured, position, postedAt, role, level, tools, contract,location, languages, isNew } = job;
  const skills = [role, level, ...languages, ...tools ]
  return (
    <div className={`bg-white p-6 rounded-lg mb-4 relative lg:flex justify-between ${isNew ? 'shadow-md border-l-4 border-blue-500' : 'border-l-4'}`}>
      <div className='lg:flex gap-8'>

        <div className="absolute top-0 left-12 bg-light-cyan p-1 rounded-full transform -translate-y-1/2 -translate-x-1/2 lg:static lg:left-0 lg:translate-y-0 lg:translate-x-0 lg:flex items-center  ">
          <Image src={logo} alt="Avatar" width={50} height={50} className="rounded-full lg:w-28 lg:h-28" />
        </div>

        <div>
          <div className="flex gap-4 mt-4">
            <h4 className="text-desaturated-dark-cyan text-lg font-semibold">{company}</h4>
            <div className='flex'>
              {isNew && <div className="bg-desaturated-dark-cyan text-light-cyan text-sm flex justify-center items-center font-semibold py-1 px-2 rounded-full ml-2">NEW!</div>}
              {isFeatured && <div className="bg-very-dark-cyan text-light-cyan text-sm flex justify-center items-center font-semibold py-1 px-2 rounded-full ml-2">Featured</div>}
            </div>
          </div>

          <div className='mt-4'>
            <h2 className="text-lg font-semibold">{position}</h2>
          </div>

          <div className="mt-3">
            <p className="text-gray-500">{postedAt} • {contract} • {location}</p>
          </div>
        </div>
        
      </div>

      <hr className="mt-4 border-gray-400 lg:hidden" />

      <div className='mt-4 grid gap-3 grid-cols-3 lg:grid-flow-col lg:self-center '>
        {skills.map((language, index) => (
          <span
            key={index}
            className="bg-gray-200 text-desaturated-dark-cyan text-md font-bold flex items-center justify-center  px-5 py-1 rounded-md"
          >
            {language}
          </span>
        ))}
    </div>

  </div>
  
  );
};

export default Card;
