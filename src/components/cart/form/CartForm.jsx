import React, {useState} from 'react';
import MyButtonTab from '@components/UI/button/MyButtonTab'
import MyButtonGreen from '@components/UI/button/green_button/MyButtonGreen';
import style from './CartForm.module.scss';
import classNames from 'classnames';

const CartForm = ({subTotal, total}) => {

    const [isDone, setIsDone] = useState(false);
    const [placeholder, setPlaceholder] = useState('enter promo code');
    const [inputPromoCode, setInputPromoCode] = useState('');
    const [totalSum, setTotalSum] = useState(total());
    const [isApplyingPromoCode, setIsApplyingPromoCode] = useState(false);

    const handleLabelClick = (event) => {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'LABLE') {
          setIsDone(!isDone);
        }
    };

    const subTotalSum = subTotal();
    const discount =  subTotalSum - totalSum;
    const promoCode = 'HAPPY'; 

    const totalSumWithPromoCode = (e) => {
        e.preventDefault();

        if (isApplyingPromoCode) {
            return;
        }

        setIsApplyingPromoCode(true);
        isPromoCodeTrue();
    };

    const isPromoCodeTrue = () => {
        if(inputPromoCode === promoCode) {
            return setTotalSum(Math.round(totalSum - (totalSum * (20 / 100))));
        } else {
            setInputPromoCode('');
            setPlaceholder('invalid promo code');
            setIsApplyingPromoCode(false); 
            return totalSum;
        }
    }

    const inputClassName = () => {
        if(placeholder === 'invalid promo code') {
            return classNames(style.promoInput, style.invalidCode);
        }
        if(inputPromoCode === promoCode) {
            return  classNames(style.promoInput, style.promoInputValidCode);
        }
        return classNames(style.promoInput);
    }


    return (
        <form className={style.infoOrder}>
            <div className={style.subtitles}>
                <p className={style.subtitle}><span>Item Subtotal:</span> <span> {subTotalSum} $</span></p>
                <p className={style.subtitle}><span> Amount of goods:</span> <span>3</span></p>
                <p className={style.subtitle}><span> Discount:</span> <span>{discount} $</span></p>
                <label 
                    onClick={ handleLabelClick} 
                    htmlFor="done" 
                    className={style.lable}
                >                        
                    <input id="done" type="checkbox" />
                    I have a promo code
                </label>
                <div className={!isDone ? style.hide : style.promoWrapper}>
                    <input 
                        className={inputClassName()} 
                        value={inputPromoCode} 
                        onChange={e => setInputPromoCode(e.target.value)} 
                        type="text" 
                        placeholder={placeholder}
                    />
                    <MyButtonGreen onClick={totalSumWithPromoCode}>apply</MyButtonGreen>
                </div>
            </div>
            <p className={style.total}>
                <span>Total:</span>
                <span>{totalSum} $</span>
            </p>
            <MyButtonTab>proceed to checkout</MyButtonTab>
        </form>
    );
};

export default CartForm;