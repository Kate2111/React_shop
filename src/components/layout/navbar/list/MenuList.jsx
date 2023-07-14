import React from 'react';
import style from './menuList.module.scss';
import ItemLi from '../item/MenuItem';

const MenuList = ({arr, isMain}) => {
    return (
        <nav className={style.menu}>
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