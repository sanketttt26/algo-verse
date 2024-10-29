import React from 'react'

const Hero = () => {
  
  return (
    <div>
      <div className=' flex flex-col gap-4 items-center py-2  px-4 justify-center lg:py-20 border-b-slate-600 border-b '>
        <div className='lg:max-w-[75%] text-center'>
            <h1 className=' font-bold text-xl lg:text-5xl lg:font-black leading-relaxed'>
         Crack Your <span className=' text-clip bg-gradient-to-r from-blue-500 to-teal-300 bg-clip-text text-transparent'>Dream Company's</span> <br/>Interview with Essential DSA Questions.
        </h1> 
        <p className=' font-medium text-sm -tracking-tight mt-2 lg:text-lg lg:font-light'>Prepare yourself with the most asked interview questions by top companies.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
