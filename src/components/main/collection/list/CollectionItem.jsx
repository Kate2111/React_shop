import React from 'react';
import style from './Collection.module.scss';
import {useNavigate} from 'react-router-dom';

const CollectionItem = ({id, image, title, price}) => {
    const navigate = useNavigate();
    return (
        <a className={style.item} onClick={() => navigate(`/React_shop/catalog/${id}`)} target='_blank'>
            <img src={image} alt={title}/>
            <div className={style.info}>
                <h6 className={style.title}>{title}</h6>
                <div className={style.text}>{price}$</div>
            </div>
        </a>
    );
};

export default CollectionItem;