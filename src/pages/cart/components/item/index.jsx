import React, { useState, useContext } from 'react';
import MyButtonWhite from '@components/UI/button/white_button/MyButtonWhite';
import MyButtonCart from '@components/UI/buttonCart/MyButtonCart';
import style from './item.module.scss';
import {ReactComponent as Heart} from '@assets/images/cart/heart.svg';
import {ReactComponent as Remove} from '@assets/images/cart/delete.svg'
import { AppContext } from '@API/context';
import { deleteElemToDataList } from '@API/firebase';
import useProductState from '@hooks/useProductState';
import { addToFavoriteOrCart } from '@utils/addToFavoriteOrCart';
import { useLocation } from 'react-router-dom';

const CartItem = ({id, src, oldPrice, price, title}) => {
    const location = useLocation();//На таках страницах нужен другой способ передачи данных в useProductState

    const [catalog, setCatalog] = useContext(AppContext)[0];
    const [newCollection, setNewCollection] = useContext(AppContext)[1];
    const [cart, setCart] = useContext(AppContext)[2];
    const [favorite, setFavorite] = useContext(AppContext)[3];

    const source = location.state && location.state.source; //catalog || newcollection
    const data = source === 'newcollection' ? newCollection : catalog;
    const setData = source === 'newcollection' ? setNewCollection : setCatalog;

    const [isHeart, setIsHeart] = useProductState(data, id);

    const [count, setCount] = useState(0);
    const [isRemove] = useState(false);

    const increment = () => {
        setCount(count + 1);
      };
    
    const decrement = () => {
    if (count > 0) {
        setCount(count - 1);
    }
    };

    const deleteElem = (recourse, index) => {
        deleteElemToDataList(recourse, index);
        setCart(cart.filter(elem => elem.id !== index));
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
                        <MyButtonCart 
                            onClick={() => addToFavoriteOrCart(
                                setData, 
                                data, 
                                id, 
                                source, 
                                setIsHeart, 
                                'favorite', 
                                !isHeart, 
                                setFavorite, 
                                favorite
                                )} 
                        >
                            <Heart className={!isHeart ? style.image : style.imageActive}/>
                        </MyButtonCart>
                        <MyButtonCart onClick={() => deleteElem('cart', id)} text='remove'>
                            <Remove className={!isRemove ? style.image : style.imageActive}/>
                        </MyButtonCart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;