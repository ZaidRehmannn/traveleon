import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import contactImage from '../../assets/contact.jpg'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/Title/Title'
import Form from './contactcomponents/Form/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero heading={"Contact"} image={contactImage} />
      <Title title={"Get in Touch"} />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
