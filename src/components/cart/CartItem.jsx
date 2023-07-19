import React, { useState } from 'react';
import MyButtonWhite from '../../components/UI/button/white_button/MyButtonWhite';
import style from './CartItem.module.scss';
import classNames from 'classnames';
import heart from '@assets/images/cart/heart.svg';
import remove from '@assets/images/cart/delete.svg'
import image from '../../assets/images/first_page/collection/img_1.png';

const CartItem = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
      };
    
    const decrement = () => {
    if (count > 0) {
        setCount(count - 1);
    }
    };

    return (
        <div className={style.item}>
            <img className={style.itemImg} src={image} alt="img" />
            <div className={style.itemInfo}>
                <div className={style.product}>
                    <p>Диван "Ergonomic Rubber Shoes”</p>
                    <p className={style.gray}>Product code: Hkd56</p>
                </div>
                <div className={style.option}>
                    <div className={style.buttons}>
                        <div className={style.counter}>
                            <MyButtonWhite onClick={decrement}>-</MyButtonWhite>
                            <p>{count}</p>
                            <MyButtonWhite onClick={increment}>+</MyButtonWhite>
                        </div>
                        <div className={style.price}>
                            <p className={style.newPrice}>300 $</p>
                            <p className={style.oldPrice}>350 $</p>
                        </div>
                    </div>
                    <div className={style.buttons}>
                        <p className={classNames(style.gray, style.grayButton)}>favorite <img className={style.img} src={heart} alt="heart" /></p>
                        <p className={classNames(style.gray, style.grayButton)}>remove <img className={style.img} src={remove} alt="remove" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;