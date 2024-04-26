import React from 'react'
import Home from '../section/Home'
import Services from '../section/Services'
import Skills from '../section/Skills'
import Experience from '../section/Experience'
import Portfolio from '../section/Portfolio'
import Testimonials from '../section/Testimonials'



const MainPage = () => {
  return (
    <div className='MainPage'>
      <Home/>
      <Services/>
      <Skills/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
    </div>
  )
}

export default MainPage
