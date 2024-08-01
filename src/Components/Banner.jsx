import React from 'react'

const Banner = ({title, paragraph}) => {
  return (
    <div className='bg-custom-bg w-full h-96 bg-left bg-fixed bg-cover'>
      <h1 className='text-center text-secondary text-2xl md:text-5xl font-extrabold md:font-bold pt-32 md:pt-32 pb-4'>{title}</h1>
      <p className='text-primary text-center font-semibold md:font-bold px-4 md:px-0 text-lg md:text-2xl'>{paragraph}</p>
    </div>
  )
}

export default Banner
