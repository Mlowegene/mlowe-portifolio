import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Service />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
