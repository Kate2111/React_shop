import React from 'react';
import style from './menuItem.module.scss';
import {Link, useLocation} from 'react-router-dom';

const ItemLi = ({href, text, setOpen}) => {
    const location = useLocation()

    return (
        <li className={style.item}>
            {
                <Link 
                    to={href}
                    className={location.pathname === '/React_shop' ? style.linkmain : style.link}
                    onClick={() => setOpen(false)}
                >
                    {text}
                </Link>
            }
        </li>
    );
};

export default ItemLi;