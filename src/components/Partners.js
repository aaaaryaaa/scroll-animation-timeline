import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

import Face from '../images/Facebook_Logo_2023.png';
import Insta from '../images/Instagram_icon.png';


function PartnerTitle() {
  return (
    <h1 className="h-[109px] text-center [text-shadow:0px_4px_25.1px_#ffffff80] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-3xl md:text-[69.9px] md:tracking-[6.99px] tracking-normal leading-[108.8px] md:leading-8 whitespace-nowrap">
      &lt;/partners&gt;
    </h1>
  )
};

const Carousel = () => {
  const handleSlideChange = (swiper) => {
    // console.log("Bro wtf")
    const currentIndex = swiper.activeIndex;

    swiper.slides.forEach((slide) => {
      slide.style.transform = 'scale(0.5)';
    });
    if (swiper.slides[currentIndex]) {
      swiper.slides[currentIndex].style.transform = 'scale(1)';
    }

    if (swiper.slides[currentIndex - 2]) {
      swiper.slides[currentIndex - 2].style.transform = 'scale(0.5)';
    }
    if (swiper.slides[currentIndex + 2]) {
      swiper.slides[currentIndex + 2].style.transform = 'scale(0.5)';
    }
    if (swiper.slides[currentIndex + 1]) {
      swiper.slides[currentIndex + 1].style.transform = 'scale(0.75)';
    }
    if (swiper.slides[currentIndex - 1]) {
      swiper.slides[currentIndex - 1].style.transform = 'scale(0.75)';
    }
    if (swiper.slides[currentIndex - 3]) {
      swiper.slides[currentIndex - 3].style.transform = 'scale(0.1)';
    }
    if (swiper.slides[currentIndex + 3]) {
      swiper.slides[currentIndex + 3].style.transform = 'scale(0.1)';
    }
  }

  const images = [Face, Insta, Face, Face, Insta, Face, Insta, Face, Insta, Face];
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        className='mySwiper'
        navigation={true}
        modules={[Navigation, Autoplay]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-auto lg:p-8 p-5">
            <img
              src={image}
              className={`w-full h-auto object-cover `}
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

function Partners() {
  return (
    <div className="text-white lg:pt-[17rem] pt-[10rem]">
      <div className="p-8">
        <PartnerTitle />
      </div>
      <Carousel />
    </div>
  )
}

export default Partners