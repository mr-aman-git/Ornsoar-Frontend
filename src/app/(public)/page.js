import React from 'react'
import HeroSection from '../../components/homeSection/HeroSection'
import About from '../../components/homeSection/About'
import WhyChoose from '../../components/homeSection/WhyChoose'
import HowItWorks from '../../components/homeSection/HowItWorks'
import BrandsSection from '../../components/homeSection/BrandsSection'
import JobCategories from '../../components/homeSection/JobCategories'
import ClientTestimonials from '../../components/homeSection/ClientTestimonials'
const page = () => {
  return (
    <>
        <HeroSection/>
        <BrandsSection/>
        <JobCategories/>
        <ClientTestimonials/>
        {/* <About/>
        <WhyChoose/>
        <HowItWorks/> */}
    </>
  )
}

export default page