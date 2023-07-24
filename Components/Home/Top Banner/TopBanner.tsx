'use client'
import React from 'react'
import { useState } from 'react'
import TopBannerImage from './TopBannerImage'
 const TopBanner:React.FC=()=> {
    const [selectedItem, setSelectedItem] = useState<string>("Buy");
    const handleClick = (item: string) => {
        setSelectedItem(item);
    };
  return (
    <div className='bg-darkBlue flex flex-col w-full max-h-[500px] justify-start items-center '>

<ul className='flex flex-row gap-5 transition-all'>
                                {
                                   ['Buy','Sell','Rent'].map(l => {
                                        return (
                                            <ul key={l} className={`text-white text-medium text-center text-2xl pb-3 px-6  ${selectedItem === l ? ' border-b-4 border-solid border-white ' : 'border-none'}`}
                                                onClick={() => handleClick(l)}
                                            >{l}</ul>

                                        )
                                    })
                                }
                            </ul>
<div className='w-full mt-10'>

<TopBannerImage />
</div>
    </div>
  )
}
export default TopBanner;