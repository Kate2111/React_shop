import React,{ useContext } from 'react';
import style from './item.module.scss';
import {useNavigate, useLocation} from 'react-router-dom';
import {ReactComponent as Cart}  from '@assets/images/catalog_page/Buy.svg';
import {ReactComponent as Heart}  from '@assets/images/catalog_page/Heart.svg';
import { AppContext } from '@API/context';
import useProductState from '@hooks/useProductState';
import { addToFavoriteOrCart } from '@utils/addToFavoriteOrCart';

const CatalogItem = ({id, elem, category}) => {
    const navigate = useNavigate();
    const location = useLocation();//На таках страницах нужен другой способ передачи данных в useProductState
   
  
    const [catalog, setCatalog] = useContext(AppContext)[0];
    const [newCollection, setNewCollection] = useContext(AppContext)[1];
    const [cart, setCart] = useContext(AppContext)[2];
    const [favorite, setFavorite] = useContext(AppContext)[3];

    const source = location.state && location.state.source; //catalog || newcollection
    const data = source === 'newcollection' ? newCollection : catalog;
    const setData = source === 'newcollection' ? setNewCollection : setCatalog;

    const [isHeart, setIsHeart, isCart, setIsCart] = useProductState(data, id);


    return (
        <div className={style.wrapper}>
            <a onClick={() => navigate(`/React_shop/catalog/${elem.id}`,  { state: { source: source } })} target='_blank'>
                <img
                    className={style.img}
                    src={elem.image}
                    alt={category}
                />
            </a>
            <div className={style.info}>
                <h4 className={style.title}>{elem.title}</h4>
                <div className={style.inner}>
                    <p className={style.price}>{elem.price} $</p>
                    <div className={style.icons}>
                        <Heart 
                            className={!isHeart ? style.icon : style.iconActive}
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
                        />
                        <Cart 
                            className={!isCart ? style.icon : style.iconActive}
                            onClick={() => addToFavoriteOrCart(
                                                                setData, 
                                                                data, 
                                                                id, 
                                                                source, 
                                                                setIsCart, 
                                                                'cart', 
                                                                !isCart, 
                                                                setCart, 
                                                                cart
                                                                )}
                        />
                    </div>
                </div>     
            </div>
        </div> 
    );
};

export default CatalogItem;