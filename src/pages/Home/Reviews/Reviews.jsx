import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import customerTopImg from '../../../assets/customer-top.png';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
    
    return (
        <div>
             <div className='mx-auto'>
                <img className='mx-auto' src={customerTopImg} alt="" />
                <h2 className='text-2xl font-bold text-center pt-5'>What our customers are sayings</h2>
                <p className='text-sm font-normal text-center py-5'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
             </div>
             <div>
                <>
      <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
     {
        reviews.map(review =>
            <SwiperSlide key={review.id}>
                <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
        )
     }
        
      </Swiper>
    </>
             </div>
        </div>
    );
};

export default Reviews;