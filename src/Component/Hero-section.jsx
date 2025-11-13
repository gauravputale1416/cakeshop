import React from 'react'
import cakeImage from '../assets/cake shop-rafiki.png';
import { Link } from 'react-router';
import Heading from './Heading.jsx';

function HeroSection() {
  return (
    <div>
       <Heading heading="Welcome to the Cake Shop!" />
      <p className='mt-1  text-lg text-center font-light'>Explore our&nbsp;
         <span className='inline-block rotate-10 text-red-500  font-bold bg-yellow-500 px-3 rounded-md xs:rotate-0'>Delicious</span> &nbsp;
         cakes and &nbsp;
         <span className='inline-block rotate-10 text-red-500 font-bold bg-yellow-500 px-3 rotate rounded-md xs:rotate-0' >Treats</span>&nbsp;
         &nbsp;. Cake is our&nbsp;
         <span className='inline-block rotate-10 text-red-500 font-bold bg-yellow-500 px-3 rotate rounded-md xs:rotate-0' >Specialty! </span>
         &nbsp; Visit our Contact page for inquiries.</p>
<div className='flex justify-center items-center mt-5 '>
    <div className='p-5 rounded-lg shadow-md'>
      <img src={cakeImage}  alt='Delicious Cake' className='mx-auto md:height-80 my-5 rounded-lg shadow-lg w-1/2 h-100 w-100 object-contain'/>
      </div >
      <div className='max-w-2xl text-center bg-white p-5 rounded-lg shadow-md ml-8 display-flex flex-col justify-center items-center '>
        <h2 className='text-2xl font-semibold text-blue-600 mb-4'>Why Choose Us?</h2>
        <ul className='list-disc list-inside text-gray-700'>
          <li>Fresh Ingredients: We use only the finest and freshest ingredients in our cakes.</li>
          <li>Custom Designs: Our skilled bakers can create custom cake designs for any occasion.</li>
          <li>Wide Variety: From classic flavors to unique creations, we have something for everyone.</li>
          <li>Exceptional Service: We are committed to providing excellent customer service and satisfaction.</li>
        </ul>       
        </div>
       
      </div>
     
    </div>
  )
}

export default HeroSection;
