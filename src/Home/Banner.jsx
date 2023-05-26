import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import img2 from '../../src/assets/home/02.jpg'
import img4 from '../../src/assets/home/04.jpg'
import img3 from '../../src/assets/home/03.png'
const Banner = () => {
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={3}
        className='bg-dark '
      >
        <Slider>
          <Slide index={0}><img src={img3} alt="" srcset="" /></Slide>
          <Slide index={0}><img src={img2} alt="" srcset="" /></Slide>
          <Slide index={0}><img src={img3} alt="" srcset="" /></Slide>
        
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
};

export default Banner; 