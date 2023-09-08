import React, { useState } from 'react';
import style from './header.module.scss';
import heart from '@assets/images/header/Heart.svg';
import buy from '@assets/images/header/Buy.svg';
import LoginPage from '../../../pages/login/LoginPage'
import login from '@assets/images/header/Login.svg';
import { Link, useLocation } from 'react-router-dom';
import Menu from './menu/Menu';


const Navbar = () => {
    const [modal, setModal] = useState(false);
    const location = useLocation()

    return (<>
        <header className={location.pathname === '/React_shop' && style.main}>
            <div className="container">
                <div className={style.inner}>
                    <Menu/>
                    
                    <div className={style.icons}>
                        <a className={location.pathname === '/React_shop' ? style.tel_white : style.tel} href="tel:+389956759830">+38995-675-98-30</a>
                        <Link to='/React_shop/favorite'><img className={style.icon} src={heart} alt='heart'/></Link>
                        <Link to='/React_shop/cart'><img className={style.icon} src={buy} alt="buy"/></Link>
                        <button className={style.loginBtn} onClick={() => setModal(true)}><img className={style.icon} src={login} alt="login" /></button>
                    </div>
                </div>
            </div>
        </header>
        <LoginPage visible={modal} setVisible={setModal}/>
    </>
    );
};

export default Navbar;