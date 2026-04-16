import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import bannerImg1 from '../../../../src/assets/banner/banner1.png';
import bannerImg2 from '../../../../src/assets/banner/banner2.png';
import bannerImg3 from '../../../../src/assets/banner/banner3.png';
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Banner = () => {
    return (
         <Carousel autoPlay={true}
         infiniteLoop={true} className='py-8'>
                < div className='relative'>
                    
                    
                        <img className='w-full' src={bannerImg1} />

                        
                   

                   <div className='relative'>


                     <p className='absolute bottom-20 left-23 text-sm w-[500px]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.From personal packages to business shipments — we deliver on time, every time.</p>


                     <div className='absolute  bottom-2 md:bottom- md:left- lg:bottom-8 left-23 flex items-center'>

                        
                  
                       

                      <button className='bg-[#CAEB66] rounded-2xl border-black border-1 w-[150px] text-black font-bold'>Track Your Parcel</button>
                    <p className='w-[40px] h-[40px] flex items-center justify-center rounded-full pr-5'>
                      <BsArrowUpRightCircleFill />
                    </p>
                  
                    <button className='bg-white w-[90px] rounded-xl  border-gray border-1 text-black font-bold'>Be A Rider</button>
                   </div>
                    
                   </div>
                      
                </div>
                <div>
                    <img src={bannerImg2} />
                   
                </div>
                <div>
                    <img src={bannerImg3} />
               
                </div>
            </Carousel>
    );
};

export default Banner;