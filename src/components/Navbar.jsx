import React from 'react'
import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (  

    <div className="w-full h-16 md:h-20 flex flex-col md:flex-row justify-between items-center pt-2 md:px-4 text-gray-300 relative">

        <div className="w-full md:w-auto flex items-center justify-between">

          <h1 className="text-base lg:text-2xl md:text-xl ">Mohd Ashraf Ansari</h1>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        <ul className={`${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:opacity-100 md:visible flex flex-col md:flex-row bg-[#1E293B] md:bg-transparent w-full md:w-auto gap-4 lg:gap-12 md:gap-6 items-start md:items-center mt-0 md:mt-0 rounded-lg py-4 md:py-0 md:rounded-none absolute top-16 left-0 z-50 md:static px-4 text-gray-300 transition-[opacity,visibility] duration-700 ease-in-out`}>

            <li><NavLink to="/home" className={({ isActive }) => `relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#8B5CF6] after:transition-all after:duration-300 cursor-pointer hover:[text-shadow:0_0_8px_#C4B5FD,0_0_18px_#8B5CF6,0_0_30px_#8B5CF6] ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`} 
            onClick={() => setIsOpen(false)}>Home</NavLink></li>

            <li><NavLink to="/about" className={({ isActive }) => `relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#8B5CF6] after:transition-all after:duration-300 cursor-pointer hover:[text-shadow:0_0_8px_#C4B5FD,0_0_18px_#8B5CF6,0_0_30px_#8B5CF6] ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
            onClick={() => setIsOpen(false)}>About</NavLink></li>

            <li><NavLink to="/skills" className={({ isActive }) => `relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#8B5CF6] after:transition-all after:duration-300 cursor-pointer hover:[text-shadow:0_0_8px_#C4B5FD,0_0_18px_#8B5CF6,0_0_30px_#8B5CF6] ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
            onClick={() => setIsOpen(false)}>Skills</NavLink></li>

            <li ><NavLink to="/projects" className={({ isActive }) => `relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#8B5CF6] after:transition-all after:duration-300 cursor-pointer hover:[text-shadow:0_0_8px_#C4B5FD,0_0_18px_#8B5CF6,0_0_30px_#8B5CF6] ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
            onClick={() => setIsOpen(false)}>Projects</NavLink></li>

            <li><NavLink to="/contact" className={({ isActive }) => `relative after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:bg-[#8B5CF6] after:transition-all after:duration-300 cursor-pointer hover:[text-shadow:0_0_8px_#C4B5FD,0_0_18px_#8B5CF6,0_0_30px_#8B5CF6] ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
            onClick={() => setIsOpen(false)}>Contact</NavLink></li>

            <li><a href="/Resume.pdf"
            download="Ashraf_Resume.pdf"
            className="w-[5rem] md:w-[7rem] text-xs md:text-base bg-transparent border-2 border-[#8B5CF6] flex items-center gap-2 px-2 py-1 md:py-2 md:px-4 rounded-full cursor-pointer hover:shadow-[0_0_18px_rgba(139,92,246,0.5)]"><Download className="size-4 text-[#8B5CF6] animate-bounce" /> Resume</a></li>

        </ul>

    </div>    

  )

}

export default Navbar