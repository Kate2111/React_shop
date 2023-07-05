import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
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
import {CatalogeList} from '@API/context';


const ProductPage = () => {
    const params = useParams();
    const index = params.id;

    const {catalog, setCatalog} = useContext(CatalogeList);

 
    return ( <>
        <div className='container'>
            {
                catalog.map(({info}) => {
                    return info.map(({id, title, old_price, price, image, manufacturer, material, description})=> {
                        if(index === id) {
                            return  <div className={style.wrapper} key={id}>
                                        <div className={style.image}>
                                            <img     
                                                className={style.img}
                                                src={image}
                                                alt={title}
                                            />
                                        </div>
                                        <div className={style.info}>
                                            <h1 className={style.title}>{title}</h1>
                                            <div className={classNames(style.inner, style.inner_bottom)}>
                                                <p className={style.text}>Buyer rating:</p>
                                                <div className={style.inner_review}>
                                                    <div className={style.inner_star}>
                                                        <img src={star} alt="star"/>
                                                        <img src={star} alt="star"/>
                                                        <img src={star} alt="star"/>
                                                        <img src={star} alt="star"/>
                                                        <img src={star} alt="star"/>
                                                    </div>
                                                    <p className={style.text}>No reviews</p>
                                                </div>
                                            </div>
                                            <div className={classNames(style.inner, style.inner_bottom)}>
                                                <p className={style.text}>Product code:</p>
                                                <p className={style.id_product}>{id}</p>
                                            </div>
                                            <div className={classNames(style.inner, style.inner_bottom)}>
                                                <div className={classNames(style.inner_column, style.column_gap)}>
                                                    <div>
                                                        <p className={style.last_price}>{old_price} $</p>
                                                        <p className={style.new_price}>{price} $</p>
                                                    </div>
                                                    <div className={style.pay_part}>
                                                        <p className={style.text}>Payment in installments:</p>
                                                        <p className={style.text}>6 х {Math.floor(price / 6)} $</p>
                                                    </div>
                                                </div>
                                                <div className={classNames(style.inner_column, style.column_gap)}>
                                                    <div className={style.buy_buttons}>
                                                        <MyButtonYellow>Add to Cart</MyButtonYellow>
                                                        <MyButtonTab><img src={heart} alt="heart" /></MyButtonTab>
                                                    </div>
                                                    <MyButtonTab>Buy in credit</MyButtonTab>
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
                                                <h2 className={style.subtitle}>Size and Features</h2>
                                                <div className={style.inner}>
                                                    <p className={style.text}>Housing material</p>
                                                    <p className={style.id_product}>{material}</p>
                                                </div>
                                                <div className={style.inner}>
                                                    <p className={style.text}>Manufacturer</p>
                                                    <p className={style.id_product}>{manufacturer}</p>
                                                </div>
                                            </div>
                                            <div className={style.inner_column}>
                                                <h2 className={style.subtitle}>Description</h2>
                                                <p className={style.descr}>{description}</p>
                                            </div>
                                        </div>
                                    </div> 
                        }
                    })
                })
            }
        </div>    
    </>
            
    );
};

export default ProductPage;