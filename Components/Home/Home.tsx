import React from 'react'
import Navbar from '../Layout/Navbar';
import TopBanner from './Top Banner/TopBanner';
import AddTab from './FeaturedListing/AddTab';
import FeaturedListing from './FeaturedListing/FeaturedListing';
import CountryTab from './Countries/CountryTab';
import Countries from './Countries/Countries';
import HelpTab from './Procedure/HelpTab';
import Procedure from './Procedure/Procedure';
 const Home:React.FC=()=> {
  return (
    <div>
      <div className='mb-20 '>
 <Navbar /> 
 <TopBanner /> 
      </div>
<div className='lg:mt-96 mt-[600px]'>
 <FeaturedListing />
</div>
<Countries />
<Procedure />
    </div>
  )
}
export default Home;