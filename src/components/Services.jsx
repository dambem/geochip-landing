import React from 'react'
import image_1 from '../assets/image_1.png'

function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl noise_2 bg-top shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">2D + 3D Map Visualization</h3>
            <p className="text-gray-600">Explore data through intricate cartographic art. From historical landmarks to modern cityscapes, I can provide you with web-suitable 3D visualisations.</p>
            <div className="h-48 bg-gray-200 mt-6 bg-[url(./assets/image_1.png)] bg-cover bg-center rounded-lg animate-pulse-slow">
              {/* <img className='h-48 object-cover' src={image_1}/> */}
            </div>
          </div>
          <div className="p-8 rounded-xl noise_2 shadow-xl text-center">
            <h3 className="text-2xl font-semibold mb-4">Bespoke 3D Prints</h3>
            <p className="text-gray-600">Capture the essence of your favorite locations with our 3D printing. Each print is unique and personalized. Sizes available from 10cm² to 1m²</p>
            <div className="h-48 bg-gray-200 mt-6  bg-[url(./assets/canary_wharf3.png)] bg-cover bg-center rounded-lg animate-pulse-slow"></div>
          </div>
          <div className="p-8 rounded-xl noise_2 shadow-xl text-center">
            <h3 className="text-2xl font-semibold mb-4">LIDAR + Point Cloud</h3>
            <p className="text-gray-600">Explore data through intricate cartographic art. From historical landmarks to modern cityscapes, our maps tell compelling stories.</p>
            <div className="h-48 bg-gray-200 mt-6  bg-[url(./assets/winchester6.png)] bg-cover bg-center rounded-lg animate-pulse-slow"></div>
          </div>
        </div>
        <h3> </h3>
      </div>
    </section>
  )
}

export default Services