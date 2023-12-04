import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import About from './About.jsx';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-blue-100'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        <p className='text-[#dc6e76]'>Hello Everyone, This is</p>
        <h1 className='text-2xl sm:text-7xl font-bold text-[#4d4df4]'>
          VISHNU
        </h1>
        <h5 className='sm:text-7xl font-bold text-[#120606]'>
          I'm a Frontend Developer.
        </h5>
        <p className='text-[#6f84be] text-4xl py-4 max-w-[700px]'>
        I’m focused on building responsive front-end web applications while learning back-end technologies.
        </p>
        <div>
          <button className='text-black-300 group border-2 hover:bg-[#ef7e7e] hover:text-white-300 px-4 py-3 my-8 mx-auto flex items-center'>
            View Projects
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-2' onScroll={About.jsx}/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;