import React from 'react';
import style from './menuItem.module.scss';
import {Link} from 'react-router-dom';

const ItemLi = ({href, text, isMain}) => {
    return (
        <li className={style.item}>
            {
                <Link 
                    to={href}
                    className={isMain ? style.linkmain : style.link}
                >
                    {text}
                </Link>
            }
        </li>
    );
};

export default ItemLi;