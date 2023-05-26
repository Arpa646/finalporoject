import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img1 from '../../src/assets/home/slide1.jpg'
import img2 from '../../src/assets/home/slide2.jpg'
import img3 from '../../src/assets/home/slide3.jpg'
import img4 from '../../src/assets/home/slide4.jpg'
import img5 from '../../src/assets/home/slide5.jpg'
const Category = () => {
    return (
     <div>


     <h1 className='text-center m-5'>Category</h1>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
      
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={img1} alt="" srcset="" />
        <h2 className=''>Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" srcset="" />
        <h2 className=''>pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" srcset="" />
        </SwiperSlide>
        
      </Swiper>
     </div>
    );
};

export default Category;