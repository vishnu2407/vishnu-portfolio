import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import vlogo from '../assets/Skills/vlogo.png';

const Navbar = () => { 
  const value = true;
  
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  }
  const handleLogoClick =() => {
    window.location.reload();
  }

  return (
    <div className='fixed w-full text-2xl h-[50px] flex justify-between center px-4 bg-blue-100 text-black z-300'>
      <div>
        <img src={vlogo} alt='Logo' style={{ width: '60px', height: '60px'}} items-circle="true" value={value.toString()} onClick={handleLogoClick} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex md:space-x-4'>
        <li>
          <Link to='home' smooth={true} duration={250}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={250}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={250}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='tools' smooth={true} duration={250}>
            Tools
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={250}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={250}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div> 

      {/* Mobile menu */}
       <ul
        className={
          (!nav) ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-blue-100 text-black flex flex-col justify-center items-center'
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
          <Link onClick={handleClick} to='tools' smooth={true} duration={500}>
            Tools
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
              href='https://www.linkedin.com/in/avatapalli-vishnuvardhan-rao-2949a7185/'> &nbsp;<FaLinkedin size={30} />
            </a>
        
          </li>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/vishnu2407'>&nbsp;<FaGithub size={30} />
            </a>
          </li>
          {/*  */}
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#e3e1e1]'>
            <a
              className='flex justify-between items-center w-full text-black-300'
              href='https://docs.google.com/document/d/18Hwv2adL4v2IEt_RQQM8saHEu_lRfwqj/edit?usp=sharing&ouid=111092641503739110457&rtpof=true&sd=true'>&nbsp;<BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-pink-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/vvr_avatapalli/'>&nbsp;<FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;