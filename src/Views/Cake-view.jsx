import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.png'
import {CAKEDATA} from '../configes/Cakedata.jsx'



function CakeView() {
    const images = [
  img1,
  img2,
  img3,
  img4,
]

  const [selectedImg, setSelectedImg] = useState(images[0])
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Cake View</h1>
      <div className="flex flex-col items-center">
        {/* Big Image */}
        <div className="w-96 h-96 mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-pink-200 flex items-center justify-center bg-white">
          <img src={selectedImg} alt="Cake" className="object-cover w-full h-full" />
        </div>
        {/* Thumbnails */}
        <div className="flex gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`w-24 h-24 rounded-lg overflow-hidden border-2 cursor-pointer ${selectedImg === img ? 'border-pink-500' : 'border-gray-300'}`}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt={`Cake ${idx + 1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Button */}
      <button
        onClick={() => navigate('/cake-menu')}
        className="mb-8 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-lg transition"
      >
        Go to Menu
      </button>
    </div>
  )
}

export default CakeView;

