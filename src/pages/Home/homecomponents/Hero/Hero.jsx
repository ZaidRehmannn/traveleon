import React from 'react';
import heroImage1 from '../../../../assets/hero1.jpg';
import heroImage2 from '../../../../assets/hero2.jpg';
import heroImage3 from '../../../../assets/hero3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Hero.css'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const images = [heroImage1, heroImage2, heroImage3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services');
  };

  return (
    <div className="carousel-container relative overflow-hidden w-full h-screen">
      {/* Background Image Slider */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-screen">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 space-y-4">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white">
          Your Journey, Your Story
        </h2>
        <p className="text-2xl text-white">
          Choose Your Favourite Destination
        </p>
        <button className="px-6 py-2 font-medium bg-gray-200 rounded-md text-lg hover:bg-gray-300 text-gray-950" onClick={handleClick}>
          Travel Plan
        </button>
      </div>
    </div>
  );
};

export default Hero;
