import silinderjakoonus from './media/silinderjakoonus.jpg';
import silindri_valem from './media/valemid/silinder.png';
import koonuse_valem from './media/valemid/koonus.png';

import Kera from './media/kera.jpg';
import kera_valemid from './media/valemid/keravalemid.jpg';

import kuup from './media/kuup.jpg';
import kuup_valem from './media/valemid/kuup.jpeg'

import hulktahukas from './media/hulktahukas.jpg';
import hulktahuka_valemid from './media/valemid/korrapäranehulktahukas.png';

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
            <h1 className='text-xl underline'>Silinder ja Koonus</h1>
            <div className='flex gap-4'>
              <div>
                <img className='h-screen' src={silinderjakoonus} alt="Slide 3" />
              </div>
              <div>
                <h2>Asukoht: Kooli kõrval parklas</h2>
                <img src={silindri_valem} alt="" />
                <img src={koonuse_valem} alt="" />
              </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='flex gap-2 flex-col'>
          <h1>Kera</h1>
          <div className='flex'>
            <div>
              <img class='h-screen' src={Kera} alt="Slide 2" />
            </div>
            <div>
              <h2>Asukoht: Lossi pargis</h2>
              <img src={kera_valemid} alt="" />
            </div>
          </div>
        </SwiperSlide>
      
        <SwiperSlide className='flex gap-2 flex-col'>
            <h1 className='text-xl underline'>Kuup</h1>
            <div className='flex gap-4'>
              <div>
                <img className='h-screen' src={kuup} alt="Slide 1" />
              </div>
              <div>
                <h2>Asukoht: Rohu 5, Kuressaare, 93819 Saare maakond</h2>
                <img src={kuup_valem} alt="" />
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className='text-xl underline pr-4'>Korrapärane hulktahukas</h1>
              <div className='flex gap-4'>
                <div>
                  <img className='h-screen' src={hulktahukas} alt="Slide 1" />
                </div>
                <div>
                  <h2>Asukoht: Lossi pargis</h2>
                  <img src={hulktahuka_valemid} alt="" />
                </div>
              </div>
          </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
