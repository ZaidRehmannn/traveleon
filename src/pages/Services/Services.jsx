import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import servicesImage from '../../assets/services.jpg'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/Title/Title'
import Trips from '../Home/homecomponents/Trips/Trips'

const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero heading={"Services"} image={servicesImage} />
      <Title title={"Recent Trips"} subTitle={"You can discover unique destinations using Google Maps."} />
      <Trips />
      <Footer />
    </div>
  )
}

export default Services
