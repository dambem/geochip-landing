import React, { useState } from 'react'

function Contact() {
  const [selectedService, setSelectedService] = useState('general')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'general',
    message: ''
  })

  const serviceOptions = [
    { id: 'general', label: 'General Inquiry', placeholder: 'How can we help you?' },
    { id: 'personal', label: 'Personal Commission', placeholder: "Describe the location or piece you'd like created..." },
    { id: 'corporate', label: 'Corporate Order', placeholder: 'Tell us about your event, team size, and timeline...' },
    { id: 'data', label: 'Data Visualization', placeholder: 'Describe your data and visualization needs...' },
    { id: 'installation', label: 'Installation Project', placeholder: 'Share your vision for the space and experience...' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            Ready to transform places into art? Let's discuss your project.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Contact Form - Left Side */}
          <div className="md:col-span-7">
            <form
              action="https://api.staticforms.xyz/submit"
              method="POST"
              className="space-y-6"
            >
              {/* REQUIRED StaticForms hidden fields */}
              <input type="hidden" name="apiKey" value="sf_6c3el1a7nbllbkhmea6e3ed4" />
              {/* <input type="hidden" name="subject" value={`New ${formData.service} inquiry from website`} /> */}
              <input type="hidden" name="redirectTo" value="www.geochip.uk" />

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  What can we help you with?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setSelectedService(option.id)
                        setFormData({ ...formData, service: option.id })
                      }}
                      className={`rounded-full px-4 py-2 text-sm border transition-all duration-200 ${
                        selectedService === option.id
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-300 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="service" value={formData.service} />
              </div>

              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-full w-full px-4 py-2 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-full w-full px-4 py-2 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={serviceOptions.find(opt => opt.id === selectedService)?.placeholder}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="rounded-full px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Links - Right Side */}
          <div className="md:col-span-5 md:pl-12">
            <div className="mb-12">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-6">Quick Start</h3>
              
              <a 
                href="https://www.etsy.com/uk/shop/geochipuk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block mb-6 p-6 border border-gray-200 hover:border-gray-400 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Browse Ready-Made</h4>
                    <p className="text-sm text-gray-600">Visit our Etsy shop for immediate purchases</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              <a 
                href="https://instagram.com/geochipuk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block p-6 border border-gray-200 hover:border-gray-400 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">See Our Work</h4>
                    <p className="text-sm text-gray-600">Follow @geochipuk for latest creations</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Response Time */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">Response Times</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Personal Commissions</span>
                  <span className="text-gray-900 font-medium">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Corporate Orders</span>
                  <span className="text-gray-900 font-medium">1-2 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Large Installations</span>
                  <span className="text-gray-900 font-medium">2-3 business days</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Prefer email?</p>
              <a 
                href="mailto:damianbemben@geochip.uk" 
                className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                damianbemben@geochip.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
