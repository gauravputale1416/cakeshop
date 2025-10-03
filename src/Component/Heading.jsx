import React from 'react'

function Heading( {heading} ) {
  return (
    <div>
      <h1 className='text-4xl font-bold text-blue-600 text-center my-5'>{heading}</h1>
    </div>
  )
}

export default Heading
