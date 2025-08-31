import React from 'react'

function Testimonial() {
  return (
    <section className="container mx-auto px-4 py-16 gap-8">
      <div className="-50 p-12 rounded-lg text-center">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Testimonials
        </label>
        <blockquote className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
          "Damian's passion and meticulous attention to detail truly shines through. This map has become an invaluable tool for showcasing the potential of our city."
        </blockquote>
        <cite  className="font-semibold mb-4">Southampton Business Improvement District</cite>
        <br></br>
        <br></br>
        <a className="inline-flex items-center border-2 border-amber-600/30 text-amber-700 px-4 py-2 rounded-full hover:bg-amber-50 transition-all duration-300" href="https://maps.app.goo.gl/4XbjD1kjFfuJxcnD8"> Link To Review </a>
      </div>
    </section>
  )
}

export default Testimonial