import React from 'react';
import './menu.scss';

const ItemLi = ({href, text}) => {
    return (
        <li className="menu__list-item">
            <a className="menu__list-link" href={href}>{text}</a>
        </li>
    );
};

export default ItemLi;