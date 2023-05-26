import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Menu from './Menu';
import Featured from './Featured';
import Testimonial from './Testimonial';


import { Helmet } from 'react-helmet-async';


// import required modules

const Home = () => {
    return (
        <div className='container'>
         <Helmet>
                <title>Bistro| Home</title>
                
            </Helmet>
            This is Home
          <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;