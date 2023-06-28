import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';


const LayoutPage = ({children}) => {
    return (
        <div className="wrapper">
            <Navbar/>

            <div className="main">
                {children}
            </div>
            
            <Footer/>
      </div>
    );
};

export default LayoutPage;