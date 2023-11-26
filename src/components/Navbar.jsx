import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import vlogo from '../assets/vlogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#dcdee2] text-black z-300'>
      <div>
        <img src={vlogo} alt='Logo' style={{ width: '100px' }} items-circle />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger*/}
      <div onClick={handleClick} className='md:hidden z-1'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div> 

      {/* Mobile menu */}
       <ul
        className={
          (!nav) ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
          </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0 right-10'>
        <ul>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-blue-600'>
            <a
              className='flex md:flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/avatapalli-vishnuvardhan-rao-2949a7185/'> &nbsp; <FaLinkedin size={30} />
            </a>
        
          </li>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/vishnu2407'> &nbsp; <FaGithub size={30} />
            </a>
          </li>
          {/*  */}
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#e3e1e1]'>
            <a
              className='flex justify-between items-center w-full text-black-300'
              href='https://drive.google.com/file/d/1tmburFsS47EcqPM7FAyJiTKT4bto8qgs/view?usp=sharing'> &nbsp; <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-pink-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/vvr_avatapalli/'>&nbsp; <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;