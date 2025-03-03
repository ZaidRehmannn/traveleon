import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from './homecomponents/Hero/Hero'
import Title from '../../components/Title/Title'
import Destinations from './homecomponents/Destinations/Destinations'
import Trips from './homecomponents/Trips/Trips'
import Footer from '../../components/Footer/Footer'
import Testimonials from './homecomponents/Testimonials/Testimonials'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Title title={"Popular Destinations"} subTitle={"Tours give you the opportunity to see a lot, within a time frame."} />
            <Destinations />
            <Title title={"Recent Trips"} subTitle={"You can discover unique destinations using Google Maps."} />
            <Trips />
            <Title title={"Testimonials"} subTitle={"What Our Clients Say"} />
            <Testimonials/>
            <Footer />
        </div>
    )
}

export default Home
