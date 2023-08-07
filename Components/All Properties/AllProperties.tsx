'use client'
import React, { Suspense } from 'react';
import TopBanner from '../Home/Top Banner/TopBanner'
import PropertyGrid from './PropertyGrid'
import SearchedPropertyGrid from './SearchedPropertyGrid'
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "@/app/redux/services/store";
import Loading from '../../Components/Loading'
import SideBar from './SideBar';

const AllProperties:React.FC=()=> {
  const location = useSelector((state: RootState) => state.specs.country);
  return (
    <div>
    <div className='flex flex-col  h-max mb-96'>
        <TopBanner />
    </div>
    <div className='flex flex-row'>
      <SideBar />
        <SearchedPropertyGrid />
    </div>
    </div>
  )
}
export default AllProperties;