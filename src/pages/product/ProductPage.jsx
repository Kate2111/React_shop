import React, {useContext, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import style from './ProductPage.module.scss';
import {ReactComponent as Heart} from '@assets/images/product_page/Heart.svg';
import MyButtonTab from '@components/UI/button/MyButtonTab';
import MyButtonYellow from '@components/UI/button/yellow_button/MyButtonYellow';
import Modal from '@components/UI/modal/Modal'
import classNames from 'classnames';
import { AppContext } from '@API/context';
import { addToFavoriteOrCart } from '@utils/addToFavoriteOrCart';
import useProductState from '@hooks/useProductState';
import SizeAndFeatures from './components/size-and-features';
import IconsBank from './components/icons/bank';
import IconsStars from './components/icons/stars';
import BlockColumn from './components/block/block-column';
import BlockRow from './components/block/block-row';


const ProductPage = () => {
    const params = useParams();
    const location = useLocation();
    const pageID = params.id;

    const [catalog, setCatalog] = useContext(AppContext)[0];
    const [newCollection, setNewCollection] = useContext(AppContext)[1];

    const [cart, setCart] = useContext(AppContext)[2];
    const [favorite, setFavorite] = useContext(AppContext)[3];

    const [auth] = useContext(AppContext)[4];
    const [isShow, setIsShow] = useState(false);

    const source = location.state && location.state.source; //catalog || newcollection
    const data = source === 'newcollection' ? newCollection : catalog;
    const setData = source === 'newcollection' ? setNewCollection : setCatalog;

    const [isHeart, setIsHeart, isCart, setIsCart] = useProductState(data, pageID);

    const handleIsAuth = (setData, data, pageId, source, setDataHeartOrCart, propertyName, isValue, setFavoriteOrCart, favoriteOrCart) => {
        if(auth) {
            addToFavoriteOrCart(setData, data, pageId, source, setDataHeartOrCart, propertyName, isValue, setFavoriteOrCart, favoriteOrCart)
        } else {
            setIsShow(true);
        }
    }


    return ( <>
        <div className='container'>
            {
                data.map(({info}) => {
                    return info.map(({id, title, old_price, price, image, manufacturer, material, description})=> {
                        if(params.id === id) {
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
                                                            onClick={() => handleIsAuth(setData, data, pageID, source, setIsCart, 'cart', !isCart, setCart, cart)} 
                                                            isActive={isCart}
                                                        >
                                                            {!isCart ? "Add to Cart" : "Added to Cart"}
                                                        </MyButtonYellow>
                                                        <Heart 
                                                            onClick={() => handleIsAuth(setData, data, pageID, source, setIsHeart, 'favorite', !isHeart, setFavorite, favorite)} 
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
            <Modal visible={isShow} setVisible={setIsShow}>
                <h3 className={style.message}>Log in to your personal account to add to cart and favorites</h3>
            </Modal>
        </div>    
    </>
            
    );
};

export default ProductPage;

