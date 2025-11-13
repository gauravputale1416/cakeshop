import React from 'react'
import { useNavigate } from 'react-router'
import Footer from '../Component/Footer'
function Contact() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Navigate to home page after form submission
    navigate('/')
  }

  return (
    <div>

      <h1 className='text-3xl font-bold text-blue-600 text-center'>Contact Us</h1>
      <p className='mt-4 text-lg text-center font-light text-gray-600'>We would love to hear from you!</p>


      <div>
        <form className='max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>Name</label>
            <input className='border border-gray-300 p-2 w-full rounded-lg' type='text' id='name' placeholder='Your Name' required />  
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>Email</label>
            <input className='border border-gray-300 p-2 w-full rounded-lg' type='email' id='email' placeholder='Your Email' required />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='message'>Message</label>
            <textarea className='border border-gray-300 p-2 w-full rounded-lg' id='message' rows='4' placeholder='Your Message' required></textarea>
          </div>
          <div className='flex justify-center'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300' type='submit'>Submit</button>
          </div>
        </form>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold text-blue-600 mb-4 text-center'>Our Contact Information</h2>
          <p className='text-gray-700 mb-2 text-center'>Address: 123 Cake Street, Sweet City, CA 90210</p>
          <p className='text-gray-700 mb-2 text-center'>Phone: (123) 456-7890</p>
          <p className='text-gray-700 mb-2 text-center'>Email:
            <a href='mailto:info@cakeshop.com' className='text-blue-500 hover:underline'>info@cakeshop.com</a>
          </p>  
          <p className='text-gray-700 mb-2 text-center'>Follow us on social media:</p>
          <div className='flex justify-center space-x-4'>
            <a href='https://www.facebook.com/cakeshop' className='text-blue-600 hover:underline'>Facebook</a>
            <a href='https://www.twitter.com/cakeshop' className='text-blue-400 hover:underline'>Twitter</a>
            <a href='https://www.instagram.com/cakeshop' className='text-pink-500 hover:underline'>Instagram</a>
          </div>
          <p className='text-gray-700 mb-2 text-center'>We look forward to connecting with you!</p>
          <div className='mt-4'>
            <iframe
              title='Google Map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019678580634!2d-122.41941508468196!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x5c5c5c5c5c5c5c5c!2s123%20Cake%20Street%2C%20Sweet%20City%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus'
              width='100%'
              height='300'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />

    </div>
    

  )
}

export default Contact
