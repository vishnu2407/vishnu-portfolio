import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Tools from './components/Tools'

function App() {
  return (
    
    <div className='text-3xl sm:flex sm:flex-wrap font-bold align-center'>
      <Navbar className="sm:w-full md:w-1/2"/>
      <Home className="sm:w-full md:w-1/2"/>
        <About className="sm:w-full md:w-1/2" />
        <Skills className="sm:w-full md:w-1/2" />
        <Tools className="sm:w-full md:w-1/2" />
        <Projects className="sm:w-full md:w-1/2" />
        <Contact className="sm:w-full md:w-1/2" />
    </div>  
    
  )
}

export default App;
