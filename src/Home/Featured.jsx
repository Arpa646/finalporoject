import React from 'react';
import Section from './sectionTitle/Section';
import img1 from '../../src/assets/home/featured.jpg'
const Featured = () => {
    return (

        <div className='featured '>
            <Section header={"Featured item"} subheader={"You can choose"}></Section>
      
            <div className='row  m-auto'>
                <div className='col-lg-5'>
                    <img  className='img-fluid' src={img1} alt="" srcset="" />
                </div>
                <div className='col-lg-5'>
                    <p>Aug,20 2029</p>
                    <p>WHERE CAN I GET SOME</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora officiis obcaecati soluta aut molestiae nesciunt repellendus minus, eveniet adipisci aspernatur.</p>
                </div>
            </div>


        </div>
    );
};

export default Featured;