import React from 'react'
import '../App.css'
import Header from '../components/Header'
import SectionOne from '../components/SectionOne'
import Skills from './Skills'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'

function Home() {
  const list = {
    visible: { opacity: 1, y: -20 },
    hidden: { opacity: 0, duration: 5 },
  }
  return (
    <div className='bg-black w-screen h-screen overflow-x-hidden'>
      <div className="content px-7 sm:px-12 lg:px-40 pt-7">
          <Header />
          <SectionOne />
          <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  )
}

export default Home

