import React from 'react'
import { Link } from 'react-router'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="fixed bottom-0 left-0 w-full z-40 bg-gradient-to-r from-pink-300 via-pink-200 to-orange-200 text-gray-800 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">Cake Shop</h2>
          <p className="text-sm text-gray-700 hidden md:block">Delicious cakes made with love.</p>
        </div>

        <nav className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/cake-menu" className="hover:underline">Cakes</Link>
          <Link to="/cake-view" className="hover:underline">View</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        <div className="text-sm text-gray-700">
          © {year} Cake Shop
        </div>
      </div>
    </footer>
  )
}

export default Footer
