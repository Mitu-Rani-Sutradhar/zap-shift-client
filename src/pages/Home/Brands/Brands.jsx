import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import { Autoplay } from 'swiper/modules';

const brandLogos = [amazon, casio, moonstar, randstad, star, startPeople, amazonVector];


const Brands = () => {
    return (
        <div>

            <h3 className='font-bold text-lg pt-12 text-center'>We've helped thousands of sales teams</h3>
             <Swiper
         loop={true}
         slidesPerView={4}
         centeredSlides={true}
         spaceBetween={30}
         grabCursor={true}
       
         autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
         modules={[Autoplay]}
        > 
        
            
    {
        
        brandLogos.map((logo, index) => 
            
            
            <SwiperSlide className='pb-10 pt-8' key={index}>
                
                <img src={logo} alt="" />
            </SwiperSlide>
        )
    }

    
        
        </Swiper>
        </div>
        
       
    );
};

export default Brands;