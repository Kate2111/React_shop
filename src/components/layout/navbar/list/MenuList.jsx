import React from 'react';
import style from './menuList.module.scss';
import ItemLi from '../item/MenuItem';
import logo from '@assets/images/first_page/logo.png';
import {useLocation, useNavigate} from 'react-router-dom';

const MenuList = ({arr, isOpen, setOpen}) => {
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location.pathname)

    return (
        <nav className={!isOpen ? style.menu : style.sidebar}>

            <div className={location.pathname !== '/React_shop' ? style.showLogo : style.hideLogo} onClick={() => navigate(`/React_shop`)}>
                <img src={logo} alt="logo"/>
            </div>
            <ul className={!isOpen ? style.list : style.sidelist}>
                {
                    arr.map(item => {
                        return <ItemLi 
                                    key={item.text} 
                                    href={item.href} 
                                    text={item.text}
                                    setOpen={setOpen}
                                />
                    }) 
                }
            </ul>
        </nav>
    );
};

export default MenuList;