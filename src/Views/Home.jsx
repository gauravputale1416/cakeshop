import React from 'react'
import Navbar from '../Component/navbar'
import cakeImage from '../assets/cake shop-rafiki.png';
function Home() {
  return (
    <div>
      <Navbar />
      <h1 className='text-4xl font-bold text-blue-600 text-center my-5'>Welcome to the Cake Shop!</h1>
      <p className='mt-1 text-lg text-center font-light'>Explore our
         <span className='inline-block rotate-10 text-red-500  font-bold bg-yellow-500 px-3 rounded-md xs:rotate-0'>Delicious</span> 
         cakes and &nbsp;
         <span className='inline-block rotate-10 text-red-500 font-bold bg-yellow-500 px-3 rotate rounded-md xs:rotate-0' >Treats</span>
         &nbsp;. Cake is our
         <span className='inline-block rotate-10 text-red-500 font-bold bg-yellow-500 px-3 rotate rounded-md xs:rotate-0' >Specialty! </span>
         &nbsp; Visit our Contact page for inquiries.</p>

      <img src={cakeImage}  alt='Delicious Cake' className='mx-auto md:height-80 my-5 rounded-lg shadow-lg w-1/2 h-100 w-100 object-contain'/>
    </div>
  )
}

export default Home
