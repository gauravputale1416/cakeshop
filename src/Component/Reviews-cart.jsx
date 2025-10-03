import React from 'react'
import { REVIEW_DATA } from '../configes/Review-data' 

function ReviewsCart() {
  return (
    <div>
        <h1 className='text-3xl font-bold text-blue-600 text-center mt-[50px]'>Customer Reviews</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {REVIEW_DATA.map((review)=>{
                return(
                    <div key={review.id} className='border p-4 m-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border-blue-300 hover:bg-blue-50 bg-white'>
                        <div className='flex items-center mb-4'>
                            <img src={review.avatar} alt={review.name} className='w-12 h-12 rounded-full mr-4'/>
                            <div>
                                <h2 className='text-xl font-bold'>{review.name}</h2>
                                <div className='text-yellow-500'>
                                    {Array.from({ length: review.rating }, (_, i) => (
                                        <span key={i} className='text-yellow-500'>★</span>
                                    ))}
                                    {Array.from({ length: 5 - review.rating }, (_, i) => (
                                        <span key={i} className='text-gray-500'>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-600'>{review.review}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ReviewsCart
