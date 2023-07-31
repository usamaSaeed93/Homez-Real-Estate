import React from 'react'
import SignIn from '@/Components/Log-in/LogIn'
import Footer from '@/Components/Layout/Footer'
import Navbar from '@/Components/Layout/Navbar'
export default function page() {
  return (
    <div>
      <Navbar />
        <SignIn />
        <Footer />
    </div>
  )
}
