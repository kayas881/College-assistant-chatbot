import React from 'react';
import { ReactTyped } from 'react-typed';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='text-white bg-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          XAVIER'S CHATBOT
        </p>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6'>
          Get instant answers about Xavier's College.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Available 24/7  for
          </p>
          <ReactTyped
            className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
            strings={['Enrollment', 'Course Selection', 'Campus Resources']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Ask me anything about enrollment, course selection, or campus resources.
        </p>
        <Link href='/Chatbot' className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
            Start Chatting
        </Link>
      </div>
    </div>
  );
};

export default Hero;