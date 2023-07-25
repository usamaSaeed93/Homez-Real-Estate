import React from 'react'
import JoinFullIcon from '@mui/icons-material/JoinFull';
import Image from 'next/image';
import male from '../../../public/Images/png/male.jpg'
const Testimonials:React.FC=()=> {
  return (
    <div className='flex flex-col justify-center items-center m-auto mt-28'>
        <p className='font-bold font-Manrope text-3xl pb-3'>Testimonials</p>
        <p className='max-w-[500px] pb-10'>100+ people have testified the performance</p>
        <JoinFullIcon sx={{
            color:"#000",
            opacity:"25%",
            fontSize:"150px"
        }}/>
        <p className='max-w-[350px] md:max-w-[600px]  font-Manrope font-bold  text-balck text-xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut adipisci odio veritatis incidunt accusantium aspernatur! Voluptate aperiam corporis veniam debitis!</p>
        <p className='font-bold font-Manrope text-balck  text-center pb-4'>Edward</p>
        <p className='font-normal font-Manrope text-balck text-center pb-7' >Project Manager. Apple.inc</p>
        <div className='flex flex-row gap-x-3 sm:gap-x-10'>
            <Image 
            src={male}
            alt='none'
        className='max-w-[50px] sm:max-w-[75px] max-h-[50px] sm:max-h-[75px] rounded-full'
            />
              <Image 
            src={male}
            alt='none'
        className='max-w-[50px] sm:max-w-[75px] max-h-[50px] sm:max-h-[75px] rounded-full'
            />
              <Image 
            src={male}
            alt='none'
        className='max-w-[50px] sm:max-w-[75px] max-h-[50px] sm:max-h-[75px] rounded-full'
            />
              <Image 
            src={male}
            alt='none'
        className='max-w-[50px] sm:max-w-[75px] max-h-[50px] sm:max-h-[75px] rounded-full'
            />
              <Image 
            src={male}
            alt='none'
        className='max-w-[50px] sm:max-w-[75px] max-h-[50px] sm:max-h-[75px] rounded-full'
            />
        </div>
    </div>
  )
}
export default Testimonials;