import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import aboutImage from '../../assets/about.jpg'
import Body from './aboutcomponents/body/Body'
import Title from '../../components/Title/Title'
import Testimonials from '../Home/homecomponents/Testimonials/Testimonials'

const About = () => {
    return (
        <div>
            <Navbar />
            <Hero heading={"About"} image={aboutImage} />
            <Body />
            <Title title={"Testimonials"} subTitle={"What Our Clients Say"} />
            <Testimonials/>
            <Footer />
        </div>
    )
}

export default About
