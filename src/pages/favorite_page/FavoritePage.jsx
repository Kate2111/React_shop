import React, {useContext} from 'react';
import CatalogItem from '@components/catalog/list/CatalogItem';
import style from '../cart_page/CartPage.module.scss'
//import {FavoritList} from '@API/context';
import imptyImage from '@assets/images/favorite/impty.png'
import classNames from 'classnames';
import { AppContext } from '../../API/context';

const FavoritePage = ({category}) => {
    const [favorite] = useContext(AppContext)[3];

    return (
        <>
            {
                favorite.length <= 0
                ?
                <div className='container'>
                    <div className={style.impty}>
                        <p className={style.imptyTitle}>Start Building Your List!</p>
                        <p className={style.imptySubTitle}>Add your favorite items, shops, and ideas to your list.</p>
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
                            <h1 className={style.title}>My Favorite</h1>
                        </div>
                        <div className={style.inner}>
                            <div className={category === 'cart' ? style.itemsCart : style.itemsFavorite}>
                                {
                                    favorite.map(elem => {
                                        return <CatalogItem
                                                elem={elem}
                                                key={elem.id}
                                            />
                                                
                                    })
                                }
                            </div>
                    
                        </div>
                    </div>
                </div>
            }     
        </>
    );
};

export default FavoritePage;