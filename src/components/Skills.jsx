import React from 'react';

import HTML from '../assets/Skills/HTML.png';
import CSS from '../assets/Skills/CSS.png';
import JavaScript from '../assets/Skills/JavaScript.png';
import ReactImg from '../assets/Skills/React.png';
import GitHub from '../assets/Skills/GitHub.png';
import JAVA from '../assets/Skills/JAVA.png';
import Python from '../assets/Skills/Python.png';
import MySQL from '../assets/Skills/MySQL.png';
import OracleSQL from '../assets/Skills/OracleSQL.png';
import PostgreSQL from '../assets/Skills/PostgreSQL.png';
import Tailwindcss from '../assets/Skills/Tailwindcss.png';
import SpringBoot from '../assets/Skills/SpringBoot.png';
import  Node from '../assets/Skills/Nodejs.png'

const Skills = () => {
  return (
    <div name='skills'className='w-full h-screen bg-blue-100 text-black-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center w-full h-full'>
          <div className="pb:[100py]">
              <p className='text-4xl font-bold inline border-b-4 border-[#ef7e7e]'>Skills:</p>
              <p className='py-4'>These are the technologies I've worked with</p>

              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8'>
                <div className='shadow-md text-2xl hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto text-size-2xl' src={JAVA} alt="HTML icon"/>
                     <p className='my-4'>JAVA</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon"/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML5</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon"/>
                    <p className='my-4'>CSS3</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwindcss} alt="HTML icon"/>
                    <p className='my-4'>Tailwindcss</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon"/>
                    <p className='my-4'>NODEJS</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto text-1xl' src={JavaScript} alt="HTML icon"/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon"/>
                    <p className='my-4'>REACTJS</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon"/>
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MySQL} alt="HTML icon"/>
                    <p className='my-4'>MySQL</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PostgreSQL} alt="HTML icon"/>
                    <p className='my-4'>PostgreSQL</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={OracleSQL} alt="HTML icon"/>
                    <p className='my-4'>Oracle</p>
                </div>
                <div className='shadow-md text-2xl shadow-[#d4d6d8] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={SpringBoot} alt="HTML icon"/>
                    <p className='my-4'>SpringBoot</p>
                </div>
            </div>
          </div>  
      </div>
    </div>
  );
};

export default Skills;