import React from 'react'
import Navbar from '../Component/navbar'
import FeaturesCarts from '../Component/Features-carts'
import HeroSection from '../Component/Hero-section'
import { Link } from 'react-router'
import MenuButton from '../Component/Menu-button'
import ReviewsCart from '../Component/Reviews-cart'
import Footer from '../Component/Footer.jsx'

function Home() {
  return (
    <div>
 
      <HeroSection />
      <FeaturesCarts />
     
      <MenuButton />
      <ReviewsCart />
      <Footer />
    </div>
  )
}

export default Home