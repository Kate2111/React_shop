import React, {useContext} from 'react';
import { AppContext } from '@API/context';
import { deleteAllElems } from '@API/firebase'
import CartItem from '../item';
import CartForm from '../form';
import MyButtonGreen from '@components/UI/button/green_button/MyButtonGreen';
import style from './section.module.scss'
import del from '@assets/images/cart/delete_green.svg';

const SectionCart = ({category}) => {
    const [catalog, setCatalog] = useContext(AppContext)[0];
    const [newCollection, setNewCollection] = useContext(AppContext)[1];
    const [cart, setCart] = useContext(AppContext)[2];

    const getSubTotal = () => {
        let sum = cart.reduce((acc, {old_price}) => {
            return acc + old_price 
        }, 0);
        return sum;
    }

    const getTotal = () => {
        let sum = cart.reduce((acc, {price}) => {
            return acc + price 
        }, 0);
        return sum;
    }

    const deleteAll = () => {
        setCart([]);
        deleteAllElems();
    }

    return (
            <div className='container'>
                <div className={style.wrapper}>
                    <div className={style.header}>
                        <h1 className={style.title}>My Cart</h1>
                        <MyButtonGreen onClick={deleteAll}>
                            empty trash
                            <img src={del} alt="empty trash" />
                        </MyButtonGreen>
                    </div>
                    <div className={style.inner}>
                        <div className={category === 'cart' ? style.itemsCart : style.itemsFavorite}>
                            {
                                cart.map(elem => {
                                    return <CartItem
                                            key={elem.id}
                                            id={elem.id}
                                            elem={elem}
                                            data={elem.category === 'catalog' ? catalog : newCollection} 
                                            setData={elem.category === 'catalog' ? setCatalog : setNewCollection}
                                            source={elem.category === 'catalog' ? 'catalog' : 'newcollection'}
                                        />
                                })
                            }
                        </div>
                        <CartForm 
                            subTotal = {getSubTotal}
                            total = {getTotal}
                        />
                    </div>
                </div>
            </div> 

    );
};

export default SectionCart;