import React from 'react';
import style from './Collection.module.scss';

const CollectionItem = ({href, url, title, text}) => {
    return (
        <a className={style.item} href={href}>
            <img src={url} alt='imgCollection'/>
            <div className={style.info}>
                <h6 className={style.title}>{title}</h6>
                <div className={style.text}>{text}</div>
            </div>
        </a>
    );
};

export default CollectionItem;