import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className='px-8 pt-8'>
        <img className='rounded-lg' src="./Assets/Imgs/Carousel1.webp" alt="" />
      </div>
      <div className='px-8 pt-8'>
        <img className='rounded-lg' src="./Assets/Imgs/Carousel2.webp" alt="" />
      </div>
      <div className='px-8 pt-8'>
        <img className='rounded-lg' src="./Assets/Imgs/Carousel3.webp" alt="" />
      </div>
    </Slider>
  )
}

export default Carousel
