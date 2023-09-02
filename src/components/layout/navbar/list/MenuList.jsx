import React from 'react';
import style from './menuList.module.scss';
import ItemLi from '../item/MenuItem';
import logo from '@assets/images/first_page/logo.png';
import {useNavigate} from 'react-router-dom';

const MenuList = ({arr, isMain, isOpen, setOpen}) => {
    const navigate = useNavigate();

    return (
        <nav className={!isOpen ? style.menu : style.sidebar}>

            <div className={!isMain ? style.showLogo : style.hideLogo} onClick={() => navigate(`/React_shop`)}>
                <img src={logo} alt="logo"/>
            </div>
            <ul className={!isOpen ? style.list : style.sidelist}>
                {
                    arr.map(item => {
                        return <ItemLi 
                                    key={item.text} 
                                    href={item.href} 
                                    text={item.text}
                                    isMain={isMain}
                                    setOpen={setOpen}
                                />
                    }) 
                }
            </ul>
        </nav>
    );
};

export default MenuList;