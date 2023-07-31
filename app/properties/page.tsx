import React from 'react'
import AllProperties from '@/Components/All Properties/AllProperties'
import Navbar from '@/Components/Layout/Navbar'
import Footer from '@/Components/Layout/Footer'
export default function page() {
  return (
    <div className='flex flex-col w-full max-w-[2000px] overflow-hidden m-auto'>
      <Navbar />
<AllProperties />
<Footer />
    </div>
  )
}
