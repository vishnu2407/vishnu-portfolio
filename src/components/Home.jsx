import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-blue-100'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        <p className='text-[#dc6e76]'>Hello Everyone, This is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#4d4df4]'>
          VISHNU
        </h1>
        <h5 className='text-4xl sm:text-7xl font-bold text-[#120606]'>
          I'm a Frontend Developer.
        </h5>
        <p className='text-[#6f84be] py-4 max-w-[700px]'>
        I’m focused on building responsive front-end web applications while learning back-end technologies.
        </p>
      </div>
    </div>
  );
};

export default Home;