import React, { useState, useContext } from 'react';
import MyButtonWhite from '@components/UI/button/white_button/MyButtonWhite';
import MyButtonCart from '@components/UI/buttonCart/MyButtonCart';
import style from './item.module.scss';
import {ReactComponent as Heart} from '@assets/images/cart/heart.svg';
import {ReactComponent as Remove} from '@assets/images/cart/delete.svg'
import { AppContext } from '@API/context';
//import { deleteElemToDataList } from '@API/firebase';
import useProductState from '@hooks/useProductState';
import { addToFavoriteOrCart } from '@utils/addToFavoriteOrCart';
import { increment, decrement, deleteElem} from './utils'

const CartItem = ({id, elem, data, setData, source}) => {
    const [cart, setCart] = useContext(AppContext)[2];
    const [favorite, setFavorite] = useContext(AppContext)[3];

    const [isHeart, setIsHeart] = useProductState(data, id);

    const [count, setCount] = useState(0);
    const [isRemove] = useState(false);

    return (
        <div className={style.item}>
            <img className={style.itemImg} src={elem.image} alt={elem.title} />
            <div className={style.itemInfo}>
                <div className={style.product}>
                    <p>{elem.title}</p>
                    <p className={style.gray}>Product code: {id}</p>
                </div>
                <div className={style.option}>
                    <div className={style.buttons}>
                        <div className={style.counter}>
                            <MyButtonWhite onClick={() => decrement(setCount, count)}>-</MyButtonWhite>
                            <p>{count}</p>
                            <MyButtonWhite onClick={() => increment(setCount, count)}>+</MyButtonWhite>
                        </div>
                        <div className={style.price}>
                            <p className={style.newPrice}>{elem.price} $</p>
                            <p className={style.oldPrice}>{elem.old_price} $</p>
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
                        <MyButtonCart 
                            text='remove'
                            onClick={() => deleteElem(
                                                        setCart, 
                                                        cart,
                                                        'cart', 
                                                        id, 
                                                        data, 
                                                        setData, 
                                                        source
                                                    )} 
                        >
                            <Remove className={!isRemove ? style.image : style.imageActive}/>
                        </MyButtonCart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;