import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <div className='noise_bg'>
      <Navbar></Navbar>

      <main className='pt-20'>
        <Hero className='shadow-xl'></Hero>
        <About></About>
        <Services></Services>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default App
