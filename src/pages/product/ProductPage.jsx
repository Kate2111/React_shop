import React, {useContext, useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import style from './ProductPage.module.scss';
import star from '@assets/images/product_page/Star.svg';
import {ReactComponent as Heart} from '@assets/images/product_page/Heart.svg';

import MyButtonTab from '@components/UI/button/MyButtonTab';
import MyButtonYellow from '@components/UI/button/yellow_button/MyButtonYellow';
import classNames from 'classnames';
import { AppContext } from '@API/context';
import { postDataList, updateElem, deleteElemToDataList } from '@API/firebase';
import SizeAndFeatures from './components/size-and-features';
import IconsBank from './components/icons/bank';
import IconsStars from './components/icons/stars';
import BlockColumn from './components/block/block-column';
import BlockRow from './components/block/block-row';


const ProductPage = () => {
    const params = useParams();
    const location = useLocation();
    const index = params.id;
    const [isHeart, setIsHeart] = useState(false);
    const [isCart, setIsCart] = useState(false);

    const [catalog, setCatalog] = useContext(AppContext)[0];
    const [newCollection] = useContext(AppContext)[1];
    const [cart, setCart] = useContext(AppContext)[2];
    const [favorite, setFavorite] = useContext(AppContext)[3];


    const source = location.state && location.state.source;
    const data = source === 'newcollection' ? newCollection : catalog;

    //Сохраняю в isHeart состояние favorite из информации об элементе базы данных catalog или newCollection
    useEffect(() => {
        function getValueFavorite () {
            data.forEach(({info}) => {
                info.forEach((elem) => {
                    if(elem.id === index) {
                        setIsHeart(elem.favorite)
                    }
                })
            })
        }
    
        getValueFavorite ();
    }, [data, index])

    console.log(favorite);
    const isElemPresent = favorite.some(elem => elem.id === index);
    console.log(isElemPresent);

    const updateFavoriteData = (elem, source, index, indexElem) => {
        const updatedElem = { ...elem, favorite: !isHeart };

        if(!isHeart) {
            postDataList('favorite', updatedElem, updatedElem.id)
            updateElem(source, index, indexElem, true)
            //setCatalog() 
        } else {
            setFavorite(prev => [...prev].filter(elem => elem.id !== index))
            deleteElemToDataList('favorite', elem.id);
            updateElem(source, index, indexElem, false)
        }   
    };

    const addToFavorite = () => {
        setIsHeart(prevIsHeart => !prevIsHeart);

        data.forEach(({ info }, index) => {
            info.forEach((elem, indexElem) => {
                if (elem.id === params.id) {
                    updateFavoriteData(elem, source, index, indexElem);
                    setFavorite(prev => {
                        if (!isElemPresent) {
                            return [...prev, { ...elem, favorite: !isHeart }];
                        }
                    });
                }
            });
        });
    };

    const addToCart = () => {
        data.forEach(({info}) => {
            info.forEach((elem)=>{
                if(elem.id === params.id) {
                    setCart(prev => [...prev, elem]);
                    postDataList('cart', elem, elem.id);
                }
            })
        }); 
        setIsCart(!isCart);
    }

    return ( <>
        <div className='container'>
            {
                data.map(({info}) => {
                    return info.map(({id, title, old_price, price, image, manufacturer, material, description, favorite})=> {
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
                                            <BlockRow subtitle="Buyer rating:">
                                                <IconsStars/> 
                                            </BlockRow>

                                            <BlockRow subtitle="Product code:">
                                                    <p className={style.id_product}>{id}</p>
                                            </BlockRow>
                            
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
                                                        <MyButtonYellow 
                                                            onClick={addToCart} 
                                                            isActive={isCart}
                                                        >
                                                            {!isCart ? "Add to Cart" : "Added to Cart"}
                                                        </MyButtonYellow>
                                                        <Heart 
                                                            onClick={addToFavorite} 
                                                            className={!isHeart ? style.heart : style.heartActive}
                                                        ></Heart>
                                                    </div>
                                                    <MyButtonTab>Buy in credit</MyButtonTab>
                                                    <IconsBank/>    
                                                </div>
                                            </div>
                                            <BlockColumn subtitle="Size and Features">
                                                <SizeAndFeatures text="Housing material" info={material}/>
                                                <SizeAndFeatures text="Manufacturer" info={manufacturer}/>
                                            </BlockColumn>
                                            <BlockColumn subtitle="Description">
                                                <p className={style.text}>{description}</p>
                                            </BlockColumn>
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

