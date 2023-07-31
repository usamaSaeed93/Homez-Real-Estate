import React from 'react'
import SignUpPage from '@/Components/Sign-Up/SignUp'
import Footer from '@/Components/Layout/Footer'
import Navbar from '@/Components/Layout/Navbar'
export default function page() {
  return (
    <div>
      <Navbar />
        <SignUpPage />
        <Footer />
    </div>
  )
}
