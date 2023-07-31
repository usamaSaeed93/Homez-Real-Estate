"use client"
import Home from '@/Components/Home/Home'
import Footer from '@/Components/Layout/Footer'
import { useRouter } from 'next/navigation'
import  {Suspense}  from 'react'
export default function HomePage() {
  const router=useRouter();
  const token = localStorage.getItem("token")
if(!token){
  router.push('/log-in');
}
  return (
 <main>
<Home />
<Footer />
 </main>
  )
}
