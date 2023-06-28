import React from 'react';
import style from './menuItem.module.scss';

const ItemLi = ({href, text}) => {
    return (
        <li className={style.item}>
            <a className={style.link} href={href}>{text}</a>
        </li>
    );
};

export default ItemLi;