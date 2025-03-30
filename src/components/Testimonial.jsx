import React from 'react'

function Testimonial() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="-50 p-12 rounded-lg text-center">
        <blockquote className="max-w-3xl mx-auto text-xl italic mb-6">
          "Damian's passion and meticulous attention to detail truly shines through. This map has become an invaluable tool for showcasing the potential of our city."
        </blockquote>
        <cite  className="font-semibold">Southampton Business Improvement District</cite>
        <br></br>
        <a href="https://maps.app.goo.gl/4XbjD1kjFfuJxcnD8"> Link To Review </a>
      </div>
    </section>
  )
}

export default Testimonial