import React from 'react';
import MenuList from './list/MenuList';
import style from './header.module.scss';

//import logo from '../../../assets/images/first_page/logo.png';
import logo from '@assets/images/first_page/logo.png';
import gamburger from '@assets/images/first_page/icon/icon_menu.svg';

console.log(style);
const Navbar = () => {
    const arrTextLeft = [
        { text: 'About', href: './about.html'},  
        { text: 'Gallery', href: './Gallery.html'}]

    const arrTextRigth = [
        { text: 'Blog', href: './about.html'},
        { text: 'Contact', href: './about.html'}]


    return (<>
        <header>
            <div className="container">
                <div className={style.inner}>
            
                    <MenuList arr={arrTextLeft}/>

                    <a className="logo" href="#"> <img src={logo} alt="logo"/></a>
                    
                    <MenuList arr={ arrTextRigth}/>
                    
                    <button className={style.gamburger}><img src={gamburger} alt="menu"/></button>
                </div>
            </div>
        </header>
    </>
    );
};

export default Navbar;