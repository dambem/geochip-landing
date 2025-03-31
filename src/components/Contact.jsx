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
        <h1 className="text-4xl font-bold  text-center mb-12">Let's Create Something Unique</h1>
        {/* <div className="max-w-lg mx-auto bg-sky-800/10 p-8 rounded-lg shadow-md">
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
        </div> */}
      </div>
      <div className="container mx-auto px-4">

      <div className="mt-8 pt-6 border-t border-sky-800/20">
        <div className="max-w-lg text-xl text-center mx-auto bg-sky-800/10 p-8 rounded-lg shadow-md">
          <a href="https://instagram.com/geochipuk" className="flex items-center gap-2 text-sky-700 hover:text-sky-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>@geochipuk</span>
          </a>
          

          <a href="mailto:hello@geochip.com" className="flex items-center gap-2 text-sky-700 hover:text-sky-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>damianbemben@geochip.uk</span>
          </a>
          
          <a href="https://ends.substack.com/" className="flex items-center gap-2 text-sky-700 hover:text-sky-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4H2v16h20V4z"></path>
              <path d="M6 8h12"></path>
              <path d="M6 12h12"></path>
              <path d="M6 16h8"></path>
            </svg>
            <span>My Substack Newsletter</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Contact