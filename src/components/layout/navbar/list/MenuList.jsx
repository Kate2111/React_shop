import React from 'react';
import style from './menuList.module.scss';
import ItemLi from '../item/MenuItem';
import logo from '@assets/images/first_page/logo.png';
import {useNavigate} from 'react-router-dom';

const MenuList = ({arr, isMain}) => {
    const navigate = useNavigate();

    return (
        <nav className={style.menu}>
            <div className={!isMain ? style.showLogo : style.hideLogo} onClick={() => navigate(`/React_shop`)}>
                <img src={logo} alt="logo"/>
            </div>
            <ul className={style.list}>
                {
                    arr.map(item => {
                        return <ItemLi 
                                    key={item.text} 
                                    href={item.href} 
                                    text={item.text}
                                    isMain={isMain}
                                />
                    }) 
                }
            </ul>
        </nav>
    );
};

export default MenuList;