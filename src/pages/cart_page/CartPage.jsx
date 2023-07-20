import React, {useContext, useState} from 'react';
import { CartList } from '../../API/context';
import CartItem from '@components/cart/item/CartItem';
import CartForm from '@components/cart/form/CartForm';
import MyButtonGreen from '@components/UI/button/green_button/MyButtonGreen';
import style from './CartPage.module.scss';
import del from '@assets/images/cart/delete_green.svg';
import imptyImage from '@assets/images/cart/impty.png';
import classNames from 'classnames';


const CartPage = ({category}) => {
    const {cart, setCart} = useContext(CartList);

    const getSubTotal = () => {
        let sum = cart.reduce((acc, {old_price}) => {
            return acc + old_price 
        }, 0);
        return sum;
    }

    const getTotal = () => {
        let sum = cart.reduce((acc, {price}) => {
            return acc + price 
        }, 0);
        return sum;
    }

    return (
        <>
            {
                cart.length <= 0
                ?
                <div className='container'>
                    <div className={style.impty}>
                        <p className={style.imptyTitle}>Your Shopping Cart Is Empty</p>
                        <p className={style.imptySubTitle}>Add your favorite items, shops, and ideas to your cart.</p>
                        <div className={classNames(style.imptyInner, {
                                [style.imptyInnerColorCart]: category === 'cart',
                                [style.imptyInnerColorFavorite]: category !== 'cart'})}
                        >
                            <img className={style.imptyItem} src={imptyImage} alt="imptyFaavorite" />
                        </div>
                    </div>
                </div>
                :
                <div className='container'>
                    <div className={style.wrapper}>
                        <div className={style.header}>
                            <h1 className={style.title}>My Cart</h1>
                            <MyButtonGreen>
                                empty trash
                                <img src={del} alt="empty trash" />
                            </MyButtonGreen>
                        </div>
                        <div className={style.inner}>
                            <div className={category === 'cart' ? style.itemsCart : style.itemsFavorite}>
                                {
                                    cart.map(elem => {
                                        return <CartItem
                                                key={elem.id}
                                                id={elem.id}
                                                src={elem.image}
                                                oldPrice={elem.old_price}
                                                price={elem.price}
                                                title={elem.title}
                                            />
                                    })
                                }
                            </div>
                            <CartForm 
                                subTotal = {getSubTotal}
                                total = {getTotal}
                            />
                        </div>
                    </div>
                    
                </div>
            }     
        </>
    );
}; 

  
  export default CartPage;


  