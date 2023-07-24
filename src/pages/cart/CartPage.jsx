import React, {useContext} from 'react';
import { AppContext } from '@API/context';
import ImptyCart from '@components/imptyCart'
import imptyImage from '@assets/images/cart/impty.png';
import SectionCart from './components/section';


const CartPage = ({category}) => {
    const [cart, setCart, isLoadingCatalog] = useContext(AppContext)[2];

    return (
        <>
            {
                isLoadingCatalog
                ? (<h1>Идут загрузка</h1>)
                : cart.length === 0
                    ?   (<ImptyCart  
                            title='Your Shopping Cart Is Empty'
                            subtitle='Add your favorite items, shops, and ideas to your cart.'
                            category={category}
                            imptyImage={imptyImage}
                        />)
                    :   (<SectionCart category={category}/>)
                
            }    
                
        </>
    );
}; 

  
  export default CartPage;