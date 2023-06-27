import React from 'react';
import MenuList from './MenuList';
import './header.scss';
import './menu.scss';

import logo from './../../img/first_page/logo.png';
import gamburger from '../../img/first_page/icon/icon_menu.svg';


const Navbar = () => {
    const arrTextLeft = [
        { text: 'About', href: './about.html'},  
        { text: 'Gallery', href: './Gallery.html'}]

    const arrTextRigth = [
        { text: 'Blog', href: './about.html'},
        { text: 'Contact', href: './about.html'}]


    return (<>
        <header className="header">
            <div className="container">
                <div className="header__inner">
            
                    <MenuList arr={arrTextLeft}/>

                    <a className="logo" href="#"> <img src={logo} alt="logo"/></a>
                    
                    <MenuList arr={ arrTextRigth}/>
                    
                    <button className="header__gamburger"><img src={gamburger} alt="menu"/></button>
                </div>
            </div>
        </header>
    </>
    );
};

export default Navbar;