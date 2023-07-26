import React from 'react'
import TopBanner from '../Home/Top Banner/TopBanner'
import PropertyGrid from './PropertyGrid'
const AllProperties:React.FC=()=> {
  return (
    <div>

    <div className='flex flex-col pt-10 h-max'>
        <TopBanner />
        
    </div>
    <div>
        <PropertyGrid />
    </div>
    </div>
  )
}
export default AllProperties;