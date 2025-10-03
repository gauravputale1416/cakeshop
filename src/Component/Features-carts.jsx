import React from 'react'
import { Baby,CakeSlice,SunSnow,PartyPopper } from 'lucide-react';
import Heading from './Heading';

const Data=[
    {
        title:"Children's Cakes",
        description:"Delight your little ones with our whimsical and colorful children's cakes, perfect for birthdays and special occasions.",
        icon:<Baby />
    },
    {
        title:"Custom Designs",
        description:"Bring your cake dreams to life with our custom design service. From elegant wedding cakes to themed birthday creations, we tailor each cake to your vision.",
        icon:<CakeSlice />,
       
    },
    {
        title:"Seasonal Specials",
        description:"Celebrate the flavors of the season with our limited-time cake offerings, featuring fresh, seasonal ingredients and festive designs.",
       icon:<SunSnow />,
    },{
        title:"Marriage Cakes",
        description:"Celebrate your special day with our exquisite wedding cakes, crafted to be both visually stunning and deliciously memorable.",
       icon:<PartyPopper />,
    },
] ;


function FeaturesCarts() {
  return (
        <div>
            <Heading heading="What We Offer..." />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6'>
                {Data.map((item, index) => (
                    <div
                        key={index}
                        className='relative p-6 m-4 rounded-3xl shadow-2xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-white to-blue-100 backdrop-blur-lg transition-transform duration-200 hover:scale-105 hover:shadow-blue-300 text-center flex flex-col items-center'
                        style={{ boxShadow: '0 8px 32px 0 rgba(59,130,246,0.15), 0 1.5px 8px 0 rgba(59,130,246,0.10)' }}
                    >
                        <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-200 via-blue-400 to-blue-500 shadow-lg mb-4'>
                            <span className='text-white text-3xl'>{item.icon}</span>
                        </div>
                        <h2 className='text-2xl font-extrabold text-blue-700 mb-2 drop-shadow-lg tracking-wide'>{item.title}</h2>
                        <p className='text-base text-gray-700 mb-2'>{item.description}</p>
                        <div className='absolute top-2 right-2 bg-white/80 rounded-full px-3 py-1 text-xs font-bold text-blue-500 shadow border border-blue-200'>
                            Feature
                        </div>
                    </div>
                ))}
            </div>
        </div>
   
  )
}

export default FeaturesCarts
