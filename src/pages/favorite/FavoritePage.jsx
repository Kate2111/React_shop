import React, {useContext} from 'react';
import { AppContext } from '../../API/context';
import FavoriteItem from '@components/itemCatalog';
import LoaderCircle from '@components/loaders/loaderCircle';
import ImptyCart from '@components/imptyCart'
import style from '../cart/CartPage.module.scss'
import imptyImage from '@assets/images/favorite/impty.png'


const FavoritePage = ({category}) => {
    const [favorite, setFavorite, isLoadingFavorite] = useContext(AppContext)[3];

    console.log(favorite)
    return (
        <>
            {
                isLoadingFavorite
                ? (<LoaderCircle/>)
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
                                                return <FavoriteItem
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