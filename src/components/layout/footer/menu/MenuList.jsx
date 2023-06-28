import React from 'react';
import style from './MenuList.module.scss'

const MenuList = () => {
const menu = [
    {id: "1", text: "Delivery", link: "#"},
    {id: "2", text: "FAQ", link: "#"},
    {id: "3", text: "Help", link: "#"},
    {id: "4", text: "More About Us", link: "#"}
]

    return (
        <ul className={style.menu}>
            {
                menu.map(item => {
                    return  <li className={style.item} key={item.id}>
                                <a className={style.link} href={item.link}>{item.text}</a>
                            </li>
                })
            }
        </ul> 
    );
};

export default MenuList;