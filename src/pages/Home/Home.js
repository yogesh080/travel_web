import React from 'react'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Footer from '../../components/Footer'
import Recommend from '../../components/Recommend'
import ScrollToTop from '../../components/ScrollToTop'
import Testimonials from '../../components/Testimonial'
import Navbar from '../../components/Navbar'


export default function Home() {
  return (
    <div>
        <ScrollToTop/>
        <Navbar/>
        <Hero/>
        <Services/>
        <Recommend/>
        <Testimonials/>
        <Footer/>


    </div>
  )
}


