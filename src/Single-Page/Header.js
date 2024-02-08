import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='fixed top-10 right-6'>
      <Link className='bg-black font-bold text-xl text-white px-6 py-4 rounded-full mx-1'>O</Link>
      <Link className='bg-black font-bold text-xl text-white px-6 py-4 rounded-full mx-1'>Menu</Link>
    </div>
  )
}

export default Header
