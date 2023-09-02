import React from 'react';
import style from './menuItem.module.scss';
import {Link} from 'react-router-dom';

const ItemLi = ({href, text, isMain, setOpen}) => {
    return (
        <li className={style.item}>
            {
                <Link 
                    to={href}
                    className={isMain ? style.linkmain : style.link}
                    onClick={() => setOpen(false)}
                >
                    {text}
                </Link>
            }
        </li>
    );
};

export default ItemLi;