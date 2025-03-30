import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log(formData)
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold  text-center mb-12">Let's Create Something Unique</h2>
        <div className="max-w-lg mx-auto bg-sky-800/10 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg" 
                rows="4" 
                placeholder="Tell us about your project"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-sky-400  py-3 rounded-lg hover:bg-sky-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact