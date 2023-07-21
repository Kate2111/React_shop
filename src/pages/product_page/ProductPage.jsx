import React, {useContext, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import style from './ProductPage.module.scss';
import star from '@assets/images/product_page/Star.svg';
import {ReactComponent as Heart} from '@assets/images/product_page/Heart.svg';
import citibank from '@assets/images/product_page/citibank.svg';
import gazprombank from '@assets/images/product_page/gazprombank.svg';
import raiffeisen from '@assets/images/product_page/raiffeisen.svg';
import sbp from '@assets/images/product_page/sbp.svg';
import tinkoff from '@assets/images/product_page/tinkoff.svg';
import MyButtonTab from '@components/UI/button/MyButtonTab';
import MyButtonYellow from '@components/UI/button/yellow_button/MyButtonYellow';
import classNames from 'classnames';
import {CatalogeList, NewCollection} from '@API/context';
import { postDataList } from '../../API/firebase';


const ProductPage = () => {
    const params = useParams();
    const location = useLocation();
    const index = params.id;
    const [isHeart, setIsHeart] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const {catalog} = useContext(CatalogeList);
    const {newCollection} = useContext(NewCollection);


    const source = location.state && location.state.source;
    const data = source === 'newcollection' ? newCollection : catalog;

    const addToCart = () => {
        data.forEach(({info}) => {
            info.forEach((elem)=>{
                if(elem.id === params.id) {
                    postDataList('cart', elem, elem.id);
                }
            })
        }); 
        setIsCart(!isCart);
    }

    const addToFavorite = () => {
        data.forEach(({ info }) => {
            info.forEach((elem) => {
                if (elem.id === params.id) {
                    postDataList('favorite', elem, elem.id)
                }
            });
         });
         setIsHeart(!isHeart);
    }
 
    return ( <>
        <div className='container'>
            {
                data.map(({info}) => {
                    return info.map(({id, title, old_price, price, image, manufacturer, material, description})=> {
                        if(index === id) {
                            return  (<div className={style.wrapper} key={id}>
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
                                                        <MyButtonYellow onClick={addToCart} isActive={isCart}>{!isCart ? "Add to Cart" : "Added to Cart"}</MyButtonYellow>
                                                        <Heart onClick={addToFavorite} className={!isHeart ? style.heart : style.heartActive}></Heart>
                                                    </div>
                                                    <MyButtonTab>Buy in credit</MyButtonTab>
                                                    <div className={style.icons}>
                                                        <img className={style.icon} src={tinkoff} alt="tinkoff"/>
                                                        <img className={style.icon} src={sbp} alt="sbp"/>
                                                        <img className={style.icon} src={gazprombank} alt="gazprombank"/>
                                                        <img className={style.icon} src={raiffeisen} alt="raiffeisen"/>
                                                        <img className={style.icon} src={citibank} alt="citibank"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={style.inner_column}>
                                                <h2 className={style.subtitle}>Size and Features</h2>
                                                <div className={style.inner}>
                                                    <p className={style.text}>Housing material</p>
                                                    <div className={style.dots}></div>
                                                    <p className={style.id_product}>{material}</p>
                                                </div>
                                                <div className={style.inner}>
                                                    <p className={style.text}>Manufacturer</p>
                                                    <div className={style.dots}></div>
                                                    <p className={style.id_product}>{manufacturer}</p>
                                                </div>
                                            </div>
                                            <div className={style.inner_column}>
                                                <h2 className={style.subtitle}>Description</h2>
                                                <p className={style.descr}>{description}</p>
                                            </div>
                                        </div>
                                    </div> )
                        }
                    })
                })
            }
        </div>    
    </>
            
    );
};

export default ProductPage;