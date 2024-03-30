import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><FaEnvelopeOpenText /> Email me for jobs</h3>
        <p className='text-primary/75 text-base mb-4'>Ut esse eiusmod aute. Sit enim labore dolore. Auto ea fugiat commodo ea foes.</p>
        <input type="email" name="email" id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
        <input type="submit" value={"Subscribe"} className='w-full mt-3 block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
      </div>
      {/* 2 part */}
      <div className='mt-20'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><IoIosRocket /> Get noticed faster</h3>
        <p className='text-primary/75 text-base mb-4'>Ut esse eiusmod aute. Sit enim labore dolore. Auto ea fugiat commodo ea foes.</p>
        <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
      </div>
    </div>
  )
}

export default Newsletter