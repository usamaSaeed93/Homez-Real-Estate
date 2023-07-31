import React from 'react'
import Navbar from '../Layout/Navbar';
import TopBanner from './Top Banner/TopBanner';
import AddTab from './FeaturedListing/AddTab';
import FeaturedListing from './FeaturedListing/FeaturedListing';
import CountryTab from './Countries/CountryTab';
import Countries from './Countries/Countries';
import HelpTab from './Procedure/HelpTab';
import { Suspense } from 'react';
import Procedure from './Procedure/Procedure';
import Profile from './Profile/Profile';
import Testimonials from './Testimonials/Testimonials';
import Companies from './Companies/Companies';
 const Home:React.FC=()=> {
  return (
    <div className='flex flex-col overflow-x-hidden '>
      <div className='mb-20 '>
 <Navbar /> 
 <TopBanner /> 
      </div>
<div className='lg:mt-96 mt-[600px]'>
  <Suspense fallback={"loading"} >
 <FeaturedListing />
  </Suspense>
</div>
<div className='flex flex-col justify-center items-center'>

<Countries />
<Procedure />
<Profile />
<Testimonials />
<Companies />
</div>
    </div>
  )
}
export default Home;