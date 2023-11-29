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
    <div className='text-3xl font-bold align-center'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Tools/>
      <Projects/>
      <Contact/>
    </div>
    
  )
}

export default App;
