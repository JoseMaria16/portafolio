import React from 'react'
import { Link } from 'react-scroll'

function Header() {
  return (
    <>
      <header className='flex justify-between'>
         <div className="logo flex items-center gap-3">
          <img src="../logo-header.svg" alt="" />
           <span className='text-xl'>Jose Maria</span>
         </div>
         <nav className='hidden lg:flex'>
          <ul className='flex gap-10 text-[23px] font-bold text-gray-500'>
            <li>
              {/* <Link  to="projects" spy={true}  containerId='ContainerElementId' smooth={true} offset={100} duration={500} className='text-[#777]'>Projects</Link> */}
              <a href="" className='text-[#777]'>Linkedin</a>
              </li>
            <li><a href="" className='text-[#777]'>Github</a></li>
            <li><a href="" className='text-[#777]'>About me</a></li>
          </ul>
         </nav>
         
      </header>
    </>
  )
}

export default Header