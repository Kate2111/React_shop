import React, {useContext} from 'react';
import CatalogItem from '@components/itemCatalog';
import ImptyCart from '@components/imptyCart'
import style from '../cart/CartPage.module.scss'
import imptyImage from '@assets/images/favorite/impty.png'
import { AppContext } from '../../API/context';

const FavoritePage = ({category}) => {
    const [favorite, setFavorite, isLoadingFavorite] = useContext(AppContext)[3];

    return (
        <>
            {
                isLoadingFavorite
                ? (<h1>Идут загрузка</h1>)
                :   favorite.length === 0
                    ?   (<ImptyCart  
                            title='Start Building Your List!'
                            subtitle='Add your favorite items, shops, and ideas to your list.'
                            category={category}
                            imptyImage={imptyImage}
                        />)
                    :   (<div className='container'>
                            <div className={style.wrapper}>
                                <div className={style.header}>
                                    <h1 className={style.title}>My Favorite</h1>
                                </div>
                                <div className={style.inner}>
                                    <div className={category === 'cart' ? style.itemsCart : style.itemsFavorite}>
                                        {
                                            favorite.map(elem => {
                                                return <CatalogItem
                                                        key={elem.id}
                                                        elem={elem}
                                                        category={category}
                                                    />
                                                        
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)
            }     
        </>
    );
};

export default FavoritePage;