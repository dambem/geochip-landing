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
      <Navbar ></Navbar>
      <main className='noise_bg pt-20'>
        <Hero className='shadow-xl'></Hero>
        <About></About>
        <Services></Services>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </main>
      <Footer/>
    </>
  )
}

export default App
