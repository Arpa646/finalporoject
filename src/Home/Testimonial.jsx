import React, { useEffect, useState,useRef } from 'react';
import Section from './sectionTitle/Section';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Item from './Item';
const Testimonial = () => {
    const [review,setReview]=useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
        })
    },[])
    return (
        <div>
            <Section header={"Testiminial"} subheader={"What our client say"}></Section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
       {
        review.map(each=><SwiperSlide><Item review={each}></Item></SwiperSlide>)
       }
      </Swiper>
             
        </div>
    );
};

export default Testimonial;