import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Nav() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div className='fixed top-10 right-6'>

      <button className='bg-black font-bold text-xl text-white px-6 py-4 rounded-full mx-1 border-2 border-white' onClick={toggleNav}>Menu</button>
      {isNavOpen && (
        <div className='w-full h-full'>
          <ul className='flex flex-col'>
            <Link to="/">HOME</Link>
            <Link to="work">WORK</Link>
            <Link to="blog">BLOG</Link>
            <Link to="about">ABOUT</Link>
            <Link to="contact">CONTACT</Link>
          </ul>
          <button className='bg-black font-bold text-xl text-white px-6 py-4 rounded-full mx-1 border-2 border-white' onClick={toggleNav}>CLOSE</button>
        </div>
      )}
    </div>
  )
}

export default Nav
