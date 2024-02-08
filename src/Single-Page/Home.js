import React from 'react';
import Details from './Details';

function Home() {
  return (
    <div className='flex w-full'>
      <div className='w-1/2'>
        <img className='w-full sticky top-0 h-screen object-cover' src='https://i.pinimg.com/564x/56/f2/8e/56f28ecc44f9f7cf9565c1d7679357e1.jpg' />
      </div>
      <div className='w-1/2 '>
        < Details className='w-full' />
      </div>
    </div>
  )
}

export default Home
