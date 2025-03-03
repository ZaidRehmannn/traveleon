import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from './Testimonials.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    const testimonials = data.map(testimonial => ({
        ...testimonial,
        id: uuidv4()
    }));

    const slider = useRef();
    let tx = 0;

    const importImage = (imagePath) => {
        return new URL(`../../../../assets/${imagePath}`, import.meta.url).href;
    };

    const slideForward = () => {
        const isMobile = window.innerWidth < 640;
        const translatePercentage = isMobile ? 100 : 50;
        const maxTx = -(testimonials.length - (isMobile ? 1 : 2)) * translatePercentage;
        if (tx > maxTx) {
            tx -= translatePercentage;
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    };

    const slideBackward = () => {
        const isMobile = window.innerWidth < 640;
        const translatePercentage = isMobile ? 100 : 50;
        if (tx < 0) {
            tx += translatePercentage;
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    };

    return (
        <div className="relative flex items-center px-4 sm:px-8 md:px-24 lg:px-24 xl:px-36 mb-14">
            {/* Left Arrow */}
            <FontAwesomeIcon
                icon={faArrowLeft}
                className="absolute left-32 sm:left-8 md:left-10 xl:left-16 top-full sm:top-1/2 transform -translate-y-1/2 z-10 border p-3 mt-7 sm:mt-0 rounded-full bg-gray-800 text-white cursor-pointer"
                onClick={slideBackward}
            />

            {/* Testimonials Container */}
            <div className="overflow-hidden w-full">
                <div ref={slider} className="flex transition-transform duration-500 ease-in-out sm:space-x-6 lg:space-x-7">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex-none border-2 p-6 sm:p-4 lg:p-6 xl:p-8 rounded-xl shadow-xl w-full md:w-[46%] lg:w-[47%] xl:w-[48%]">
                            <div className="flex items-center gap-3">
                                <img
                                    src={importImage(testimonial.image)}
                                    alt={testimonial.name}
                                    className="border-4 border-gray-800 rounded-full w-14 h-14 sm:w-16 sm:h-16"
                                />
                                <div>
                                    <h3 className="font-semibold mb-[-4px]">{testimonial.name}</h3>
                                    <span className="text-xs">{testimonial.location}</span>
                                </div>
                            </div>
                            <p className="p-2">{testimonial.review}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            <FontAwesomeIcon
                icon={faArrowRight}
                className="absolute right-32 sm:right-8 md:right-14 xl:right-20 top-full sm:top-1/2 transform -translate-y-1/2 z-10 border p-3 mt-7 sm:mt-0 rounded-full bg-gray-800 text-white cursor-pointer"
                onClick={slideForward}
            />
        </div>
    );
};

export default Testimonials;