import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Layout = () => {
    return (
        <div>This is main thing
        <Navbar></Navbar>
           <Outlet></Outlet>
           <div className='container'>
           <Footer></Footer>
           </div>
       
        </div>
    );
};

export default Layout;