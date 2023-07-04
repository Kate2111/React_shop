import React from 'react';
//import {useParams} from 'react-router-dom';
import style from './ProductPage.module.scss';
import star from '@assets/images/product_page/Star.svg';
import heart from '@assets/images/product_page/Heart.svg';
import citibank from '@assets/images/product_page/citibank.svg';
import gazprombank from '@assets/images/product_page/gazprombank.svg';
import raiffeisen from '@assets/images/product_page/raiffeisen.svg';
import sbp from '@assets/images/product_page/sbp.svg';
import tinkoff from '@assets/images/product_page/tinkoff.svg';
import MyButtonTab from '@components/UI/button/MyButtonTab';
import MyButtonYellow from '@components/UI/button/yellow_button/MyButtonYellow';
import classNames from 'classnames';


const ProductPage = () => {
    //const params = useParams();
    //const index = params.id;


 
    return ( <>
        <div className='container'>
        <div className={style.wrapper}>
                <div className={style.image}>
                    <img     
                        className={style.img}
                        src={require(`@assets/images/first_page/gallery/Dining_room_futniture/img_3.jpg`)}
                        alt='Dining_room_futniture'
                    />
                </div>
                <div className={style.info}>
                    <h1 className={style.title}>Диван "Ergonomic Rubber Shoes"</h1>
                    <div className={classNames(style.inner, style.inner_bottom)}>
                        <p className={style.text}>Оценка покупателей:</p>
                        <div className={style.inner_review}>
                            <div className={style.inner_star}>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                            </div>
                            <p className={style.text}>Нет отзывов</p>
                        </div>
                    </div>
                    <div className={classNames(style.inner, style.inner_bottom)}>
                        <p className={style.text}>Код товара:</p>
                        <p className={style.id_product}>i00078385</p>
                    </div>
                    <div className={classNames(style.inner, style.inner_bottom)}>
                        <div className={classNames(style.inner_column, style.column_gap)}>
                            <div>
                                <p className={style.last_price}>4,700 руб</p>
                                <p className={style.new_price}>2,700 руб</p>
                            </div>
                            <div className={style.pay_part}>
                                <p className={style.text}>Оплата частями:</p>
                                <p className={style.text}>6 х 800 руб</p>
                            </div>
                        </div>
                        <div className={classNames(style.inner_column, style.column_gap)}>
                            <div className={style.buy_buttons}>
                                <MyButtonYellow>Купить</MyButtonYellow>
                                <MyButtonTab><img src={heart} alt="heart" /></MyButtonTab>
                            </div>
                            <MyButtonTab>Купить в кредит</MyButtonTab>
                            <div className={style.icons}>
                                <img src={tinkoff} alt="tinkoff"/>
                                <img src={sbp} alt="sbp"/>
                                <img src={gazprombank} alt="gazprombank"/>
                                <img src={raiffeisen} alt="raiffeisen"/>
                                <img src={citibank} alt="citibank"/>
                            </div>
                        </div>
                    </div>
                    <div className={style.inner_column}>
                        <h2 className={style.subtitle}>Размер и Характеристики</h2>
                        <div className={style.inner}>
                            <p className={style.text}>Материал корпуса</p>
                            <p className={style.id_product}>Металл</p>
                        </div>
                        <div className={style.inner}>
                            <p className={style.text}>Изготовитель</p>
                            <p className={style.id_product}>Украина</p>
                        </div>
                    </div>
                    <div className={style.inner_column}>
                        <h2 className={style.subtitle}>Описание</h2>
                        <p className={style.descr}>Вешалка в прихожую из прочного металла из серии "Ferrumon"; Металл покрыт специальной краской, которая защищает металл от коррозии продлевает срок службы; Обратите внимание, что цветопередача фото с каталога может отличаться от цветов в живом виде из-за особенностей передачи цветов монитора Вашего компьютера, ноутбука, планшета и т.д.</p>
                    </div>
                </div>
            </div> 
        </div>    
    </>
            
    );
};

export default ProductPage;