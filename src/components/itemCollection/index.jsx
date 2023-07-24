import React from 'react';
import style from './item.module.scss'

const CollectionItem = ({image, title, price}) => {
    return (
        <>
            <img className={style.image} src={image} alt={title}/>
            <div className="info">
                <h6 className={style.title}>{title}</h6>
                <div className={style.text}>{price}$</div>
            </div>
        </>
    );
};

export default CollectionItem;
