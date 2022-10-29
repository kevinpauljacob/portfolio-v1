import React from 'react'
import stacks from '../components/Skills/skillsrc'

const Skills = () => {
  return (
    <div className="h-full w-screen flex flex-col justify-center items-center sm:mb-48 mb-10">
      <div className='lg:text-4xl sm:text-3xl text-2xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl mb-12'>Tech I have worked with,</div>
      <div className='grid sm:gap-4 gap-2 2xl:grid-cols-9 2xl:grid-rows-2 xl:grid-cols-6 xl:grid-rows-3 grid-cols-3 grid-rows-9'>
        {
          stacks.map(item => {
            return(
              <div className='flex flex-col items-center bg-[#242733] rounded-xl xl:p-3 lg:p-2 p-1'>
                <img className='xl:h-14 xl:w-14 lg:h-10 lg:w-10' src={item.src} alt={item.tag}/>
                <div className='xl:font-bold lg:font-semibold mt-2'>{item.tag}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills