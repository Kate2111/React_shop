import React from 'react';
import MenuList from './list/MenuList';
import style from './header.module.scss';
import logo from '@assets/images/first_page/logo.png';
import MyInput from '../../UI/input/MyInput';
import MyButtonBlack from '../../UI/button/black_button/MyButtonBlack';


const Navbar = () => {
    const navigationButtons = [
        { text: 'About', href: './about.html', type: 'link'},  
        { text: 'Gallery', href: './Gallery.html', type: 'link'},
        { text: 'Blog', href: './about.html', type: 'link'},
        { text: 'Contact', href: './about.html', type: 'link'}
    ]

    const navigationShop = [
        { text: '+38995-675-98-30', href: '#', type: 'link'},
        { text: 'heart', href: '@assets/images/header/heart.png', type: 'image'},
        { text: 'buy1', href: '@assets/images/header/buy1.png', type: 'image'},
        { text: 'login', href: '@assets/images/header/login.png', type: 'image'}
    ]


    return (<>
        <header>
            <div className="container">
                <div className={style.inner}>
                    <MyButtonBlack>Catalog</MyButtonBlack>
                    <MyInput text={'Search...'}/>
                    <MenuList arr={navigationShop}/>
                </div>

                <div className={style.inner}>
                    <a className="logo" href="./about.html"> <img src={logo} alt="logo"/></a>
                    <MenuList arr={navigationButtons}/>
                </div>
            </div>
        </header>
    </>
    );
};

export default Navbar;