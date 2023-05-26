import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import Section from './sectionTitle/Section';

const Menu = () => {
    const [menu,setMenue]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popular=data.filter(food=>food.category==='popular')
            setMenue(popular)
       
       
        })
    },[])
    return (
        <div>
        <Section header={"menu Item"} subheader={"u can choose here"}></Section>
           <div className='row'>
           {
            menu.map(each=><MenuItem menu={each}></MenuItem>)
           } 
           </div>
        </div>
    );
};

export default Menu;