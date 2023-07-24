import React from 'react'
import HelpTab from './HelpTab'
export default function Procedure() {
  return (
    <div className='w-full bg-[#fff7f5] py-20'>

 
    <div className='max-w-[1000px] m-auto' >
         <p className="font-semibold font-Manrope text-2xl text-black text-center pb-5">
            See how Realton can help
          </p>
          <p className="font-medium font-Manrope text-sm text-black text-center pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, beatae.
          </p>
          <div className='flex flex-col sm:flex-row justify-between gap-x-10'>
<HelpTab />
<HelpTab />
<HelpTab />
          </div>
    </div>
    </div>
  )
}
