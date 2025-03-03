import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import data from './Trips.json';
import Card from '../Card/Card';

const Trips = () => {

    const trips = data.map(trip => ({
        ...trip,
        id: uuidv4()
    }));

    const importImage = (imagePath) => {
        return new URL(`../../../../assets/${imagePath}`, import.meta.url).href;
    };

    return (
        <div className='flex flex-wrap justify-center mb-14 gap-8 px-4 sm:px-0'>
            {trips.slice(0, 3).map((trip) => {
                return <Card key={trip.id} image={importImage(trip.image)} title={trip.title} description={trip.description} />
            })}
        </div>
    )
}

export default Trips
