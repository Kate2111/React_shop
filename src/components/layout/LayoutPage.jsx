import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';


const LayoutPage = ({children, isMain}) => {
    return (
        <div className="wrapper">
            <Navbar isMain={isMain}/>

            <div className="main">
                {children}
            </div>
            
            <Footer/>
      </div>
    );
};

export default LayoutPage;