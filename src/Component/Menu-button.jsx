import React from 'react'
import { Link } from 'react-router'

function MenuButton() {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <Link
          to="../Cake-Menu"
          className="mt-5 inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-pink-600 hover:scale-105 transition-all duration-300 font-bold text-lg"
        >
          <span className="text-2xl">🍰</span>
          Explore Our Cake Menu
        </Link>
      </div>
    </div>
  )
}

export default MenuButton;
