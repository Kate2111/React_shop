import React from 'react';
import MenuList from './list/MenuList';
import style from './header.module.scss';
import heart from '@assets/images/header/Heart.svg';
import buy from '@assets/images/header/Buy.svg';
import buy_white from '@assets/images/header/BuyWhite.svg';
import login from '@assets/images/header/Login.svg';
import { Link } from 'react-router-dom';


const Navbar = ({isMain}) => {
    const navigationButtons = [
        { text: 'About', href: '/React_shop/about', type: 'link'},  
        { text: 'Catalog', href: '/React_shop/catalog', type: 'link'},
        { text: 'Blog', href: '/React_shop/blog', type: 'link'},
        { text: 'Contact', href: '/React_shop/contact', type: 'link'}
    ]

    return (<>
        <header className={isMain && style.main}>
            <div className="container">
                <div className={style.inner}>
                    <MenuList arr={navigationButtons} isMain={isMain}/>
                    <div className={style.icons}>
                        <a className={isMain ? style.tel_white : style.tel} href="tel:+389956759830">+38995-675-98-30</a>
                        <Link to='/React_shop/favorite'><img className={style.icon} src={heart} alt='heart'/></Link>
                        <Link to='/React_shop/cart'><img className={style.icon} src={buy} alt="buy"/></Link>
                        <Link to="/React_shop/login"><img className={style.icon} src={login} alt="login" /></Link>
                    </div>
                </div>
            </div>
        </header>
    </>
    );
};

export default Navbar;