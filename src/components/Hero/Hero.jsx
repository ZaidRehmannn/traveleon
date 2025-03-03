import React from 'react'

const Hero = ({ heading, image }) => {
    return (
        <div className='bg-cover bg-center h-[60vh] md:h-[80vh] z-0 relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})` }}>
            <div className='flex justify-center items-center absolute inset-0'>
                <h2 className='text-4xl sm:text-5xl font-semibold text-white'>{heading}</h2>
            </div>
        </div>
    )
}

export default Hero
