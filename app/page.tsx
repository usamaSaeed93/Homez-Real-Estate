import Home from '@/Components/Home/Home'
import Footer from '@/Components/Layout/Footer'
import { useRouter } from 'next/navigation'
import  {Suspense}  from 'react'
export default function HomePage() {
  return (
 <main>
<Home />
<Footer />
 </main>
  )
}
