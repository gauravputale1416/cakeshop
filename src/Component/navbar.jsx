import React from 'react'
import imglogo from '../assets/birthday-cake.png'
import Contact from '../Views/Contact'  

function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 bg-yellow-100 border-b-2 border-orange-300    '>
        <img src={imglogo} alt='Cake Shop Logo' className='h-10 w-10'/>
      <h1 className='display-static text-3xl font-semibold text-orange-600'>Cake Shop</h1>
      <nav>
        <ul className='flex space-x-4'>
          <li><a href="/" className='text-lg'>Home</a></li>
          <li><a href="./Contact" className='text-lg'>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
