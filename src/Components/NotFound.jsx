import React from 'react'
import { FaFaceFrown } from "react-icons/fa6";
const NotFound = () => {
  return (
    <div>
        
      <FaFaceFrown className=' text-8xl mx-auto my-24 text-center text-red-600' />
      <h1 className='text-center text-secondary text-5xl font-bold'>404</h1>
      <p className='text-center text-xl mb-12 text-secondary'>Page not found</p>
    </div>
  );
}

export default NotFound