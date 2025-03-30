import React from 'react'

function Footer() {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 GeoChip By Damian Bemben. All rights reserved.</p>
        <div>See my other projects  <a href='https://bemben.co.uk'> here </a> </div>

        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-blue-400">Instagram</a>
          <a href="#" className="hover:text-blue-400">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer