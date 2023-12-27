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
      <Navbar className="mb-4 mt-4 flex justify-between grid grid-cols-2 relative absolute top-0 absolute bottom-0 z-10"/>
      <Home className="mb-4 mt-4 flex justify-between grid grid-cols-2 relative absolute top-0 absolute bottom-0 z-10"/>
        <About className="mb-4 mt-4 flex justify-between grid grid-cols-2 relative absolute top-0 absolute bottom-0 z-10" />
        <Skills className="mb-4 mt-4 flex justify-between grid grid-cols-2 relative absolute top-0 absolute bottom-0 z-10" />
        <Tools className="mb-4 mt-4 flex justify-between grid grid-cols-2 relative absolute top-0 absolute bottom-0 z-10" />
        <Projects className="mb-4 mt-4 flex justify-between grid grid-cols-2 relative absolute top-0 absolute bottom-0 z-10" />
        <Contact className="mb-4 mt-4 flex justify-between grid grid-cols-2 relative absolute top-0 absolute bottom-0 z-10" />
    </div>  
    
  )
}

export default App;
