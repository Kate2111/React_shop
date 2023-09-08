import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { Outlet } from 'react-router';


const LayoutPage = () => {
    return (
        <div className="wrapper">
            <Navbar/>

            <div className="main">
                <Outlet/>
            </div>
            
            <Footer/>
      </div>
    );
};

export default LayoutPage;