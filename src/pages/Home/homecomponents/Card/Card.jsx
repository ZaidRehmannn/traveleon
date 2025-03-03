import React from 'react'

const Card = ({ image, title, description }) => {
    return (
        <div className='border-2 p-2 rounded-xl space-y-2 shadow-xl sm:basis-2/5 lg:basis-1/4'>
            <div className='relative w-full h-40 overflow-hidden rounded-lg'>
                <img className='w-full h-full object-fill transform transition-transform duration-300 hover:scale-110' src={image} alt={title} />
            </div>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p className='text-sm pb-1'>{description}</p>
        </div>
    )
}

export default Card
