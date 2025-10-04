import React from 'react'
import imglogo from '../assets/birthday-cake.png'
import Contact from '../Views/Contact' 
import { Link } from 'react-router' 
import Home from '../Views/Home'
import CakeMenu from '../Views/Cake-Menu'


function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 bg-yellow-100 border-b-2 border-orange-300    '>
        <img src={imglogo} alt='Cake Shop Logo' className='h-10 w-10'/>
      <h1 className='display-static text-3xl font-semibold text-orange-600'>Cake Shop</h1>
      <nav>
        <ul className='flex space-x-4'>
          <Link to="/" className='text-lg'>Home</Link>
          <Link to="./Cake-Menu" className='text-lg'>Cake Menu</Link>
          <Link to="./Contact" className='text-lg'>Contact</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
