import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        <p className='text-pink-600'>Hello Everyone, This is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          VISHNU
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Frontend Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I’m focused on building responsive front-end web applications while learning back-end technologies.
        </p>
      </div>
    </div>
  );
};

export default Home;