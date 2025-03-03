import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from './Destinations.json';

const Destinations = () => {

    const destinations = data.map(destination => ({
        ...destination,
        id: uuidv4()
    }));

    const importImage = (imagePath) => {
        return new URL(`../../../../assets/${imagePath}`, import.meta.url).href;
    };

    return (
        <div>
            {destinations.slice(0, 2).map((destination, index) => {
                const images = destination.images.map(image => importImage(image));

                return (
                    <div key={index} className={`flex flex-col lg:flex-row mb-12 justify-center px-4 sm:px-14 lg:pt-6 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className='left lg:basis-1/2 lg:px-16'>
                            <h2 className='text-3xl font-semibold mb-3'>{destination.name}</h2>
                            <p>{destination.description}</p>
                        </div>
                        <div className='right flex lg:basis-1/2 items-center gap-4 sm:gap-6 lg:gap-3 mt-6 lg:mt-0 justify-center'>
                            <img className='w-36 h-52 sm:w-40 sm:h-56 rounded-lg' src={images[0]} alt={destination.name} />
                            <img className='w-36 h-52 sm:w-40 sm:h-56 rounded-lg lg:relative lg:bottom-10' src={images[1]} alt={destination.name} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Destinations;
