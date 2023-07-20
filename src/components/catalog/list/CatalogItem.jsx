import React,{ useState } from 'react';
import style from './CatalogList.module.scss';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as Cart}  from '@assets/images/catalog_page/Buy.svg';
import {ReactComponent as Heart}  from '@assets/images/catalog_page/Heart.svg';
import { postDataList } from '@API/firebase';

const CatalogItem = ({elem, category}) => {
    const navigate = useNavigate();
    const [isHeart, setIsHeart] = useState(false);
    const [isCart, setIsCart] = useState(false);

    
    const addToFavorite = (index) => {
        if (elem.id === index) {
            setIsHeart(!elem.favorite);
            postDataList('favorite', {...elem, favorite: !elem.favorite}, elem.id);
            console.log(elem)
        }
    }

    const addToCart = (index) => {
        if (elem.id === index) {
            postDataList('cart', elem, elem.id);
            setIsCart(!isCart);
        }
    }


    return (
        <div className={style.wrapper}>
            <a onClick={() => navigate(`/React_shop/catalog/${elem.id}`,  { state: { source: 'catalog' } })} target='_blank'>
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
                            onClick={() => addToFavorite(elem.id)}
                        />
                        <Cart 
                            className={style.icon}
                            onClick={() => addToCart(elem.id)}
                        />
                    </div>
                </div>     
            </div>
        </div> 
    );
};

export default CatalogItem;