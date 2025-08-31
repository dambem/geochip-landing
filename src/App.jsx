import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import Test from './components/Test'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">

      <Navbar ></Navbar>
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply'
        }}
      />
      <main className='relative z-10 pt-20 bg-white'>
        <Hero className='shadow-xl'></Hero>
        <About></About>
        <Testimonial></Testimonial>

        <Services></Services>
        <Contact></Contact>
      </main>
      <Footer/>
            </div>

    </>
  )
}

export default App
