import React from 'react';
import './menu.scss';
import ItemLi from './MenuItem';

const MenuList = ({arr}) => {
    console.log('menuList')
    return (
        <nav className="menu">
            <ul className="menu__list">
                {
                    arr.map(item => {
                        return <ItemLi key={item.text} href={item.href} text={item.text}/>
                    }) 
                }
            </ul>
        </nav>
    );
};

export default MenuList;