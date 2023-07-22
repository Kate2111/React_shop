import React, { useState, useContext } from 'react';
import MyButtonWhite from '../../UI/button/white_button/MyButtonWhite';
import style from './CartItem.module.scss';
import classNames from 'classnames';
import {ReactComponent as Heart} from '@assets/images/cart/heart.svg';
import {ReactComponent as Remove} from '@assets/images/cart/delete.svg'
//import {CartList} from '@API/context';
import { postDataList } from '@API/firebase';
import { AppContext } from '../../../API/context';

const CartItem = ({id, src, oldPrice, price, title}) => {
    const [count, setCount] = useState(0);
    const {cart} = useContext(AppContext);
    const {setFavorite} = useContext(AppContext);
    const [isHeart, setIsHeart] = useState(false);
    const [isRemove, setIsRemove] = useState(false);

    const increment = () => {
        setCount(count + 1);
      };
    
    const decrement = () => {
    if (count > 0) {
        setCount(count - 1);
    }
    };

    const addToFavorite = () => {
        cart.forEach((elem) => {
            if (elem.id === id) {
                setFavorite(prev => [...prev, elem])
                postDataList('favorite', elem, elem.id);
            }
        });
        setIsHeart(!isHeart);
    }

    return (
        <div className={style.item}>
            <img className={style.itemImg} src={src} alt={title} />
            <div className={style.itemInfo}>
                <div className={style.product}>
                    <p>{title}</p>
                    <p className={style.gray}>Product code: {id}</p>
                </div>
                <div className={style.option}>
                    <div className={style.buttons}>
                        <div className={style.counter}>
                            <MyButtonWhite onClick={decrement}>-</MyButtonWhite>
                            <p>{count}</p>
                            <MyButtonWhite onClick={increment}>+</MyButtonWhite>
                        </div>
                        <div className={style.price}>
                            <p className={style.newPrice}>{price} $</p>
                            <p className={style.oldPrice}>{oldPrice} $</p>
                        </div>
                    </div>
                    <div className={style.buttons}>
                        <p 
                            onClick={addToFavorite}
                            className={classNames(style.gray, style.grayButton)}
                        >
                            favorite 
                            <Heart className={!isHeart ? style.image : style.imageActive}/>
                        </p>
                        <p 
                            className={classNames(style.gray, style.grayButton)}
                        >   
                            remove 
                            <Remove className={!isRemove ? style.image : style.imageActive}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;