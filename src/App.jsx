import silinderjakoonus from './media/silinderjakoonus.jpg';
import silindri_valem from './media/valemid/silinder.png'
import koonuse_valem from './media/valemid/koonus.png'

import React, {  } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='flex gap-2 flex-col'>
            <h1>Silinder ja Koonus</h1>
            <div className='flex'>
              <div>
                <img className='h-screen' src={silinderjakoonus} alt="Slide 1" />
              </div>
              <div>
                <h2>Asukoht: Kooli kõrval parklas</h2>
                <img src={silindri_valem} alt="" />
                <img src={koonuse_valem} alt="" />
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
