import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Menu from './Menu';
import Featured from './Featured';
import Testimonial from './Testimonial';





// import required modules

const Home = () => {
    return (
        <div className='container'>
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