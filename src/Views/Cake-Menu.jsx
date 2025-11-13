import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Navbar from '../Component/navbar'
import { Link } from 'react-router'
import Footer from '../Component/Footer.jsx'
import {CAKEDATA} from '../configes/Cakedata.jsx'
import CakeView from './Cake-view.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'

function CakeMenu() {
    // Each cake card gets its own image index
    const [imageIndexes, setImageIndexes] = useState(Array(CAKEDATA.length).fill(0))

    const handleNext = (idx) => {
        setImageIndexes(prev =>
            prev.map((imgIdx, i) =>
                i === idx
                    ? Math.min(imgIdx + 1, CAKEDATA[idx].image.length - 1)
                    : imgIdx
            )
        )
    }

    const handlePrev = (idx) => {
        setImageIndexes(prev =>
            prev.map((imgIdx, i) =>
                i === idx
                    ? Math.max(imgIdx - 1, 0)
                    : imgIdx
            )
        )
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-purple-100 pb-20">
      
            <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-center mt-10 drop-shadow-lg tracking-wide'>Our Cake Menu</h1>
            <p className='mt-4 text-lg text-center font-light text-gray-700 display:flex flex-wrap justify-center'>Explore our delicious cake offerings!</p>
            <div className='container mx-auto px-4 flex flex-row flex-wrap justify-center z-10 relative'>
                {CAKEDATA.map((cake, index) => (
                    <div
                        key={cake.id || index}
                        className='relative max-w-sm mx-4 my-8 backdrop-blur-lg bg-white/60 rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-200 transition-transform duration-200 hover:scale-105 hover:shadow-pink-300'
                        style={{ boxShadow: '0 8px 32px 0 rgba(255, 182, 193, 0.25), 0 1.5px 8px 0 rgba(186, 104, 200, 0.15)' }}
                    >
                        <div className='flex flex-col items-center p-8'>
                            <ChevronRight
                                onClick={() => handleNext(index)}
                                className='absolute top-[90px] right-8 font-bold size-[42px] text-pink-500 cursor-pointer'
                            />
                            <ChevronLeft
                                onClick={() => handlePrev(index)}
                                className='absolute top-[90px] left-8 font-bold size-[42px] text-pink-500 cursor-pointer'
                            />
                            <div className='w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white mb-4 relative'>
                                <img
                                    className='w-full h-full object-cover'
                                    src={cake.image[imageIndexes[index]]}
                                    alt={cake.title}
                                    style={{ boxShadow: '0 0 32px 0 rgba(255, 182, 193, 0.25)' }}
                                />
                                <div>{cake.rating}
                                    <span className='text-yellow-500'>
                                        {Array.from({ length: cake.rating }, (_, i) => (
                                            <span key={i} className='text-yellow-500'>★</span>
                                        ))}
                                        {Array.from({ length: 5 - cake.rating }, (_, i) => (
                                            <span key={i} className='text-gray-500'>★</span>
                                        ))}
                                    </span>
                                </div>
                            </div>
                            <h2 className='text-2xl font-extrabold text-pink-700 mb-2 drop-shadow-lg tracking-wide text-center'>{cake.title}</h2>
                            <p className='text-base text-gray-700 mb-4 text-center'>{cake.description}</p>
                            <div className='text-lg font-semibold text-purple-600 mb-2'>
                                Price: {cake.price ? cake.price : 'N/A'}
                            </div>
                            <Link to="/cake-view" className='cursor-pointer'>
                                <button  className='cursor-pointer mt-4 px-7 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold shadow-lg flex items-center gap-2'>
                                    <span className="material-icons text-lg">Cake</span>
                                    Order Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default CakeMenu;
