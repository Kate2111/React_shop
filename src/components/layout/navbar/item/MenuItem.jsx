import React from 'react';
import style from './menuItem.module.scss';

const ItemLi = ({href, text, type}) => {
    return (
        <li className={style.item}>
            {
                type === 'link'
                ?
                <a className={style.link} href={href}>{text}</a>
                :
                <img src={require('@assets/images/first_page/logo.png')} alt={text}/>
            }
            
        </li>
    );
};

export default ItemLi;