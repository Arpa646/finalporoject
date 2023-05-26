import React, { useState } from 'react';

const Section = ({header,subheader}) => {
    const [Header,setHeader]=useState(header)
    const [Subheader,setSubHeader]=useState(subheader)
    return (
        <div className='text-center'> 
         
           <h4>{Subheader}</h4>
           <hr /> 
           <h1>{Header}</h1>  
           <hr />
        </div>
    );
};

export default Section;