import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import PhotoUpload from './components/PhotoUpload'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Footer/>
    <Login/>
    <Signup/>
    <PhotoUpload/>
    </>
  )
}

export default App



