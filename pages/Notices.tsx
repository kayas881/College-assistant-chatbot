// pages/Notices.tsx
import React from 'react';
import Link from 'next/link';
import bgVideo from "./../assets/bgVideo.mp4"; // Ensure this path is correct

const Notices = () => {
  const notices = [
    { text: "Tentative Summer 2024 Term End Theory Time Table!", url: "https://xaviertech.ac.in/images/Tentative%20Summer%202024%20Term%20End%20Theory%20Time%20Table.pdf" },
    { text: "Notice for Examination Form Filling Summer 2024.", url: "https://xaviertech.ac.in/images/034%20Notice%20for%20Examination%20Form%20Filling%20Summer%202024.pdf" },
    { text: "Notice for revaluation Winter 2023", url: "https://xaviertech.ac.in/images/Notice%20for%20revaluation%20Winter%202023.pdf" }
  ];

  return (
    <div className='relative text-white overflow-hidden'>
      {/* Make sure the video path is correct and the server is configured to serve mp4 files */}
      <video autoPlay loop muted className='absolute w-full min-h-screen object-cover'>
        <source src={bgVideo} type='video/mp4' />
      </video>
      <div className='relative z-10 max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-start items-center pt-10'>
        <p className='text-[#00df9a] font-bold p-2 text-2xl'>
          St. Xavier's Technical Institute
        </p>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6'>
          Notices:
        </h1>
        {/* Add your notices here */}
        {notices.map((notice, index) => (
          <a key={index} href={notice.url} target="_blank" rel="noopener noreferrer" className='md:text-2xl text-xl font-bold p-2 text-gray-500'>
            {notice.text}
          </a>
        ))}
        <Link href='/' className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
            Go Back
        </Link>
      </div>
    </div>
  );
};

export default Notices;