import React from 'react';
import style from './menuItem.module.scss';
import {Link} from 'react-router-dom';

const ItemLi = ({href, text}) => {
    return (
        <li className={style.item}>
            {
                <Link 
                    to={href}
                    className={style.link}
                >
                    {text}
                </Link>
            }
        </li>
    );
};

export default ItemLi;