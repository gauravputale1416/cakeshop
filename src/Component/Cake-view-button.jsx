import React from 'react'

function CakeViewButton() {
  return (
    <div>
      <link to="/Cake-View" className='cursor-pointer'>
        <button className='cursor-pointer mt-4 px-7 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold shadow-lg flex items-center gap-2'>
            <span className="material-icons text-lg">Cake</span>
            View Details
        </button>
      </link>
    </div>
  )
}

export default CakeViewButton
