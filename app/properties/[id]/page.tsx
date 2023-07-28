import React from 'react'
import Description from '@/Components/Description/Description';
import Navbar from '@/Components/Layout/Navbar';
import Footer from '@/Components/Layout/Footer';
const page=({ params }: { params: { id: string } })=> {
const id=params.id;
  return (
    <div>
      <Navbar />
<Description id={id}/>
<Footer />
    </div>
  )
}
export default page;