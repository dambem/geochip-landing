import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-pink-600/20 z-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className='tracking-tight'>
            <div className="text-2xl font-bold tracking-tight">GeoChip</div>
            <div className="text-sm tracking-tight">By Damian Bemben</div>
        </div>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar