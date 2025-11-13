import React from 'react'
import imglogo from '../assets/birthday-cake.png'
import { Link, useLocation } from 'react-router'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className='flex justify-between items-center px-8 py-4 bg-gradient-to-r from-pink-300 via-pink-200 to-orange-200 shadow-lg border-b-4 border-pink-400'>
      {/* Logo and Brand */}
      <div className='flex items-center gap-3'>
        <img src={imglogo} alt='Cake Shop Logo' className='h-12 w-12 hover:scale-110 transition-transform duration-300'/>
        <h1 className='text-3xl font-bold text-pink-600 hover:text-pink-700 transition-colors'>Cake Shop</h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className='flex space-x-8'>
          <Link 
            to="/" 
            className={`text-lg font-semibold transition-all duration-300 ${
              isActive('/') 
                ? 'text-pink-600 border-b-3 border-pink-600 pb-1' 
                : 'text-gray-700 hover:text-pink-600'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/cake-menu" 
            className={`text-lg font-semibold transition-all duration-300 ${
              isActive('/cake-menu') 
                ? 'text-pink-600 border-b-3 border-pink-600 pb-1' 
                : 'text-gray-700 hover:text-pink-600'
            }`}
          >
            Cakes
          </Link>
          <Link 
            to="/contact" 
            className={`text-lg font-semibold transition-all duration-300 ${
              isActive('/contact') 
                ? 'text-pink-600 border-b-3 border-pink-600 pb-1' 
                : 'text-gray-700 hover:text-pink-600'
            }`}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
