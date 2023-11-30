import React from 'react';

import IntellijIDE from '../assets/Tools/IntellijIDE.png';
import VsCode from '../assets/Tools/VsCode.png';
import Git from '../assets/Tools/Git.png';
import MsOffice from '../assets/Tools/MsOffice.png';
import Guidewire from '../assets/Tools/Guidewire.png';

const Tools = () => {
  return (
    <div className='w-full h-screen  bg-blue-100 text-black-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center w-full h-full'>
          <div name='tools'>
              <p className='text-4xl font-bold inline border-b-4 border-[#ef7e7e]'>Tools:</p>
              <p className='py-4'>These are the technologies I've worked with</p>

              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8'>
                <div className='shadow-md shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={IntellijIDE} alt="HTML icon"/>
                     <p className='my-4'>IntellijIDE</p>
                </div>
                <div className='shadow-md shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={VsCode} alt="HTML icon"/>
                    <p className='my-4'>VsCode</p>
                </div>
                <div className='shadow-md shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Git} alt="HTML icon"/>
                    <p className='my-4'>Git</p>
                </div>
                <div className='shadow-md shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MsOffice} alt="HTML icon"/>
                    <p className='my-4'>MsOffice</p>
                </div>
                <div className='shadow-md shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Guidewire} alt="HTML icon"/>
                    <p className='my-4'>Guidewire</p>
                </div>
            </div>
          </div>  
      </div>
    </div>
  );
};

export default Tools;