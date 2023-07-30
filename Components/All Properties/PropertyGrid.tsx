"use client"
import React, { useState } from 'react'
import AddTab from '../Home/FeaturedListing/AddTab';
import { PropertyInterface } from '@/lib';
import { getAllProperties } from '@/utils/requests';
import { useEffect } from 'react';

const PropertyGrid:React.FC= ()=> {
const [data,setData]=useState<PropertyInterface[]>();
async function fetchData(){
const data2 = await getAllProperties();
console.log(data2);
setData(data2);
}
useEffect(()=>{
fetchData();
},[])
console.log(data);
  return (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 max-w-[1200px] m-auto mt-96' >
  {data?.map((div:PropertyInterface, index:number) => (
        <AddTab  div={div} />
        ))}
  </div>
  )
}
export default PropertyGrid;