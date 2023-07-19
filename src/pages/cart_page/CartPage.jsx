import React, {useContext, useState} from 'react';
import { CartList } from '../../API/context';
import MyButtonGreen from '@components/UI/button/green_button/MyButtonGreen';
import style from './CartPage.module.scss';
import del from '@assets/images/cart/delete_green.svg';
import CartItem from '../../components/cart/CartItem';
import flagOn from '@assets/images/cart/flagOn.svg';
import flagOff from '@assets/images/cart/flagOff.svg';



const CartPage = () => {
    const {cart, setCart} = useContext(CartList);
    const [isDone, setIsDone] = useState(false);

    const handleLabelClick = (event) => {
        if (event.target.tagName !== 'INPUT') {
          setIsDone(!isDone);
        }
    };

    return (
        <>
            {
                !cart
                ?
                <div className='container'>
                    <div className={style.impty}>
                        <p className={style.imptyCart}>Cart is empty</p>
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
                            <div className={style.items}>
                                <CartItem/>
                            </div>
                            <div className={style.infoOrder}>
                                <div className={style.subtitles}>
                                    <p className={style.subtitle}><span>Item Subtotal:</span> <span> 900 $</span></p>
                                    <p className={style.subtitle}><span> Amount of goods:</span> <span>3</span></p>
                                    <p className={style.subtitle}><span> Discount:</span> <span>50 $</span></p>
                                    <label onClick={ handleLabelClick} htmlFor="done" className={style.lable}>
                                        <input className={style.checkboxInput} id="done" type="checkbox" />
                                        <img className={style.checkboxImg} src={isDone ? flagOn : flagOff} alt="" />
                                        I have a promo code
                                    </label>
                                </div>
                                <p className={style.total}><span>Total:</span><span>850 $</span></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            }     
        </>
    );
}; 

  
  export default CartPage;


  